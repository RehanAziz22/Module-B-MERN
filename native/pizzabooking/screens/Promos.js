import React, { useEffect, useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import database from '@react-native-firebase/database';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function Promos({ navigation, route }) {
    let [list, setList] = useState([])
    getData = () => {
        database().ref('transports/').on('value', dt => {
            let li = Object.values(dt.val());
            let filterList = li.filter(x => x.vehicleType == "Bus")
            setList([...filterList])
            console.log(list)
            //   updateStarCount(postElement, data);
        });
    }

    useEffect(() => {
        // getData()
    }, [])

    return (<View style={[styles.h100, styles.p2, , { backgroundColor: "#F6F7FB" }]}>
        <View>
            <TouchableOpacity
                onPress={() => { navigation.navigate("map") }}
                style={[styles.bgDanger, styles.py2, styles.mb2, styles.shadow4, styles.rounded, styles.flexRow, styles.alignItemsCenter, styles.justifyContentBetween]}>
                <View style={[styles.w40, styles.justifyContentCenter, styles.alignItemsCenter]}>
                    <Icon color={styles._white} size={80} name="pin-drop" />

                </View>

                <View style={[styles.w60]}>
                    <Text style={[styles.textWhite, styles.fs2]}>BOOK NOW</Text>
                </View>
            </TouchableOpacity>
        </View>
        <ScrollView >
            <View style={[ styles.w100, styles.flexCenter, styles.positionRelative, styles.bgWhite, styles.rounded, styles.justifyContentBetween,styles.p1]}>

                <View style={[styles.flexColumn,styles.alignItemsCenter,styles.justifyContentBetween,styles.w100,styles.p1]}>
                    <View style={[styles.flexRow,styles.alignItemsCenter,styles.justifyContentBetween,styles.w100]}>
                        <Text style={[styles.textBlack, styles.fs4]}>Delics Italian Pizza</Text>
                        <Text style={[styles.textBlack, styles.fs5]}>5.0</Text>
                    </View>
                    <View style={[styles.flexRow,styles.alignItemsCenter,styles.justifyContentBetween,styles.w100,styles.borderBottom1,styles.pb2]}>
                        <Text style={[styles.textBlack, styles.fs6]}>Bhadurabad, Karachi</Text>
                        <Text style={[styles.textBlack, styles.fs6]}>1km</Text>
                    </View>
                </View>
                <View style={[styles.flexRow, styles.w100, styles.alignItemsCenter, styles.justifyContentBetween, styles.px1]}>

                    <Image source={{ uri: "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216054.jpg" }} style={[styles.rounded, { height: 80, width: "30%" }]} />
                    <View style={[styles.w95, styles.p1, styles.mx1, { bottom: 0 }, styles.bgWhite, styles.rounded, styles.justifyContentBetween]}>
                        <Text style={[styles.textBlack, styles.fs4, styles.textBold, styles.mb1]}>Italian Pizza</Text>
                        <Text style={[styles.textBlack, styles.fs6, styles.mb1]}>Delics italian pizza with cheez</Text>
                        <Text style={[styles.textBlack, styles.fs6, styles.textBold, styles.mb1]}>$18.50</Text>
                    </View>
                </View>
                <View style={[styles.flexRow, styles.w100, styles.alignItemsCenter, styles.justifyContentBetween, styles.px1]}>
                    <Image source={{ uri: "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216054.jpg" }} style={[styles.rounded, { height: 80, width: "30%" }]} />
                    <View style={[styles.w95, styles.p1, styles.mx1, { bottom: 0 }, styles.bgWhite, styles.rounded, styles.justifyContentBetween]}>
                        <Text style={[styles.textBlack, styles.fs4, styles.textBold, styles.mb1]}>Italian Pizza</Text>
                        <Text style={[styles.textBlack, styles.fs6, styles.mb1]}>Delics italian pizza with cheez</Text>
                        <Text style={[styles.textBlack, styles.fs6, styles.textBold, styles.mb1]}>$18.50</Text>
                    </View>
                </View>

            </View>

        </ScrollView>


    </View>
    )
}
