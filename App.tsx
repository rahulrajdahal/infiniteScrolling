import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import SplashScreen from 'react-native-splash-screen';
import {HomeScreen} from './src/screens';

const App = () => {
  const queryClient = new QueryClient();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <HomeScreen />
    </QueryClientProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
