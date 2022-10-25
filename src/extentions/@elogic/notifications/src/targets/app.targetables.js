const { Targetables } = require('@magento/pwa-buildpack');

module.exports = targets => {
    const targetables = Targetables.using(targets);

    const App = targetables.reactComponent(
        '@magento/venia-ui/lib/components/App/app.js'
    );

    App.removeJSX('ToastContainer');
}