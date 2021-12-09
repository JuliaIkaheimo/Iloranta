import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';

import styles from '../styles/parkingScreenStyle';
import MenuButton from '../components/menuButton';

import MapView, {PROVIDER_GOOGLE, Marker, Circle} from 'react-native-maps';
import {Picker} from '@react-native-picker/picker';
import {useTranslation} from 'react-i18next';

//Information about different accommodation places
import accommodation from '../data/accommodation.json';


export default function ParkingScreen() {

    const {t, i18n} = useTranslation();

    //For getting the coordinates of the selected accommodation
    const [selectedAccommodation, setSelectedAccommodation] = useState("Päärakennus");

    //For storing the parking lot instruction of the selected accommodation
    const [parking, setParking] = useState("Voit jättää autosi Punaisen talon taakse tai kesällä Sylvia Reginan alapuolelle.");

    //Coordinates of the selected accommodation
    const [coordinates, setCoordinates] = useState({latitude: 61.20300, longitude: 24.62669});

    //Coordinates for the circle that shows where to turn when arriving to Iloranta
    const [circleCoordinates, setCircleCoordinates] = useState({latitude: 61.202702, longitude: 24.626945});

    useEffect(() => {
        //Find the selected accommodation place from accommodation.json and set the right parking lot to states
        let findParkingLot = accommodation.find(place => place.title == selectedAccommodation);
        console.log(findParkingLot);
        setCoordinates(findParkingLot.coordinates);
        setParking(findParkingLot.parkingLot);
       
      },[selectedAccommodation]);

    return(
        <>
            <MenuButton />
            <View style={styles.container}>
                <View style={styles.textContainer}>
                <View accessible={true}>   
                    <Text style={styles.h1}>{t('arrivaltoiloranta')}</Text>
                    <Text style={styles.text}>{t('arrivalinstructions')}</Text>
                    <Text style={[styles.text, {marginTop: 6}]}></Text>
                </View>
                </View>
                <View style={styles.pickerContainer}>
                    <Picker style={styles.pickerText}
                        selectedValue={selectedAccommodation}
                        itemStyle={{color: "blue", fontSize:17 }}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedAccommodation(itemValue)
                        }>
                            { 
                                //Map through all the accommodation places and show them in the picker
                                accommodation.map(item => 
                                    <Picker.Item key={item.title} label={item.title} value={item.title} />
                                )
                            }
                            
                    </Picker>
                </View>
                <View style={styles.parkingLotContainer}>
                    <View style={styles.parkingLotContainerTexts}>
                    <View accessible={true}>
                        <Text style={styles.h2}>{t('mostsuitableparking')}</Text>
                        <Text style={styles.text}>{parking}</Text>
                    </View>
                    </View>
                    <MapView style={styles.mapStyle}
                        provider={PROVIDER_GOOGLE}
                        mapType="satellite"
                        showsUserLocation={false}
                        initialRegion={{ latitude: 61.202370, longitude: 24.626336, latitudeDelta: 0, longitudeDelta: 0.005 }}>
                        <Marker coordinate={coordinates} title = {"Parkkipaikka"} description = {selectedAccommodation + " parkkipaikka"}>
                            <Image  source={require('../assets/parkingSign.png')}
                            style={{width: 30, height: 30}}
                            resizeMode="contain"/>
                        </Marker>
                        
                        <Circle
                        center = {circleCoordinates}
                        radius={6}
                        strokeWidth={2}
                        strokeColor="#FCBC52"
                        fillColor="rgba(252, 188, 82, 0.56)"
                        />
                        <Marker coordinate={circleCoordinates}>
                            <Image  source={require('../assets/location.png')}
                            style={{width: 31, height: 31}}
                            resizeMode="contain"/>
                        </Marker>
                    </MapView>
                </View>
            </View>
        </>
    );
}