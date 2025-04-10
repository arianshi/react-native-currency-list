import React from 'react';
import { render } from '@testing-library/react-native';
import { Text } from 'react-native';
import Screen from '../index';

describe('Screen component', () => {
  it('renders SafeAreaProvider with testID and children inside', () => {
    const { getByTestId } = render(
      <Screen>
        <Text>Hello World</Text>
      </Screen>
    );

    const safeAreaProvider = getByTestId('screen');

    expect(safeAreaProvider).toBeTruthy();

  });
});
