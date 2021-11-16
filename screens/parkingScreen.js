import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from '../styles/parkingScreenStyle';
import MenuButton from '../components/menuButton';
import accommodation from '../data/accommodation.json';


export default function ParkingScreen() {
    const [selectedAccommodation, setSelectedAccommodation] = useState();

    return(
        <>
            <MenuButton />
            <View style={styles.container}>
            <Image style={styles.image} resizeMode="contain" source={require('../assets/parking.png')}/>
                <Text style={styles.h1}>Etsi tästä parkkipaikka:</Text>
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
                

            </View>
        </>
    );
}