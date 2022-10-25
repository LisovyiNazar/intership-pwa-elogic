import toast from 'react-hot-toast';
import { useCallback } from 'react';
import { useIntl } from 'react-intl';

export const useToastResultIndicator = (product) => {
    const { formatMessage } = useIntl();

    const onSuccess = useCallback(() => {
        window.scrollTo(0, 0)
        return toast.success(formatMessage({
            defaultMessage: `You added ${product.name} to your shopping cart.`,
            id: 'productFullDetail.success'
        }, {
            product: product.name
        }), {
            duration: 5000
        })
    }, [product, formatMessage])
    
    const onError = useCallback((error) => {
        window.scrollTo(0, 0)
        return toast.error(error.message);
    }, [])

    return [
        onSuccess,
        onError
    ];
};

