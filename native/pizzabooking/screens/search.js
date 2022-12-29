import React, { useEffect, useState } from 'react'
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialIcons'
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
export default function Search({ navigation, route }) {
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
            database().ref('deals/').on('value', dt => {
                let li = Object.values(dt.val());
                console.log(li)
                setList(li)
                // let filterList = li.filter(x => x.userId === uid)
                // setList([...filterList])
                // let type = li.filter(x=>x.vehicleDetails.vehicleType)
                // console.log(li)
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
        <View style={[styles.mb2]}>
            <TextInput placeholderTextColor={styles._warning} placeholder="Search" style={[styles.bgWhite, styles.p1, styles.rounded, styles.border3,]} />
        </View>
        <ScrollView >
            {
                list.map((e, i) => {
                    return <TouchableOpacity key={i}
                        onPress={() => { navigation.navigate("OrderScreen", e) }}
                        style={[styles.bgWhite, styles.mb2, styles.shadow4, styles.rounded, styles.flexRow, styles.alignItemsCenter, styles.justifyContentBetween]}>
                        <View style={[styles.flexRow, styles.w100, styles.alignItemsCenter, styles.justifyContentBetween, styles.px1]}>

                            <Image source={{ uri: e.url }} style={[styles.rounded, { height: 80, width: "30%" }]} />
                            <View style={[styles.w95, styles.p1, styles.mx1, { bottom: 0 }, styles.bgWhite, styles.rounded, styles.justifyContentBetween]}>
                                <Text style={[styles.textBlack, styles.fs4, styles.textBold, styles.mb1]}>{e.title}</Text>
                                <Text style={[styles.textBlack, styles.fs6, styles.mb1]}>{e.description.slice(0, 25) + ".."}</Text>
                                <Text style={[styles.textBlack, styles.fs6, styles.textBold, styles.mb1]}>{e.price}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                })
            }

        </ScrollView>


    </View>
    )
}
