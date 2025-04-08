"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCurrencySearch = void 0;
var _react = require("react");
const useCurrencySearch = (currencies, search) => {
  return (0, _react.useMemo)(() => {
    const query = search.trim().toLowerCase();
    if (!query) {
      return currencies;
    }
    return currencies.filter(({
      name,
      symbol
    }) => {
      const nameLower = name.toLowerCase();
      const symbolLower = symbol.toLowerCase();
      return nameLower.startsWith(query) || nameLower.includes(' ' + query) || symbolLower.startsWith(query);
    });
  }, [currencies, search]);
};
exports.useCurrencySearch = useCurrencySearch;
//# sourceMappingURL=useCurrencySearch.js.map