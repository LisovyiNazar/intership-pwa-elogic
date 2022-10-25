const { Targetables } = require('@magento/pwa-buildpack');

module.exports = targets => {
    const targetables = Targetables.using(targets);

    const ProductFullDetail = targetables.reactComponent(
        '@magento/venia-ui/lib/components/ProductFullDetail'
    );

    ProductFullDetail.addImport('useProductFullDetailCustom from "src/talons/ProductFullDetail/useProductFullDetail.js"');
    ProductFullDetail.insertAfterSource(
        'const talonProps = useProductFullDetail',
        'Custom'
    )
}