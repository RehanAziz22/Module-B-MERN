
import React, { useState } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TextInput,
  Pressable,
  TouchableWithoutFeedback,
  useColorScheme,
  View,
} from 'react-native';


//  ---------------------------------------login page 1
// function App() {
//   return <>
//     <TouchableWithoutFeedback onPress={() => { }}>
//       <View style={styles.loginScreenContainer}>
//         <View style={styles.loginFormView}>
//           <Image source={{ uri: "https://img.icons8.com/clouds/200/null/enter-2.png" }} style={{ width: 300, height: 300 }} />
//           <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
//           <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true} />
//           <Pressable style={styles.loginButton} onPress={() => { }}>
//             <Text style={styles.text}>Login</Text>
//           </Pressable>
//           <View style={{flexDirection:"row",marginTop:10}}>
//             <Text style={{ fontSize: 16,fontWeight:"bold",marginRight:70  }}>forget Password</Text>
//             <Text style={{ fontSize: 16,fontWeight:"bold",marginLeft:80}}>help?</Text>
//           </View>

//         </View>
//       </View>
//     </TouchableWithoutFeedback>
//   </>
// }
// const styles = StyleSheet.create({
//   ontainerView: {
//     flex: 1,
//     alignItems: "center"
//   },
//   loginScreenContainer: {
//     flex: 1,
//     paddingLeft: 15,
//     paddingRight: 15,
//     marginTop:40,
//     backgroundColor: "#fff",
//     justifyContent: "center"
//   },
//   logoText: {
//     fontSize: 40,
//     fontWeight: "800",
//     marginTop: 150,
//     marginBottom: 30,
//     textAlign: "center",
//   },
//   loginFormView: {
//     flex: 1,
//     alignItems: "center"
//   },
//   loginFormTextInput: {
//     height: 55,
//     fontSize: 14,
//     borderRadius: 5,
//     borderWidth: 1,
//     color: "black",
//     borderColor: "#aaa",
//     backgroundColor: "transparent",
//     paddingLeft: 10,
//     marginTop: 5,
//     marginBottom: 15,
//     width: "100%",
//     borderRadius: 50
//   },
//   text: {
//     color: "white",
//     fontSize: 26,
//     marginTop: 2
//   },

//   loginButton: {
//     backgroundColor: "black",
//     borderRadius: 5,
//     height: 45,
//     marginTop: 10,
//     width: '100%',
//     paddingHorizontal: 10,
//     borderRadius: 50,
//     alignItems: "center",
//     alignContent: "center",
//     marginBottom: 10,
//     marginTop: 10
//   },
// });

// ----------------------------------------login page 2
// function App() {
//   return <>
//     <TouchableWithoutFeedback onPress={() => { }}>
//       <View style={styles.loginScreenContainer}>
//         <View style={styles.loginFormView}>
//           <Image source={{ uri: "https://img.icons8.com/clouds/200/null/enter-2.png" }} style={{ width: 300, height: 300 }} />
//           <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
//           <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true} />
//          <Pressable style={styles.loginButton} onPress={() => { }}>
//             <Text style={styles.text}>Login</Text>
//           </Pressable>
//         </View>
//       </View>
//     </TouchableWithoutFeedback>
//   </>
// }
// const styles = StyleSheet.create({
//   ontainerView: {
//     flex: 1,
//     alignItems: "center"
//   },
//   loginScreenContainer: {
//     flex: 1,
//     paddingLeft: 15,
//     paddingRight: 15,
//     backgroundColor: "#3897f1",
//     justifyContent:"center"
//   },
//   logoText: {
//     fontSize: 40,
//     fontWeight: "800",
//     marginTop: 150,
//     marginBottom: 30,
//     textAlign: "center",
//   },
//   loginFormView: {
//     flex: 1,
//     alignItems: "center"
//   },
//   loginFormTextInput: {
//     height: 55,
//     fontSize: 14,
//     borderRadius: 5,
//     borderWidth: 1,
//     borderColor: "#eaeaea",
//     backgroundColor: "#fafafa",
//     paddingLeft: 10,
//     marginTop: 5,
//     marginBottom: 5,
//     width: "100%"
//   },
//   text: {
//     color: "white",
//     fontSize: 26
//   },

//   loginButton: {
//     backgroundColor: "black",
//     borderRadius: 5,
//     height: 45,
//     marginTop: 10,
//     width: '100%',
//     paddingHorizontal: 10,
//     alignItems: "center",
//     alignContent:"center",
//     marginBottom: 10,
//     marginTop: 10
//   },
//   fbLoginButton: {
//     height: 45,
//     marginTop: 10,
//     backgroundColor: 'transparent',
//   },
// });

// ----------------------------------------login page 3
// function App() {
//   return <>
//     <TouchableWithoutFeedback onPress={() => { }}>
//       <View style={{ backgroundColor: "white", display: "flex", height: "100%" }}>
//         <View style={styles.loginFormView}>
//           <Text style={{ fontSize: 26, fontWeight: "bold", textAlign: "center", color: "black" }}>LOGIN</Text>
//           <Image source={{ uri: "https://www.starcertification.org/Content/images/NewPassword.png" }} style={{ width: 300, height: 300 }} />
//           <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={{
//             marginTop:10,
//             height: 55,
//             fontSize: 14,
//             borderRadius: 5,
//             borderBottomWidth: 2,
//             color: "white",
//             borderColor: "#aaa",
//             backgroundColor: "#121212",
//             paddingLeft: 10,
//             placeholderColor: "white",
//             marginBottom: 15,
//             width: "100%",
//           }} />
//           <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={{
//             height: 55,
//             fontSize: 14,
//             borderRadius: 5,
//             borderBottomWidth: 2,
//             color: "white",
//             borderColor: "#aaa",
//             backgroundColor: "#121212",
//             paddingLeft: 10,
//             placeholderColor: "white",
//             marginBottom: 15,
//             width: "100%",
//           }} secureTextEntry={true} />
//           <Pressable style={{ width: "100%" }} onPress={() => { }}>
//             <Image source={{ uri: "https://img.icons8.com/external-smashingstocks-glyph-smashing-stocks/66/null/external-right-arrows-user-interface-smashingstocks-glyph-smashing-stocks.png" }}
//               style={{ width: 50, height: 50, marginLeft: 250 }} />
//           </Pressable>
//         </View>
//         <View style={styles.bottom}>
//         <Pressable style={[styles.loginButton,{display:"flex",flexDirection:"row",width:"100%",textAlign:"left",justifyContent:"center",marginLeft:0,alignItems:"center"}]} onPress={() => { }}>
//         <Image source={{ uri: "https://img.icons8.com/fluency/48/null/facebook-new.png" }}
//               style={{ width: 20, height: 30,marginRight:5}} />
//           <Text style={{color:"white"}}>Login with Facebook</Text>
//            </Pressable>
//            <Pressable style={[styles.loginButton,{borderColor:"black",borderWidth:1,display:"flex",flexDirection:"row",width:"100%",backgroundColor:"white",textAlign:"left",justifyContent:"center",marginLeft:0,alignItems:"center"}]} onPress={() => { }}>
//            <Image source={{ uri: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" }}
//               style={{ width: 20, height: 30,marginRight:5}} />
//              <Text style={{color:"black"}}>Login with Google
//              </Text>
//            </Pressable>
//         </View>
//       </View>
//     </TouchableWithoutFeedback>

//   </>
// }
// const styles = StyleSheet.create({
//   ontainerView: {
//     flex: 1,
//     alignItems: "center"
//   },
//   loginScreenContainer: {
//     flex: 1,
//     paddingLeft: 15,
//     paddingRight: 15,
//     marginTop: 0,
//     backgroundColor: "white",
//     justifyContent: "center",
//   },
//   logoText: {
//     fontSize: 40,
//     fontWeight: "800",
//     marginTop: 150,
//     marginBottom: 30,
//     textAlign: "center",
//   },
//   loginFormView: {
//     flex: 1,
//     alignItems: "center",
//     backgroundColor: "cyan",
//     marginBottom: 10,
//     padding: 15,
//     paddingBottom: 0,
//     borderBottomLeftRadius: 130,
//     borderBottomRightRadius: 10
//   },
//   bottom: {
//     // flex: 1,
//     alignItems: "center",
//     marginBottom: 40,
//     padding: 15,
//     paddingBottom: 0,  },

//   loginFormTextInput: {
//     height: 55,
//     fontSize: 14,
//     borderRadius: 5,
//     borderBottomWidth: 2,
//     color: "black",
//     borderColor: "#aaa",
//     backgroundColor: "#121212",
//     paddingLeft: 10,
//     placeholderColor: "white",
//     marginBottom: 15,
//     width: "100%",
//   },
//   text: {
//     color: "white",
//     fontSize: 26,
//     marginTop: 2
//   },

//   loginButton: {
//     backgroundColor: "#0B84ED",
//     borderRadius: 5,
//     height: 45,
//     marginRight: 0,
//     width: '15%',
//     paddingHorizontal: 10,
//     textAlign: "right",
//     alignItems: "center",
//     alignContent: "flex-start",
//     marginTop: 5,
//     width:"100%"
//   },
// });

// ----------------------------------------login page 4
// function App() {
//   return <>
//     <TouchableWithoutFeedback onPress={() => { }}>
//       <View style={{ backgroundColor: "white", display: "flex", height: "100%" }}>
//         <View style={styles.loginFormView}>
//           <Text style={{ fontSize: 36, fontWeight: "bold", textAlign: "center", color: "black" }}>TODOAPP</Text>
//           <TextInput placeholder="Username" placeholderColor="black" style={{
//             marginTop: 10,
//             height: 55,
//             fontSize: 14,
//             borderRadius: 5,
//             borderBottomWidth: 2,
//             color: "black",
//             borderColor: "#aaa",
//             backgroundColor: "#fff",
//             paddingLeft: 10,
//             placeholderColor: "black",
//             marginBottom: 15,
//             width: "100%",borderColor: "black", borderWidth: 1,
//           }} />
//           <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={{
//             height: 55,
//             fontSize: 14,
//             borderRadius: 5,
//             borderBottomWidth: 2,
//             color: "black",
//             borderColor: "#aaa",
//             backgroundColor: "#fff",
//             paddingLeft: 10,
//             placeholderColor: "black",
//             marginBottom: 15,
//             width: "100%",borderColor: "black", borderWidth: 1,
//           }} secureTextEntry={true} />
//           <Pressable style={[styles.loginButton, { display: "flex", borderColor: "black", borderWidth: 1, backgroundColor: "white", flexDirection: "row", width: "100%", textAlign: "left", justifyContent: "center", marginLeft: 0, alignItems: "center" }]} onPress={() => { }}>
//             <Text style={{ color: "black" }}>Login</Text>

//           </Pressable>
//           <Text style={{color:"black",textAlign:"left",marginBottom:70}}>Forget Password?</Text>

//           <Pressable style={[styles.loginButton, { display: "flex", flexDirection: "row", width: "100%", textAlign: "left", justifyContent: "center", marginLeft: 0, alignItems: "center" }]} onPress={() => { }}>
//             <Image source={{ uri: "https://img.icons8.com/fluency/48/null/facebook-new.png" }}
//               style={{ width: 30, height: 30, marginRight: 5 }} />
//             <Text style={{ color: "white" }}>Login with Facebook</Text>
//           </Pressable>
//           <Pressable style={[styles.loginButton, { borderColor: "black", borderWidth: 1, display: "flex", flexDirection: "row", width: "100%", backgroundColor: "white", textAlign: "left", justifyContent: "center", marginLeft: 0, alignItems: "center" }]} onPress={() => { }}>
//             <Image source={{ uri: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" }}
//               style={{ width: 30, height: 30, marginRight: 5 }} />
//             <Text style={{ color: "black" }}>Login with Google
//             </Text>
//           </Pressable>
//         </View>
//       </View>
//     </TouchableWithoutFeedback>

//   </>
// }
// const styles = StyleSheet.create({
//   ontainerView: {
//     flex: 1,
//     alignItems: "center"
//   },
//   loginScreenContainer: {
//     flex: 1,
//     paddingLeft: 15,
//     paddingRight: 15,
//     marginTop: 0,
//     backgroundColor: "white",
//     justifyContent: "center",
//   },
//   logoText: {
//     fontSize: 40,
//     fontWeight: "800",
//     marginTop: 150,
//     marginBottom: 30,
//     textAlign: "center",
//   },
//   loginFormView: {
//     flex: 1,
//     alignItems: "center",
//     backgroundColor: "cyan",
//     marginBottom: 10,
//     padding: 15,
//     justifyContent:"center",
//     paddingBottom: 0,
//   },
//   bottom: {
//     // flex: 1,
//     alignItems: "center",
//     marginBottom: 40,
//     padding: 15,
//     paddingBottom: 0,
//   },

//   loginFormTextInput: {
//     height: 55,
//     fontSize: 14,
//     borderRadius: 5,
//     borderBottomWidth: 2,
//     color: "black",
//     borderColor: "#aaa",
//     backgroundColor: "#121212",
//     paddingLeft: 10,
//     placeholderColor: "white",
//     marginBottom: 15,
//     marginTop: 15,
//     width: "100%",
//   },
//   text: {
//     color: "white",
//     fontSize: 26,
//     marginTop: 2
//   },

//   loginButton: {
//     backgroundColor: "#0B84ED",
//     borderRadius: 5,
//     height: 45,
//     marginRight: 0,
//     width: '15%',
//     paddingHorizontal: 10,
//     textAlign: "right",
//     alignItems: "center",
//     alignContent: "flex-start",
//     marginTop: 5,
//     width: "100%"
//   },
// });


// ----------------------------------------login page 5

// function App() {
//   return <>
//     <TouchableWithoutFeedback onPress={() => { }}>
//       <View style={{ backgroundColor: "white", display: "flex", height: "100%" }}>
//         <View style={styles.loginFormView}>
//           <Image source={{ uri: "https://img.icons8.com/doodle/480/null/social.png" }}
//               style={{ width: 140, height: 140 }} />
//           <Text style={{ fontSize: 26, fontWeight: "bold", textAlign: "center", color: "#F6851F" }}>Facelook</Text>
//           <TextInput placeholder="Username" placeholderColor="black" style={{
//             height: 55,
//             fontSize: 14,
//             color: "black",
//             borderColor: "#fff",
//             backgroundColor: "transparent",
//             paddingLeft: 10,
//             placeholderColor: "white",
//             marginBottom: 15,
//             width: "100%", borderBottomWidth: 1,
//           }} />
//           <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={{
//             height: 55,
//             fontSize: 14,
//             color: "black",
//             borderColor: "#fff",
//             backgroundColor: "transparent",
//             paddingLeft: 10,
//             placeholderColor: "white",
//             marginBottom: 15,
//             width: "100%", borderBottomWidth: 1,
//           }} secureTextEntry={true} />
//           <Pressable style={[styles.loginButton, { display: "flex", borderColor: "black", borderWidth: 1, backgroundColor: "white", flexDirection: "row", width: "100%", textAlign: "left", justifyContent: "center", marginLeft: 0, alignItems: "center" }]} onPress={() => { }}>
//             <Text style={{ color: "black" }}>Login</Text>

//           </Pressable>
//           <Text style={{color:"black",textAlign:"left",marginBottom:70}}>Forget Password?</Text>

//           <Pressable style={[styles.loginButton, { display: "flex", flexDirection: "row", width: "100%", textAlign: "left", justifyContent: "center", marginLeft: 0, alignItems: "center" }]} onPress={() => { }}>
//             <Image source={{ uri: "https://img.icons8.com/fluency/48/null/facebook-new.png" }}
//               style={{ width: 30, height: 30, marginRight: 5 }} />
//             <Text style={{ color: "white" }}>Login with Facebook</Text>
//           </Pressable>
//           <Pressable style={[styles.loginButton, { borderColor: "black", borderWidth: 1, display: "flex", flexDirection: "row", width: "100%", backgroundColor: "white", textAlign: "left", justifyContent: "center", marginLeft: 0, alignItems: "center" }]} onPress={() => { }}>
//             <Image source={{ uri: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" }}
//               style={{ width: 30, height: 30, marginRight: 5 }} />
//             <Text style={{ color: "black" }}>Login with Google
//             </Text>
//           </Pressable>
//         </View>
//       </View>
//     </TouchableWithoutFeedback>

//   </>
// }
// const styles = StyleSheet.create({
//   ontainerView: {
//     flex: 1,
//     alignItems: "center"
//   },
//   loginScreenContainer: {
//     flex: 1,
//     paddingLeft: 15,
//     paddingRight: 15,
//     marginTop: 0,
//     backgroundColor: "white",
//     justifyContent: "center",
//   },
//   logoText: {
//     fontSize: 40,
//     fontWeight: "800",
//     marginTop: 150,
//     marginBottom: 30,
//     textAlign: "center",
//   },
//   loginFormView: {
//     flex: 1,
//     alignItems: "center",
//     backgroundColor: "#2A2A2E",
//     marginBottom: 10,
//     padding: 15,
//     justifyContent:"center",
//     paddingBottom: 0,
//   },
//   bottom: {
//     // flex: 1,
//     alignItems: "center",
//     marginBottom: 40,
//     padding: 15,
//     paddingBottom: 0,
//   },

//   loginFormTextInput: {
//     height: 55,
//     fontSize: 14,
//     borderRadius: 5,
//     borderBottomWidth: 2,
//     color: "black",
//     borderColor: "#aaa",
//     backgroundColor: "#121212",
//     paddingLeft: 10,
//     placeholderColor: "white",
//     marginBottom: 15,
//     marginTop: 15,
//     width: "100%",
//   },
//   text: {
//     color: "white",
//     fontSize: 26,
//     marginTop: 2
//   },

//   loginButton: {
//     backgroundColor: "#0B84ED",
//     borderRadius: 5,
//     height: 45,
//     marginRight: 0,
//     width: '15%',
//     paddingHorizontal: 10,
//     textAlign: "right",
//     alignItems: "center",
//     alignContent: "flex-start",
//     marginTop: 5,
//     width: "100%"
//   },
// });

function App() {
  let [list, setList] = useState([])
  let [item, setItem] = useState('')
  let [editIndex, setEditIndex] = useState('')

  let addTodo = () => {
    setList([...list, item])
    setItem('')
    console.log(list)
  }

  let del = (i) => {
    let updatedlist = list.splice(i, 1)
    setList(updatedlist)
  }
  // let edit = (index) => {
  //   const editTodo = list.find((i) => i === index);
  //   setTxt(editTodo.item);
  //   setEditIndex(index);
  // }
  return <>
    <TouchableWithoutFeedback onPress={() => { }}>
      <View style={styles.loginScreenContainer}>
        <Text style={{ textAlign: "center", fontSize: 24, marginVertical: 4, color: "black" }}>TODO APP</Text>
        <View style={styles.loginFormView}>
          <TextInput placeholder="Add ITEM..." placeholderColor="black" style={styles.loginFormTextInput} onChange={(e) => setItem(e)} />
          <Button title='ADD TODO' color='black' onPress={addTodo} />
        </View>
        <View style={{ marginVertical: 10, paddingHorizontal: 5, backgroundColor: "white", }}>
          {list.map((e, i) => {
            return <View style={{ display: "flex", flexDirection: "row", backgroundColor: "black", marginVertical: 4, justifyContent: "space-between" }} key={i}>
              <Text style={{ color: "white", width: "60%" }} >{e.item}</Text>
              {/* <Text>vjhvvhj</Text> */}
              <Button title='DEl' onPress={(i) => del(i)} />
              <Button title='edit' onPress={(i) => edit(i)} />
            </View>
          })}
        </View>
      </View>
    </TouchableWithoutFeedback>
  </>
}
const styles = StyleSheet.create({
  ontainerView: {
    flex: 1,
    alignItems: "center"
  },
  loginScreenContainer: {
    // flex: 1,
    height: "100%",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 20,
    backgroundColor: "yellow",
    // justifyContent: "center",

  },
  logoText: {
    fontSize: 40,
    fontWeight: "800",
    marginTop: 150,
    marginBottom: 30,
    textAlign: "center",
  },
  loginFormView: {
    alignItems: "flex-start",
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  loginFormTextInput: {
    height: 40,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "#fafafa",
    paddingLeft: 10,
    marginBottom: 5,
    width: "70%"
  },

  loginButton: {
    backgroundColor: "black",
    borderRadius: 5,
    height: 45,
    marginTop: 10,
    width: '100%',
    paddingHorizontal: 10,
    alignItems: "center",
    alignContent: "center",
    marginBottom: 10,
    marginTop: 10
  },
  fbLoginButton: {
    height: 45,
    marginTop: 10,
    backgroundColor: 'transparent',
  },
});


export default App;
