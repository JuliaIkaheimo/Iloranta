// import React from 'react';
// import {View, Image, Text} from 'react-native';
// import styles from '../styles/contactScreenStyle';
// import SocialMediaButtons from '../components/socialMediaButtons';
// import {DrawerContentScrollView, SafeAreaView} from '@react-navigation/drawer';
  
//   export default function CustomDrawerContent(props) {
//     return (
//       <DrawerContentScrollView {...props}>
//           <SafeAreaView>
//           <Image style={styles.image} resizeMode="contain" source={require('../assets/conversation.png')}/>
//           </SafeAreaView>
//         {/* <Drawer.Screen name = "etusivu" options={{
//           focused: false,
//           headerShown: false,
//           activeBackgroundColor:"white",
//           drawerActiveTintColor:"white",
//           drawerLabelStyle:{color: "transparent"},
//           drawerIcon: () => (
//           <Image resizeMode="contain" style={{width:"100%"}} source={require('../assets/logo.png')}/>) }}>
//           {props => <MainScreen {...props} />}
//         </Drawer.Screen>
      
//         <Drawer.Screen name = "Etusivu" options={{
//           headerShown: false,
//           drawerActiveTintColor:"#FBA00E",
//           drawerLabelStyle:{fontWeight: "bold", fontSize: 17},
//           drawerIcon: () => (
//           <Image style={{width:30, height:30}} source={require('../assets/star.png')}/>) }}>
//           {props => <MainScreen {...props} />}
//         </Drawer.Screen>

//         <Drawer.Screen name = "Kartta" options={{ 
//           headerShown: false,
//           drawerActiveTintColor:"#FBA00E",
//           drawerLabelStyle:{fontWeight: "bold", fontSize: 17},
//           drawerIcon: () => (
//           <Image style={{width:30, height:30}} source={require('../assets/star.png')}/>) }}>
//           {props => <MapScreen {...props} />}
//         </Drawer.Screen>

//         <Drawer.Screen name = "Yhteystiedot" options={{ 
//           headerShown: false,
//           drawerActiveTintColor:"#FBA00E",
//           drawerLabelStyle:{fontWeight: "bold", fontSize: 17},
//           drawerIcon: () => (
//           <Image style={{width:30, height:30}} source={require('../assets/star.png')}/>) }}>
//           {props => <ContactScreen {...props} />}
//         </Drawer.Screen> */}'
        
//       </DrawerContentScrollView>
//     // <SafeAreaView style={{flex: 1}}>
//     //   <DrawerContentScrollView {...props}>
//     //     <DrawerItemList {...props} />
//     //     <DrawerItem
//     //       label="Visit Us"
//     //       onPress={() => Linking.openURL('https://aboutreact.com/')}
//     //     />
//     //     <View style={styles.customItem}>
//     //       <Text
//     //         onPress={() => {
//     //           Linking.openURL('https://aboutreact.com/');
//     //         }}>
//     //         Rate Us
//     //       </Text>
//     //     </View>
//     //   </DrawerContentScrollView>
//     //   <Text
//     //     style={{
//     //       fontSize: 16,
//     //       textAlign: 'center',
//     //       color: 'grey'
//     //     }}>
//     //     www.aboutreact.com
//     //   </Text>
//     // </SafeAreaView>
//     );
//   }