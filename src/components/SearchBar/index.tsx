import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles';

const SearchBar = ({ value, onChangeText }: {
  value: string;
  onChangeText: (text: string) => void;
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor="rgb(180,187,208)"
        value={value}
        onChangeText={onChangeText}
        returnKeyType="search"
      />
    </View>
  );
};

export  { SearchBar };
