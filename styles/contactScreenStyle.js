import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    //Containers
    container: {
      height: '100%',
      alignItems: "center",
      backgroundColor: "white"
    },
    contactContainer: {
        alignItems: "center",
        height: "50%"
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
        fontSize: 22,
        color: "#2F2F2F",
        fontWeight: "bold",
        margin: 10,
        textAlign: "center"
    },
    text: {
        fontSize: 18,
        color: "#2F2F2F",
        marginBottom: 5
    },

    //For the icon on top of the page
    image:{
        height: "18%"
    },

    //Call us -button
    button: {
        backgroundColor: "#FCBC52",
        alignItems: "center",
        padding: 10,
        borderRadius: 10,
        marginTop: 25
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20
    }
  });