import { useContext } from 'react';
import { CurrencyListContext } from '../contexts';
import { PROVIDER_NOT_ADDED } from '../utils/constants';
import type { ICurrencyListContextProps } from '../type';

const useCurrencyListContext = (): ICurrencyListContextProps => {
  const context = useContext(CurrencyListContext);

  if (!context) {
    throw new Error(PROVIDER_NOT_ADDED);
  }

  return context;
};

export default useCurrencyListContext;
