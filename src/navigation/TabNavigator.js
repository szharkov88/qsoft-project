import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
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
        tabBarIcon: ({color}) => {
          let iconName;
          const iconsList = {
            Home: 'home',
            Liked: 'heart',
          };
          if (route.name === 'Home') {
            iconName = iconsList.Home;
          } else if (route.name === 'Liked') {
            iconName = iconsList.Liked;
          }

          return <Feather name={iconName} size={33} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: THEME.ACTIVE_NAVIGATION_COLOR,
        inactiveTintColor: THEME.INACTIVE_NAVIGATION_COLOR,
        style: styles.tabBar,
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

const styles = StyleSheet.create({
  tabBar: {
    width: '100%',
    paddingTop: 2,
    backgroundColor: THEME.BC_COLOR,
    paddingHorizontal: Dimensions.get('window').width * 0.3,
  },
});
