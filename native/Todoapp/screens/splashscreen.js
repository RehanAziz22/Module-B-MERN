import React, { useEffect } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from './style'

export default function SplashScreen({navigation}) {
    
  let navigateScreen=()=>{
    navigation.navigate("Login")
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('This will run after 1 second!')
      navigateScreen()
    }, 4000);
    return () => clearTimeout(timer);
  }, []);
  return (<>
  <View style={[styles.flexCenter,styles._black,styles.textBlack,styles.w100,styles.h100]}>
    <Text style={[styles.textDanger,styles.fs1,styles.textBold]}>TASK MASTER</Text>
    <Text style={[styles.textBlack,styles.textBold,styles.fs6,styles.mt2,styles.w75,styles.textCenter]}>Stay organized and on top of your tasks with Todo!</Text>
    {/* <TouchableOpacity onPress={()=>{navigation.navigate("Signup")}} style={[styles.bgDanger,styles.p1,styles.flexCenter,styles.mt2,styles.px4, {borderRadius:50}]}>
        <Text style={[styles.textBold]}>Get Started</Text>
    </TouchableOpacity> */}
  </View>
  </>
  )
}
