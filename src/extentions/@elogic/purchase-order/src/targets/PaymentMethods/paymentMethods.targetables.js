module.exports = targetables => {
    const PaymentMethods = targetables.reactComponent(
        '@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/paymentMethods.js'
    );
    

    PaymentMethods.insertAfterSource(
        `resetShouldSubmit,
        shouldSubmit`,
        `,purchaseOrderNumber,
        setPurchaseOrderNumber`
    );

    PaymentMethods.insertAfterSource(
        `shouldSubmit={shouldSubmit}`,
        `
        purchaseOrderNumber={purchaseOrderNumber}
        setPurchaseOrderNumber={setPurchaseOrderNumber}`
    );
    
}