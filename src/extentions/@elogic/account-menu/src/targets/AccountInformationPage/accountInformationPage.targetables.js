module.exports = targetables => {
    const AccountInformationPage = targetables.reactComponent(
        '@magento/venia-ui/lib/components/AccountInformationPage/accountInformationPage.js'
    );

    AccountInformationPage.addImport('AccountLayout from "@elogic/account-menu/src/components/AccountLayout";');

    AccountInformationPage.surroundJSX('div className={classes.root}', 'AccountLayout');
}