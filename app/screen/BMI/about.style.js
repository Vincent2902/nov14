import{ StyleSheet } from "react-native";


export const Aboutstyle = StyleSheet.create({
    content: {
      padding: 0,
        flex: 1,
        backgroundColor: "#354259",
      },
      
        top: {
          flex: .2,
          borderWidth: 10,
          borderColor: "#354259",
        },
        bottom: {
          flex: .8,
          
        },
        card:{
          flexDirection:"row"
           },
      image: {
        flex: 1,
        justifyContent: "center",
        width: 340, height: 360
      },
    view: {
        width: "100%"
    },
    cardTitle: {
      textAlign: 'center',
        color: "rgb(101,37,131)"
    },
    titleText: {
      marginBottom:15,
      borderRadius: 0,
      backgroundColor: "#FFFFFF",
      color: "#242F9B",
      textAlign: "center",
      padding:10,
      fontSize: 20,
      
    },
        Text: {
          
         
            justifyContent: 'center',
            alignItems: 'center',
      },
      button:{
        
        justifyContent: 'center',
        alignItems: 'center'
      },
    cardButton: {
        margin: 1,
      
    },
    card1:{
      padding: 0,
      margin:15,
      backgroundColor: "#FFE3A9",
    },
    
})