const { Targetables } = require('@magento/pwa-buildpack');

module.exports = targets => {
    const targetables = Targetables.using(targets);

    const SearchTrigger = targetables.reactComponent(
        '@magento/venia-ui/lib/components/Header/searchTrigger.js'
    );

    SearchTrigger.insertAfterJSX(
        'span data-cy="SearchTrigger-label"',
        'Icon src={SearchIcon}'
    );

    SearchTrigger.removeJSX('Icon src={SearchIcon}');
}
