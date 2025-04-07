"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports._navigator = void 0;
var _native = require("@react-navigation/native");
let _navigator = exports._navigator = void 0;
const setTopLevelNavigator = navigatorRef => {
  exports._navigator = _navigator = navigatorRef;
};
const navigate = option => {
  var _navigator2;
  (_navigator2 = _navigator) === null || _navigator2 === void 0 || _navigator2.dispatch(_native.CommonActions.navigate(option));
};
const goBack = () => {
  var _navigator3;
  (_navigator3 = _navigator) === null || _navigator3 === void 0 || _navigator3.dispatch(_native.CommonActions.goBack());
};
var _default = exports.default = {
  navigate,
  setTopLevelNavigator,
  goBack
};
//# sourceMappingURL=NavigationService.js.map