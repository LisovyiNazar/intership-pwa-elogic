const interceptComponent = Main => {
    Main.addImport('ToastContainer from "src/components/ToastContainer"');
    Main.insertAfterJSX('Header', 'ToastContainer');
};

exports.interceptComponent = interceptComponent;