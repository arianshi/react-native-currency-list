import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
const SearchBar = ({
  value,
  onChangeText,
  handleClear
}) => {
  return /*#__PURE__*/React.createElement(View, {
    style: styles.container
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 20,
    color: "#B4BBD0",
    style: styles.icon
  }), /*#__PURE__*/React.createElement(TextInput, {
    style: styles.input,
    placeholder: "Search",
    placeholderTextColor: "rgb(180,187,208)",
    value: value,
    onChangeText: onChangeText,
    returnKeyType: "search"
  }), value.length > 0 && /*#__PURE__*/React.createElement(TouchableOpacity, {
    onPress: handleClear
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "close-circle",
    size: 20,
    color: "#B4BBD0"
  })));
};
export { SearchBar };
//# sourceMappingURL=index.js.map