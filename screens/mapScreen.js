import React, { useState, useEffect } from 'react';
import {Alert, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import MenuButton from '../components/menuButton';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import styles from '../styles/mapScreenStyle';

export default function MapScreen() {

//none,standard, satellite,hybrid,terrain (Android only),mutedStandard (iOS 11.0+ only)
const [mapType, setMapType]=useState('satellite');
  
  const verifyPermissions= async ()=>{
    // const result=await Permissions.askAsync(Permissions.LOCATION);
    const foreGround = await Location.requestForegroundPermissionsAsync();
    const backGround = await Location.requestBackgroundPermissionsAsync();
    if (foreGround.status!=='granted' && backGround.status!=='granted'){
        Alert.alert('No permissions to use location', 
            'You need to grant LOCATION perrmissions to use this app',
            [{text:'Next time!'}]
        );
        return false;
    }
    else{
        return true;
    }
  }    

  //Test location
  let location = {latitude: 61.202759, longitude: 24.626128};

  return (
    <>
      <MenuButton />
      <View style={styles.container}>
        <View>            
            <MapView style={styles.mapStyle} 
              provider="google"
              mapType={mapType}
              initialRegion={{ latitude: 61.202759, longitude: 24.626741, latitudeDelta: 0, longitudeDelta: 0.004 }}>
              <Marker
                coordinate={location}
                title="Iloranta"
                description="Iloranta is here"/> 
            </MapView>
          
        </View>
      </View>
    </>
  );
}