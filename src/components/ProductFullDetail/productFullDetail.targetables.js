const interceptComponent = ProductFullDetail => {
    ProductFullDetail.addImport('toast from "react-hot-toast"');
    ProductFullDetail.addImport('{ Toaster } from "react-hot-toast"');
    
    ProductFullDetail.insertAfterSource(
        '<Fragment>',
        '<a href="/checkout"><Toaster toastOptions={{ duration: 5000, position: "top-center" }} /></a>'
    );

    ProductFullDetail.replaceJSX(
        `Button data-cy="ProductFullDetail-addToCartButton"`,
        `Button
            data-cy="ProductFullDetail-addToCartButton"
            disabled={isAddToCartDisabled}
            priority="high"
            type="submit"
            onClick={() => toast.success(formatMessage(
                {
                    id: "productFullDetail.addedToCart"
                },
                {
                    name: product.name
                }
            ))}
            children={cartCallToActionText}
        `
    );
};

exports.interceptComponent = interceptComponent;