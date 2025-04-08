export declare const ROUTES: {
    readonly LIST_SCREEN: "ListScreen";
};
export type RouteKey = keyof typeof ROUTES;
export type RouteValue = (typeof ROUTES)[RouteKey];
export declare const PROVIDER_NOT_ADDED = "useCurrencyListContext cannot be used without CurrencyListProvider";
