import React from 'react';
import { shape, string, bool, func } from 'prop-types';

import { useStyle } from '@magento/venia-ui/lib/classify';

import BankTransfer from '../BankTransfer';
import defaultClasses from './edit.module.css';

/**
 * The edit view for the Checkmo payment method.
 */
const EditBankTransfer = props => {
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
            <BankTransfer
                onPaymentReady={onPaymentReady}
                onPaymentSuccess={onPaymentSuccess}
                onPaymentError={onPaymentError}
                resetShouldSubmit={resetShouldSubmit}
                shouldSubmit={shouldSubmit}
            />
        </div>
    );
};

EditBankTransfer.propTypes = {
    classes: shape({
        root: string
    }),
    onPaymentReady: func.isRequired,
    onPaymentSuccess: func.isRequired,
    onPaymentError: func.isRequired,
    resetShouldSubmit: func.isRequired,
    shouldSubmit: bool
};

export default EditBankTransfer;