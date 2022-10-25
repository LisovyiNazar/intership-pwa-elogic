const { Targetables } = require('@magento/pwa-buildpack');

module.exports = targets => {
    const targetables = Targetables.using(targets);

    const useAddToCartButton = targetables.reactComponent(
        '@magento/peregrine/lib/talons/Gallery/useAddToCartButton.js'
    );

    useAddToCartButton.addImport('{ useToastResultIndicator } from "@elogic/notifications/src/talons/useToastResultIndicator.js";');

    useAddToCartButton.insertAfterSource(
        'const [addToCart] = useMutation(operations.ADD_ITEM);',
        'const [onSuccess, onError] = useToastResultIndicator(item);'
    );

    useAddToCartButton.insertBeforeSource(
        'dispatch({',
        'onSuccess();\n'
    );

    useAddToCartButton.insertBeforeSource(
        'console.error(error);',
        'onError();\n'
    );
}