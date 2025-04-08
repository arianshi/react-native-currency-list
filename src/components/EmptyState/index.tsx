import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './style';

interface EmptyStateProps {
  iconName?: string;
  title?: string;
  subtitle?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  iconName = 'search-outline',
  title = 'No results found',
  subtitle = 'Check the spelling or try other keywords',
}) => {
  return (
    <View style={styles.container}>
      <Icon name={iconName} size={60} color="#B4BBD0" />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

export { EmptyState };
