import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

import Home from './pages/Home';

const Stack = createSharedElementStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
