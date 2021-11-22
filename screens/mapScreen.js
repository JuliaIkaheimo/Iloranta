import React, {useState, useEffect} from 'react';
import { getDistance } from 'geolib';
import {Alert, View, Text, Image} from 'react-native';
import { Picker } from '@react-native-picker/picker';

import MenuButton from '../components/menuButton';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import * as Location from 'expo-location';

import styles from '../styles/mapScreenStyle';

import accommodations from '../data/accommodations';
import activities from '../data/activities';
import buildings from '../data/buildings';
import nature from '../data/nature';
import parking from '../data/parking';

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

  const getMarkers = () => {
    switch (currentCategory) {
      case 'activities': return chosenActivities;
      case 'accommodations': return chosenAccommodations;
      case 'nature': return chosenNature;
      case 'buildings': return chosenBuildings;
      case 'parking': return chosenParking;;
      default: return [...chosenActivities, ...chosenAccommodations, ...chosenNature, ...chosenBuildings, ...chosenParking];
    }
  }

  const onCategoryClick = category => {
    setCurrentCategory(category);
  }

  const chosenActivities = activities.map((activities) => (
    <Marker
      pinColor="#2978b5"
      coordinate={{
        latitude: activities.coordinates.latitude,
        longitude: activities.coordinates.longitude,
      }}
      title = {activities.title}
      description = {activities.description}
      key = {activities.index}
    >
      <Callout style={styles.calloutBubble}>
          <View>
            {/*<Text><Image source={{uri: activities.image}} style={{width: 300, height: 200}} resizeMode="cover" /></Text>*/}
            <Text style={styles.titleText}>{activities.title}</Text>
            <Text>{activities.description}</Text>
          </View>
      </Callout>
    </Marker>
  ));

  const chosenAccommodations = accommodations.map((accommodations) => (
    <Marker
      pinColor="#b02877"
      coordinate={{
        latitude: accommodations.coordinates.latitude,
        longitude: accommodations.coordinates.longitude,
      }}
      title = {accommodations.title}
      description = {accommodations.description}
      key = {accommodations.index}
      >
      <Callout style={styles.calloutBubble}>
          <View>
            {/*<Text><Image source={{uri: accommodations.image}} style={{width: 300, height: 200}} resizeMode="cover" /></Text>*/}
            <Text style={styles.titleText}>{accommodations.title}</Text>
            <Text>{accommodations.description}</Text>
          </View>
      </Callout>
    </Marker>
  ));

  const chosenNature = nature.map((nature) => (
    <Marker
      pinColor="#268029"
      coordinate={{
        latitude: nature.coordinates.latitude,
        longitude: nature.coordinates.longitude,
      }}
      title = {nature.title}
      description = {nature.description}
      key = {nature.index}
      >
      <Callout style={styles.calloutBubble}>
          <View>
            {/*<Text><Image source={{uri: nature.image}} style={{width: 300, height: 200}} resizeMode="cover" /></Text>*/}
            <Text style={styles.titleText}>{nature.title}</Text>
            <Text>{nature.description}</Text>
          </View>
      </Callout>
    </Marker>
  ));

  const chosenBuildings = buildings.map((buildings) => (
    <Marker
      pinColor="#475748"
      coordinate={{
        latitude: buildings.coordinates.latitude,
        longitude: buildings.coordinates.longitude,
      }}
      title = {buildings.title}
      description = {buildings.description}
      key = {buildings.index}
      >
      <Callout style={styles.calloutBubble}>
          <View>
            {/*<Text><Image source={{uri: buildings.image}} style={{width: 300, height: 200}} resizeMode="cover" /></Text>*/}
            <Text style={styles.titleText}>{buildings.title}</Text>
            <Text>{buildings.description}</Text>
          </View>
      </Callout>
    </Marker>
  ));

  const chosenParking = parking.map((parking) => (
    <Marker
      pinColor="#a31d1d"
      coordinate={{
        latitude: parking.coordinates.latitude,
        longitude: parking.coordinates.longitude,
      }}
      title = {parking.title}
      description = {parking.description}
      key = {parking.index}
      >
      <Callout style={styles.calloutBubble}>
          <View>
            {/*<Text><Image source={{uri: parking.image}} style={{width: 300, height: 200}} resizeMode="cover" /></Text>*/}
            <Text style={styles.titleText}>{parking.title}</Text>
            <Text>{parking.description}</Text>
          </View>
      </Callout>
    </Marker>
  ));

  return (
    <>
    <MenuButton />
      <View style={styles.container}>
        <View style={styles.pickerContainer}>
          <Picker style={styles.pickerText} selectedValue={currentCategory} onValueChange={(itemValue) => setCurrentCategory(itemValue)}>
            <Picker.Item key="kaikki" label="Kaikki kohteet" value="All" />
            <Picker.Item key="ulkoliikunta" label="Ulkoilu ja liikunta" value="activities" />
            <Picker.Item key="majoitus" label="Majoitus" value="accommodations" />
            <Picker.Item key="luontokohteet" label="Luontokohteet" value="nature" />
            <Picker.Item key="paarakennukset" label="Päärakennukset" value="buildings" />
            <Picker.Item key="parkkipaikat" label="Parkkipaikat" value="parking" />
          </Picker>
        </View>
        <View style={styles.mapContainer}>
          <MapView style={styles.mapStyle} 
            provider={PROVIDER_GOOGLE}
            mapType="satellite"
            showsUserLocation={true}
            initialRegion={{ latitude: 61.202759, longitude: 24.626741, latitudeDelta: 0, longitudeDelta: 0.004 }}
          >
            {getMarkers()}
          </MapView>
        </View>
      </View>
    </>
  );
}