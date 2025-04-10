import React, { useCallback, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import useCurrencyListContext from '../../hooks/useCurrencyListContext';
import Icon from 'react-native-vector-icons/Ionicons';
import { EmptyState } from '../../components/EmptyState';
import { SearchBar } from '../../components/SearchBar';
import { useCurrencySearch } from '../../hooks/useCurrencySearch';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
const CurrencyList = () => {
  const navigation = useNavigation();
  const {
    metadata: {
      data
    }
  } = useCurrencyListContext();
  const [search, setSearch] = useState('');
  const filteredData = useCurrencySearch(data, search);
  const handleClear = useCallback(() => {
    setSearch('');
  }, []);
  const renderItem = useCallback(({
    item
  }) => /*#__PURE__*/React.createElement(TouchableOpacity, {
    style: styles.itemContainer
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.avatar
  }, /*#__PURE__*/React.createElement(Text, {
    style: styles.avatarText
  }, item.name.charAt(0).toUpperCase())), /*#__PURE__*/React.createElement(View, {
    style: styles.nameContainer
  }, /*#__PURE__*/React.createElement(Text, {
    style: styles.nameText
  }, item.name)), /*#__PURE__*/React.createElement(Text, {
    style: styles.symbolText
  }, item.symbol), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-forward",
    size: 20,
    color: "#999"
  })), []);
  return /*#__PURE__*/React.createElement(View, {
    style: styles.container
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.header
  }, /*#__PURE__*/React.createElement(TouchableOpacity, {
    onPress: navigation.goBack,
    style: styles.backButton
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-back",
    size: 24,
    color: "#fff"
  })), /*#__PURE__*/React.createElement(View, {
    style: styles.titleWrapper
  }, /*#__PURE__*/React.createElement(Text, {
    style: styles.title
  }, "List Cryptocurrency"))), /*#__PURE__*/React.createElement(SearchBar, {
    value: search,
    onChangeText: setSearch,
    handleClear: handleClear
  }), filteredData.length === 0 ? /*#__PURE__*/React.createElement(EmptyState, null) : /*#__PURE__*/React.createElement(FlatList, {
    data: filteredData,
    keyExtractor: item => item.id,
    contentContainerStyle: styles.listContainer,
    renderItem: renderItem
  }));
};
export default CurrencyList;
//# sourceMappingURL=index.js.map