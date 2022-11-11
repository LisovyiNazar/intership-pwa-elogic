import { gql } from '@apollo/client';

export const GET_PURCHASE_ORDER_NUMBER = gql`
    query getPurchaseOrderNumber($cardId: String!) {
        cart(
            cart_id: $cardId
        ) {
            id
            selected_payment_method {
                code
                purchase_order_number
            }
        }
    }
`;

export default {
    getPurchaseOrderNumber: GET_PURCHASE_ORDER_NUMBER
};