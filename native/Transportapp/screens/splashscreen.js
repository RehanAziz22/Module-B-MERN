import React, { useEffect } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
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
    }, 4000);
    return () => clearTimeout(timer);
  }, []);
  return (<>
  <View style={[styles.flexCenter,styles._black,styles.textBlack,styles.w100,styles.h100]}>
    <View style={[styles.flexRow,styles.alignItemsCenter,styles.justifyContentBetween]}>
      <Text style={[styles.textDanger,styles.fs1,styles.textBold]}>MyRideMate
    </Text>
    <Icon color={styles._danger} size={40} style={[styles.mx1]} name="airport-shuttle"/>
      </View>
    <Text style={[styles.textBlack,styles.textBold,styles.fs6,styles.mt2,styles.w75,styles.textCenter]}>Ride Together, Reach Together with MyRideMate!</Text>
  </View>
  </>
  )
}
