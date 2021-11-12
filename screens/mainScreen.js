import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../styles/mainScreenStyle';
import MenuButton from '../components/menuButton';

export default function MainScreen() {
    return(
        <>
        <MenuButton />
        <View style={styles.container}>
            <Image source={require('../assets/logo.png')}/>
            <Text>Main page</Text>
        </View>
        </>
    );
}