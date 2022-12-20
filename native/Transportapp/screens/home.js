
import React, { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import Icon from 'react-native-vector-icons/MaterialIcons'

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
    TouchableOpacity,
} from 'react-native';
import styles from './style';
function Home({ navigation, route }) {
    let [userId, setUserId] = useState(0)
    let checkUser = () => {
        const user = auth().currentUser;
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            // ...
            var uid = user.uid;
            console.log(uid)
            setUserId(uid)
        } else {
            // No user is signed in.
        }
    }
    useEffect(() => {
        checkUser()
    }, [])
    return <View style={[styles.p2, styles.h100,{backgroundColor:"#F6F7FB"}]}>

        <TouchableOpacity style={[styles.h30, styles.bgDanger, styles.rounded, styles.flexRow, styles.justifyContentAround, styles.p2, styles.alignItemsCenter]}>
            <Icon color={styles._light} size={60} style={[styles.mx1]} name="account-balance-wallet" />
            <View>
                <Text style={[styles.textLight, styles.fs5, styles.textBold]}>Card Balance</Text>
                <Text style={[styles.textLight, styles.fs2, styles.textBold]}>PKR 220.00</Text>
            </View>
        </TouchableOpacity>

        <Text style={[ styles.textBlack, styles.fs2, styles.textBold, styles.m2]}>All Transports</Text>
        <View style={[styles.flexRow, styles.flexWrap, styles.justifyContentBetween]}>
            <TouchableOpacity style={[styles.w45,styles.rounded,styles.my1, styles.shadow4,styles.rounded, styles.bgWhite, styles.p3, styles.justifyContentCenter, styles.alignItemsCenter]} onPress={()=>{navigation.navigate("Bus")}}>
                <Icon color={styles._danger} size={45} name="directions-bus" />
                <Text style={[ styles.textBlack, styles.fs5, styles.textBold, ]}>Bus</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.w45,styles.rounded,styles.my1, styles.shadow4,styles.rounded, styles.bgWhite, styles.p3, styles.justifyContentCenter, styles.alignItemsCenter]} onPress={()=>{navigation.navigate("Bike")}}>
                <Icon color={styles._danger} size={45} name="two-wheeler" />
                <Text style={[ styles.textBlack, styles.fs5, styles.textBold, ]}>Bike</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.w45,styles.rounded,styles.my1, styles.shadow4,styles.rounded, styles.bgWhite, styles.p3, styles.justifyContentCenter, styles.alignItemsCenter]} onPress={()=>{navigation.navigate("Car")}}>
                <Icon color={styles._danger} size={45} name="local-taxi" /> 
                <Text style={[ styles.textBlack, styles.fs5, styles.textBold, ]}>Car</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.w45,styles.rounded,styles.my1, styles.shadow4,styles.rounded, styles.bgWhite, styles.p3, styles.justifyContentCenter, styles.alignItemsCenter]} onPress={()=>{navigation.navigate("Van")}}>
                <Icon color={styles._danger} size={45} name="airport-shuttle" />
                <Text style={[ styles.textBlack, styles.fs5, styles.textBold, ]}>Van</Text>
            </TouchableOpacity>

        </View>

    </View>
}

export default Home;
