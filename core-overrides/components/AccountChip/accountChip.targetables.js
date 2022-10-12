const { Targetables } = require('@magento/pwa-buildpack');

module.exports = targets => {
    const targetables = Targetables.using(targets);

    const AccountChip = targetables.reactComponent(
        '@magento/venia-ui/lib/components/AccountChip/accountChip.js'
    );

    AccountChip.insertAfterJSX(
        'span data-cy="AccountChip-text"',
        'Icon src={AccountIcon}'
    );

    AccountChip.removeJSX('Icon src={AccountIcon}');
}
