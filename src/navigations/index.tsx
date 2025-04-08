import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { RootStackParamList } from './types';

import Screen from '../components/Screen';
import { ROUTES } from '../utils/constants';
import ListScreen from '../pages/ListScreen';

// Transition options (if needed for advanced animations)
export const TransitionConfig = {
  NONE: () => ({
    transitionSpec: {
      duration: 0,
      timing: 0,
    },
  }),
};

export const NavigationTransitionOptions = () => ({
  animationEnabled: false,
  transitionConfig: TransitionConfig.NONE,
});

// Stack navigator config
const screenOptions = {
  headerShown: false,
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const ListStack: React.FC = () => (
  <Stack.Navigator screenOptions={screenOptions}>
    <Stack.Screen name={ROUTES.LIST_SCREEN} component={ListScreen} />
  </Stack.Navigator>
);

const CurrencyListNavContainer: React.FC = () => (
  <Screen>
    <ListStack />
  </Screen>
);

export default CurrencyListNavContainer;
