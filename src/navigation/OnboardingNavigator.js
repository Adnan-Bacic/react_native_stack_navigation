import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import * as Screens from '../screens';

const Stack = createStackNavigator();

const OnboardingNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Onboarding" component={Screens.Onboarding} />
  </Stack.Navigator>
);

export default OnboardingNavigator;
