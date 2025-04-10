"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _useCurrencyListContext = _interopRequireDefault(require("../../hooks/useCurrencyListContext"));
var _Ionicons = _interopRequireDefault(require("react-native-vector-icons/Ionicons"));
var _EmptyState = require("../../components/EmptyState");
var _SearchBar = require("../../components/SearchBar");
var _useCurrencySearch = require("../../hooks/useCurrencySearch");
var _native = require("@react-navigation/native");
var _styles = _interopRequireDefault(require("./styles"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const CurrencyList = () => {
  const navigation = (0, _native.useNavigation)();
  const {
    metadata: {
      data
    }
  } = (0, _useCurrencyListContext.default)();
  const [search, setSearch] = (0, _react.useState)('');
  const filteredData = (0, _useCurrencySearch.useCurrencySearch)(data, search);
  const handleClear = (0, _react.useCallback)(() => {
    setSearch('');
  }, []);
  const renderItem = (0, _react.useCallback)(({
    item
  }) => /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    style: _styles.default.itemContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.default.avatar
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _styles.default.avatarText
  }, item.name.charAt(0).toUpperCase())), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.default.nameContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _styles.default.nameText
  }, item.name)), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _styles.default.symbolText
  }, item.symbol), /*#__PURE__*/_react.default.createElement(_Ionicons.default, {
    name: "chevron-forward",
    size: 20,
    color: "#999"
  })), []);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.default.container
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.default.header
  }, /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: navigation.goBack,
    style: _styles.default.backButton
  }, /*#__PURE__*/_react.default.createElement(_Ionicons.default, {
    name: "chevron-back",
    size: 24,
    color: "#fff"
  })), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.default.titleWrapper
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _styles.default.title
  }, "List Cryptocurrency"))), /*#__PURE__*/_react.default.createElement(_SearchBar.SearchBar, {
    value: search,
    onChangeText: setSearch,
    handleClear: handleClear
  }), filteredData.length === 0 ? /*#__PURE__*/_react.default.createElement(_EmptyState.EmptyState, null) : /*#__PURE__*/_react.default.createElement(_reactNative.FlatList, {
    data: filteredData,
    keyExtractor: item => item.id,
    contentContainerStyle: _styles.default.listContainer,
    renderItem: renderItem
  }));
};
var _default = exports.default = CurrencyList;
//# sourceMappingURL=index.js.map