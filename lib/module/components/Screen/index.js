import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
const Screen = ({
  children
}) => {
  return /*#__PURE__*/React.createElement(SafeAreaView, {
    style: styles.safeContainer
  }, children);
};
export default Screen;
//# sourceMappingURL=index.js.map