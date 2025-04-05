import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './style';

const EmptyState = () => {
  return (
    <View style={styles.container}>
      <Icon name="search-outline" size={60} color="#B4BBD0" />
      <Text style={styles.title}>No results found</Text>
      <Text style={styles.subtitle}>Check the spelling or try other keywords</Text>
    </View>
  );
};


export { EmptyState };
