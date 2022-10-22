const interceptComponent = App => {
    App.removeJSX('ToastContainer');
}

exports.interceptComponent = interceptComponent;