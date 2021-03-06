import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';

// routes
type InfoParams = {
  petId: string;
};

export type StackRouteList = {
  Home: undefined;
  Info: InfoParams;
};

type Routes = 'Home' | 'Info';
type Params = undefined | InfoParams;

export type RouteMap = {
  key: string;
  name: Routes;
  title?: string;
  initialParams?: Params;
  component: React.FunctionComponent<any>;
};

// screen
export type HomeNavigationProp = StackNavigationProp<StackRouteList, 'Home'>;
export type InfoNavigationProp = StackNavigationProp<StackRouteList, 'Info'>;
