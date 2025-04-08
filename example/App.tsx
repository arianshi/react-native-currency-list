import React from 'react';

import CurrencyListModule from 'react-native-currency-list';
import { cryptoList } from './db/index';

function App(): React.JSX.Element {
  return <CurrencyListModule metadata={{ data: cryptoList}}/>;
}

export default App;
