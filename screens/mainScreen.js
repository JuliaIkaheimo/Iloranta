import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from '../styles/mainScreenStyle';
import MenuButton from '../components/menuButton';
import '../components/i18n';
import {useTranslation} from 'react-i18next';

export default function MainScreen() {

    const {t, i18n} = useTranslation();
        
    const changeLanguage = value => {

      i18n
        .changeLanguage(value)
        .then(() => console.log("Done"))
        .catch(err => console.log(err));
    };
    
    return(
        <>
        <MenuButton />
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image source={require('../assets/logo.png')}/>
            </View>
            <View style={styles.textContainer} accessible={true}>
              <Text style={styles.text}>
              {t('hello')}
              </Text>
            </View>
            <Text style={{paddingBottom:20, color: '#696969', fontSize:16}}>Suomeksi  -  På svenska  -  In English  -  Auf Deutsch</Text>
            <View style={styles.languageContainer}>
              <Pressable onPress={() => changeLanguage('fi')}>
                <Image style={styles.languageImage} source={require('../assets/fi.png')}/>
              </Pressable>
              <Pressable onPress={() => changeLanguage('se')}>
                <Image style={styles.languageImage} source={require('../assets/se.png')}/>
              </Pressable>
              <Pressable onPress={() => changeLanguage('en')}>
                <Image style={styles.languageImage} source={require('../assets/uk.png')}/>
              </Pressable>
              <Pressable onPress={() => changeLanguage('de')}>
                <Image style={styles.languageImage} source={require('../assets/de.png')}/>
              </Pressable>
            </View>
        </View>
        </>
    );
}