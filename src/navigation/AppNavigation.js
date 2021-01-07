import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import MainScreen from '../screens/MainScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Liked') {
              iconName = 'heart';
            }

            return <Feather name={iconName} size={35} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#5533EA',
          inactiveTintColor: '#BDBDBD',
        }}>
        <Tab.Screen name="Home" component={MainScreen} />
        <Tab.Screen name="Liked" component={FavoritesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
