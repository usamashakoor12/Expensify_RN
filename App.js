import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppNavigation from './Navigation/appNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {store} from './redux/Store';


//  add comment
const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;


