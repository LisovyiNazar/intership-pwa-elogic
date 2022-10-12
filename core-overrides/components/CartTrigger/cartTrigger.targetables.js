const { Targetables } = require('@magento/pwa-buildpack');

module.exports = targets => {
    const targetables = Targetables.using(targets);

    const AccountChip = targetables.reactComponent(
        '@magento/venia-ui/lib/components/Header/cartTrigger.js'
    );

    AccountChip.addImport("{ FiShoppingCart } from 'react-icons/fi'");

    AccountChip.insertAfterJSX(
        '<Icon src={ShoppingCartIcon} />',
        'FiShoppingCart size={25}'
    );

    AccountChip.removeJSX('Icon src={ShoppingCartIcon}');
}
