import { combineReducers } from 'redux';
import * as reducers from './reducers';
import * as types from './types';

const appReducer = combineReducers({
  navigator: reducers.navigatorReducer,
});

const rootReducer = (state, action) => {
  if (action.type === types.SET_AUTH_STATUS_NULL) {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export default rootReducer;
