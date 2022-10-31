/* eslint-disable */
function talonsIntercept(targetables) {
    const useGalleryItem = require('./useGalleryItem/useGalleryItem.targetables');
    useGalleryItem(targetables);

    const useAddToCartButton = require('./useAddToCartButton/useAddToCartButton.targetables');
    useAddToCartButton(targetables);
}

module.exports = talonsIntercept;