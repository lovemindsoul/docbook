import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Import screens
import HomeScreen from './src/screens/Home/HomeScreen';
import TarotScreen from './src/screens/Tarot/TarotScreen';
import NumerologyScreen from './src/screens/Numerology/NumerologyScreen';
import AstrologyScreen from './src/screens/Astrology/AstrologyScreen';
import AngelNumbersScreen from './src/screens/AngelNumbers/AngelNumbersScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tab.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#4B0082',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarActiveTintColor: '#4B0082',
          tabBarInactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ title: 'Mystic Portal' }}
        />
        <Tab.Screen 
          name="Tarot" 
          component={TarotScreen}
          options={{ title: 'Tarot' }}
        />
        <Tab.Screen 
          name="Numerology" 
          component={NumerologyScreen}
          options={{ title: 'Numerology' }}
        />
        <Tab.Screen 
          name="Astrology" 
          component={AstrologyScreen}
          options={{ title: 'Astrology' }}
        />
        <Tab.Screen 
          name="AngelNumbers" 
          component={AngelNumbersScreen}
          options={{ title: 'Angel Numbers' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
