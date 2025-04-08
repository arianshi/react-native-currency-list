import React from 'react';
import CurrencyListNavContainer from './navigations/index';
import { CurrencyListProvider } from './contexts';
import type {
  ICurrencyListContextProps,
} from './type';

const EnhancedNavContainer = CurrencyListNavContainer;

type CurrencyListModuleProps = ICurrencyListContextProps;

const CurrencyListModule: React.FC<CurrencyListModuleProps> = (
  contextValue: CurrencyListModuleProps
) => {
  return (
    <CurrencyListProvider value={contextValue}>
      <EnhancedNavContainer/>
    </CurrencyListProvider>
  );
};

CurrencyListModule.displayName = 'CurrencyListModule';


export default CurrencyListModule;
