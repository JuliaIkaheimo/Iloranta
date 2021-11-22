import React from 'react';
import {View, TouchableHighlight, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/componentsStyle';

export default function MenuButton() {
     //For opening the menu
     const navigation = useNavigation();

     //Open the menu on button click
     function toggleMenu() {
         navigation.toggleDrawer();
     }
    return(
        <View style={styles.menuContainer}>
            <TouchableHighlight underlayColor="white" onPress={toggleMenu}>
                <Image source={require('../assets/menuButton.png')} style={styles.menuImage} />
            </TouchableHighlight>
        </View>
    );
}