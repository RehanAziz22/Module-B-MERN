import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './style'
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export default function Signup({ navigation }) {
  let [model, setModel] = useState({})
  let signup = () => {
    console.log(model.email, model.password)
    auth().createUserWithEmailAndPassword(model.email, model.password)
      .then((res) => {
        // Signed in
        let userId = res.user.uid;
        console.log(res.user.uid)
        database()
          .ref(`users/${userId}`)
          .set(model)
          .then(() => { navigation.navigate("BottomNav", userId) })
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
  }
  return (<>
    <View style={[styles.flexCenter, styles._black, styles.textBlack, styles.w100, styles.h100, styles.p3]}>
      <Text style={[styles.textBlack, styles.fs1, styles.mb4, styles.w100, styles.textCenter, styles.mb2, styles.textBold]}>TASK MASTER </Text>
      <Text style={[styles.textBlack, styles.fs5, styles.mb4, styles.w100, styles.textCenter, styles.mb2, styles.textBold]}>Create Account</Text>
      <TextInput placeholder='username' onChangeText={e => setModel({ ...model, username: e })} placeholderTextColor={"white"} style={[styles.mb2, styles.input, styles.bgBlack,styles.textLight, styles.px2]} />
      <TextInput placeholder='email@gmail.com' onChangeText={e => setModel({ ...model, email: e })} placeholderTextColor={"white"} style={[styles.mb2, styles.input, styles.bgBlack,styles.textLight, styles.px2]} />
      <TextInput placeholder='**********' onChangeText={e => setModel({ ...model, password: e })} placeholderTextColor={"white"} style={[styles.mb2, styles.input, styles.bgBlack,styles.textLight, styles.px2]} secureTextEntry={true} />
      <TouchableOpacity onPress={signup} style={[styles.bgDanger, styles.w100, styles.p1, styles.flexCenter, styles.mb2, styles.px3, { borderRadius: 50 }]}>
        <Text style={[styles.textBold, styles.fs6]}>Signup</Text>
      </TouchableOpacity>
      <View style={[styles.flexRow]}>
        <Text style={[styles.textBlack, styles.fs6, styles.flexCenter, styles.fs6]}>Already have an account?</Text>
        <TouchableOpacity onPress={() => { navigation.navigate("Login") }}><Text style={[styles.mx1, styles.textDanger, styles.textBold, styles.fs6]}>Login</Text></TouchableOpacity>
      </View>

    </View>
  </>
  )
}
