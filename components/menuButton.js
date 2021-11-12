import React from 'react';
import {View, TouchableHighlight, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ContactScreen() {
     //For opening the menu
     const navigation = useNavigation();

     function toggleMenu() {
         navigation.toggleDrawer();
     }
    return(
        <View style={{paddingTop:50, paddingLeft: 30, paddingBottom: 20, backgroundColor: "white"}}>
            <TouchableHighlight underlayColor="white" onPress={toggleMenu}>
                <Image source={require('../assets/menuButton.png')} style={{ width: 35, height: 35 }} />
            </TouchableHighlight>
        </View>
    );
}