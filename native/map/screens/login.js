import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './style'
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
export default function Login({ navigation }) {
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  let login = () => {
    auth().signInWithEmailAndPassword("user1@gmail.com", "123456")
      .then((userCredential) => {
        // Signed in
        var userId = userCredential.user.uid;
        console.log(userId)
        navigation.navigate("Home", userId)
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });

  }

  return (<>
    <View style={[styles.flexCenter, styles._black, styles.textBlack, styles.w100, styles.h100, styles.p3]}>
      <Text style={[styles.textBlack, styles.fs1, styles.mb4, styles.w100, styles.textCenter, styles.mb2, styles.textBold]}>Google Maps</Text>
      <Text style={[styles.textBlack, styles.fs5, styles.mb4, styles.w100, styles.textCenter, styles.mb2, styles.textBold]}>LOGIN ACCOUNT</Text>
      <TextInput placeholder='email@gmail.com' onChangeText={(e)=>{setEmail(e)}} placeholderTextColor={"white"} style={[styles.mb2, styles.input, styles.bgBlack, styles.px2]} />
      <TextInput placeholder='**********' onChangeText={(e)=>{setPassword(e)}} placeholderTextColor={"white"} style={[styles.mb2, styles.input, styles.bgBlack, styles.px2]} secureTextEntry={true} />
      <TouchableOpacity onPress={login} style={[styles.bgWarning, styles.w100, styles.p1, styles.flexCenter, styles.mb2, styles.px3, { borderRadius: 50 }]}>
        <Text style={[styles.textBold, styles.fs6]}>Login</Text>
      </TouchableOpacity>
      <View style={[styles.flexRow]}>
        <Text style={[styles.textBlack, styles.fs6, styles.flexCenter, styles.fs6]}>Are you new here?</Text>
        <TouchableOpacity onPress={() => { navigation.navigate("Signup") }}><Text style={[styles.mx1, styles.textWarning, styles.textBold, styles.fs6]}>Signup</Text></TouchableOpacity>
      </View>

    </View>
  </>
  )
}
