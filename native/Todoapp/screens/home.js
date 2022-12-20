
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
    let [txt, setTxt] = useState("")
    let [list, setList] = useState([])
    let [userId, setUserId] = useState(0)
    let [indexNo, setIndexNo] = useState(0)

    const handleSubmit = () => {
        if (indexNo && indexNo > -1) {
            list[indexNo] = {
                txt: txt,
                time: JSON.stringify(new Date())
            };
            setList([...list])
            setIndexNo(null)
        }
        else {
            setList([{
                txt: txt,
                time: JSON.stringify(new Date())
            }, ...list]);
            console.log(txt)
            console.log(list)
            setTxt("");
            database()
                .ref(`users/${userId}/todos`)
                .set(list)


        }
    }
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
    useEffect(() => {
        checkUser()
        // console.log(route.params.userId)

    }, [])
    const handelDel = i => {
        console.log(i);
        list.splice(i, 1);
        setList([...list]);
    };


    const handelEdit = (i) => {
        setIndexNo(i)
        console.log(i)
        // const editTodo = list.find((i) => i.id === id);
        // setTxt(editTodo.txt);
        // setEditId(id);
    }

    function DelAll() {
        setList([]);
    }
    return <>
        <TouchableWithoutFeedback onPress={() => { }}>
            <View>
                <View className="App-header">
                    <View style={[styles.px1, styles.py2, styles.flexCenter]}>
                        <Text style={[styles.textDanger, styles.fs3, styles.textBold]}>TASK MASTER</Text>

                        <View style={[styles.w100, styles.my3, styles.flexRow, styles.alignItemsCenter, styles.justifyContentBetween]}>
                            <TextInput
                                placeholder="Add ITEM..."
                                maxLength={40}
                                style={[styles.input, styles.bgBlack, styles.px2, styles.w75, styles.border3, styles.h75]}
                                onChangeText={(e) => { setTxt(e) }}
                            />
                            <TouchableOpacity onPress={handleSubmit} style={[styles.bgDanger, styles.p1, styles.flexCenter, styles.px2, { borderRadius: 50 }]}>
                                <Text style={[styles.textBold]}>{indexNo ? "EDIT" : "ADD"}</Text>
                            </TouchableOpacity>
                            {/* <Button onPress={addTodo} title={editId ? "EDIT" : "ADD"} /> */}
                        </View>

                        <ScrollView style={[styles.my1, { height: 500 }]}>
                            {list.map((e, i) => {
                                return <View style={[styles.flexRow, styles.bgBlack, styles.px1, styles.my1, styles.justifyContentBetween, styles.rounded]} key={i}>
                                    <View style={[styles.flexColumn, styles.justifyContentBetween, styles.bgBlack, styles.rounded, styles.py1, { width: "63%" }]}>
                                        <Text style={[styles.textLight, styles.fs4, styles.w100]} key={e.id}>{e.txt}</Text>
                                        <Text style={[styles.textLight, styles.fs6, styles.w100]} key={e.id}>{e.time}</Text>
                                    </View>

                                    <View style={[styles.flexRow, styles.justifyContentBetween, styles.alignItemsCenter, { width: "35%" }]}>
                                        <TouchableOpacity onPress={() => handelEdit(i)} style={[styles.border2, styles.bgDanger, styles.p1, styles.px3, styles.flexCenter, styles.px1, { borderRadius: 10 }]}>
                                            <Text style={[styles.textBold]}>Edit</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => handelDel(i)} style={[styles.border2, styles.bgDanger, styles.p1, styles.px2, styles.flexCenter, styles.px1, { borderRadius: 10 }]}>
                                            <Text style={[styles.textBold]}>Delete</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            })}
                        </ScrollView>
                        <TouchableOpacity onPress={DelAll} style={[styles.bgDanger, styles.p1, styles.flexCenter, styles.px2, { borderRadius: 50 }]}>
                            <Text style={[styles.textBold]}>Delete All</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>

    </>
}
// const styles = StyleSheet.create({
//   ontainerView: {
//     flex: 1,
//     alignItems: "center"
//   },
//   loginScreenContainer: {
//     // flex: 1,
//     height: "100%",
//     paddingLeft: 15,
//     paddingRight: 15,
//     paddingTop: 20,
//     backgroundColor: "yellow",
//     // justifyContent: "center",

//   },
//   logoText: {
//     fontSize: 40,
//     fontWeight: "800",
//     marginTop: 150,
//     marginBottom: 30,
//     textAlign: "center",
//   },
//   loginFormView: {
//     alignItems: "flex-start",
//     marginTop: 10,
//     paddingVertical: 10,
//     paddingHorizontal: 5,
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "space-between"
//   },
//   loginFormTextInput: {
//     height: 40,
//     fontSize: 14,
//     borderRadius: 5,
//     borderWidth: 2,
//     borderColor: "black",
//     backgroundColor: "#fafafa",
//     paddingLeft: 10,
//     marginBottom: 5,
//     width: "80%"
//   },

//   loginButton: {
//     backgroundColor: "black",
//     borderRadius: 5,
//     height: 45,
//     marginTop: 10,
//     width: '100%',
//     paddingHorizontal: 10,
//     alignItems: "center",
//     alignContent: "center",
//     marginBottom: 10,
//     marginTop: 10
//   },
//   fbLoginButton: {
//     height: 45,
//     marginTop: 10,
//     backgroundColor: 'transparent',
//   },
// });

export default Home;
