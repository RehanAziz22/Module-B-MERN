import React, { useState,useEffect } from 'react';
import axios from "axios";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    Button,
    useColorScheme,
    View,
    TextInput,
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function Home({navigation}) {
    const [showData, setData] = useState([])
    const [searchedData, setSearchedData] = useState([])
    const [searchString, setSearchString] = useState('')
    let getData = () => {
        axios.get("https://fakestoreapi.com/products")
            .then((success) => { setData(success.data) })
            .catch((error) => { console.log(error) })
    }

    // let searchItem = () => {
    //     let search = showData.filter(x => x.title.toLowerCase().includes(searchString))
    //     console.log(searchString.toLowerCase())
    //     setSearchedData([...search])
    //     console.log(searchedData)

    // }
   
    useEffect(() => {
        getData();
    }, [])
    return (
        <ScrollView style={[styles.con_two]}>
            <View style={{flexWrap:"wrap",justifyContent:"center",flexDirection:"row"}}>

      {showData.map((e, i) => {
          return <TouchableOpacity style={styles.card} key={i} onPress={()=>navigation.navigate('Details',e)}>
          <View >
            <View style={{
              width: "100%",
              aspectRatio: 1 * 1,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              backgroundColor: "white",
            }}>
              
            <Image source={{ uri: e.image }}
                style={{
                    resizeMode: 'cover',
                    width: '70%',
                  height: 150,
                  // marginHorizontal:80
                }}
                />
                </View>
            <View style={{ width: 280, padding: 2, alignSelf: "center",width:"100%" }}>
                <Text style={[styles.cardText, { fontWeight: "bold", fontSize: 16 }]}>
                    {e.title.slice(0, 25) + "..."}
              </Text>
              <Text style={[styles.cardText, { fontWeight: "bold", fontSize: 12 }]}>
                Price :  {e.price} RS
              </Text>
              <Text style={[styles.cardText, { fontSize: 10 }]}>
                {(e.description).slice(0, 65) + "..."}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      })
      
    }
    </View>
    </ScrollView>
    );
}
const styles = StyleSheet.create({
    appbody: {
      backgroundColor: "lightgrey"
    },
    appbar: {
      backgroundColor: "royalblue",
      color: "white",
      alignItems: "center",
      justifyContent: "space-between",
      padding: 10,
      display: "flex",
      flexDirection: "row",
  
    },
    appbarText: {
      color: "white",
      fontSize: 20
    },
    searchField: {
      // backgroundColor:"white",
      height: 35, color: "white", width: 130,
      borderColor: "white",
      placeholderTextColor: "white",
      borderBottomWidth: 1
    },
    con_one: {
      margin: 10,
      borderBottomColor:"black",
      borderBottomWidth:2
    },
    con_two: {
    //   margin: 20,
      width:"100%",
      padding:10
    },
    card: {
      backgroundColor: "royalblue",
      width:"48%",
      margin:2,
      display: "flex",
      alignItems: "center",
      marginVertical: 10,
      padding: 5,
      borderRadius: 5,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
  
      elevation: 7,
    },
    cardText: {
      textAlign: "center",
      marginBottom: 2,
      fontSize:10,
      color:"white"
    }
  });
  
export default Home;
