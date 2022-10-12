const interceptComponent = Header => {
    Header.addImport("{ Heart as HeartIcon } from 'react-feather'");
    
    Header.addImport("Icon from '@magento/venia-ui/lib/components/Icon'");

    Header.addImport("customStyles from 'src/components/Header/header.custom.module.css'");

    Header.spliceSource({
        after : 'useStyle(defaultClasses, ',
        insert: 'customStyles,'
    });

    Header.prependJSX(
        'div className={classes.secondaryActions}',
        `Link children={<Icon src={HeartIcon} />} className={classes.wishListIcon} to={'/wishlist'}`
    );
}

exports.interceptComponent = interceptComponent;
