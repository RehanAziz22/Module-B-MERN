import React, { useState } from 'react';
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
} from 'react-native';
function Signup() {
    return <>
        <TouchableWithoutFeedback onPress={() => { }}>
            <View style={styles.con_one}>
                <View style={styles.loginFormView}>
                    <Image source={{ uri: "https://img.icons8.com/doodle/480/null/social.png" }}
                        style={{ width: 140, height: 140 }} />
                    <Text style={{ fontSize: 26, fontWeight: "bold", textAlign: "center", color: "#F6851F" }}>Fake Store</Text>
                    <View style={{flexDirection:"row",width:"100%",justifyContent:"space-between"}}>
                    <TextInput placeholder="First Name" placeholderTextColor="white" style={[styles.loginFormTextInput,{width:"49%"}]} />
                    <TextInput placeholder="Last Name" placeholderTextColor="white" style={[styles.loginFormTextInput,{width:"49%"}]} />                     
                    </View>
                    <TextInput placeholder="Email" placeholderTextColor="white" style={styles.loginFormTextInput} />
                    <TextInput placeholder="Password" placeholderTextColor="#fff" style={styles.loginFormTextInput} secureTextEntry={true} />
                    
                    <Pressable style={[styles.loginButton]} onPress={() => { }}>
                        <Text style={{ color: "#fff",fontSize:18,fontWeight:"bold" }}>Signup</Text>

                    </Pressable>
                    <Text style={{ color: "white", margin: 15, }}>Signup with social accounts</Text>

                    <Pressable style={[styles.loginFacebook]} onPress={() => { }}>
                        <Image source={{ uri: "https://img.icons8.com/fluency/48/null/facebook-new.png" }}
                            style={{ width: 30, height: 30, marginRight: 5 }} />
                        <Text style={{ color: "white" }}>Signup with Facebook</Text>
                    </Pressable>
                    <Pressable style={[styles.loginGoogle]} onPress={() => { }}>
                        <Image source={{ uri: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" }}
                            style={{ width: 30, height: 30, marginRight: 5 }} />
                        <Text style={{ color: "black" }}>Signup with Google
                        </Text>
                    </Pressable>
                </View>
            </View>
        </TouchableWithoutFeedback>

    </>
}
const styles = StyleSheet.create({
    ontainerView: {
        flex: 1,
        alignItems: "center"
    },
    con_one: {
        backgroundColor: "white", display: "flex", height: "100%"
    },
    loginScreenContainer: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 0,
        backgroundColor: "white",
        justifyContent: "center",
    },
    logoText: {
        fontSize: 40,
        fontWeight: "800",
        marginTop: 150,
        marginBottom: 30,
        textAlign: "center",
    },
    loginFormView: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#2A2A2E",
        marginBottom: 10,
        padding: 15,
        justifyContent: "center",
        paddingBottom: 0,
    },

    loginFormTextInput: {
        height: 55,
        fontSize: 14,
        color: "white",
        borderColor: "#fff",
        backgroundColor: "transparent",
        paddingLeft: 10,
        placeholderColor: "white",
        marginBottom: 15,
        width: "100%", borderBottomWidth: 1,
    },

    loginButton: {
        backgroundColor: "#F6851F",
        borderRadius: 5,
        height: 45,
        width: '100%',
        alignItems: "center",
        justifyContent: "center",
    },
    loginFacebook: {
        backgroundColor: "#0B84ED",
        borderRadius: 5,
        height: 45,
        alignItems: "center",
        marginTop: 5,
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
    },
    loginGoogle: {
        backgroundColor: "#fff",
        borderRadius: 5,
        height: 45,
        alignItems: "center",
        marginTop: 5,
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
    },
});
export default Signup