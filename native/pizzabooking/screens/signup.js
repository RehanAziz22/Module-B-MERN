import React, { useState } from 'react'
import { ActivityIndicator, Image, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import styles from './style'
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export default function Signup({ navigation }) {
  let [isloading, setLoader] = useState(false)
  let [category, setCategory] = useState("user")
  let [model, setModel] = useState({})
  let signup = () => {
    setLoader(true)

    console.log(model.email, model.password)
    auth().createUserWithEmailAndPassword(model.email, model.password)
      .then((res) => {
        // Signed in
        let userId = res.user.uid;
        console.log(res.user.uid)
        model.id = userId
        model.category = category
        database()
          .ref(`users/${userId}`)
          .set(model)
          .then(() => { navigation.navigate("BottomNav", userId), ToastAndroid.show("Account Created Successfully", ToastAndroid.SHORT) })
        setLoader(false)
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        setLoader(false)
        // ..
      });
  }
  return (<>
    <View style={[styles.flexCenter, styles.bgBlack, styles._black, styles.textBlack, styles.w100, styles.h100, styles.p3]}>
      <Image source={{ uri: "https://img.icons8.com/doodle/480/null/pizza--v1.png" }} style={{ width: 200, height: 200 }} />
      <Text style={[styles.textWarning, styles.fs1, styles.mb4, styles.w100, styles.textCenter, styles.mb2, styles.textBold]}>Pizza Buzz </Text>
      <Text style={[styles.textWhite, styles.fs5, styles.mb4, styles.w100, styles.textCenter, styles.mb2, styles.textBold]}>Create Account</Text>

      <TextInput placeholder='username' onChangeText={e => setModel({ ...model, username: e })} placeholderTextColor={"black"} style={[styles.mb2, styles.input, styles.textBlack, styles.px2]} />
      <TextInput placeholder='email@gmail.com' onChangeText={e => setModel({ ...model, email: e })} placeholderTextColor={"black"} style={[styles.mb2, styles.input, styles.textBlack, styles.px2]} />
      <TextInput placeholder='**********' onChangeText={e => setModel({ ...model, password: e })} placeholderTextColor={"black"} style={[styles.mb2, styles.input, styles.textBlack, styles.px2,]} secureTextEntry={true} />
      <View style={[styles.flexRow,styles.w100]}>
        <TouchableOpacity onPress={() => { setCategory("user") }} style={[(category!=="user"?styles.bgWhite: styles.bgWarning),styles.w50, styles.p1, styles.flexCenter, styles.mb2, styles.px3,{borderBottomLeftRadius:50,borderTopLeftRadius:50}]}>
          <Text style={[styles.textBold, styles.fs6,(category!=="user"?styles.textBlack:styles.textWhite)]}>User</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { setCategory("admin") }} style={[(category!=="admin"?styles.bgWhite: styles.bgWarning),styles.w50, styles.p1, styles.flexCenter, styles.mb2, styles.px3,{borderBottomRightRadius:50,borderTopRightRadius:50}]}>
          <Text style={[styles.textBold, styles.fs6,(category!=="admin"?styles.textBlack:styles.textWhite)]}>Admin</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={signup} style={[styles.bgWarning, styles.w100, styles.p1, styles.flexCenter, styles.mb2, styles.px3, { borderRadius: 50 }]}>
        <Text style={[styles.textBold, styles.fs6]}>{isloading ? <ActivityIndicator color={styles._white} size={"small"} /> : "Signup"}</Text>
      </TouchableOpacity>
      <View style={[styles.flexRow]}>
        <Text style={[styles.textWhite, styles.fs6, styles.flexCenter, styles.fs6]}>Already have an account?</Text>
        <TouchableOpacity onPress={() => { navigation.navigate("Login") }}><Text style={[styles.mx1, styles.textWarning, styles.textBold, styles.fs6]}>Login</Text></TouchableOpacity>
      </View>

    </View>
  </>
  )
}
