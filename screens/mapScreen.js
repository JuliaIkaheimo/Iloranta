import React, { useState, useEffect } from 'react';
import {Alert, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
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
            'You need to grant LOCATION permissions to use this app',
            [{text:'Ok'}]
        );
        return false;
    }
    else{
        return true;
    }
  }    

  //Fetching coordinates to main building
  const mainBuilding = {
    latitude: 61.20300, longitude: 24.62669
  };

  return (
    <View style={styles.container}>
      <View>            
          <MapView style={styles.mapStyle} 
            provider="google"
            mapType={mapType}
            initialRegion={{ latitude: 61.202759, longitude: 24.626741, latitudeDelta: 0, longitudeDelta: 0.004 }}>
            <Marker
              style={styles.markerStyle}
              coordinate={mainBuilding}
              title="Päärakennus"
              description="Ilorannan sydän. Ruokasalit, keittiö, toimisto ja huoneet 1-4. Omenatarhasiipeen läpikulku."/> 
           
          </MapView>
        
      </View>
    </View>
  );
}