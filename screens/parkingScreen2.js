import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from '../styles/parkingScreenStyle';
import MenuButton from '../components/menuButton';

import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

//Information about the different accommodation places
import accommodation from '../data/accommodation.json';


export default function ParkingScreen2() {
    const [selectedAccommodation, setSelectedAccommodation] = useState("Päärakennus");
    const [parking, setParking] = useState("Voit jättää autosi Punaisen talon taakse tai kesällä Sylvia Reginan alapuolelle.");
    const [coordinates, setCoordinates] = useState({latitude: 61.20300, longitude: 24.62669});
    console.log(coordinates);

    useEffect(() => {
        //Find the selected accommodation place from accommodation.json and set the right parking lot to states
       let findParkingLot = accommodation.find(place => place.title == selectedAccommodation);
       setParking(findParkingLot.parkingLot);
       setCoordinates(findParkingLot.coordinates);
       console.log(parking);
      },[selectedAccommodation]);

    return(
        <>
            <MenuButton />
            <View style={styles.container}>
                <Image style={styles.image} resizeMode="contain" source={require('../assets/parking.png')}/>
                <View style={styles.textContainer}>
                    <Text style={styles.h1}>Pysäköiminen Ilorannassa</Text>
                    <Text style={styles.text}>Etsi valikosta majoituspaikkasi ja katso kartalta sopivin pysäköintipaikka.</Text>
                </View>
                <View style={styles.pickerContainer}>
                    <Picker style={styles.pickerText}
                        selectedValue={selectedAccommodation}
                        itemStyle={{color: "blue", fontSize:17 }}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedAccommodation(itemValue)
                        }>
                            { 
                                accommodation.map(item => 
                                    <Picker.Item key={item.title} label={item.title} value={item.title} />
                                )
                            }
                            
                    </Picker>
                </View>
                <View style={styles.parkingLotContainer}>
                    <View style={styles.parkingLotContainerTexts}>
                        <Text style={styles.h2}>Sinulle sopivin parkkipaikka on:</Text>
                        <Text style={styles.text}>{parking}</Text>
                    </View>
                    <MapView style={styles.mapStyle} 
                        provider={PROVIDER_GOOGLE}
                        mapType="satellite"
                        showsUserLocation={false}
                        initialRegion={{ latitude: 61.202519, longitude: 24.626357, latitudeDelta: 0, longitudeDelta: 0.006 }}
                    >
                        <Marker
                            coordinate={coordinates}
                            title = {"Parkkipaikka"}
                            description = {selectedAccommodation + " parkkipaikka"}
                            key = {parking}
                            ></Marker>
                    </MapView>
                </View>
                
                

            </View>
        </>
    );
}