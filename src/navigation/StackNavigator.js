import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from '../screens/MainScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import PostScreen from '../screens/PostScreen';
import {THEME} from '../theme';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: THEME.BC_COLOR,
    height: 0,
  },
  headerTintColor: 'transparent',
  headerBackTitle: '',
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{
          title: '',
        }}
      />
      <Stack.Screen
        name="Post"
        component={PostScreen}
        options={{
          title: '',
          headerStyle: {
            height: 0,
          },
        }}
      />
    </Stack.Navigator>
  );
};

const FavoritesStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Favorites"
        component={FavoritesScreen}
        screenOptions={{}}
        options={{
          title: '',
        }}
      />
      <Stack.Screen
        name="Post"
        component={PostScreen}
        options={{
          title: '',
          headerStyle: {
            height: 0,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export {MainStackNavigator, FavoritesStackNavigator};
