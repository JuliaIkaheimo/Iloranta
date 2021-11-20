import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import { getDistance } from 'geolib';
import MenuButton from '../components/menuButton';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import * as Location from 'expo-location';

import styles from '../styles/mapScreenStyle';
import locations from '../data/locations';

export default function MapScreen() {
  const [status, setStatus] = useState();
  const [userLocation, setUserLocation] = useState({latitude: 61.202785, longitude: 24.626975});

  useEffect(() => {
    //Ask user's permission for locationing
    (async () => {
      let { status } = await  Location.requestForegroundPermissionsAsync();
     if (status !== 'granted') {
        setStatus('Permission to access location was denied');
     } else {
       console.log('Access granted!!')
       setStatus(status)

      //Get the current location and set it to state
      let location = await Location.getCurrentPositionAsync({});
      setUserLocation({latitude:location.coords.latitude, longitude:location.coords.longitude});
      console.log("sijainti: LAT "+location.coords.latitude+" LON "+location.coords.longitude);
     }
    })();
  },[]);


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
                        {/* Calculate the distance between the user's location and the clicked marker */}
                        <Text style={styles.distance}>Etäisyys: {getDistance({latitude: marker.coordinates.latitude,
                    longitude: marker.coordinates.longitude},{latitude: userLocation.latitude, longitude: userLocation.longitude})} m</Text>
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