import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      height: '88%',
      alignItems: 'center',
      backgroundColor: "white"
    },
    mapStyle: {
        width: '100%',
        height: '100%'
    },
    titleText: {
      fontSize: 18,
      color: "black"
    },
    distance:{
      fontWeight:"bold",
      color: "black"
    },
    calloutBubble: {
      flex: 1,
      position: 'relative',
      padding: 5,
    },
    pickerContainer: {
      width: "70%",
      height: "8%",
      justifyContent:"center",
      borderColor: "#2F2F2F",
      borderWidth: 1,
      margin: 5,
    },
    pickerText: {
      color: "#2F2F2F",
    },
    mapContainer: {
      width: "100%",
      height: "90%",
      alignItems: "center"
  },
 });