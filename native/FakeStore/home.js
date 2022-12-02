
import React, { useEffect, useState } from 'react';
import axios from "axios";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Pressable,
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

const AppButton = ({ onPress, title,uri }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    {/* <Text style={styles.appButtonText}>{title}</Text> */}
    <Image source={{ uri: uri }}
            style={{ width: 25, height: 25, marginRight: 5 }} />
  </TouchableOpacity>
);

function Home() {
  const [showData, setData] = useState([])
  const [searchedData, setSearchedData] = useState([])
  const [searchString, setSearchString] = useState('')
  let getData = () => {
    axios.get("https://fakestoreapi.com/products")
      .then((success) => { setData(success.data) })
      .catch((error) => { console.log(error) })
  }

  let searchItem = () => {
    let search = showData.filter(x => x.title.toLowerCase().includes(searchString))
    console.log(searchString.toLowerCase())
    setSearchedData([...search])
    console.log(searchedData)

  }

  useEffect(() => {
    getData();
  }, [])
  return <View style={styles.appbody}>
    <View style={styles.appbar}>
      <Text style={styles.appbarText}>Fake Store</Text>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-end" }}>
        <TextInput style={styles.searchField} placeholderTextColor="white" placeholder='Search' onChangeText={e => setSearchString(e)} />
    
         <AppButton uri="https://img.icons8.com/ios/50/null/search--v1.png" size="sm" backgroundColor="#007bff" onPress={searchItem} />
    </View>
    </View>
    <ScrollView>
      {searchedData.length > 0 &&
        <ScrollView style={[styles.con_one,]} horizontal={true}>
          {searchedData.map((e, i) => {
            return <TouchableOpacity style={[styles.card, { marginHorizontal: 10 }]} key={i}>
              <View style={{ justifyContent: "center", alignItems: "center", width: 300 }} >
                <View style={{
                  width: 180,
                  height: 300,
                  aspectRatio: 1 * 1,
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  backgroundColor: "white",
                }}>
                  <Image source={{ uri: e.image }}
                    style={{
                      resizeMode: 'cover',
                      width: '100%',
                      height: '100%',
                      // marginHorizontal:80
                    }}
                  />
                </View>
                <View style={{ width: 280, padding: 10, alignSelf: "center" }}>
                  <Text style={[styles.cardText, { fontWeight: "bold", fontSize: 20 }]}>
                    {e.title.slice(0, 25) + "..."}
                  </Text>
                  <Text style={[styles.cardText, { fontWeight: "bold", fontSize: 16 }]}>
                    Price :  {e.price} RS
                  </Text>
                  <Text style={[styles.cardText, { fontSize: 16 }]}>
                    {(e.description).slice(0, 65) + "..."}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          })

          }
        </ScrollView>
      }

      <ScrollView style={styles.con_two}>
        {showData.map((e, i) => {
          return <TouchableOpacity style={styles.card} key={i}>
            <View >
              <View style={{
                width: 180,
                height: 300,
                aspectRatio: 1 * 1,
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                backgroundColor: "white",
              }}>
                <Image source={{ uri: e.image }}
                  style={{
                    resizeMode: 'cover',
                    width: '100%',
                    height: '100%',
                    // marginHorizontal:80
                  }}
                />
              </View>
              <View style={{ width: 280, padding: 10, alignSelf: "center" }}>
                <Text style={[styles.cardText, { fontWeight: "bold", fontSize: 20 }]}>
                  {e.title.slice(0, 25) + "..."}
                </Text>
                <Text style={[styles.cardText, { fontWeight: "bold", fontSize: 16 }]}>
                  Price :  {e.price} RS
                </Text>
                <Text style={[styles.cardText, { fontSize: 16 }]}>
                  {(e.description).slice(0, 65) + "..."}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        })

        }
      </ScrollView>
    </ScrollView>
  </View>

}
const styles = StyleSheet.create({
  appbody: {
    backgroundColor: "lightgrey"
  },
  appbar: {
    backgroundColor: "#F6851F",
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
    paddingBottom:5,
    placeholderTextColor: "white",
    borderBottomWidth: 1
  },
  con_one: {
    margin: 10,
    marginBottom: 0,
    paddingBottom: 10,
    borderBottomColor: "black",
    borderBottomWidth: 2
  },
  con_two: {
    margin: 20,
  },
  card: {
    backgroundColor: "#F6851F",
    display: "flex",
    alignItems: "center",
    marginVertical: 10,
    padding: 10,
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
    marginBottom: 2
  }
});

export default Home;
