const { Targetables } = require('@magento/pwa-buildpack');

module.exports = targets => {
    const targetables = Targetables.using(targets);

    const Toast = targetables.reactComponent(
        '@magento/venia-ui/lib/components/ToastContainer/toast.js'
    );

    Toast.removeJSX('div className={classes.controls}')
}