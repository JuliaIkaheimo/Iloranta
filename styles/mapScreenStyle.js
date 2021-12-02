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
    distance:{
      fontWeight:"bold",
      color: "black"
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
    //Modal
    modalTitle: {
      marginTop: 10,
      marginBottom: 10,
      textAlign: "center",
      fontSize: 18,
      fontWeight: "bold"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
      fontSize: 16
    },
    image: {
      width: 140, 
      height: 110
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    modalView: {
      margin: 25,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 30,
      alignItems: "center"
    },
    button: {
      borderRadius: 10,
      padding: 10,
      paddingRight: 15,
      paddingLeft: 15,
      elevation: 2,
      marginTop: 15,
      backgroundColor: "#2196F3",
    },
    buttonTextStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    }
 });