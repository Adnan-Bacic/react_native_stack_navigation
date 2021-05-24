import * as AsyncStorage from '../../AsyncStorage/AsyncStorage';
// import * as actions from '../actions';
// import store from '../configureStore';

export const finishLogin = async () => {
  await AsyncStorage.setItem('loginDone', 'true');
};

export const finishOnboarding = async () => {
  await AsyncStorage.setItem('onboardingDone', 'true');
};

export const clearAsyncStorageAndRedux = async () => {
  await AsyncStorage.clearStorage();
};
