import React from 'react';
import { shape, string, bool, func } from 'prop-types';

import { useStyle } from '@magento/venia-ui/lib/classify';

import PurchaseOrder from '../PurchaseOrder';
import defaultClasses from './edit.module.css';

/**
 * The edit view for the Checkmo payment method.
 */
const EditPurchaseOrder = props => {
    console.log(props);
    const {
        onPaymentReady,
        onPaymentSuccess,
        onPaymentError,
        resetShouldSubmit,
        shouldSubmit,
        purchaseOrderNumber, 
        setPurchaseOrderNumber
    } = props;

    const classes = useStyle(defaultClasses, props.classes);

    return (
        <div className={classes.root}>
            <PurchaseOrder
                onPaymentReady={onPaymentReady}
                onPaymentSuccess={onPaymentSuccess}
                onPaymentError={onPaymentError}
                resetShouldSubmit={resetShouldSubmit}
                shouldSubmit={shouldSubmit}
                purchaseOrderNumber={purchaseOrderNumber}
                setPurchaseOrderNumber={setPurchaseOrderNumber}
            />
        </div>
    );
};

EditPurchaseOrder.propTypes = {
    classes: shape({
        root: string
    }),
    onPaymentReady: func.isRequired,
    onPaymentSuccess: func.isRequired,
    onPaymentError: func.isRequired,
    resetShouldSubmit: func.isRequired,
    shouldSubmit: bool
};

export default EditPurchaseOrder;