"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _contexts = require("../contexts");
var _constants = require("../utils/constants");
const useCurrencyListContext = () => {
  const context = (0, _react.useContext)(_contexts.CurrencyListContext);
  if (!context) {
    throw new Error(_constants.PROVIDER_NOT_ADDED);
  }
  return context;
};
var _default = exports.default = useCurrencyListContext;
//# sourceMappingURL=useCurrencyListContext.js.map