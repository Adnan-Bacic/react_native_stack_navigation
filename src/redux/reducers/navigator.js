import * as types from '../types';

const defaultState = {
  authStatus: null,
  isOnboardingDone: null,
};

export const navigatorReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.SET_LOGIN_DONE:
      return {
        ...state,
        authStatus: true,
      };

    case types.SET_ONBOARDING_DONE:
      return {
        ...state,
        isOnboardingDone: true,
      };

      /*
      since this would be the sign out functionality, we reset the store in the rootReducer
    case types.SET_AUTHSTATUS_NULL:
      return {
        ...state,
        authStatus: null,
        isOnboardingDone: null,
      };
      */

    default:
      return {
        ...state,
      };
  }
};
