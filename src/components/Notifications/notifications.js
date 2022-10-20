import React from 'react';
import { Toaster } from 'react-hot-toast';

const Notifications = ({ isAddToCartDisabled }) => {
    if (!isAddToCartDisabled) {
        return (
            <a href='/cart'>
                <Toaster toastOptions={{ duration: 5000, position: 'top-center' }} />
            </a>
        );
    }

    return (
        <Toaster toastOptions={{ duration: 5000, position: 'top-center' }} />
    );
    
};

export default Notifications;

