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
    // const App = require('./app.targetables');
    // App(targets);

    // const Main = require('./main.targetables');
    // Main(targets);

    const Toast = require('./toast.targetables');
    Toast(targets);

    // const useAddToCartButton = require('./useAddToCartButton.targetables');
    // useAddToCartButton(targets);

    // const useProductFullDetail = require('./useProductFullDetail.targetables');
    // useProductFullDetail(targets);
};