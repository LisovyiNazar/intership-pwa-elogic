const { Targetables } = require('@magento/pwa-buildpack');

module.exports = (targets) => {
    targets.of('@magento/pwa-buildpack').specialFeatures.tap((flags) => {
        flags[targets.name] = {
            esModules: true,
            cssModules: true,
            graphqlQueries: true
        };
    });

    const targetables = Targetables.using(targets);

    const targetsIntercept = require('./targets.targetables');
    targetsIntercept(targetables);

    const talonsIntercept = require('../talons/talons.targetables');
    talonsIntercept(targetables);
};