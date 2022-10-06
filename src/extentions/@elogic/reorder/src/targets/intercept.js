const { Targetables } = require('@magento/pwa-buildpack');

module.exports = targets => {
    const { specialFeatures } = targets.of('@magento/pwa-buildpack');
    specialFeatures.tap(flags => {
        /**
         *  Wee need to activate esModules, cssModules and GQL Queries to allow build pack to load our extension
         * {@link https://magento.github.io/pwa-studio/pwa-buildpack/reference/configure-webpack/#special-flags}.
         */
        flags[targets.name] = {
            esModules: true,
            cssModules: true,
            graphqlQueries: true
        };
    });

    // Init targetables
    const targetables = Targetables.using(targets);

    // Init targetable Header component
    const OrderDetails = targetables.reactComponent(
        '@magento/venia-ui/lib/components/OrderHistoryPage/OrderDetails/orderDetails.js'
    );

    OrderDetails.addImport('Reorder from "@elogic/reorder/src/components/Reorder";');

    OrderDetails.prependJSX(
        'div className={classes.root}',
        'Reorder items={items}'
    );
};
