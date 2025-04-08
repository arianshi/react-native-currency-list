import { useMemo } from 'react';
import { CurrencyInfo } from '../type';

export const useCurrencySearch = (
  currencies: CurrencyInfo[],
  search: string
): CurrencyInfo[] => {
  return useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {return currencies;}

    return currencies.filter(({ name, symbol }) => {
      const nameLower = name.toLowerCase();
      const symbolLower = symbol.toLowerCase();

      return (
        nameLower.startsWith(query) ||
        nameLower.includes(' ' + query) ||
        symbolLower.startsWith(query)
      );
    });
  }, [currencies, search]);
};
