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
        height: "5%",
        justifyContent:"center",
        borderColor: "#2F2F2F",
        borderWidth: 1
    },
    parkingLotContainer: {
        width: "100%",
        height: "54%",
        padding: 20,
        paddingTop: 10,
        alignItems: "center"
    },
    textContainer: {
        width: "80%",
        height: "29%",
        alignItems: "center",
        justifyContent:"center"
    },
    parkingLotContainerTexts: {
        height: "20%",
        justifyContent: "center"
        
    },

    //Map
    mapStyle: {
        width: "100%",
        height: "75%",
        marginTop: 10
    },

    //Texts
    h1: {
        fontSize: 25,
        color: "#FCBC52",
        fontWeight: "bold",
        marginBottom: 14,
    },
    h2: {
        fontSize: 18,
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