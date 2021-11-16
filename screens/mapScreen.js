import React, { useState, useEffect } from 'react';
import {Alert, View, Text} from 'react-native';

import MenuButton from '../components/menuButton';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import styles from '../styles/mapScreenStyle';
import locations from '../data/locations';

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

  return (
    <>
    <MenuButton />
      <View style={styles.container}>           
          <MapView style={styles.mapStyle} 
            provider={PROVIDER_GOOGLE}
            mapType="satellite"
            annotations={locations}
            showsUserLocation={true}
            initialRegion={{ latitude: 61.202759, longitude: 24.626741, latitudeDelta: 0, longitudeDelta: 0.004 }}
          >
            {
              locations.map(marker => (
                <Marker
                  coordinate={{
                    latitude: marker.coordinates.latitude,
                    longitude: marker.coordinates.longitude,
                  }}
                  title = {marker.title}
                  description = {marker.description}
                  key = {marker.title}
                >
                  <Callout style={{flex: 1, position: 'relative', padding: 5}}>
                      <View>
                        <Text style={styles.titleText}>{marker.title}</Text>
                        <Text>{marker.description}</Text>
                      </View>
                  </Callout>
                </Marker>
              ))
            }
          </MapView>
      </View>
    </>
  );
}