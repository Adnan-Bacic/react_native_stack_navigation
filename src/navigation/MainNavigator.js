import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import * as Screens from '../screens';

const Stack = createStackNavigator();

const MainNavigator = () => (
  <Stack.Navigator screenOptions={{
    headerStatusBarHeight: 0,
  }}
  >
    <Stack.Screen name="Feed" component={Screens.Feed} />
  </Stack.Navigator>
);

export default MainNavigator;
