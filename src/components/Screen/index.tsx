import React, { ReactNode } from 'react';
import { View } from 'react-native';
import styles from './styles';

type ScreenProps = {
  children: ReactNode;
};

const Screen = ({ children }: ScreenProps) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

export default Screen;
