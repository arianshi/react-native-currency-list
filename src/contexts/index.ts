import { Context, createContext } from 'react';
import { ICurrencyListContextProps } from '../types';

const CurrencyListContext: Context<ICurrencyListContextProps> =
  createContext<ICurrencyListContextProps>({} as ICurrencyListContextProps);

const CurrencyListProvider = CurrencyListContext.Provider;

export { CurrencyListContext, CurrencyListProvider };
export type { ICurrencyListContextProps };
