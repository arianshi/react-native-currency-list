import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen from '../components/Screen';
import { ROUTES } from '../utils/constants';
import ListScreen from '../pages/ListScreen/index';
export const TransitionConfig = {
  NONE: () => ({
    transitionSpec: {
      duration: 0,
      timing: 0
    }
  })
};
export const NavigationTransitionOptions = () => ({
  animationEnabled: false,
  transitionConfig: TransitionConfig.NONE
});
const config = {
  headerShown: false
};
const Stack = createNativeStackNavigator();
const ListStack = () => {
  return /*#__PURE__*/React.createElement(Stack.Navigator, {
    screenOptions: config
  }, /*#__PURE__*/React.createElement(Stack.Screen, {
    name: ROUTES.LIST_SCREEN,
    component: ListScreen
  }));
};
const CurrencyListNavContainer = () => {
  return /*#__PURE__*/React.createElement(Screen, null, /*#__PURE__*/React.createElement(ListStack, null));
};
export default CurrencyListNavContainer;
//# sourceMappingURL=index.js.map