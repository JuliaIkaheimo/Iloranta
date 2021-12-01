import React from 'react';
import {View, Text, TouchableHighlight, Image} from 'react-native';
import styles from '../styles/contactScreenStyle';
import SocialMediaButtons from '../components/socialMediaButtons';
import MenuButton from '../components/menuButton';
import * as Linking from 'expo-linking';

export default function ContactScreen() {

    return(
        <>
            <MenuButton />
            <View style={styles.container}>
                <Image style={styles.image} resizeMode="contain" source={require('../assets/conversation.png')}/>
                <View style={styles.contactContainer}>
                    <Text style={styles.h1}>Onko sinulla kysyttävää?</Text>
                    <Text style={styles.h2}>Asiakaspalvelu:</Text>
                    <Text style={styles.text}>Myynti@iloranta.fi</Text>
                    <Text style={styles.text}>+358 50343 7770</Text>
                    <Text style={[styles.text, {marginTop: 8}]}>Rukkoilantie 129</Text>
                    <Text style={styles.text}>14700 Hauho</Text>
                    <TouchableHighlight style={styles.button} underlayColor="#F9A602" onPress={() => Linking.openURL('tel:+358503437770')}>
                        <Text style={styles.buttonText}>Soita meille tästä</Text>
                    </TouchableHighlight>
                </View>
                <SocialMediaButtons height={42} width={42} margin={15} width2={55} height2={55} fontSize={18}/>
            </View>
        </>
    );
}