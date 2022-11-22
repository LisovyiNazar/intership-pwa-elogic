/* eslint-disable */
function componentsIntercept(targetables) {
    const PaymentMethods = require('./PaymentMethods/paymentMethods.targetables');
    PaymentMethods(targetables);
}

module.exports = componentsIntercept;