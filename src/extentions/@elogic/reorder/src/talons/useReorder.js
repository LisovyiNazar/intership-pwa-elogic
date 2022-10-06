import { useCallback } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import GET_PRODUCT from '@magento/peregrine/lib/talons/RootComponents/Product/product.gql.js';
import ADD_PRODUCT_TO_CART from '@magento/peregrine/lib/talons/ProductFullDetail/productFullDetail.gql.ce.js'
import mergeOperations from '@magento/peregrine/lib/util/shallowMerge.js';
import { useCartContext } from '@magento/peregrine/lib/context/cart';
import { useEventingContext } from '@magento/peregrine/lib/context/eventing.js';



const operations = mergeOperations(GET_PRODUCT, ADD_PRODUCT_TO_CART);
const { getProductDetailQuery, addProductToCartMutation } = operations;

export const useReorder = props => {
    const { items } = props;

    const prepareDataForAddToCard = () => {
        return items.map(item => {
            const urlKey = item.product_url_key;

            // eslint-disable-next-line react-hooks/rules-of-hooks
            const { data } = useQuery(getProductDetailQuery, {
                fetchPolicy: 'cache-and-network',
                nextFetchPolicy: 'cache-first',
                variables: {
                    urlKey
                }
            });

            const quantity = item.quantity_ordered

            return data ? { ...data.products.items[0], quantity } : null;
        });
    };

    // ----------------------------------------------------

    const [{ cartId }] = useCartContext();
    
    const [addProductToCart] = useMutation(addProductToCartMutation);

    const [, { dispatch }] = useEventingContext();

    const handleProductsAddToCart = useCallback(props => {
        const { itemsFullData } = props;

        itemsFullData.map(async item => {
            
            try {
                const variables = {
                    cartId,
                    product: {
                        sku: item.sku,
                        quantity: item.quantity,
                        selected_options: []
                    },
                    entered_options: [
                        {
                            uid: item.uid,
                            value: item.name
                        }
                    ]
                };

                console.log(variables);

                await addProductToCart({ variables });

                const selectedOptionsLabels =
                    selectedOptionsArray?.map((uid, i) => ({
                        attribute: product.configurable_options[i].label,
                        value:
                            product.configurable_options[i].values.findLast(
                                x => x.uid === uid
                            )?.label || null
                    })) || null;

                dispatch({
                    type: 'CART_ADD_ITEM',
                    payload: {
                        cartId,
                        sku: product.sku,
                        name: product.name,
                        priceTotal: productPrice.final_price.value,
                        currencyCode: productPrice.final_price.currency,
                        discountAmount: productPrice.discount.amount_off,
                        selectedOptions: selectedOptionsLabels,
                        quantity
                    }
                });
            } catch {
                return;
            }
            console.log('done');

        });

    }, [cartId, addProductToCart, dispatch])

    return { 
        prepareDataForAddToCard,
        handleProductsAddToCart 
    };
};
