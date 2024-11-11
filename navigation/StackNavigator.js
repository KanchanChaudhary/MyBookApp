import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BookListScreen from '../components/BookList';
import BookDetailScreen from '../components/BookDetail';

const Stack = createStackNavigator();

const AppStackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#2d2d2d' }, headerTintColor: '#fff' }}>
    <Stack.Screen name="Books" component={BookListScreen} />
    <Stack.Screen name="BookDetailScreen" component={BookDetailScreen} />
  </Stack.Navigator>
);

export default AppStackNavigator;
