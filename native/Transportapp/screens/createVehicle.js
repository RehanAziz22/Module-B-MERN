
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
    TouchableOpacity,
    ToastAndroid,
} from 'react-native';
import styles from './style';
import MYTextInput from '../components/MYTextInput';
import MYButton from '../components/MYButton';
function CreateVehicle({ navigation, route }) {
    let [userId, setUserId] = useState(0);
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
        
        console.log(model)
        model.id = database().ref('transports').push().key
        database()
          .ref(`transports/${model.id}`)
          .set(model)
          .then(() => { ToastAndroid.show("Registerd Successfully", ToastAndroid.SHORT) })
    }
    useEffect(() => {
        checkUser()
    }, [])
    return <ScrollView style={[styles.p2, styles.h100, styles.mb1, { backgroundColor: "#F6F7FB" }]}>

        {/* Driver Details */}
        <Text style={[styles.textBlack, styles.fs3, styles.textBold, styles.m1]}>Driver Details</Text>
        <View style={[styles.bgDanger, styles.p1, styles.rounded, styles.pb2, styles.mb3]}>

            <Text style={[styles.textWhite, styles.fs6, styles.textBold, styles.m1]}>Driver Name</Text>
            <MYTextInput label="Driver Name" onChangeText={e => { setModel({...model, driverName: e }) }} />
            <Text style={[styles.textWhite, styles.fs6, styles.textBold, styles.m1]}>Driver Contact</Text>
            <MYTextInput label="Driver Contact" keyboardType="phone-pad" onChangeText={e => { setModel({ ...model, driverContact: e }) }} />
            <Text style={[styles.textWhite, styles.fs6, styles.textBold, styles.m1]}>Driver Cnic</Text>
            <MYTextInput label="Driver Cnic" keyboardType="numeric" onChangeText={e => { setModel({ ...model, driverCnic: e }) }} />
            <Text style={[styles.textWhite, styles.fs6, styles.textBold, styles.m1]}>Driver Address</Text>
            <MYTextInput label="Driver Address" onChangeText={e => { setModel({ ...model, DriverAddress: e }) }} />
        </View>

        {/* Vehicle Details */}
        <Text style={[styles.textBlack, styles.fs3, styles.textBold, styles.m1]}>Vehicle Details</Text>
        <View style={[styles.bgDanger, styles.p1, styles.rounded, styles.pb2, styles.mb3]}>

            <Text style={[styles.textWhite, styles.fs6, styles.textBold, styles.m1]}>Vehicle Name</Text>
            <MYTextInput label="Vehicle Name" onChangeText={e => { setModel({ ...model, vehicleName: e }) }} />
            <Text style={[styles.textWhite, styles.fs6, styles.textBold, styles.m1]}>Vehicle Number</Text>
            <MYTextInput label="Vehicle Number" keyboardType="numeric" onChangeText={e => { setModel({ ...model, vehicleNumber: e }) }} />
            <Text style={[styles.textWhite, styles.fs6, styles.textBold, styles.m1]}>Licence Number</Text>
            <MYTextInput label="Licence Number" onChangeText={e => { setModel({ ...model, licenceNumber: e }) }} />
            <Text style={[styles.textWhite, styles.fs6, styles.textBold, styles.m1]}>Vehicle Type eg: (Bus, Car, Bike, Van)</Text>
            <MYTextInput label="Vehicle Type" onChangeText={e => { setModel({ ...model, vehicleType: e }) }} />
            <Text style={[styles.textWhite, styles.fs6, styles.textBold, styles.m1]}>Passenger Seats Capacity</Text>
            <MYTextInput label="Passenger Seats Capacity" keyboardType="numeric" onChangeText={e => { setModel({ ...model, noOfSeats: e }) }} />
        </View>

        {/* Vehicle Details */}
        <Text style={[styles.textBlack, styles.fs3, styles.textBold, styles.m1]}>Vehicle Route</Text>
        <View style={[styles.bgDanger, styles.p1, styles.rounded, styles.pb2, styles.mb3]}>
            <Text style={[styles.textWhite, styles.fs6, styles.textBold, styles.m1]}>Start of Destination</Text>
            <MYTextInput label="Start of Destination" onChangeText={e => { setModel({ ...model, startPoint: e }) }} />
            <Text style={[styles.textWhite, styles.fs6, styles.textBold, styles.m1]}>End of Destination</Text>
            <MYTextInput label="End of Destination" onChangeText={e => { setModel({ ...model, endPoint: e }) }} />
            <Text style={[styles.textWhite, styles.fs6, styles.textBold, styles.m1]}>Time</Text>
            <MYTextInput label="Timing" keyboardType="numeric" onChangeText={e => { setModel({ ...model, time: e }) }} />
            <Text style={[styles.textWhite, styles.fs6, styles.textBold, styles.m1]}>Price</Text>
            <MYTextInput label="Price" keyboardType="numeric" onChangeText={e => { setModel({ ...model, price: e }) }} />
        </View>
        <View style={[styles.mb3]}>
            <MYButton label={"Register"} onPress={register} />
        </View>
    </ScrollView>
}

export default CreateVehicle
