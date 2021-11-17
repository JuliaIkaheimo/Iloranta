import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from '../styles/parkingScreenStyle';
import MenuButton from '../components/menuButton';

//Information about the different accommodation places
import accommodation from '../data/accommodation.json';


export default function ParkingScreen() {
    const [selectedAccommodation, setSelectedAccommodation] = useState("Päärakennus");
    const [parking, setParking] = useState("Voit jättää autosi Punaisen talon taakse tai kesällä Sylvia Reginan alapuolelle.");

    useEffect(() => {
       let findParkingLot = accommodation.find(place => place.title == selectedAccommodation);
       setParking(findParkingLot.parkingLot);
       console.log(parking);
      },[selectedAccommodation]);

    return(
        <>
            <MenuButton />
            <View style={styles.container}>
                <Image style={styles.image} resizeMode="contain" source={require('../assets/parking.png')}/>
                <Text style={styles.h1}>Valitse majoituspaikkasi:</Text>
                <View style={styles.pickerContainer}>
                    <Picker style={styles.pickerText}
                        selectedValue={selectedAccommodation}
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
                    <Text style={styles.h2}>Sinulle sopiva parkkipaikka on:</Text>
                    <Text style={styles.text}>{parking}</Text>
                </View>
                
                

            </View>
        </>
    );
}