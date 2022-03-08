import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import {LogBox} from 'react-native';

import {store} from 'app/store';
import PostScreen from 'screens/Posts';

function App() {
  LogBox.ignoreAllLogs();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PostScreen />
    </Provider>
  );
}

export default App;
