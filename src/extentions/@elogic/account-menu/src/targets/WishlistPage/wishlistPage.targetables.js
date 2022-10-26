module.exports = targetables => {
    const WishlistPage = targetables.reactComponent(
        '@magento/venia-ui/lib/components/WishlistPage/wishlistPage.js'
    );

    WishlistPage.addImport('AccountLayout from "@elogic/account-menu/src/components/AccountLayout";');

    WishlistPage.surroundJSX('div className={classes.root}', 'AccountLayout')

}