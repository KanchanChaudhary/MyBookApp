import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import AppStackNavigator from './StackNavigator';
import BorrowedBooksScreen from '../screens/BorrowedScreen';

const Tab = createBottomTabNavigator();

const AppTabs = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarStyle: { backgroundColor: '#fafafa' },
      tabBarActiveTintColor: '#ff6347',
    }}
  >
    <Tab.Screen
      name="Books"
      component={AppStackNavigator}
      options={{
        tabBarLabel: 'Books',
        tabBarIcon: ({ color, size }) => <Ionicons name="book" size={size} color={color} />,
      }}
    />
    <Tab.Screen
      name="BorrowedBooks"
      component={BorrowedBooksScreen}
      options={{
        tabBarLabel: 'Borrowed',
        tabBarIcon: ({ color, size }) => <Ionicons name="bookmarks" size={size} color={color} />,
      }}
    />
  </Tab.Navigator>
);

export default AppTabs;
