import React, { useEffect, useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialIcons'
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
export default function UserSchedule({ navigation, route }) {
    let [userId, setUserId] = useState('')
    let [list, setList] = useState([])
    let checkUser = () => {
        const user = auth().currentUser;
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            // ...
            var uid = user.uid;
            console.log(uid)
            // setUserId(uid)
            database().ref('bookings/').on('value', dt => {
                let li = Object.values(dt.val());
                // console.log(li)
                let filterList = li.filter(x => x.userId === uid)
                setList([...filterList])
                let type = li.filter(x=>x.vehicleDetails.vehicleType)
                // console.log(list.userId)
                //   updateStarCount(postElement, data);
            });
        } else {
            // No user is signed in.
        }
    }

    useEffect(() => {
        checkUser()
    }, [])

    return (<View style={[styles.h100, styles.p2, { backgroundColor: "#F6F7FB" }]}>

        <ScrollView >
            {
                list.map((e, i) => {
                    return <TouchableOpacity key={i} 
                        // onPress={() => { navigation.navigate("VehicleDetails", e) }}
                        style={[styles.bgWhite, styles.py2, styles.mb2, styles.shadow4, styles.rounded, styles.flexRow, styles.alignItemsCenter, styles.justifyContentBetween]}>
                        <View style={[styles.w40, styles.justifyContentCenter, styles.alignItemsCenter]}>
                            <Icon color={styles._danger} size={80} name="departure-board" />

                        </View>

                        <View style={[styles.w60]}>
                            <Text style={[styles.textBlack, styles.fs2]}>{e.vehicleDetails.vehicleName}</Text>
                            <Text style={[styles.fs6, styles.textBlack]}>From: {e.vehicleDetails.startPoint}</Text>
                            <Text style={[styles.fs6, styles.textBlack]}>To: {e.vehicleDetails.endPoint}</Text>
                            <Text style={[styles.fs6, styles.textBlack]}>Time: {e.vehicleDetails.time}</Text>
                            <Text style={[styles.fs6, styles.textBlack]}>Transport: {e.vehicleDetails.vehicleType}</Text>
                            <Text style={[styles.textBold, styles.textDanger, styles.fs4]}>Rs {e.vehicleDetails.price}</Text>
                        </View>
                    </TouchableOpacity>
                })
            }

        </ScrollView>


    </View>
    )
}
