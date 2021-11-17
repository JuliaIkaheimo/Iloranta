import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    //Containers
    container: {
      height: '100%',
      alignItems: "center",
      backgroundColor: "white"
    },
    pickerContainer: {
        width: "70%",
        borderColor: "#2F2F2F",
        borderWidth: 1
    },
    parkingLotContainer: {
        width: "100%",
        height: "40%",
        padding: 20,
        alignItems: "center"
    },



//KARTTA
    mapStyle: {
        width: "100%",
        height: "90%",
        marginTop:10
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
        textAlign: "center",
        marginBottom: "3%"
    },
    pickerText: {
        color: "#2F2F2F",
    },
    text: {
        fontSize: 17,
        color: "#2F2F2F"
    },

    //For the icon on top of the page
    image:{
        height: "18%"
    },
  });