import { gql } from '@apollo/client';

export const GET_CUSTOMER_ORDERS = gql`
    query customerCart {
        id
        items {
            id
            product {
                name
                sku
            }
        }
        quantity
    }
`;

export default {
    getCustomerOrders: GET_CUSTOMER_ORDERS
}