import React from 'react';
import {View, Text, TouchableHighlight, Image} from 'react-native';
import styles from '../styles/contactScreenStyle';
import SocialMediaButtons from '../components/socialMediaButtons';
import MenuButton from '../components/menuButton';
import * as Linking from 'expo-linking';
import { useNavigation } from '@react-navigation/native';

export default function ContactScreen() {
    function callUs(){
        //Open the dialing page in the phone
        Linking.openURL('tel:+358401803386');
    }

   
    return(
        <>
        <MenuButton />
        <View style={styles.container}>
            <Image style={styles.image} resizeMode="contain" source={require('../assets/conversation.png')}/>
            <Text style={styles.h1}>Onko sinulla kysyttävää?</Text>
            <View style={styles.contactContainer}>
                <Text style={styles.text}>Virpi Juutinen</Text>
                <Text style={styles.text}>virpi@iloranta.fi</Text>
                <Text style={styles.text}>+358401803386</Text>
                <TouchableHighlight style={styles.button} underlayColor="#F9A602" onPress={callUs}>
                    <Text style={styles.buttonText}>Soita meille tästä</Text>
                </TouchableHighlight>
                <Text style={{marginTop: 30, marginBottom: 5, color: "#36454F", fontSize: 18, fontWeight: "bold"}}>Seuraa meitä somessa:</Text>
                <SocialMediaButtons />
            </View>
        </View>
        </>
    );
}