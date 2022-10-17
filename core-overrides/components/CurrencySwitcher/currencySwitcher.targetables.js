const { Targetables } = require('@magento/pwa-buildpack');

module.exports = targets => {
    const targetables = Targetables.using(targets);

    const CurrencySwitcher = targetables.reactComponent(
        '@magento/venia-ui/lib/components/Header/currencySwitcher.js'
    );

    CurrencySwitcher.addImport('customStyles from "core-overrides/components/CurrencySwitcher/currentSwitcher.module.css";\n');

    CurrencySwitcher.spliceSource({
        after : 'useStyle(defaultClasses, ',
        insert: 'customStyles,'
    });

    CurrencySwitcher.insertAfterSource(
        'if (availableCurrencies.length === 1) return null;',
        '\n\tconst fullCurrency = [{name:"US Dollar",code:"USD"},{name:"Euro",code:"EUR"}]'
    );

    CurrencySwitcher.insertBeforeSource(
        '</SwitcherItem>',
        '\n{fullCurrency.map(element => {if(code == element.code){return <div>{element.name}</div>}})}\n'
    );

    CurrencySwitcher.insertBeforeJSX(
        'CurrencySymbol',
        'span'
    )

    CurrencySwitcher.setJSXProps(
        'SwitcherItem', {
            code: `{ fullCurrency }`
        }
    )
}
