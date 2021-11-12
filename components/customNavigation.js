import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from '../styles/customNavigationStyle';
import SocialMediaButtons from '../components/socialMediaButtons';
import {DrawerItemList} from '@react-navigation/drawer';
  
  export default function CustomNavigation(props) {

    return (
      <>
        <Image style={styles.logoStyle} resizeMode="contain" source={require('../assets/logo.png')}/>
        {/* DrawerItemList contains the menu items e.g. map, contact information... Those can be found in App.js */}
        <DrawerItemList {...props} />
        <View style={styles.socialMediaContainer}>
          <Text style={styles.textStyle}>Seuraa meitä somessa:</Text>
          <SocialMediaButtons height={30} width={30} margin={12} width2={40} height2={40}/>
        </View>
    </>
    );
  }