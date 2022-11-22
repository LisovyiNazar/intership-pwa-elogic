const { Targetables } = require('@magento/pwa-buildpack');

module.exports = targets => {
    const targetables = Targetables.using(targets);

    const targetsIntercept = require('./src/targets/targets.targetables');
    targetsIntercept(targetables);

    const talonsIntercept = require('./src/talons/talons.targetables');
    talonsIntercept(targetables);
};