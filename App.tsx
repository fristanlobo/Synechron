/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import MainStackNavigator from './src/screens/MainStackNavigator';
import { Provider } from 'react-redux';
import store from './Redux/store/store';
function App(): JSX.Element {
  return (
    <Provider store={store}>
      <MainStackNavigator />
    </Provider>
  );
}

export default App;
