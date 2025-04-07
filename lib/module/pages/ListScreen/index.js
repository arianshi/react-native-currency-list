import React, { useCallback, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import useCurrencyListContext from '../../hooks/useCurrencyListContext';
import Icon from 'react-native-vector-icons/Ionicons';
import { EmptyState } from '../../components/EmptyState';
import { SearchBar } from '../../components/SearchBar/index';
import { useCurrencySearch } from '../../hooks/useCurrencySearch';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
export default function CurrencyList() {
  const navigation = useNavigation();
  const {
    metadata: {
      data
    }
  } = useCurrencyListContext();
  const [search, setSearch] = useState('');
  const filtered = useCurrencySearch(data, search);
  const handleClear = useCallback(() => {
    setSearch('');
  }, []);
  return /*#__PURE__*/React.createElement(View, {
    style: styles.container
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.header
  }, /*#__PURE__*/React.createElement(TouchableOpacity, {
    onPress: () => navigation.goBack(),
    style: styles.backButton
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-back",
    size: 24,
    color: "#fff"
  })), /*#__PURE__*/React.createElement(View, {
    style: styles.titleWrapper
  }, /*#__PURE__*/React.createElement(Text, {
    style: styles.title
  }, 'List Cryptocurrency'))), /*#__PURE__*/React.createElement(SearchBar, {
    value: search,
    onChangeText: setSearch,
    handleClear: handleClear
  }), filtered.length === 0 ? /*#__PURE__*/React.createElement(EmptyState, null) : /*#__PURE__*/React.createElement(FlatList, {
    data: filtered,
    keyExtractor: item => item.id,
    contentContainerStyle: styles.listContainer,
    renderItem: ({
      item
    }) => /*#__PURE__*/React.createElement(TouchableOpacity, {
      style: styles.itemContainer,
      onPress: () => console.log('onPress')
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
    }))
  }));
}
//# sourceMappingURL=index.js.map