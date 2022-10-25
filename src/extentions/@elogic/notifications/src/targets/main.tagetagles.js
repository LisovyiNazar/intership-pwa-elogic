const { Targetables } = require('@magento/pwa-buildpack');

module.exports = targets => {
    const targetables = Targetables.using(targets);

    const Main = targetables.reactComponent(
        '@magento/venia-ui/lib/components/Main'
    );

    Main.addImport('ToastContainer from "src/components/ToastContainer"');
    Main.insertAfterJSX('Header', 'ToastContainer');
}