
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
            // console.log(uid)
            setUserId(uid)
        } else {
            // No user is signed in.
        }
    }
    useEffect(() => {
        checkUser()
    }, [])
    return <View style={[styles.p2, styles.h100, { backgroundColor: "#F6F7FB" }]}>

        <View style={[styles.mb2]}>
            <TextInput placeholderTextColor={styles._warning} placeholder="Search" style={[styles.bgWhite, styles.p1, styles.rounded, styles.border3,]} />
        </View>

        <View style={[]}>
            <Text style={[styles.textBlack, styles.fs2]}>Hello! User</Text>
            <Text style={[styles.textBlack, styles.fs6]}>What do you want to eat?</Text>
        </View>

        <View style={[styles.my2, styles.flexRow, styles.bgWhite, styles.rounded, styles.justifyContentBetween]}>
            <View style={[styles.bgWarning, styles.p1, styles.rounded]}>
                <Icon color={styles._white} size={50} name="favorite" />
                <Text style={[styles.textWhite, styles.fs6, styles.textCenter]}>Favorite</Text>
            </View>
            <View style={[styles.bgWarning, styles.p1, styles.rounded]}>
                <Icon color={styles._white} size={50} name="loyalty" />
                <Text style={[styles.textWhite, styles.fs6, styles.textCenter]}>Cheap</Text>
            </View>
            <View style={[styles.bgWarning, styles.p1, styles.rounded]}>
                <Icon color={styles._white} size={50} name="trending-up" />
                <Text style={[styles.textWhite, styles.fs6, styles.textCenter]}>Trending</Text>
            </View>
            <View style={[styles.bgWarning, styles.p1, styles.rounded]}>
                <Icon color={styles._white} size={50} name="more-horiz" />
                <Text style={[styles.textWhite, styles.fs6, styles.textCenter]}>More</Text>
            </View>
        </View>

        <View style={[styles.flexRow, styles.alignItemsCenter, styles.justifyContentBetween]}>
            <Text style={[styles.textBlack, styles.fs2]}>Today's Promo</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Promos')}>

                <Text style={[styles.textWarning, styles.fs6]}>see all</Text>
            </TouchableOpacity>
        </View>

        <View style={[styles.my2, styles.w100, styles.flexCenter, styles.positionRelative, styles.bgWhite, styles.rounded, styles.justifyContentBetween]}>
            <Image source={{ uri: "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216054.jpg" }} style={[styles.rounded, { height: 330, width: "100%" }]} />
            <View style={[styles.w95, styles.p1, styles.m1, styles.positionAbsolute, { bottom: 0 }, styles.bgWhite, styles.rounded, styles.justifyContentBetween]}>
                <Text style={[styles.textBlack, styles.fs4, styles.textBold, styles.mb1]}>Italian Pizza</Text>
                <Text style={[styles.textBlack, styles.fs6, styles.mb1]}>Delics italian pizza with cheez</Text>
                <Text style={[styles.textBlack, styles.fs6, styles.textBold, styles.mb1]}>$18.50</Text>
            </View>
        </View>
    </View>
}

export default Home;
