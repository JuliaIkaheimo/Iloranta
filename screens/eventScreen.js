import React from 'react';
import {View, Text, FlatList, Pressable} from 'react-native';
import styles from '../styles/eventScreenStyle';
import MenuButton from '../components/menuButton';
import * as Linking from 'expo-linking';
import {useTranslation} from 'react-i18next';

import events from '../data/events';

export default function EventScreen() {

    const {t, i18n} = useTranslation();

    const renderItem = ({ item }) => (
        <Item 
            title={item.title}
            startday={item.startday}
            endday={item.endday}
            link={item.link}
        />
    );

    const Item = ({ title, startday, endday, link }) => (
        <View style={styles.item}>
            <Text style={styles.title}>
                {title}
            </Text>
            <Text style={styles.dateText}>
                @ {startday} - {endday}
            </Text>
            <Pressable style={styles.linkButton}
             accessible={true}
             accessibilityLabel="Lue lisää"
             accessibilityHint="Vie Ilorannan nettisivujen kalenteriin"
             onPress={() => Linking.openURL(link)}>
                <Text style={styles.buttonText}>
                    Lue Lisää
                </Text>
            </Pressable>
        </View>
    )

    return(
        <>
            <MenuButton />
            <View style={styles.container}>
                <View style={styles.eventContainer}>
                <View accessible={true}>
                    <Text style={styles.h1}>{t('eventsiniloranta')}</Text>
                    <Text style={styles.text}>{t('eventlist')}</Text>
                    <FlatList
                        data={events}
                        style={styles.itemContainer}
                        renderItem={renderItem}
                        keyExtractor={item => item.title}
                    />
                </View>    
                </View>
            </View>
        </>
    );
}