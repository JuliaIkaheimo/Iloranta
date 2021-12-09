import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:'column',
      height: '100%',
      justifyContent: "center",
      alignItems:'center',
      backgroundColor: "white",
    },
     logo:{
       flex: 1,
       paddingBottom:10,
      },
     textContainer:{
       flex:2,
       width:'90%',
       justifyContent: 'space-around',
       alignItems:'flex-start',
       padding: 40,
       paddingBottom: 50,
     },
     text:{
      textAlignVertical: "center",
       textAlign: "center",
       fontSize: 16,
       color: 'black'
     },
     languageContainer:{
      flex:1,
      width:'85%',
      flexDirection:'row',
      justifyContent:'space-between',
     },
     languageImage:{
       width:50,
       height:50,
     }
  });