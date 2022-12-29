import React, { useEffect } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './style'

export default function SplashScreen({navigation}) {
    
  let navigateScreen=()=>{
    navigation.navigate("Login")
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('This will run after 1 second!')
      navigateScreen()
    },4000);
    return () => clearTimeout(timer);
  }, []);
  return (<>
  <View style={[styles.flexCenter,styles.bgBlack,styles._black,styles.textBlack,styles.w100,styles.h100]}>
    <Image source={{uri:"https://img.icons8.com/doodle/480/null/pizza--v1.png"}} style = {{ width: 300, height: 300 }}/>
    <View style={[styles.flexRow,styles.alignItemsCenter,styles.justifyContentBetween]}>
      <Text style={[styles.textWarning,styles.fs1,styles.textBold, styles.fontF]}>Pizza Buzz
    </Text>
    {/* <Icon color={styles._danger} size={40} style={[styles.mx1]} name="airport-shuttle"/> */}
      </View>
    <Text style={[styles.textWhite,styles.textBold,styles.fs6,styles.mt2,styles.w75,styles.textCenter]}>Freshly Baked Pizza, Delivered to Your Doorstep. Anytime, Anywhere!</Text>
  </View>
  </>
  )
}
