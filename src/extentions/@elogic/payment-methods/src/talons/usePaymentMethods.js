module.exports = targetables => {
    const usePaymentMethods = targetables.reactComponent(
        '@magento/peregrine/lib/talons/CheckoutPage/PaymentInformation/usePaymentMethods.js'
    );

    usePaymentMethods.addImport("{ useCallback } from 'react';");
    usePaymentMethods.addImport("{ useMutation } from '@apollo/client';");
    usePaymentMethods.addImport("CUSTOM_PAYMENT_OPERATIONS from '@elogic/payment-methods/src/talons/paymentMethods.gql.js';");
    usePaymentMethods.addImport("PRICE_SUMMARY_OPERATIONS from '@magento/peregrine/lib/talons/CartPage/PriceSummary/priceSummary.gql.js';");

    usePaymentMethods.insertAfterSource(
        `const operations = mergeOperations(DEFAULT_OPERATIONS, `,
        `CUSTOM_PAYMENT_OPERATIONS, PRICE_SUMMARY_OPERATIONS,`
    );

    usePaymentMethods.insertAfterSource(
        `const { getPaymentMethodsQuery`,
        `, setPaymentMethodOnCartMutation, getPriceSummaryQuery`
    );

    usePaymentMethods.insertAfterSource(
        `} = operations;`,
        `
        const [setPaymentMethod] = useMutation(setPaymentMethodOnCartMutation);`
    );

    usePaymentMethods.insertBeforeSource(
        `const initialSelectedMethod =`,
        `const handlePaymentMethodSelection = useCallback(
            async (element) => {
                const value = element.target.value;
    
                await setPaymentMethod({
                    variables: {
                        cartId,
                        paymentMethod: {
                            code: value,
                            braintree: {
                                payment_method_nonce: value,
                                is_active_payment_token_enabler: false
                            }
                        }
                    },
                    refetchQueries: [
                        {
                            query: getPriceSummaryQuery,
                            variables: { cartId } 
                        }
                    ],
                    awaitRefetchQueries: true
                });
            },
            [cartId, setPaymentMethod]
        );
        
        `
    );

    usePaymentMethods.insertBeforeSource(
        `initialSelectedMethod,`,
        `handlePaymentMethodSelection,`
    );
}