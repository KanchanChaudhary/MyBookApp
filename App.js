import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppTabs from './navigation/TabNavigator';

const App = () => (
  <NavigationContainer>
    <AppTabs />
  </NavigationContainer>
);

export default App;
