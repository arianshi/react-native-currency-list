"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchBar = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _styles = _interopRequireDefault(require("./styles"));
var _Ionicons = _interopRequireDefault(require("react-native-vector-icons/Ionicons"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const SearchBar = ({
  value,
  onChangeText,
  handleClear
}) => {
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.default.container
  }, /*#__PURE__*/_react.default.createElement(_Ionicons.default, {
    name: "search",
    size: 20,
    color: "#B4BBD0",
    style: _styles.default.icon
  }), /*#__PURE__*/_react.default.createElement(_reactNative.TextInput, {
    style: _styles.default.input,
    placeholder: "Search",
    placeholderTextColor: "rgb(180,187,208)",
    value: value,
    onChangeText: onChangeText,
    returnKeyType: "search"
  }), value.length > 0 && /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: handleClear
  }, /*#__PURE__*/_react.default.createElement(_Ionicons.default, {
    name: "close-circle",
    size: 20,
    color: "#B4BBD0"
  })));
};
exports.SearchBar = SearchBar;
//# sourceMappingURL=index.js.map