import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import AuthNavigator from './AuthNavigator';
import OnboardingNavigator from './OnboardingNavigator';
import MainNavigator from './MainNavigator';
import * as AsyncStorage from '../AsyncStorage/AsyncStorage';

const Navigator = () => {
  const [stack, setStack] = useState('');

  const stacks = {
    auth: 'auth',
    onboarding: 'onboarding',
    main: 'main',
  };

  const navigator = useSelector((state) => state.navigator);

  useEffect(() => {
    const setNavigator = async () => {
      const loginDone = await AsyncStorage.getItem('loginDone');
      const onboardingDone = await AsyncStorage.getItem('onboardingDone');

      if (loginDone === 'true' && onboardingDone === null) {
        setStack(stacks.onboarding);
      } else if (loginDone === 'true' && onboardingDone === 'true') {
        setStack(stacks.main);
      } else {
        setStack(stacks.auth);
      }
    };

    setNavigator();
  }, [stacks.auth, stacks.main, stacks.onboarding,
    navigator.authStatus, navigator.isOnboardingDone]);

  const CurrentNavigator = () => {
    let nav;

    if (stack === stacks.onboarding) {
      nav = <OnboardingNavigator />;
    } else if (stack === stacks.main) {
      nav = <MainNavigator />;
    } else {
      nav = <AuthNavigator />;
    }

    return nav;
  };

  return (
    <>
      <NavigationContainer>
        <CurrentNavigator />
      </NavigationContainer>
    </>
  );
};

export default Navigator;
