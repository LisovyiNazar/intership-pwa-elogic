import React from 'react';
import { shape, string, bool, func } from 'prop-types';

import { useStyle } from '@magento/venia-ui/lib/classify';

import PurchaseOrder from '../PurchaseOrder';
import defaultClasses from './edit.module.css';
import { useEdit } from '../../talons/useEdit'

/**
 * The edit view for the Checkmo payment method.
 */
const EditPurchaseOrder = props => {
    const {
        onPaymentReady,
        onPaymentSuccess,
        onPaymentError,
        resetShouldSubmit,
        shouldSubmit
    } = props;

    const talonProps = useEdit();
    const { purchaseOrderNumberInit } = talonProps;

    const classes = useStyle(defaultClasses, props.classes);

    return (
        <div className={classes.root}>
            <PurchaseOrder
                onPaymentReady={onPaymentReady}
                onPaymentSuccess={onPaymentSuccess}
                onPaymentError={onPaymentError}
                resetShouldSubmit={resetShouldSubmit}
                shouldSubmit={shouldSubmit}
                purchaseOrderNumberInit={purchaseOrderNumberInit}
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