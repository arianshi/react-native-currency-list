import React, { ReactNode } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';

type ScreenProps = {
  children: ReactNode;
};

const Screen = ({ children }: ScreenProps) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeContainer}>
        {children}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Screen;
