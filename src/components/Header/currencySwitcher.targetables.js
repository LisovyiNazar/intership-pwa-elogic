const interceptComponent = CurrencySwitcher => {
    CurrencySwitcher.addImport("customStyles from 'src/components/Header/currencySwitcher.custom.module.css'");
    
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
        '\n{fullCurrency.map(element => {if(code == element.code){return <div className={classes.fullCurrency}>{element.name}</div>}})}\n'
    );
}

exports.interceptComponent = interceptComponent;
