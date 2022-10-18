import React from 'react';
import { shape, string, bool, func } from 'prop-types';

import { useStyle } from '@magento/venia-ui/lib/classify';

import CashOnDelivery from '../CashOnDelivery/CashOnDelivery';
import defaultClasses from './edit.module.css';

/**
 * The edit view for the Checkmo payment method.
 */
const EditCashOnDelivery = props => {
    const {
        onPaymentReady,
        onPaymentSuccess,
        onPaymentError,
        resetShouldSubmit,
        shouldSubmit
    } = props;

    const classes = useStyle(defaultClasses, props.classes);
    console.log("edit");

    return (
        <div className={classes.root}>
            <CashOnDelivery
                onPaymentReady={onPaymentReady}
                onPaymentSuccess={onPaymentSuccess}
                onPaymentError={onPaymentError}
                resetShouldSubmit={resetShouldSubmit}
                shouldSubmit={shouldSubmit}
            />
        </div>
    );
};

EditCashOnDelivery.propTypes = {
    classes: shape({
        root: string
    }),
    onPaymentReady: func.isRequired,
    onPaymentSuccess: func.isRequired,
    onPaymentError: func.isRequired,
    resetShouldSubmit: func.isRequired,
    shouldSubmit: bool
};

export default EditCashOnDelivery;