module.exports = targetables => {
    const WishlistPage = targetables.reactComponent(
        '@magento/venia-ui/lib/components/WishlistPage/wishlistPage.js'
    );

    WishlistPage.addImport('RecentlyViewed from "@elogic/recently-viewed/src/components/RecentlyViewed";');

    WishlistPage.insertAfterSource('{content}', '<RecentlyViewed />')
}