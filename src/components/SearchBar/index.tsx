import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = ({ value, onChangeText }: {
  value: string;
  onChangeText: (text: string) => void;
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor="#888"
        value={value}
        onChangeText={onChangeText}
        returnKeyType="search"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginHorizontal: 16,
    marginTop: 16,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    color: 'white',
    fontSize: 16,
  },
});

export  { SearchBar };
