import * as types from '../types';

export const setLoggedInDoneTrue = () => ({
  type: types.SET_LOGIN_DONE,
});

export const setOnboardingDone = () => ({
  type: types.SET_ONBOARDING_DONE,
});

export const setAuthStatusNull = () => ({
  type: types.SET_AUTH_STATUS_NULL,
});
