import React, { useState } from 'react'
import { ActivityIndicator, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import styles from './style'
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
export default function Login({ navigation }) {
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  let [isloading, setLoader] = useState(false)
  let login = () => {
    setLoader(true)
    auth().signInWithEmailAndPassword("user3@user.com", "useruser")
      .then((userCredential) => {
        // Signed in
        var userId = userCredential.user.uid;
        console.log(userId)
        navigation.navigate("BottomNav", userId)
        ToastAndroid.show("Login Successfully", ToastAndroid.SHORT)
        setLoader(false)

        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        setLoader(false)
      });

  }

  return (<>
    <View style={[styles.flexCenter, styles._black, styles.textBlack, styles.w100, styles.h100, styles.p3]}>
      <Text style={[styles.textBlack, styles.fs1, styles.mb4, styles.w100, styles.textCenter, styles.mb2, styles.textBold]}>TASK MASTER</Text>
      <Text style={[styles.textBlack, styles.fs5, styles.mb4, styles.w100, styles.textCenter, styles.mb2, styles.textBold]}>LOGIN ACCOUNT</Text>
      <TextInput placeholderTextColor={"white"} placeholder='email@gmail.com' onChangeText={(e)=>{setEmail(e)}}  style={[styles.mb2, styles.textLight,styles.input, styles.bgBlack, styles.px2]} />
      <TextInput placeholder='**********' onChangeText={(e)=>{setPassword(e)}} placeholderTextColor={"white"} style={[styles.mb2,styles.textLight, styles.input, styles.bgBlack, styles.px2]} secureTextEntry={true} />
      <TouchableOpacity onPress={login} style={[styles.bgDanger, styles.w100, styles.p1, styles.flexCenter, styles.mb2, styles.px3, { borderRadius: 50 }]}>
        <Text style={[styles.textBold, styles.fs6]}>{isloading?<ActivityIndicator color={styles._white} size={"small"}/>:"Login"}</Text>
      </TouchableOpacity>
      <View style={[styles.flexRow]}>
        <Text style={[styles.textBlack, styles.fs6, styles.flexCenter, styles.fs6]}>Are you new here?</Text>
        <TouchableOpacity onPress={() => { navigation.navigate("Signup") }}><Text style={[styles.mx1, styles.textDanger, styles.textBold, styles.fs6]}>Signup</Text></TouchableOpacity>
      </View>

    </View>
  </>
  )
}
