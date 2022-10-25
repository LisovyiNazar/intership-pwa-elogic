const { Targetables } = require('@magento/pwa-buildpack');

module.exports = targets => {
    const targetables = Targetables.using(targets);

    const ProductFullDetail = targetables.reactComponent(
        '@magento/venia-ui/lib/components/ProductFullDetail/productFullDetail.js'
    );

    ProductFullDetail.addImport('useProductFullDetailCustom from "@elogic/notifications/src/talons/useProductFullDetail.js"');
    ProductFullDetail.insertAfterSource(
        'const talonProps = useProductFullDetail',
        'Custom'
    )
}