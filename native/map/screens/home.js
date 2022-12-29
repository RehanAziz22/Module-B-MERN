
import React, { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
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

    return <>
        <TouchableWithoutFeedback onPress={() => { }}>
            <View>
                <View className="App-header">
                    <View style={[styles.px1, styles.py2, styles.flexCenter]}>
                        <Text style={[styles.textWarning, styles.fs3, styles.textBold]}>Google Maps </Text>
                        <View style={[styles.w100]}>

                        <TouchableOpacity onPress={()=>navigation.navigate('map')} style={[styles.bgWarning,styles.p3,styles.w100,styles.rounded,styles.shadow2,styles.my2]}>
                            <Text style={[styles.textBlack,styles.textBold]}>Map</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.bgWarning,styles.p3,styles.w100,styles.rounded,styles.shadow2,styles.my2]}>
                            <Text style={[styles.textBlack,styles.textBold]}>Map</Text>
                        </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>

    </>
}

export default Home;
