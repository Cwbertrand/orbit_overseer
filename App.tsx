import React, { Fragment } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/home/Home.screen';
import LobbyScreen from './src/screens/lobby/Lobby.screen';
import HistoryScreen from "./src/screens/history/History.screen";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
      <Fragment>
        <NavigationContainer>
          <StatusBar hidden />
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
                name="/"
                component={HomeScreen}
                options={{animation: 'default'}}
            />
            <Stack.Screen
                name="Lobby"
                component={LobbyScreen}
                options={{animation: 'slide_from_right'}}
            />
            <Stack.Screen
                name="History"
                component={HistoryScreen}
                options={{animation: 'slide_from_right'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});