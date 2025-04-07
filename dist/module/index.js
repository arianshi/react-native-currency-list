import React from 'react';
import CurrencyListNavContainer from './navigations/index';
import { CurrencyListProvider } from './contexts';
const EnhancedNavContainer = CurrencyListNavContainer;
const CurrencyListModule = contextValue => {
  return /*#__PURE__*/React.createElement(CurrencyListProvider, {
    value: contextValue
  }, /*#__PURE__*/React.createElement(EnhancedNavContainer, null));
};
export default CurrencyListModule;
//# sourceMappingURL=index.js.map