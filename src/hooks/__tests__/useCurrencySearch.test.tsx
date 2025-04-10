import { renderHook } from '@testing-library/react-hooks';
import { useCurrencySearch } from '../useCurrencySearch';
import { CurrencyInfo } from '../../type';

const mockCurrencies: CurrencyInfo[] = [
  { id: '1', name: 'US Dollar', symbol: 'USD' },
  { id: '2', name: 'Euro', symbol: 'EUR' },
  { id: '3', name: 'British Pound', symbol: 'GBP' },
  { id: '4', name: 'Japanese Yen', symbol: 'JPY' },
];

describe('useCurrencySearch', () => {
  it('returns all currencies when search is empty', () => {
    const { result } = renderHook(() =>
      useCurrencySearch(mockCurrencies, '')
    );

    expect(result.current).toEqual(mockCurrencies);
  });

  it('filters by name start match (case-insensitive)', () => {
    const { result } = renderHook(() =>
      useCurrencySearch(mockCurrencies, 'brit')
    );

    expect(result.current).toEqual([
      { id: '3', name: 'British Pound', symbol: 'GBP' },
    ]);
  });

  it('filters by name space match', () => {
    const { result } = renderHook(() =>
      useCurrencySearch(mockCurrencies, 'pound')
    );

    expect(result.current).toEqual([
      { id: '3', name: 'British Pound', symbol: 'GBP' },
    ]);
  });

  it('filters by symbol start match', () => {
    const { result } = renderHook(() =>
      useCurrencySearch(mockCurrencies, 'us')
    );

    expect(result.current).toEqual([
      { id: '1', name: 'US Dollar', symbol: 'USD' },
    ]);
  });

  it('returns empty array if no match', () => {
    const { result } = renderHook(() =>
      useCurrencySearch(mockCurrencies, 'zzz')
    );

    expect(result.current).toEqual([]);
  });

  it('trims and lowers search before matching', () => {
    const { result } = renderHook(() =>
      useCurrencySearch(mockCurrencies, '   EUR ')
    );

    expect(result.current).toEqual([
      { id: '2', name: 'Euro', symbol: 'EUR' },
    ]);
  });
});
