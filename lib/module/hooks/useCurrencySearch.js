import { useMemo } from 'react';
export const useCurrencySearch = (currencies, search) => {
  return useMemo(() => {
    const q = search.toLowerCase();
    return currencies.filter(item => {
      const name = item.name.toLowerCase();
      const symbol = item.symbol.toLowerCase();
      return name.startsWith(q) || name.includes(' ' + q) || symbol.startsWith(q);
    });
  }, [currencies, search]);
};
//# sourceMappingURL=useCurrencySearch.js.map