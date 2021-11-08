import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

//Import the screens
import MainScreen from './screens/mainScreen';
import MapScreen from './screens/mapScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Etusivu">

        <Drawer.Screen name="Etusivu" options={{ headerShown: false }}>
          {props => <MainScreen {...props} />}
        </Drawer.Screen>

        <Drawer.Screen name="Kartta" options={{ headerShown: false }}>
          {props => <MapScreen {...props} />}
        </Drawer.Screen>

      </Drawer.Navigator>
    </NavigationContainer>
    <StatusBar style="auto" />
    </>
  );
}
