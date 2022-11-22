module.exports = targetables => {
    const EditModal = targetables.reactComponent(
        '@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/editModal.js'
    );
    

    EditModal.insertAfterSource(
        `const { onClose, isOpen `,
        `, purchaseOrderNumber, setPurchaseOrderNumber `
    );

    EditModal.insertAfterSource(
        `shouldSubmit={updateButtonClicked}`,
        `
        purchaseOrderNumber={purchaseOrderNumber}
        setPurchaseOrderNumber={setPurchaseOrderNumber}`
    );
    
}