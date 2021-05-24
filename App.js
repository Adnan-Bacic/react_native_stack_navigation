import 'react-native-gesture-handler';
import React from 'react';
import {
  StatusBar,
} from 'react-native';
import Navigator from './src/navigation/Navigator';

const App = () => (
  <>
    <StatusBar />
    <Navigator />
  </>
);

export default App;
