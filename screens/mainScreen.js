import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../styles/mainScreenStyle';
import MenuButton from '../components/menuButton';

export default function MainScreen() {
    
    return(
        <>
        <MenuButton />
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image source={require('../assets/logo.png')}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    <Text>Iloranta on levähdyspaikka nykypäivän kiireen keskellä. Ystävällinen hymy, hämäläinen maaseutu, rauhoittava luonto, liikunta ja rentoutuminen odottavat lomavieraita, koululaisia, yrityksiä ja maailmanmatkaajia.{"\n"}</Text>
                    <Text>{"\n"}Tule sellaisena kuin olet.{"\n"}Tervetuloa perheeseen!</Text>
                </Text>
            </View>
            <Text style={{paddingBottom:20, color: '#696969', fontSize:16}}>Suomeksi - På svenska - In English - Auf Deutsch</Text>
            <View style={styles.languageContainer}>
                <Image style={styles.languageImage} source={require('../assets/fi.png')}/>
                <Image style={styles.languageImage} source={require('../assets/se.png')}/>
                <Image style={styles.languageImage} source={require('../assets/uk.png')}/>
                <Image style={styles.languageImage} source={require('../assets/de.png')}/>
            </View>
        </View>
        </>
    );
}