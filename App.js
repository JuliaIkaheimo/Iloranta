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
import EventScreen from './screens/eventScreen';
import CustomNavigation from './components/customNavigation';

import {useTranslation} from 'react-i18next';

const Drawer = createDrawerNavigator();

export default function App() {

  const {t, i18n} = useTranslation();

  return (
    <>
      <NavigationContainer>
        {/* CustomNavigation contains the custom outfit of the menu. See customNavigation.js */}
        <Drawer.Navigator drawerContent={(props) => <CustomNavigation {...props} />}>

          <Drawer.Screen name = {t('frontpage')} options={{
            headerShown: false,
            drawerActiveTintColor:"#FBA00E",
            drawerLabelStyle:{fontWeight: "bold", fontSize: 17},
            drawerIcon: () => (
            <Image style={{width:25, height:25}} source={require('./assets/star.png')}/>) }}>
            {props => <MainScreen {...props} />}
          </Drawer.Screen>
          
          <Drawer.Screen name = {t('map')} options={{ 
            headerShown: false,
            drawerActiveTintColor:"#FBA00E",
            drawerLabelStyle:{fontWeight: "bold", fontSize: 17},
            drawerIcon: () => (
            <Image style={{width:25, height:25}} source={require('./assets/star.png')}/>) }}>
            {props => <MapScreen {...props} />}
          </Drawer.Screen>

          <Drawer.Screen name = {t('events')} options={{ 
            headerShown: false,
            drawerActiveTintColor:"#FBA00E",
            drawerLabelStyle:{fontWeight: "bold", fontSize: 17},
            drawerIcon: () => (
            <Image style={{width:25, height:25}} source={require('./assets/star.png')}/>) }}>
            {props => <EventScreen {...props} />}
          </Drawer.Screen>

          <Drawer.Screen name = {t('arrival')} options={{
            headerShown: false,
            drawerActiveTintColor:"#FBA00E",
            drawerLabelStyle:{fontWeight: "bold", fontSize: 17},
            drawerIcon: () => (
            <Image style={{width:25, height:25}} source={require('./assets/star.png')}/>) }}>
            {props => <ParkingScreen {...props} />}
          </Drawer.Screen>

          <Drawer.Screen name = {t('contact')} options={{ 
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
