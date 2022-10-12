const interceptComponent = SearchTrigger => {
    SearchTrigger.insertAfterJSX(
        'span data-cy="SearchTrigger-label"',
        'Icon src={SearchIcon} className={classes.icon}'
    );

    SearchTrigger.removeJSX('Icon src={SearchIcon}');
}

exports.interceptComponent = interceptComponent;
