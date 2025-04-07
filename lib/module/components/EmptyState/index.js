import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './style';
const EmptyState = () => {
  return /*#__PURE__*/React.createElement(View, {
    style: styles.container
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search-outline",
    size: 60,
    color: "#B4BBD0"
  }), /*#__PURE__*/React.createElement(Text, {
    style: styles.title
  }, "No results found"), /*#__PURE__*/React.createElement(Text, {
    style: styles.subtitle
  }, "Check the spelling or try other keywords"));
};
export { EmptyState };
//# sourceMappingURL=index.js.map