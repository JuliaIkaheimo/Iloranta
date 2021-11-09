import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

//Import the screens
import MainScreen from './screens/mainScreen';
import MapScreen from './screens/mapScreen';
import ContactScreen from './screens/contactScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Etusivu">

        <Drawer.Screen name="Etusivu">
          {props => <MainScreen {...props} />}
        </Drawer.Screen>

        <Drawer.Screen name="Kartta">
          {props => <MapScreen {...props} />}
        </Drawer.Screen>

        <Drawer.Screen name="Yhteydenotto">
          {props => <ContactScreen {...props} />}
        </Drawer.Screen>

      </Drawer.Navigator>
    </NavigationContainer>
    <StatusBar style="auto" />
    </>
  );
}
