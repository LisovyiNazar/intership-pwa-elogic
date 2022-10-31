/* eslint-disable */
function componentsIntercept(targetables) {
    const WishlistPage = require('./WishlistPage/wishlistPage.targetables');
    WishlistPage(targetables);

    const CartPage = require('./CartPage/cartPage.targetables');
    CartPage(targetables);
}

module.exports = componentsIntercept;