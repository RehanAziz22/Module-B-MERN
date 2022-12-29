
import React, { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import Icon from 'react-native-vector-icons/MaterialIcons'
// import Dropdown from 'react-native-material-dropdown';
// import DropDownPicker from 'react-native-dropdown-picker';
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
    ActivityIndicator,
    TouchableOpacity,
    ToastAndroid,
} from 'react-native';
import styles from './style';
import MYTextInput from '../components/MYTextInput';
import MYButton from '../components/MYButton';
function CreateDeals({ navigation, route }) {
    let [userId, setUserId] = useState(0);
    let [isloading, setLoader] = useState(false)
    let [model, setModel] = useState({})
    let [vehicleType, setVehicleType] = useState([
        { value: "Bike" },
        { value: "Car" },
        { value: "Van" },
        { value: "Bus" },
    ])
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
    let register = () => {
        setLoader(true)

        console.log(model)
        model.id = database().ref('deals').push().key
        database()
            .ref(`deals/${model.id}`)
            .set(model)
            .then(() => {
                ToastAndroid.show("Registerd Successfully", ToastAndroid.SHORT),
                setLoader(false)
            })
    }
    useEffect(() => {
        checkUser()
    }, [])
    return <ScrollView style={[styles.p2, styles.h100, styles.mb1, { backgroundColor: "#F6F7FB" }]}>

        <Text style={[styles.textBlack, styles.fs3, styles.textBold, styles.m1]}>Create New Deal!!!</Text>
        <View style={[styles.w100, styles.alignItemsCenter, styles.justifyContentBetween, styles.p1, styles.bgWhite]}>
            <Image source={{ uri: "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216054.jpg" }} style={[styles.rounded, { height: 220, width: "100%" }]} />
            <View style={[styles.w95, styles.p1, styles.mx1, { bottom: 0 }, styles.bgWhite, styles.rounded, styles.justifyContentBetween]}>
                <TextInput placeholder="Add Title" style={[styles.textBlack, styles.textBold, styles.fs4, styles.borderBottom1]} placeholderTextColor="black" onChangeText={e => { setModel({ ...model, title: e }) }} />
                <TextInput placeholder="Add Price" style={[styles.textBlack, styles.textBold, styles.fs6, styles.borderBottom1, { textAlign: 'left' }]} placeholderTextColor="black" onChangeText={e => { setModel({ ...model, price: e }) }} />
                <TextInput placeholder="Add Description .." style={[styles.textBlack, styles.textBold, styles.fs6, styles.borderBottom1]} placeholderTextColor="grey" onChangeText={e => { setModel({ ...model, description: e }) }} />
                <TextInput placeholder="Add Image url" style={[styles.textBlack, styles.textBold, styles.fs6, styles.borderBottom1, { textAlign: 'left' }]} placeholderTextColor="grey" onChangeText={e => { setModel({ ...model, url: e }) }} />
            </View>
        </View>
        {/*  Details */}

        <View style={[styles.mb3]}>
            <MYButton label={isloading ? <ActivityIndicator color={styles._white} size={"small"} /> : "Create Deal"} onPress={register} />
        </View>
    </ScrollView>
}

export default CreateDeals
