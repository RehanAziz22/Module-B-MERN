import React, { useState, useEffect } from 'react';
import axios from "axios";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    Button,
    useColorScheme,
    View,
    TextInput,
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function OrderScreen({ navigation, route }) {

    let [productDetails, setProductDetails] = useState({})
    let [productQuantity, setProductquantity] = useState(0)
    // console.log(productDetails)
    let increase = () => {
        setProductquantity(++productQuantity)
    }
    let decrease = () => {
        setProductquantity(--productQuantity)
        if (productQuantity < 0) {
            setProductquantity(0)
        }
    }
    useEffect(() => {
        setProductDetails(route.params)

    })
    return <ScrollView style={{ padding: 20, height: "100%" }}>
        <View style={{
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5, width: "100%", padding: 10,
            backgroundColor: "white", justifyContent: "center", display: "flex", flexDirection: "row"
        }}>
            <Image source={{ uri: productDetails.image }}
                style={{
                    resizeMode: 'cover',
                    width: '30%',
                    height: 120,
                    alignSelf: "center"
                    // marginHorizontal:80
                }}
            />
            <View style={{ padding: 20, width: "68%" }}>
                <Text style={{ color: "black", fontSize: 14, marginBottom: 5, fontWeight: "bold" }}>{productDetails.title}</Text>
                <Text style={{ color: "black", fontSize: 12, marginBottom: 5, fontWeight: "bold" }}>Price: {productDetails.price} $</Text>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <Text style={{ color: "black", fontSize: 16, fontWeight: "bold" }}>Quantity: {productQuantity} </Text>

                    <TouchableOpacity style={{ borderRadius: 4, width: 30, backgroundColor: "royalblue", marginBottom: 10, display: "flex", marginTop: 10, justifyContent: "center", alignItems: "center", paddingVertical: 2 }} onPress={increase}>
                        <Text style={{ color: "white", fontSize: 16 }}>+</Text>
                    </TouchableOpacity>
                    {/* <Text style={{ color: "black", fontSize: 16, fontWeight: "bold" }}> {productQuantity} </Text> */}
                    <TouchableOpacity style={{ borderRadius: 4, width: 30, backgroundColor: "royalblue", marginBottom: 10, display: "flex", marginTop: 10, justifyContent: "center", alignItems: "center", paddingVertical: 2 }} onPress={decrease}>
                        <Text style={{ color: "white", fontSize: 16 }}>-</Text>
                    </TouchableOpacity>

                </View>

                <TouchableOpacity style={{ borderRadius: 4, backgroundColor: "royalblue", marginBottom: 5, display: "flex", marginTop: 5, justifyContent: "center", alignItems: "center", paddingVertical: 10 }} onPress={() => navigation.navigate('Details', e)}>
                    <Text style={{ color: "white", fontSize: 16 }}>Order Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    </ScrollView>
}
const styles = StyleSheet.create({
    appbody: {
        backgroundColor: "lightgrey"
    },
    appbar: {
        backgroundColor: "royalblue",
        color: "white",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
        display: "flex",
        flexDirection: "row",

    },
    appbarText: {
        color: "white",
        fontSize: 20
    },
    searchField: {
        // backgroundColor:"white",
        height: 35, color: "white", width: 130,
        borderColor: "white",
        placeholderTextColor: "white",
        borderBottomWidth: 1
    },
    con_one: {
        margin: 10,
        borderBottomColor: "black",
        borderBottomWidth: 2
    },
    con_two: {
        margin: 20,
    },
    card: {
        backgroundColor: "royalblue",
        display: "flex",
        alignItems: "center",
        marginVertical: 10,
        padding: 10,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    cardText: {
        textAlign: "center",
        marginBottom: 2
    }
});

export default OrderScreen;
