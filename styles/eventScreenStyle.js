import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    //Containers
    container: {
      height: '100%',
      alignItems: "center",
      backgroundColor: "white",
      flex: 1,
    },
    eventContainer: {
        top: -50,
        marginBottom: -50,
        alignItems: "center",
        flex: 1,
    },
    itemContainer:{
        width: "100%",
        flex: 1,
    },

    //Event
    item: {
        margin: 10,
        justifyContent: 'space-around',
        fontSize: 15,
        padding: 10,
        width: '95%',
        textAlign: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#d0d0d0',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
    },
    dateText: {
        textAlign: 'center',
    },
    linkButton: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 5,
        elevation: 3,
        backgroundColor: '#FCBC52',
        width: '50%',
    },
    buttonText: {
        color: 'white',
    },

    //Texts
    h1: {
        fontSize: 25,
        color: "#FCBC52",
        fontWeight: "bold",
        marginTop: 45,
        marginBottom: 25,
    },
    text: {
        fontSize: 16,
        color: "#2F2F2F",
        marginBottom: 5
    },
});