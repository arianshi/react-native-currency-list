"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmptyState = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _Ionicons = _interopRequireDefault(require("react-native-vector-icons/Ionicons"));
var _style = _interopRequireDefault(require("./style"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const EmptyState = () => {
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _style.default.container
  }, /*#__PURE__*/_react.default.createElement(_Ionicons.default, {
    name: "search-outline",
    size: 60,
    color: "#B4BBD0"
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _style.default.title
  }, "No results found"), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _style.default.subtitle
  }, "Check the spelling or try other keywords"));
};
exports.EmptyState = EmptyState;
//# sourceMappingURL=index.js.map