import React from 'react';
import { AppRegistry, Button } from 'react-native';
import { Provider } from 'react-redux';
import App from './App';
import { name as appName } from './app.json';
import store from './src/redux/configureStore';
import * as AsyncStorage from './src/AsyncStorage/AsyncStorage';

const AppRedux = () => (
  <Provider store={store}>
    <Button
      title="log info"
      onPress={async () => {
        const allKeys = await AsyncStorage.getAllKeys();
        console.log('AsyncStorage:', allKeys);

        console.log('Redux:', store.getState());
      }}
    />
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => AppRedux);
