import React from 'react';
import {StackNavigationProp, StackScreenProps} from '@react-navigation/stack';

// routes
interface IInfoParams {
  petId: number;
  headerBackgroundColor: string;
}

export type StackRouteList = {
  Home: undefined;
  Info: {petId: number; headerBackgroundColor: string};
};

type Routes = 'Home' | 'Info';
type Params = undefined | IInfoParams;

export interface IRouteMap {
  key: string;
  name: Routes;
  title?: string;
  headerShown: boolean;
  initialParams?: Params;
  component: React.FunctionComponent<any>;
}

// navigation
export type HomeNavigationProp = StackNavigationProp<StackRouteList, 'Home'>;
export type InfoNavigationProp = StackNavigationProp<StackRouteList, 'Info'>;
export type StackProps = HomeNavigationProp | InfoNavigationProp;

// screen
export type InfoScreenProps = StackScreenProps<StackRouteList, 'Info'>;
