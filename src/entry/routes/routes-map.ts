import * as Types from './types';

import Home from '../../app/pages/Home';
import Info from '../../app/pages/Info';

const routesMap: Types.IRouteMap[] = [
  {
    key: 'home',
    name: 'Home',
    headerShown: false,
    component: Home,
    initialParams: undefined,
  },
  {
    key: 'info',
    name: 'Info',
    title: 'More information',
    headerShown: false,
    component: Info,
    initialParams: {petId: 0},
  },
];

export default routesMap;
