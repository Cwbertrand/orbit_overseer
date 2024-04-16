import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from './src/screens/home/Home.screen';
import LobbyScreen from './src/screens/lobby/Lobby.screen';
import HistoryScreen from "./src/screens/history/History.screen";
import { Provider } from 'react-redux';
import store from './src/app/redux/store/store';

export default function App() {
  const Stack = createNativeStackNavigator();
  
  return (
    <Provider store={store}>
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
    </Provider>
  );
}