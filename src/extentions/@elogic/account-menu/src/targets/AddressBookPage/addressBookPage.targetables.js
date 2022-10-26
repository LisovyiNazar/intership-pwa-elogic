module.exports = targetables => {
    const AddressBookPage = targetables.reactComponent(
        '@magento/venia-ui/lib/components/AddressBookPage/addressBookPage.js'
    );

    AddressBookPage.addImport('AccountLayout from "@elogic/account-menu/src/components/AccountLayout";');

    AddressBookPage.surroundJSX('div className={classes.root}', 'AccountLayout');
}