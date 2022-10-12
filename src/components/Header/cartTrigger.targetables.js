const interceptComponent = CartTrigger => {
    CartTrigger.addImport("{ FiShoppingCart } from 'react-icons/fi'");

    CartTrigger.insertAfterJSX(
        '<Icon src={ShoppingCartIcon} />',
        'FiShoppingCart size={25}'
    );

    CartTrigger.removeJSX('Icon src={ShoppingCartIcon}');
}

exports.interceptComponent = interceptComponent;
