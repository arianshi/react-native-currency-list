import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen from '../components/Screen';
import { ROUTES } from '../utils/constants';
import ListScreen from '../pages/ListScreen';

// Transition options (if needed for advanced animations)
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

// Stack navigator config
const screenOptions = {
  headerShown: false
};
const Stack = createNativeStackNavigator();
const ListStack = () => /*#__PURE__*/React.createElement(Stack.Navigator, {
  screenOptions: screenOptions
}, /*#__PURE__*/React.createElement(Stack.Screen, {
  name: ROUTES.LIST_SCREEN,
  component: ListScreen
}));
const CurrencyListNavContainer = () => /*#__PURE__*/React.createElement(Screen, null, /*#__PURE__*/React.createElement(ListStack, null));
export default CurrencyListNavContainer;
//# sourceMappingURL=index.js.map