import React, { ReactNode } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';

type ScreenProps = {
  children: ReactNode;
};

const Screen = ({ children }: ScreenProps) => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      {children}
    </SafeAreaView>
  );
};

export default Screen;
