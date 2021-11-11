import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

//Import the screens
import MainScreen from './screens/mainScreen';
import MapScreen from './screens/mapScreen';
import ContactScreen from './screens/contactScreen';
//import CustomNavigation from './components/customNavigation';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
    <NavigationContainer>
      <Drawer.Navigator >
      <Drawer.Screen name = "etusivu1" options={{
          focused: false,
          activeBackgroundColor:"white",
          drawerActiveTintColor:"white",
          drawerLabelStyle:{color: "transparent"},
          drawerIcon: () => (
          <Image resizeMode="contain" style={{width:"100%"}} source={require('./assets/logo.png')}/>) }}>
          {props => <MainScreen {...props} />}
        </Drawer.Screen>
       
      
        <Drawer.Screen name = "Etusivu" options={{
          headerShown: false,
          drawerActiveTintColor:"#FBA00E",
          drawerLabelStyle:{fontWeight: "bold", fontSize: 17},
          drawerIcon: () => (
          <Image style={{width:30, height:30}} source={require('./assets/star.png')}/>) }}>
          {props => <MainScreen {...props} />}
        </Drawer.Screen>

        <Drawer.Screen name = "Kartta" options={{ 
          
          drawerActiveTintColor:"#FBA00E",
          drawerLabelStyle:{fontWeight: "bold", fontSize: 17},
          drawerIcon: () => (
          <Image style={{width:30, height:30}} source={require('./assets/star.png')}/>) }}>
          {props => <MapScreen {...props} />}
        </Drawer.Screen>

        <Drawer.Screen name = "Yhteystiedot" options={{ 
          headerShown: false,
          drawerActiveTintColor:"#FBA00E",
          drawerLabelStyle:{fontWeight: "bold", fontSize: 17},
          drawerIcon: () => (
          <Image style={{width:30, height:30}} source={require('./assets/star.png')}/>) }}>
          {props => <ContactScreen {...props} />}
        </Drawer.Screen> 

      </Drawer.Navigator>
    </NavigationContainer>
    <StatusBar style="auto" />
    </>
  );
}
