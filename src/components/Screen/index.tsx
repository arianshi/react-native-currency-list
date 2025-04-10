import React, { ReactNode } from 'react';
import {
  SafeAreaProvider,
  SafeAreaView,
  Edge,
} from 'react-native-safe-area-context';

import { ViewStyle } from 'react-native';
import styles from './styles';

type ScreenProps = {
  children: ReactNode;
  edges?: Edge[];
  style?: ViewStyle;
};

const Screen: React.FC<ScreenProps> = ({
  children,
  edges = ['top', 'bottom'],
  style,
}) => {
  return (
    <SafeAreaProvider testID="screen" >
      <SafeAreaView style={[styles.safeContainer, style]} edges={edges}>
        {children}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Screen;
