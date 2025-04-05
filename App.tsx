import React from 'react';

import CurrencyListModule from './src/index';
import { cryptoList } from './db/index';

function App(): React.JSX.Element {
  return <CurrencyListModule metadata={{ data: cryptoList}}/>;

}

export default App;
