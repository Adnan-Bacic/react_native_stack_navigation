import * as AsyncStorage from '../../AsyncStorage/AsyncStorage';
import * as actions from '../actions';
import store from '../configureStore';

export const finishLogin = async () => {
  await AsyncStorage.setItem('loginDone', 'true');
  store.dispatch(actions.navigator.setLoggedInDoneTrue());
};

export const finishOnboarding = async () => {
  await AsyncStorage.setItem('onboardingDone', 'true');
  store.dispatch(actions.navigator.setOnboardingDone());
};

export const clearAsyncStorageAndRedux = async () => {
  await AsyncStorage.clearStorage();
  store.dispatch(actions.navigator.setAuthStatusNull());
};
