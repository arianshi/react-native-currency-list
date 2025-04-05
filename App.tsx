import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import CurrencyListModule from './src/index';

function App(): React.JSX.Element {
  return <SafeAreaView style={{ flex: 1, backgroundColor: 'blue' }}>
  <CurrencyListModule metadata={{ data: []}}/>
</SafeAreaView>;

}

export default App;
