import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import useCurrencyListContext from '../../hooks/useCurrencyListContext';

import styles from './styles';
import { SearchBar } from '../../components/SearchBar/index';

export default function CurrencyList() {
  const {
    metadata: { data },
  } = useCurrencyListContext();

  const [search, setSearch] = useState('');


  return (
    <View>
      <SearchBar value={search} onChangeText={setSearch} />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.container}
        renderItem={({ item }) => (
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

          </TouchableOpacity>
        )}
      />
    </View>
  );
}
