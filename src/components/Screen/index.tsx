import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';

type ScreenProps = {
  children: ReactNode;
};

const Screen = ({ children }: ScreenProps) => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.childrenContainer}>
        {children}
      </View>
    </SafeAreaView>
  );
};

export default Screen;
