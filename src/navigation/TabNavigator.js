import React from 'react';
import {Dimensions} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import {FavoritesStackNavigator, MainStackNavigator} from './StackNavigator';
import {THEME} from '../theme';
import {getFocusedRouteNameFromRoute} from '@react-navigation/core';

const setTabBarVisible = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route);
  const hideOnScreens = ['Post'];
  if (hideOnScreens.indexOf(routeName) > -1) {
    return false;
  }
  return true;
};

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Liked') {
            iconName = 'heart';
          }

          return <Feather name={iconName} size={33} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#5533EA',
        inactiveTintColor: '#BDBDBD',
        style: {
          width: '100%',
          paddingTop: 2,
          backgroundColor: THEME.BC_COLOR,
          paddingHorizontal: Dimensions.get('window').width * 0.3,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={MainStackNavigator}
        options={({route}) => ({
          tabBarVisible: setTabBarVisible(route, 0),
          title: '',
        })}
      />
      <Tab.Screen
        name="Liked"
        component={FavoritesStackNavigator}
        options={({route}) => ({
          tabBarVisible: setTabBarVisible(route, 0),
          title: '',
        })}
      />
    </Tab.Navigator>
  );
}
