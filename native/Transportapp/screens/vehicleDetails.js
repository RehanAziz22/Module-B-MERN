import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import MYButton from '../components/MYButton'
import styles from './style'

export default function VehicleDetails({ navigation, route }) {
    let [iconName, setIconName] = useState("")
    let [ratings, setRatings] = useState(4)
    let [stars, setStars] = useState([])

    let obj = route.params
    console.log(obj)

    let filterCategory = () => {
        if (obj.vehicleType == "Bus") {
            setIconName("directions-bus")
        }
        else if (obj.vehicleType == "Bike") {
            setIconName("two-wheeler")
        }
        else if (obj.vehicleType == "Car") {
            setIconName("local-taxi")
        }
        else {
            setIconName("airport-shuttle")
        }
    }

    useEffect(() => {
        filterCategory()
    }, [])

    return (
        <View style={[styles.h100, styles.p2, { backgroundColor: "#F6F7FB" }]}>

            <ScrollView style={[styles.rounded, styles.p1, styles.shadow6, styles.bgWhite, styles.mb2]}>
                <View style={[styles.alignItemsCenter]}>
                    <Icon color={styles._danger} size={100} name={iconName} />
                    <Text style={[styles.textDanger, styles.fs3, styles.textBold]}>{obj.vehicleName}</Text>
                </View>
                <View style={[styles.m2, styles.pb1, styles.borderBottom1, styles.flexRow, styles.justifyContentBetween]}>
                    <View>
                        <Text style={[styles.textBlack, styles.fs5, styles.mb1]}>Driver Name:</Text>
                        <Text style={[styles.textBlack, styles.fs5, styles.mb1]}>Driver Contact:</Text>
                        <Text style={[styles.textBlack, styles.fs5, styles.mb1]}>Vehicle Number:</Text>
                        <Text style={[styles.textBlack, styles.fs5, styles.mb1]}>Start Point:</Text>
                        <Text style={[styles.textBlack, styles.fs5, styles.mb1]}>End Point:</Text>
                        <Text style={[styles.textBlack, styles.fs5, styles.mb1]}>Timing:</Text>
                        <Text style={[styles.textBlack, styles.fs5, styles.mb1]}>Number of Seats:</Text>
                        <Text style={[styles.textBlack, styles.fs5, styles.mb1]}>Price:</Text>
                    </View>
                    <View style={[styles.textLeft]}>
                        <Text style={[styles.textBlack, styles.fs5, styles.textRight, styles.mb1]}>{obj.driverName}</Text>
                        <Text style={[styles.textBlack, styles.fs5, styles.textRight, styles.mb1]}>{obj.driverContact}</Text>
                        <Text style={[styles.textBlack, styles.fs5, styles.textRight, styles.mb1]}>{obj.vehicleNumber}</Text>
                        <Text style={[styles.textBlack, styles.fs5, styles.textRight, styles.mb1]}>{obj.startPoint}</Text>
                        <Text style={[styles.textBlack, styles.fs5, styles.textRight, styles.mb1]}>{obj.endPoint}</Text>
                        <Text style={[styles.textBlack, styles.fs5, styles.textRight, styles.mb1]}>{obj.time}</Text>
                        <Text style={[styles.textBlack, styles.fs5, styles.textRight, styles.mb1]}>{obj.noOfSeats}</Text>
                        <Text style={[styles.textBlack, styles.fs5, styles.textRight, styles.mb1]}>{obj.price}</Text>
                    </View>
                </View>
                <View style={[styles.justifyContentBetween, styles.flexRow, styles.px2]}>
                    <Text style={[styles.textBlack, styles.fs5, styles.textRight, styles.mb1]}>Ratings</Text>
                    <View style={[styles.flexRow]}>
                        <Icon color={styles._danger} size={25} name="star" />
                        <Icon color={styles._danger} size={25} name="star" />
                        <Icon color={styles._danger} size={25} name="star" />
                        <Icon color={styles._danger} size={25} name="star" />
                        <Icon color={styles._danger} size={25} name="star" />
                    </View>

                </View>
            </ScrollView>
            <MYButton label="Book Now" onPress={()=>{navigation.navigate("BookingScreen",obj)}}/>
        </View>
    )
}
