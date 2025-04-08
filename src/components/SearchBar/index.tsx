import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

type SearchBarProps = {
  value: string;
  onChangeText: (text: string) => void;
  handleClear: () => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ value, onChangeText, handleClear }) => {
  const showClear = value.length > 0;

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
        accessibilityLabel="Search Input"
      />

      {showClear && (
        <TouchableOpacity onPress={handleClear} accessibilityLabel="Clear Search">
          <Icon name="close-circle" size={20} color="#B4BBD0" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export { SearchBar };
