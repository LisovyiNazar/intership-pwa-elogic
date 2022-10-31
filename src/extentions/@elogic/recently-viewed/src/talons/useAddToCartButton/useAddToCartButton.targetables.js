module.exports = targetables => {
    const useAddToCartButton = targetables.reactComponent(
        '@magento/peregrine/lib/talons/Gallery/useAddToCartButton.js'
    );

    useAddToCartButton.addImport('useRecentlyViewed from "@elogic/recently-viewed/src/components/RecentlyViewed/useRecentlyViewed";');

    useAddToCartButton.insertAfterSource(
        'props => {',
        `\nconst recentlyViewedTalonProps = useRecentlyViewed();
        const { handleAddToRecentlyViewed } = recentlyViewedTalonProps;`
    )

    useAddToCartButton.insertAfterSource(
        'handleAddToCart = useCallback(async () => {',
        'handleAddToRecentlyViewed(item);'
    )
}