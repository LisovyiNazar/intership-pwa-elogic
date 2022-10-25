import React from 'react';
import toast, { useToaster } from 'react-hot-toast';
import defaultClasses from './toastContainer.module.css';
import { useStyle } from '@magento/venia-ui/lib/classify';
import { shape, string } from 'prop-types';
import Toast from '@magento/venia-ui/lib/components/ToastContainer/toast';
import Icons from 'src/components/Icons/index.js';

const ToastContainer = (props) => {
    const { toasts } = useToaster();
    const classes = useStyle(defaultClasses, props.classes);

    return (
        <div className={classes.root}>
            {toasts
                .filter((toaster) => toaster.visible)
                .map((toaster) => {
                    const { id, message, type } = toaster;

                    const icon = (
                        <Icons
                            height={20}
                            id={
                                type === 'success' ? 'SuccessIcon' : 'ErrorIcon'
                            }
                            width={20}
                        />
                    );

                    return (
                        <Toast
                            dismissable
                            handleDismiss={() => toast.dismiss(id)}
                            icon={icon}
                            key={id}
                            message={message}
                            type={type}
                        />
                    );
                })}
        </div>
    );
};

ToastContainer.propTypes = {
    classes: shape({
        root: string
    })
};

export default ToastContainer;