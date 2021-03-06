import * as Types from './types';

import Home from '../../app/pages/Home';
import Info from '../../app/pages/Info';

const routesMap: Types.RouteMap[] = [
  {
    key: 'home',
    name: 'Home',
    title: 'Welcome',
    component: Home,
    initialParams: undefined,
  },
  {
    key: 'info',
    name: 'Info',
    title: 'More information',
    component: Info,
    initialParams: {petId: ''},
  },
];

export default routesMap;
