import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import CurrencyListModule from 'react-native-currency-list';
import { cryptoList } from './db/index';

function App(): React.JSX.Element {
  return <NavigationContainer>
         <CurrencyListModule metadata={{ data: cryptoList}}/>
       </NavigationContainer>;


}

export default App;
