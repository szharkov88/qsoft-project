import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import {FavoritesStackNavigator, MainStackNavigator} from './StackNavigator';
import {THEME} from "../theme";
import {Dimensions} from "react-native";

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

          return <Feather name={iconName} size={35} color={color} />;
        }
      })}
      tabBarOptions={{
        activeTintColor: '#5533EA',
        inactiveTintColor: '#BDBDBD',
          style: {
              width: '100%',
              paddingBottom: 3,
              backgroundColor: THEME.BC_COLOR,
              paddingHorizontal: 120
          }
      }}
    >
      <Tab.Screen
        name="Home"
        component={MainStackNavigator}
        options={{
          title: '',
        }}
      />
      <Tab.Screen
        name="Liked"
        component={FavoritesStackNavigator}
        options={{
          title: '',
        }}
      />
    </Tab.Navigator>
  );
}