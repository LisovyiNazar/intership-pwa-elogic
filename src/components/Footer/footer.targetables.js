const interceptComponent = Footer => {
    Footer.addImport('Icons from "src/components/Icons";');

    Footer.removeJSX(
        'ul className={classes.socialLinks}'
    );

    Footer.insertAfterJSX(
        'p data-cy="Footer-calloutText"',
        '<Icons id="twitter"/>'
    )
    
    Footer.insertAfterJSX(
        'p data-cy="Footer-calloutText"',
        '<Icons id="facebook">'
    )

    Footer.insertAfterJSX(
        'p data-cy="Footer-calloutText"',
        '<Icons id="instagram" height={30} weight={30} fill="pink"/>'
    )
}

exports.interceptComponent = interceptComponent;