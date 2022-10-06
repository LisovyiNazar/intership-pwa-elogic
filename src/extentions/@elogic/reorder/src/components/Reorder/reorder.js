import React from "react";
import Button from "@magento/venia-ui/lib/components/Button";
import { FormattedMessage } from "react-intl";
import { useReorder } from "../../talons/useReorder";

const Reorder = props => {

    const { items } = props;

    const defaultTalonProps = useReorder({ items });
    const { 
        prepareDataForAddToCard,
        handleProductsAddToCart 
    } = defaultTalonProps; 
    
    const itemsFullData = prepareDataForAddToCard();

    return (
        <Button 
            onClick={() => handleProductsAddToCart({ itemsFullData })}
        >
            <FormattedMessage 
                id='reorder.button'
                defaultMessage={'Reorder'}
            /> 
        </Button>
    )
}

export default Reorder;