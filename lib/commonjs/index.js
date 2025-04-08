"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _index = _interopRequireDefault(require("./navigations/index"));
var _contexts = require("./contexts");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const EnhancedNavContainer = _index.default;
const CurrencyListModule = contextValue => {
  return /*#__PURE__*/_react.default.createElement(_contexts.CurrencyListProvider, {
    value: contextValue
  }, /*#__PURE__*/_react.default.createElement(EnhancedNavContainer, null));
};
CurrencyListModule.displayName = 'CurrencyListModule';
var _default = exports.default = CurrencyListModule;
//# sourceMappingURL=index.js.map