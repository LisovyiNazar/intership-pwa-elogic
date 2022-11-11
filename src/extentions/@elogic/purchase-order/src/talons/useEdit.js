import { useQuery } from '@apollo/client';
import { useCartContext } from '@magento/peregrine/lib/context/cart';
import mergeOperations from '@magento/peregrine/lib/util/shallowMerge';
import DEFAULT_OPERATIONS from './edit.gql';

export const useEdit = () => {
    const [{ cartId }] = useCartContext();
    
    const operations = mergeOperations(DEFAULT_OPERATIONS);

    const { getPurchaseOrderNumber } = operations;

    const cartRequest = useQuery(getPurchaseOrderNumber, {
        variables: { cardId: cartId }
    });

    // const purchaseOrderNumberInit = () => {
    //     if (cartRequest.data) return cartRequest.data.cart.selected_payment_method.purchase_order_number;
    //     else return '';
    // }

    const purchaseOrderNumberInit = cartRequest.data.cart.selected_payment_method.purchase_order_number;

    return {
        purchaseOrderNumberInit
    }    
}
