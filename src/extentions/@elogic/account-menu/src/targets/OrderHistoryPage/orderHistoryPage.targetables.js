module.exports = targetables => {
    const OrderHistoryPage = targetables.reactComponent(
        '@magento/venia-ui/lib/components/OrderHistoryPage/orderHistoryPage.js'
    );

    OrderHistoryPage.addImport('AccountLayout from "@elogic/account-menu/src/components/AccountLayout";');

    OrderHistoryPage.surroundJSX('OrderHistoryContextProvider', 'AccountLayout');
}