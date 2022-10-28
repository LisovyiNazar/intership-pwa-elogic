const useCustomAccountMenuItems = () => {
    const MENU_ITEMS_CUSTOM = [
        {
            name: 'Order History',
            id: 'accountMenu.orderHistoryLink',
            url: '/order-history'
        },
        {
            name: 'My Wish Lists',
            id: 'accountMenu.favoritesListsLink',
            url: '/wishlist'
        },
        {
            name: 'Address Book',
            id: 'accountMenu.addressBookLink',
            url: '/address-book'
        },
        {
            name: 'Account Information',
            id: 'accountMenu.accountInfoLink',
            url: '/account-information'
        },
        {
            name: 'Store Payments Methods',
            id: 'accountMenu.savedPaymentsLink',
            url: '/saved-payments'
        },
        {
            name: 'Newsletters Subscriptions',
            id: 'accountMenu.communicationsLink',
            url: '/communications'
        }
    ];
    
    return {
        MENU_ITEMS_CUSTOM
    };
};

export default useCustomAccountMenuItems;