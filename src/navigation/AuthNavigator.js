import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import * as Screens from '../screens';

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator screenOptions={{
    headerStatusBarHeight: 0,
  }}
  >
    <Stack.Screen name="Login" component={Screens.Login} />
  </Stack.Navigator>
);

export default AuthNavigator;
