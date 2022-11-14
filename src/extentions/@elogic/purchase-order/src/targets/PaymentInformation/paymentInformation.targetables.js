module.exports = targetables => {
    const PaymentInformation = targetables.reactComponent(
        '@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/paymentInformation.js'
    );

    PaymentInformation.insertAfterSource(
        `isEditModalActive,
        showEditModal`,
        `,purchaseOrderNumber,
        setPurchaseOrderNumber`
    );

    PaymentInformation.insertAfterSource(
        `shouldSubmit={shouldSubmit}`,
        `
        purchaseOrderNumber={purchaseOrderNumber}
        setPurchaseOrderNumber={setPurchaseOrderNumber}`
    );

    PaymentInformation.insertAfterSource(
        `<EditModal `,
        `purchaseOrderNumber={purchaseOrderNumber}
        setPurchaseOrderNumber={setPurchaseOrderNumber}`
    );
    
}