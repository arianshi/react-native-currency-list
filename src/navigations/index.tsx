import React from 'react';
import { NavigationIndependentTree } from '@react-navigation/core';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationService from './NavigationService';
import type { RootStackParamList } from './types';
import Screen from '../components/Screen';
import { ROUTES } from '../utils/constants';
import ListScreen from '../pages/ListScreen/index';

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

const config = {
  headerShown: false,
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const ListStack = () => {
  return (
    <Stack.Navigator screenOptions={config}>
      <Stack.Screen name={ROUTES.LIST_SCREEN} component={ListScreen} />
    </Stack.Navigator>
  );
};

const CurrencyListNavContainer = () => {
  return (
    <NavigationIndependentTree>
    <NavigationContainer
      ref={(navigatorRef) => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}
    >
       <Screen>
          <ListStack />
        </Screen>
    </NavigationContainer>
    </NavigationIndependentTree>
  );
};

export default CurrencyListNavContainer;
