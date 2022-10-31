module.exports = targetables => {
    const useGalleryItem = targetables.reactComponent(
        '@magento/peregrine/lib/talons/Gallery/useGalleryItem.js'
    );

    useGalleryItem.addImport('useRecentlyViewed from "@elogic/recently-viewed/src/components/RecentlyViewed/useRecentlyViewed";');

    useGalleryItem.insertAfterSource(
        '(props = {}) => {',
        `const recentlyViewedTalonProps = useRecentlyViewed();
        const { handleAddToRecentlyViewed } = recentlyViewedTalonProps;`
    )

    useGalleryItem.insertAfterSource(
        'useCallback(() => {',
        'handleAddToRecentlyViewed(item);'
    )
}