const interceptComponent = ProductFullDetail => {
    ProductFullDetail.addImport('Notifications from "src/components/Notifications"');
    ProductFullDetail.addImport('NotificationButton from "src/components/NotificationButton"');

    
    ProductFullDetail.insertAfterSource(
        '<Fragment>',
        '<Notifications isAddToCartDisabled={isAddToCartDisabled}/>'
    );

    ProductFullDetail.replaceJSX(
        'Button data-cy="ProductFullDetail-addToCartButton"',
        `NotificationButton
            productName={product.name}
            children={cartCallToActionText}
            isAddToCartDisabled={isAddToCartDisabled}
        `
    );
};

exports.interceptComponent = interceptComponent;