module.exports = targetables => {
    const useAccountMenuItems = targetables.reactComponent(
        '@magento/peregrine/lib/talons/AccountMenu/useAccountMenuItems.js'
    );

    useAccountMenuItems.addImport('useCustomAccountMenuItems from "@elogic/account-menu/src/talons/useCustomAccountMenuItems.js";');

    useAccountMenuItems.insertAfterSource(
        '}, [onSignOut]);',
        `const customTalonProps = useCustomAccountMenuItems();
        const { MENU_ITEMS_CUSTOM } = customTalonProps;`
    );

    useAccountMenuItems.insertAfterSource(
        ': MENU_ITEMS',
        '_CUSTOM'
    );
}