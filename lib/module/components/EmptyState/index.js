import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './style';
const EmptyState = ({
  iconName = 'search-outline',
  title = 'No results found',
  subtitle = 'Check the spelling or try other keywords'
}) => {
  return /*#__PURE__*/React.createElement(View, {
    style: styles.container
  }, /*#__PURE__*/React.createElement(Icon, {
    name: iconName,
    size: 60,
    color: "#B4BBD0"
  }), /*#__PURE__*/React.createElement(Text, {
    style: styles.title
  }, title), /*#__PURE__*/React.createElement(Text, {
    style: styles.subtitle
  }, subtitle));
};
export { EmptyState };
//# sourceMappingURL=index.js.map