import React from 'react';
import {Image} from 'react-native';
import styles from '../styles/mapScreenStyle';
import places from '../data/places';

export default function ImageComponent(props) {
    //Find the correct image path from the places.js file depending on the value of props
    let found = places.find(element => element.title == props.title);
    return(
      <Image style={styles.image} resizeMode="cover" source={found.image}/>
    );
}