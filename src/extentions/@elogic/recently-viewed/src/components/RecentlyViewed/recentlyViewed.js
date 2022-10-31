import React from 'react';
import Gallery from '@magento/venia-ui/lib/components/Gallery/gallery';
import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from './recentlyViewed.module.css';
import useRecentlyViewed from './useRecentlyViewed';

const RecentlyViewed = () => {
    const classes = useStyle(defaultClasses);
    
    const talonProps = useRecentlyViewed();
    const { recentlyViewedItems } = talonProps;
    const recentlyViewed = recentlyViewedItems();

    return (
        <div className={classes.root} >
            {
                recentlyViewed ? (
                    <div className={classes.container}>
                        <h1 className={classes.title}>Recently Viewed</h1>
                        <Gallery items={recentlyViewedItems()} /> 
                    </div> 
                ) : null 
            }
        </div>
    );
};

export default RecentlyViewed;