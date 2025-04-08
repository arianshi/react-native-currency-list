import React, { ReactNode } from 'react';
import { Edge } from 'react-native-safe-area-context';
import { ViewStyle } from 'react-native';
type ScreenProps = {
    children: ReactNode;
    edges?: Edge[];
    style?: ViewStyle;
};
declare const Screen: React.FC<ScreenProps>;
export default Screen;
