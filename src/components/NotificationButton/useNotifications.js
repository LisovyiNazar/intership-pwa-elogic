import toast from 'react-hot-toast';
import { useIntl } from 'react-intl';

const useNotifications = (productName, isAddToCartDisabled) => {

    const { formatMessage } = useIntl();
    const defaultText = formatMessage({ id: 'productFullDetail.addedToCart' }, { name: productName })
    const errorText = formatMessage({ id: 'productFullDetail.errorUnknown' })

    const hanbleButtonClick = () => {
        if (!isAddToCartDisabled) return toast.success(defaultText)
        else return toast.error(errorText)
    }

    return {
        hanbleButtonClick
    }
}

export default useNotifications;