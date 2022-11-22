/* eslint-disable */
function componentsIntercept(targetables) {
    const PaymentInformation = require('./PaymentInformation/paymentInformation.targetables');
    PaymentInformation(targetables);

    const PaymentMethods = require('./PaymentMethods/paymentMethods.targetables');
    PaymentMethods(targetables);

    const EditModal = require('./EditModal/editModal.targetables');
    EditModal(targetables);
}

module.exports = componentsIntercept;