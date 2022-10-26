module.exports = targetables => {
    const CommunicationsPage = targetables.reactComponent(
        '@magento/venia-ui/lib/components/CommunicationsPage/communicationsPage.js'
    );

    CommunicationsPage.addImport('AccountLayout from "@elogic/account-menu/src/components/AccountLayout";');

    CommunicationsPage.surroundJSX('div className={classes.root}', 'AccountLayout');
}