import React, {useState, useEffect} from 'react';
import {Alert, View, Text} from 'react-native';
import { getDistance } from 'geolib';
import MenuButton from '../components/menuButton';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import styles from '../styles/mapScreenStyle';
import locations from '../data/locations';

export default function MapScreen() {
  const [status, setStatus] = useState();
  const [distance, setDistance] = useState();

  useEffect(() => {
    //Ask user's permission for locationing
    (async () => {
      let { status } = await  Location.requestForegroundPermissionsAsync();
     if (status !== 'granted') {
        setStatus('Permission to access location was denied');
        return;
     } else {
       console.log('Access granted!!')
       setStatus(status)
     }
    
    })();
  }, []);

  

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
                  /*Calculate the distance between the user's location and the clicked marker*/
                  onPress={() => setDistance(getDistance({latitude: marker.coordinates.latitude,
                    longitude: marker.coordinates.longitude},{ latitude: 61.203146, longitude: 24.625857 }))}
                >
                  <Callout style={{flex: 1, position: 'relative', padding: 5}}>
                      <View>
                        <Text style={styles.titleText}>{marker.title}</Text>
                        <Text>{marker.description}</Text>
                        <Text style={styles.distance}>Etäisyys: {distance} m</Text>
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