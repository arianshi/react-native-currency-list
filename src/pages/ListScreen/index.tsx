import React, { useCallback, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import useCurrencyListContext from '../../hooks/useCurrencyListContext';
import Icon from 'react-native-vector-icons/Ionicons';
import { EmptyState } from '../../components/EmptyState';
import { SearchBar } from '../../components/SearchBar';
import { useCurrencySearch } from '../../hooks/useCurrencySearch';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const CurrencyList: React.FC = () => {
  const navigation = useNavigation();

  const {
    metadata: { data },
  } = useCurrencyListContext();

  const [search, setSearch] = useState('');
  const filteredData = useCurrencySearch(data, search);

  const handleClear = useCallback(() => {
    setSearch('');
  }, []);

  const renderItem = useCallback(
    ({ item }: { item: typeof data[number] }) => (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => console.log('onPress')}
      >
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {item.name.charAt(0).toUpperCase()}
          </Text>
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>{item.name}</Text>
        </View>
        <Text style={styles.symbolText}>{item.symbol}</Text>
        <Icon name="chevron-forward" size={20} color="#999" />
      </TouchableOpacity>
    ),
    []
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={navigation.goBack}
          style={styles.backButton}
        >
          <Icon name="chevron-back" size={24} color="#fff" />
        </TouchableOpacity>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>List Cryptocurrency</Text>
        </View>
      </View>

      <SearchBar
        value={search}
        onChangeText={setSearch}
        handleClear={handleClear}
      />

      {filteredData.length === 0 ? (
        <EmptyState />
      ) : (
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

export default CurrencyList;
