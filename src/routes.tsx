import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

import Home from './pages/Home';
import Character from './components/Character';

const Stack = createSharedElementStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Character"
          component={Character}
          sharedElements={route => {
            const {character} = route.params;
            return [`ram.${character.id}.photo`];
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
