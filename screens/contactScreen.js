import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import styles from '../styles/contactScreenStyle';

export default function ContactScreen() {
    function onPress(){
        console.log("testi");
    }
    return(
        <View style={styles.container}>
            <Text style={styles.h1}>Onko sinulla kysymyksiä?</Text>
            <View style={styles.contactContainer}>
                <Text style={styles.h2}>Asiakaspalvelu:</Text>
                <Text style={styles.text}>Virpi Juutinen</Text>
                <Text style={styles.text}>virpi@iloranta.fi</Text>
                <TouchableHighlight style={styles.button} underlayColor="#DDDDDD" onPress={onPress}>
                    <Text>Soita meille</Text>
                </TouchableHighlight>
            </View>
        </View>
    );
}