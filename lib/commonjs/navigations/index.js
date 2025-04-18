"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TransitionConfig = exports.NavigationTransitionOptions = void 0;
var _react = _interopRequireDefault(require("react"));
var _nativeStack = require("@react-navigation/native-stack");
var _Screen = _interopRequireDefault(require("../components/Screen"));
var _constants = require("../utils/constants");
var _ListScreen = _interopRequireDefault(require("../pages/ListScreen"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// Transition options (if needed for advanced animations)
const TransitionConfig = exports.TransitionConfig = {
  NONE: () => ({
    transitionSpec: {
      duration: 0,
      timing: 0
    }
  })
};
const NavigationTransitionOptions = () => ({
  animationEnabled: false,
  transitionConfig: TransitionConfig.NONE
});

// Stack navigator config
exports.NavigationTransitionOptions = NavigationTransitionOptions;
const screenOptions = {
  headerShown: false
};
const Stack = (0, _nativeStack.createNativeStackNavigator)();
const ListStack = () => /*#__PURE__*/_react.default.createElement(Stack.Navigator, {
  screenOptions: screenOptions
}, /*#__PURE__*/_react.default.createElement(Stack.Screen, {
  name: _constants.ROUTES.LIST_SCREEN,
  component: _ListScreen.default
}));
const CurrencyListNavContainer = () => /*#__PURE__*/_react.default.createElement(_Screen.default, null, /*#__PURE__*/_react.default.createElement(ListStack, null));
var _default = exports.default = CurrencyListNavContainer;
//# sourceMappingURL=index.js.map