module.exports = targetables => {
    const usePaymentInformation = targetables.reactComponent(
        '@magento/peregrine/lib/talons/CheckoutPage/PaymentInformation/usePaymentInformation.js'
    );

    usePaymentInformation.insertBeforeSource(
        `const [doneEditing`,
        `const [purchaseOrderNumber, setPurchaseOrderNumber] = useState('');`
    );

    usePaymentInformation.insertAfterSource(
        `isLoading,
        showEditModal`,
        `,purchaseOrderNumber,
        setPurchaseOrderNumber`
    );
}