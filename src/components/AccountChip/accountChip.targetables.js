const interceptComponent = AccountChipComponent => {

    AccountChipComponent.insertAfterJSX(
        'span data-cy="AccountChip-text"',
        'Icon src={AccountIcon}'
    );

    AccountChipComponent.removeJSX('Icon src={AccountIcon}');
}

exports.interceptComponent = interceptComponent;