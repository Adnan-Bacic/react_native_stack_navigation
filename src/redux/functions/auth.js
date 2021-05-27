import * as stackNavigation from './stackNavigation';

export const loginUser = async () => {
  // any logic you have to login user goes here

  // backend should return some info about the user
  const user = {
    onboardingDone: false,
  };

  await stackNavigation.finishLogin();

  // then use the info from backend to skip certain stacks if needed
  if (user.onboardingDone) {
    await stackNavigation.finishOnboarding();
  }
};

export const finishOnboarding = async () => {
  // any logic you need here

  // if any stack should only be shown once, send info to backend that this stack is completed

  await stackNavigation.finishOnboarding();
};

export const logoutUser = async () => {
  // any logout logic here

  await stackNavigation.clearAsyncStorageAndRedux();
};
