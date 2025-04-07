import { NavigationContainerRef } from '@react-navigation/native';
export type NavigationRef = NavigationContainerRef<any> | null;
export declare let _navigator: NavigationRef;
declare const _default: {
    navigate: (option: {
        name: string;
        key?: string | undefined;
        params?: any;
    }) => void;
    setTopLevelNavigator: (navigatorRef: NavigationRef) => void;
    goBack: () => void;
};
export default _default;
