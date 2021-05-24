import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoginNavigator from './LoginNavigator';
// import OnboardingNavigator from './OnboardingNavigator';
// import MainNavigator from './MainNavigator';

const Navigator = () => (
  <>
    <NavigationContainer>
      <LoginNavigator />
    </NavigationContainer>
  </>
);

export default Navigator;
