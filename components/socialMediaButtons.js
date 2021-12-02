import React from 'react';
import {View, TouchableHighlight, Image, Text} from 'react-native';
import styles from '../styles/componentsStyle';
import * as Linking from 'expo-linking';

import {useTranslation} from 'react-i18next';

export default function SocialMediaButtons(props) {

    const {t, i18n} = useTranslation();

    function openSocialMediaSite(site){
        //Open the social media site depending on the parameter value
        if (site == "facebook"){
            Linking.openURL('https://www.facebook.com/ilorantaoy/');
        } 
        else if (site == "instagram"){
            Linking.openURL('https://www.instagram.com/ilorantafinland/?hl=en');
        } 
        else if (site == "youtube"){
            Linking.openURL('https://www.youtube.com/user/iloranta');
        } 
        else if (site == "tripadvisor"){
            Linking.openURL('https://www.tripadvisor.com/Hotel_Review-g798739-d3217536-Reviews-Iloranta_Countryside_Resort-Hauho_Tavastia_Proper.html');
        }
    }
    return(
        <View style={styles.container}>
            <Text style={{marginTop: 35, color: "#2F2F2F", fontSize: props.fontSize, fontWeight: "bold"}}>{t('socialmedia')}</Text>
            <View style={styles.iconContainer}>
                <TouchableHighlight underlayColor="white" onPress={() => {openSocialMediaSite("facebook")}}>
                    <Image style={{width: props.width, height: props.height, margin: props.margin}} resizeMode="contain" source={require('../assets/facebook.png')}/>
                </TouchableHighlight>
                <TouchableHighlight underlayColor="white" onPress={() => {openSocialMediaSite("instagram")}}>
                    <Image style={{width: props.width, height: props.height, margin: props.margin}} resizeMode="contain" source={require('../assets/instagram.png')}/>
                </TouchableHighlight>
                <TouchableHighlight underlayColor="white" onPress={() => {openSocialMediaSite("youtube")}}>
                    <Image style={{width: props.width2, height: props.height2, margin: props.margin}} resizeMode="contain" source={require('../assets/youtube.png')}/>
                </TouchableHighlight>
                <TouchableHighlight underlayColor="white" onPress={() => {openSocialMediaSite("tripadvisor")}}>
                    <Image style={{width: props.width2, height: props.height2, margin: props.margin}} resizeMode="contain" source={require('../assets/tripadvisor.png')}/>
                </TouchableHighlight>
            </View>
        </View>
    );
}