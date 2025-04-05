import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';


const SearchBar = ({ value, onChangeText, handleClear }: {
  value: string;
  onChangeText: (text: string) => void;
  handleClear: () => void
}) => {
  return (
    <View style={styles.container}>
      <Icon name="search" size={20} color="#B4BBD0" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor="rgb(180,187,208)"
        value={value}
        onChangeText={onChangeText}
        returnKeyType="search"
      />
      {value.length > 0 && (
        <TouchableOpacity onPress={handleClear}>
          <Icon name="close-circle" size={20} color="#B4BBD0" style={styles.clearIcon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export  { SearchBar };
