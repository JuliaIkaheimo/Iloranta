import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    //Containers
    container: {
      height: '100%',
      paddingTop: 10,
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
        marginTop: 45,
        marginBottom: 25,
    },
    h2: {
        fontSize: 20,
        color: "#36454F",
        fontWeight: "bold",
        margin: 10,
        textAlign: "center"
    },
    text: {
        fontSize: 22,
        color: "#36454F",
        margin: 5
    },

    //For the icons
    image:{
        height: "20%"
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
        marginTop: 25
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20
    }
  });