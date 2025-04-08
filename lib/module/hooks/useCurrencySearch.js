import { useMemo } from 'react';
export const useCurrencySearch = (currencies, search) => {
  return useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) {
      return currencies;
    }
    return currencies.filter(({
      name,
      symbol
    }) => {
      const nameLower = name.toLowerCase();
      const symbolLower = symbol.toLowerCase();
      return nameLower.startsWith(query) || nameLower.includes(' ' + query) || symbolLower.startsWith(query);
    });
  }, [currencies, search]);
};
//# sourceMappingURL=useCurrencySearch.js.map