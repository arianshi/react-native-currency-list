import {
  CommonActions,
  NavigationContainerRef,
} from '@react-navigation/native';

export type NavigationRef = NavigationContainerRef<any> | null;

export let _navigator: NavigationRef;

const setTopLevelNavigator: (navigatorRef: NavigationRef) => void = (
  navigatorRef
) => {
  _navigator = navigatorRef;
};

const navigate: (option: {
  name: string;
  key?: string;
  params?: any;
}) => void = (option) => {
  _navigator?.dispatch(CommonActions.navigate(option));
};

const goBack = () => {
  _navigator?.dispatch(CommonActions.goBack());
};

export default {
  navigate,
  setTopLevelNavigator,
  goBack,
};
