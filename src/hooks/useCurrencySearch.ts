import { useMemo } from 'react';
import { CurrencyInfo } from '../types/index';

export const useCurrencySearch = (currencies: CurrencyInfo[], search: string) => {
	return useMemo(() => {
	const q = search.toLowerCase();
	return currencies.filter((item) => {
	const name = item.name.toLowerCase();
	const symbol = item.symbol.toLowerCase();
	return (
		name.startsWith(q) ||
		name.includes(' ' + q) ||
		symbol.startsWith(q)
	);
	});
	}, [currencies, search]);
  };
