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
       //Save the selected accommodation place to state and search the correct 
       //parking lot from accommodation.json and set it to state also
       let findParkingLot = accommodation.find(place => place.title == selectedAccommodation);
       setParking(findParkingLot.parkingLot);
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
                    <Image style={{width: "100%", height: "80%", marginTop: 10}} resizeMode="contain" source={require('../assets/paarakennus1.png')}/>
                </View>
                
                

            </View>
        </>
    );
}