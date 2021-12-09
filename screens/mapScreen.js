import React, {useState, useEffect} from 'react';
import {View, Text, Modal, Pressable} from 'react-native';

import { Picker } from '@react-native-picker/picker';
import { getDistance } from 'geolib';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import * as Location from 'expo-location';

import MenuButton from '../components/menuButton';
import ImageComponent from '../components/imageComponent';

import styles from '../styles/mapScreenStyle';

//Import json files that contain information of different places in Iloranta
import accommodations from '../data/accommodations';
import activities from '../data/activities';
import buildings from '../data/buildings';
import nature from '../data/nature';
import parking from '../data/parking';

import {useTranslation} from 'react-i18next';

export default function MapScreen() {

  const {t, i18n} = useTranslation();
  
  //For setting the status of locationing
  const [status, setStatus] = useState();

  //For saving the current user location
  const [userLocation, setUserLocation] = useState({latitude: 61.202785, longitude: 24.626975});

  //For categorizing the different kind of locations
  const [currentCategory, setCurrentCategory] = useState('All');

  //For the modal
  const [modalVisible, setModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState();
  const [modalDescription, setmodalDescription] = useState();
  const [modalDistance, setModalDistance] = useState({});

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
    //Show the markers based on the selected category
    switch (currentCategory) {
      case 'activities': return chosenActivities;
      case 'accommodations': return chosenAccommodations;
      case 'nature': return chosenNature;
      case 'buildings': return chosenBuildings;
      case 'parking': return chosenParking;;
      default: return [...chosenActivities, ...chosenAccommodations, ...chosenNature, ...chosenBuildings, ...chosenParking];
    }
  }

  const chosenActivities = activities.map((activities) => (
    <Marker
      pinColor="#2978b5"
      coordinate={{
        latitude: activities.coordinates.latitude,
        longitude: activities.coordinates.longitude,
      }}
      key = {activities.index}
      onPress={() => {setModalVisible(true), setModalTitle(activities.title), setmodalDescription(activities.description),
        setModalDistance(getDistance({latitude: activities.coordinates.latitude, longitude: activities.coordinates.longitude},
          {latitude: userLocation.latitude, longitude: userLocation.longitude}))}}
    /> 
  ));

  const chosenAccommodations = accommodations.map((accommodations) => (
    <Marker
      pinColor="#b02877"
      coordinate={{
        latitude: accommodations.coordinates.latitude,
        longitude: accommodations.coordinates.longitude,
      }}
      key = {accommodations.index}
      onPress={() => {setModalVisible(true), setModalTitle(accommodations.title), setmodalDescription(accommodations.description),
        setModalDistance(getDistance({latitude: accommodations.coordinates.latitude, longitude: accommodations.coordinates.longitude},
          {latitude: userLocation.latitude, longitude: userLocation.longitude}))}}
      />
  ));

  const chosenNature = nature.map((nature) => (
    <Marker
      pinColor="#268029"
      coordinate={{
        latitude: nature.coordinates.latitude,
        longitude: nature.coordinates.longitude,
      }}
      key = {nature.index}
      onPress={() => {setModalVisible(true), setModalTitle(nature.title), setmodalDescription(nature.description),
        setModalDistance(getDistance({latitude: nature.coordinates.latitude, longitude: nature.coordinates.longitude},
          {latitude: userLocation.latitude, longitude: userLocation.longitude}))}}
      />
  ));

  const chosenBuildings = buildings.map((buildings) => (
    <Marker
      pinColor="#475748"
      coordinate={{
        latitude: buildings.coordinates.latitude,
        longitude: buildings.coordinates.longitude,
      }}
      key = {buildings.index}
      onPress={() => {setModalVisible(true), setModalTitle(buildings.title), setmodalDescription(buildings.description),
        setModalDistance(getDistance({latitude: buildings.coordinates.latitude, longitude: buildings.coordinates.longitude},
          {latitude: userLocation.latitude, longitude: userLocation.longitude}))}}
      />
  ));

  const chosenParking = parking.map((parking) => (
    <Marker
      pinColor="#a31d1d"
      coordinate={{
        latitude: parking.coordinates.latitude,
        longitude: parking.coordinates.longitude,
      }}
      key = {parking.index}
      onPress={() => {setModalVisible(true), setModalTitle(parking.title), setmodalDescription(parking.description),
        setModalDistance(getDistance({latitude: parking.coordinates.latitude, longitude: parking.coordinates.longitude},
          {latitude: userLocation.latitude, longitude: userLocation.longitude}))}}
      />
  ));

  return (
    <>
    <MenuButton />
      <View style={styles.container}>
        <View style={styles.pickerContainer}>
          <Picker style={styles.pickerText} selectedValue={currentCategory} onValueChange={(itemValue) => setCurrentCategory(itemValue)}>
            <Picker.Item key="kaikki" label={t('alldestinations')} value="All" />
            <Picker.Item key="ulkoliikunta" label={t('activitiesandexercise')} value="activities" />
            <Picker.Item key="majoitus" label={t('accommodation')} value="accommodations" />
            <Picker.Item key="luontokohteet" label={t('naturalsites')} value="nature" />
            <Picker.Item key="paarakennukset" label={t('mainbuildings')} value="buildings" />
            <Picker.Item key="parkkipaikat" label={t('parkinglots')} value="parking" />
          </Picker>
        </View>
        <View style={styles.mapContainer}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <ImageComponent title={modalTitle}/>
                <Text style={styles.modalTitle}>{modalTitle}</Text>
                <Text style={styles.modalText}>{modalDescription}</Text>
                <Text style={styles.distance}>{t('distance')}: {modalDistance} m</Text>
                <Pressable
                  style={styles.button}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.buttonTextStyle}>Sulje</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <MapView style={styles.mapStyle} 
            provider={PROVIDER_GOOGLE}
            mapType="satellite"
            showsUserLocation={true}
            initialRegion={{ latitude: 61.202759, longitude: 24.626741, latitudeDelta: 0, longitudeDelta: 0.004 }}>
            {getMarkers()}
          </MapView>
        </View>
      </View>
    </>
  );
}