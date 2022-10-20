import React from 'react';
import Button from '@magento/venia-ui/lib/components/Button';

import useNotifications from './useNotifications';

const NotificationButton = ({ productName, children, isAddToCartDisabled }) => {
    
    const talonsProps = useNotifications(productName, isAddToCartDisabled);
    const { hanbleButtonClick } = talonsProps;

    return (
        <Button 
            data-cy='ProductFullDetail-addToCartButton'
            priority='high'
            type='submit'
            children={children}
            onClick={() => hanbleButtonClick()}
        />
    );
};

export default NotificationButton;