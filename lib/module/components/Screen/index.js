import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
const Screen = ({
  children,
  edges = ['top', 'bottom'],
  style
}) => {
  return /*#__PURE__*/React.createElement(SafeAreaProvider, {
    testID: "screen"
  }, /*#__PURE__*/React.createElement(SafeAreaView, {
    style: [styles.safeContainer, style],
    edges: edges
  }, children));
};
export default Screen;
//# sourceMappingURL=index.js.map