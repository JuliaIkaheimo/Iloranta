import React from 'react';
import {View, Text, TouchableHighlight, Image} from 'react-native';
import styles from '../styles/contactScreenStyle';

export default function ContactScreen() {
    function onPress(){
        console.log("testi");
    }
    return(
        <View style={styles.container}>
            <View>

            </View>
            <Image style={styles.image} resizeMode="cover" source={require('../assets/contactImage.jpg')}/>
            <Text style={styles.h1}>Onko sinulla kysyttävää?</Text>
            <View style={styles.contactContainer}>
                <Text style={styles.h2}>Asiakaspalvelu:</Text>
                <Text style={styles.text}>Virpi Juutinen</Text>
                <Text style={styles.text}>virpi@iloranta.fi</Text>
                <Text style={styles.text}>+358401803386</Text>
                <TouchableHighlight style={styles.button} underlayColor="#F9A602" onPress={onPress}>
                    <Text style={styles.buttonText}>Soita meille tästä</Text>
                </TouchableHighlight>
            </View>
        </View>
    );
}