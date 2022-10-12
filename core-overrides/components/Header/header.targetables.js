const { Targetables } = require('@magento/pwa-buildpack');

module.exports = targets => {
    const targetables = Targetables.using(targets);

    const Header = targetables.reactComponent(
        '@magento/venia-ui/lib/components/Header/header.js'
    );

    Header.addImport("{ Heart as HeartIcon } from 'react-feather'");
    Header.addImport("Icon from '@magento/venia-ui/lib/components/Icon'");

    Header.prependJSX(
        'div className={classes.secondaryActions}',
        `Link children={<Icon src={HeartIcon} />} className={classes.wishlist} to={'/wishlist'}`
    );

}
