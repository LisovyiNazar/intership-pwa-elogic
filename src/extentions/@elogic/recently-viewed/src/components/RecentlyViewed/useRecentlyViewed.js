const useRecentlyViewed = () => {

    const handleAddToRecentlyViewed = (item) => {
        // Get all Recently Viewed Products
        const recentlyViewed = JSON.parse(localStorage.getItem('recently_viewed_product'));
        
        if (!recentlyViewed) {
            // If Recently Viewed Products doesn't exist create array in Local Storage 
            localStorage.setItem('recently_viewed_product', JSON.stringify([item]));
        } else {
            // If Product already exist in array delete it
            const recentlyViewedFiltered = recentlyViewed.filter((element) => element.id != item.id);

            // Add Product to beginning of array
            recentlyViewedFiltered.unshift(item);
            
            // If array length of Recently Viewed Products are more than 9 delete last Product 
            if (recentlyViewedFiltered.length > 6) recentlyViewedFiltered.pop();

            // Set Products to Local Storage
            localStorage.setItem('recently_viewed_product', JSON.stringify(recentlyViewedFiltered));
        }
    }

    const recentlyViewedItems = () => {
        return JSON.parse(localStorage.getItem('recently_viewed_product'));
    }
    
    return {
        handleAddToRecentlyViewed,
        recentlyViewedItems
    };
};

export default useRecentlyViewed;