jest.mock('react-native-vector-icons/Ionicons', () => {
	const React = require('react');
	const { Text } = require('react-native');
	return () => <Text>MockIonIcon</Text>;
  });
