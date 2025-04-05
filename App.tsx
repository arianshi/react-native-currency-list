import React from 'react';

import CurrencyListModule from './src/index';
import { fiatList } from './db/index';

function App(): React.JSX.Element {
  return <CurrencyListModule metadata={{ data: fiatList}}/>;

}

export default App;
