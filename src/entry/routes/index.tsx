import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import routesMap from './routes-map';
import * as Types from './types';

const Stack = createStackNavigator<Types.StackRouteList>();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {routesMap.map((route) => (
          <Stack.Screen
            key={route.key}
            name={route.name}
            component={route.component}
            options={{title: route.title}}
            initialParams={route.initialParams}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
