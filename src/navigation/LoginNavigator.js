import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import * as Screens from '../screens';

const Stack = createStackNavigator();

const LoginNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Login" component={Screens.Login} />
  </Stack.Navigator>
);

export default LoginNavigator;
