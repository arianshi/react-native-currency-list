import { createContext } from 'react';
import type { ICurrencyListContextProps } from '../type';

const CurrencyListContext = createContext<ICurrencyListContextProps | undefined>(undefined);

const CurrencyListProvider = CurrencyListContext.Provider;

export { CurrencyListContext, CurrencyListProvider };
export type { ICurrencyListContextProps };
