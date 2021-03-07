import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';

// routes
interface IInfoParams {
  petId: number;
}

export type StackRouteList = {
  Home: undefined;
  Info: IInfoParams;
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

// screen
export type HomeNavigationProp = StackNavigationProp<StackRouteList, 'Home'>;
export type InfoNavigationProp = StackNavigationProp<StackRouteList, 'Info'>;
export type StackProps = HomeNavigationProp | InfoNavigationProp;
