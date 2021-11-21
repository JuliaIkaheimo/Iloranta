import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

//Import the screens
import MainScreen from './screens/mainScreen';
import MapScreen from './screens/mapScreen';
import ContactScreen from './screens/contactScreen';
import ParkingScreen from './screens/parkingScreen';
import CustomNavigation from './components/customNavigation';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        {/* CustomNavigation contains the custom outfit of the menu. See customNavigation.js */}
        <Drawer.Navigator drawerContent={(props) => <CustomNavigation {...props} />}>

          <Drawer.Screen name = "Etusivu" options={{
            headerShown: false,
            drawerActiveTintColor:"#FBA00E",
            drawerLabelStyle:{fontWeight: "bold", fontSize: 17},
            drawerIcon: () => (
            <Image style={{width:25, height:25}} source={require('./assets/star.png')}/>) }}>
            {props => <MainScreen {...props} />}
          </Drawer.Screen>

          <Drawer.Screen name = "Kartta" options={{ 
            headerShown: false,
            drawerActiveTintColor:"#FBA00E",
            drawerLabelStyle:{fontWeight: "bold", fontSize: 17},
            drawerIcon: () => (
            <Image style={{width:25, height:25}} source={require('./assets/star.png')}/>) }}>
            {props => <MapScreen {...props} />}
          </Drawer.Screen>

          <Drawer.Screen name = "Pysäköinti" options={{ 
            headerShown: false,
            drawerActiveTintColor:"#FBA00E",
            drawerLabelStyle:{fontWeight: "bold", fontSize: 17},
            drawerIcon: () => (
            <Image style={{width:25, height:25}} source={require('./assets/star.png')}/>) }}>
            {props => <ParkingScreen {...props} />}
          </Drawer.Screen>

          <Drawer.Screen name = "Yhteystiedot" options={{ 
            headerShown: false,
            drawerActiveTintColor:"#FBA00E",
            drawerLabelStyle:{fontWeight: "bold", fontSize: 17},
            drawerIcon: () => (
            <Image style={{width:25, height:25}} source={require('./assets/star.png')}/>) }}>
            {props => <ContactScreen {...props} />}
          </Drawer.Screen>  

        </Drawer.Navigator>
      </NavigationContainer>
      <StatusBar translucent={false} backgroundColor={"white"}/>
    </>
  );
}
