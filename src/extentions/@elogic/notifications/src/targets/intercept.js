/* eslint-disable */
module.exports = (targets) => {
    targets.of('@magento/pwa-buildpack').specialFeatures.tap((flags) => {
        flags[targets.name] = {
            esModules: true,
            cssModules: true,
            graphqlQueries: true,
            i18n: true
        };
    });

    // Targetables
    const App = require('./app.targetables');
    App(targets);

    const Main = require('./main.tagetagles');
    Main(targets);

    const Toast = require('./toast.targetables');
    Toast(targets);

    const ProductFullDetail = require('./productFullDetail.targetables');
    ProductFullDetail(targets);

    const useAddToCartButton = require('../talons/useAddToCartButton.targetables');
    useAddToCartButton(targets);
};