export const ROUTES = {
  LIST_SCREEN: 'ListScreen',
} as const;

export type RouteKey = keyof typeof ROUTES;         // "LIST_SCREEN"
export type RouteValue = (typeof ROUTES)[RouteKey]; // "ListScreen"

export const PROVIDER_NOT_ADDED =
  'useCurrencyListContext cannot be used without CurrencyListProvider';
