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
      alignItems:"center"
    },
    calloutImage: {
      width: 110, 
      height: 90
    },
    pickerContainer: {
      width: "100%",
      height: "5%",
      justifyContent:"center",
      borderColor: "#2F2F2F",
      borderWidth: 1,
    },
    pickerText: {
      color: "#2F2F2F",
    },
    mapContainer: {
      width: "100%",
      height: "95%",
      alignItems: "center"
  },


  
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
 });