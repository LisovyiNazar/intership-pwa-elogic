/* eslint-disable */
function componentsIntercept(targetables) {
    const OrderHistoryPage = require('./OrderHistoryPage/orderHistoryPage.targetables');
    OrderHistoryPage(targetables);
    
    const WishlistPage = require('./WishlistPage/wishlistPage.targetables');
    WishlistPage(targetables);

    const AddressBookPage = require('./AddressBookPage/addressBookPage.targetables');
    AddressBookPage(targetables);

    const SavedPaymentsPage = require('./SavedPaymentsPage/savedPaymentsPage.targetables');
    SavedPaymentsPage(targetables);
    
    const CommunicationsPage = require('./CommunicationsPage/communicationsPage.targetables');
    CommunicationsPage(targetables);
    
    const AccountInformationPage = require('./AccountInformationPage/accountInformationPage.targetables');
    AccountInformationPage(targetables);
}

module.exports = componentsIntercept;