import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    //Containers
    container: {
      height: '100%',
      alignItems: "center",
      backgroundColor: "white"
    },
    contactContainer: {
        alignItems: "center"
    },
    iconContainer: {
        flexDirection: "row",
        alignItems: "center"
    },

    //Texts
    h1: {
        fontSize: 25,
        color: "#FCBC52",
        fontWeight: "bold",
        marginTop: 20,
        marginBottom: 20,
    },
    h2: {
        fontSize: 20,
        color: "#FCBC52",
        fontWeight: "bold",
        margin: 10,
        textAlign: "center"
    },
    text: {
        fontSize: 18,
        color: "#36454F",
        margin: 5
    },

    //For the icons
    image:{
        height: "30%"
    },
    iconImage: {
        height: 48,
        width: 48,
        margin: 15
    },

    //Call us -button
    button: {
        backgroundColor: "#FCBC52",
        alignItems: "center",
        padding: 10,
        borderRadius: 10,
        marginTop: 20
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20
    }
  });