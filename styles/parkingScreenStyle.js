import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    //Containers
    container: {
      height: '100%',
      alignItems: "center",
      backgroundColor: "white"
    },
    pickerContainer: {
        width: "70%"
    },
    parkingLotContainer: {
        backgroundColor:"lightblue",
        width: "100%",
        padding: 20,
        alignItems: "center"
    },

    //Texts
    h1: {
        fontSize: 25,
        color: "#FCBC52",
        fontWeight: "bold",
        marginTop: 45,
        marginBottom: 25,
    },
    h2: {
        fontSize: 20,
        color: "#2F2F2F",
        fontWeight: "bold",
        textAlign: "center"
    },
    pickerText: {
        color: "#2F2F2F"
    },
    text: {
        fontSize: 16,
        color: "#2F2F2F"
    },
    
    //For the icon on top of the page
    image:{
        height: "18%"
    },
  });