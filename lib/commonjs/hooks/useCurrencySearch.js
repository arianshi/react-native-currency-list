"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCurrencySearch = void 0;
var _react = require("react");
const useCurrencySearch = (currencies, search) => {
  return (0, _react.useMemo)(() => {
    const q = search.toLowerCase();
    return currencies.filter(item => {
      const name = item.name.toLowerCase();
      const symbol = item.symbol.toLowerCase();
      return name.startsWith(q) || name.includes(' ' + q) || symbol.startsWith(q);
    });
  }, [currencies, search]);
};
exports.useCurrencySearch = useCurrencySearch;
//# sourceMappingURL=useCurrencySearch.js.map