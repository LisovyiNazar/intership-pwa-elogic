import React from 'react';
import AccountMenu from '../AccountMenu';
import defaultClasses from './accountLayout.module.css';
import { useStyle } from '@magento/venia-ui/lib/classify.js';
import { useWindowSize } from '@magento/peregrine';

const AccountLayout = props => {
    const { children } = props;
    const classes = useStyle(defaultClasses);

    const windowSize = useWindowSize();
    const isMobile = windowSize.innerWidth < 768;

    return (
        <div className={classes.root}>
            {
                !isMobile 
                    ? <AccountMenu />
                    : null
            }
            <div className={classes.children}>
                { 
                    children 
                }
            </div>
        </div>
    );
};

export default AccountLayout;