const { Targetables } = require('@magento/pwa-buildpack');

module.exports = targets => {
    const targetables = Targetables.using(targets);

    const Main = targetables.reactComponent(
        '@magento/venia-ui/lib/components/Main/main.js'
    );

    Main.addImport('ToastContainer from "@elogic/notifications/src/components/ToastContainer/toastContainer.js"');
    Main.insertAfterJSX('Header', 'ToastContainer');
}