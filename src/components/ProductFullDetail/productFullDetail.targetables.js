const interceptComponent = ProductFullDetail => {
    ProductFullDetail.addImport('useProductFullDetailCustom from "src/talons/ProductFullDetail/useProductFullDetail.js"');
    ProductFullDetail.insertAfterSource(
        'const talonProps = useProductFullDetail',
        'Custom'
    )
};

exports.interceptComponent = interceptComponent;