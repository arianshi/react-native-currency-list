import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
const SearchBar = ({
  value,
  onChangeText,
  handleClear
}) => {
  const showClear = value.length > 0;
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
    returnKeyType: "search",
    accessibilityLabel: "Search Input"
  }), showClear && /*#__PURE__*/React.createElement(TouchableOpacity, {
    testID: "clear-button",
    onPress: handleClear,
    accessibilityLabel: "Clear Search"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "close-circle",
    size: 20,
    color: "#B4BBD0"
  })));
};
export { SearchBar };
//# sourceMappingURL=index.js.map