const { Targetables } = require('@magento/pwa-buildpack');

module.exports = targets => {
    const targetables = Targetables.using(targets);

    const CartTrigger = targetables.reactComponent(
        '@magento/venia-ui/lib/components/Header/cartTrigger.js'
    );

    CartTrigger.addImport("{ FiShoppingCart } from 'react-icons/fi'");

    CartTrigger.replaceJSX(
        '<Icon src={ShoppingCartIcon} />',
        'FiShoppingCart size={25}'
    );
}
