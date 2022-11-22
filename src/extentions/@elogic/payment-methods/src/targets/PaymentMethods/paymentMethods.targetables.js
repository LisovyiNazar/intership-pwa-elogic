module.exports = targetables => {
    const PaymentMethods = targetables.reactComponent(
        '@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/paymentMethods.js'
    );

    PaymentMethods.insertBeforeSource(
        `initialSelectedMethod,`,
        `handlePaymentMethodSelection,`
    );

    PaymentMethods.insertAfterSource(
        `checked={isSelected}`,
        `
        onChange={handlePaymentMethodSelection}`
    );
}