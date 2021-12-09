import React from 'react';
import {View, Image, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/componentsStyle';

export default function MenuButton() {
     //For opening the menu
     const navigation = useNavigation();

    return(
        <View style={styles.menuContainer}>
            {/*Open the menu on button click*/}
            <Pressable onPress={() => navigation.toggleDrawer()}>
                <Image source={require('../assets/menuButton.png')} style={styles.menuImage} />
            </Pressable>
        </View>
    );
}