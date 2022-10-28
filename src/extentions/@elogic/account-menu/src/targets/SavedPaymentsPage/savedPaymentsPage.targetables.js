module.exports = targetables => {
    const SavedPaymentsPage = targetables.reactComponent(
        '@magento/venia-ui/lib/components/SavedPaymentsPage/savedPaymentsPage.js'
    );

    SavedPaymentsPage.addImport('AccountLayout from "@elogic/account-menu/src/components/AccountLayout";');

    SavedPaymentsPage.surroundJSX('div className={classes.root}', 'AccountLayout');
}