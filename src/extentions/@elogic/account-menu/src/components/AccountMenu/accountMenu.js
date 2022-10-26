import React from 'react';
import { useStyle } from '@magento/venia-ui/lib/classify.js';
import defaultClasses from './accountMenu.module.css';
import { useAccountMenuItems } from '@magento/peregrine/lib/talons/AccountMenu/useAccountMenuItems.js';
import { Link } from 'react-router-dom';

const AccountMenu = () => {
    const talonsProps = useAccountMenuItems(() => {});
    const { menuItems } = talonsProps
    const classes = useStyle(defaultClasses);
    
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                {
                    menuItems.map((item, i) => {
                        return (
                            <>
                                <div className={classes.link_container}>
                                    {
                                        window.location.pathname == item.url 
                                            ? <span className={classes.indicator} />
                                            : null
                                    }
                                    <Link to={item.url} className={classes.link} id={i}>
                                        {
                                            item.name
                                        } 
                                    </Link>
                                </div>
                                {
                                    i % 2 != 0 ? (
                                        <div className={classes.separator_container}>
                                            <div className={classes.separator} />
                                        </div>
                                    ) : null
                                }
                            </>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default AccountMenu;