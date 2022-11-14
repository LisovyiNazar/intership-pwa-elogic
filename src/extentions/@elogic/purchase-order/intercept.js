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

    const {
        checkoutPagePaymentTypes,
        editablePaymentTypes,
        summaryPagePaymentTypes
    } = targets.of('@magento/venia-ui');
    checkoutPagePaymentTypes.tap(payments =>
        payments.add({
            paymentCode: 'purchaseorder',
            importPath:
                '@elogic/purchase-order/src/components/PurchaseOrder'
        })
    );
    editablePaymentTypes.tap(editablePaymentTypes => {
        editablePaymentTypes.add({
            paymentCode: 'purchaseorder',
            importPath:
                '@elogic/purchase-order/src/components/Edit'
        });
    });
    summaryPagePaymentTypes.tap(paymentSummaries =>
        paymentSummaries.add({
            paymentCode: 'purchaseorder',
            importPath:
                '@elogic/purchase-order/src/components/Summary'
        })
    );

    const targetables = Targetables.using(targets);

    const targetsIntercept = require('./src/targets/targets.targetables');
    targetsIntercept(targetables);

    const talonsIntercept = require('./src/talons/talons.targetables');
    talonsIntercept(targetables);
};