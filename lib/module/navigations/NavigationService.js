import { CommonActions } from '@react-navigation/native';
export let _navigator;
const setTopLevelNavigator = navigatorRef => {
  _navigator = navigatorRef;
};
const navigate = option => {
  var _navigator2;
  (_navigator2 = _navigator) === null || _navigator2 === void 0 || _navigator2.dispatch(CommonActions.navigate(option));
};
const goBack = () => {
  var _navigator3;
  (_navigator3 = _navigator) === null || _navigator3 === void 0 || _navigator3.dispatch(CommonActions.goBack());
};
export default {
  navigate,
  setTopLevelNavigator,
  goBack
};
//# sourceMappingURL=NavigationService.js.map