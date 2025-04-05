import type { RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  ListScreen: undefined;
};

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

type RouteProps<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>;

export { RootStackParamList, NavigationProps, RouteProps };
