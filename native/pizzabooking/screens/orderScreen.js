import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import MYButton from '../components/MYButton'
import AppMap from './map'
import styles from './style'

export default function OrderScreen({ navigation, route }) {
    let [iconName, setIconName] = useState("")
    let [ratings, setRatings] = useState(4)
    let [stars, setStars] = useState([])

    let obj = route.params
    console.log(obj)



    useEffect(() => {
        // filterCategory()
    }, [])

    let getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition(position => {
            console.log(JSON.stringify(position))
        }, error => alert(error.message))
    }
    return (
        <View style={[styles.p2, { backgroundColor: "#F6F7FB" }]}>

            <ScrollView style={[styles.rounded, styles.p1, styles.shadow6, styles.bgWhite, styles.mb2]}>
                <View style={[styles.w100, styles.alignItemsCenter, styles.justifyContentBetween, styles.p1, styles.bgWhite]}>
                    <Image source={{ uri: obj.url }} style={[styles.rounded, { height: 220, width: "100%" }]} />
                    <View style={[styles.w95, styles.py1, styles.my1, { bottom: 0 }, styles.bgWhite, styles.rounded, styles.justifyContentBetween]}>
                        <Text style={[styles.textBlack, styles.textBold, styles.fs3, styles.mb1]} >{obj.title}</Text>
                        <Text style={[styles.textBlack, styles.fs5, styles.mb1]} >{obj.description}</Text>
                        <Text style={[styles.textBlack, styles.textBold, styles.fs4, styles.mb1]} >{obj.price}</Text>
                    </View>
                    <View style={[styles.flexRow, styles.justifyContentBetween, styles.w100]}>
                        <Text style={[styles.textBlack, styles.textBold, styles.fs4, styles.mb1]} >Quantity</Text>

                        <View style={[styles.flexRow, styles.alignItemsCenter, styles.justifyContentBetween, styles.w40]}>
                            <TouchableOpacity style={[styles.bgWarning, styles.px1]}><Text style={[styles.fs4, styles.textWhite]}>+</Text></TouchableOpacity>
                            <Text style={[styles.fs3]}>0</Text>
                            <TouchableOpacity style={[styles.bgWarning, styles.px1]}><Text style={[styles.fs4, styles.textWhite]}>--</Text></TouchableOpacity>
                        </View>
                    </View>


                </View>
                <MYButton label="location" onPress={getCurrentLocation} />
            </ScrollView>
                <MYButton label="Order Now" onPress={() => { navigation.navigate("map", obj) }} />

        </View>
    )
}
