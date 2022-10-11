function componentsIntercept(targets) {
    const AccountChip = require('./AccountChip/accountChip.targetables');
    AccountChip(targets);

    const CartTrigger = require('./CartTrigger/cartTrigger.targetables');
    CartTrigger(targets);

    const CurrencySwitcher = require('./CurrencySwitcher/currencySwitcher.targetables');
    CurrencySwitcher(targets);

    const Header = require('./Header/header.targetables');
    Header(targets);

    const SearchTrigger = require('./SearchTrigger/searchTrigger.targetables');
    SearchTrigger(targets);
}

module.exports = componentsIntercept;