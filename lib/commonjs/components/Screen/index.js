"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNativeSafeAreaContext = require("react-native-safe-area-context");
var _styles = _interopRequireDefault(require("./styles"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Screen = ({
  children
}) => {
  return /*#__PURE__*/_react.default.createElement(_reactNativeSafeAreaContext.SafeAreaProvider, null, /*#__PURE__*/_react.default.createElement(_reactNativeSafeAreaContext.SafeAreaView, {
    style: _styles.default.safeContainer
  }, children));
};
var _default = exports.default = Screen;
//# sourceMappingURL=index.js.map