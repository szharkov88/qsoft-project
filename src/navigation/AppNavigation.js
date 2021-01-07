import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainScreen from '../screens/MainScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

const Tab = createBottomTabNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="MainScreen" component={MainScreen} />
                <Tab.Screen name="FavoritesScreen" component={FavoritesScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
