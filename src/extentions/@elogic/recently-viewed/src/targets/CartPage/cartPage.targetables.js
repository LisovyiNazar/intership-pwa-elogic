module.exports = targetables => {
    const CartPage = targetables.reactComponent(
        '@magento/venia-ui/lib/components/CartPage/cartPage.js'
    );

    CartPage.addImport('RecentlyViewed from "@elogic/recently-viewed/src/components/RecentlyViewed";');

    CartPage.insertAfterJSX('div className={classes.body}', 'RecentlyViewed')
}