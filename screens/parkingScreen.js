import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from '../styles/parkingScreenStyle';
import MenuButton from '../components/menuButton';


export default function ParkingScreen() {
    const [selectedAccommodation, setSelectedAccommodation] = useState();

    return(
        <>
            <MenuButton />
            <View style={styles.container}>
                <Text style={styles.h1}>Etsi tästä parkkipaikka:</Text>
                <View style={styles.pickerContainer}>
                <Picker style={styles.h1}
                    selectedValue={selectedAccommodation}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedAccommodation(itemValue)
                    }>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
                </View>
                

            </View>
        </>
    );
}