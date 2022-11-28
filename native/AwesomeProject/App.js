
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
function App() {
  let [txt, setTxt] = useState("")
  let [list, setList] = useState([])
  let [editId, setEditId] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!txt) {
      // alert("txt is required")
      return;
    }
    if (editId) {
      const editTodo = list.find((i) => i.id === editId);
      const updatedTodos = list.map((e) =>
        e.id === editTodo.id
          ? (e = { id: e.id, txt })
          : { id: e.id, txt: e.txt }
      );
      setList(updatedTodos);
      setEditId(0);
      setTxt("");
      return;
    }

    else if (txt !== "") {
      setList([{ id: `${txt}-${Date.now()}`, txt }, ...list]);
      console.log(txt)
      console.log(list)
      setTxt("");
    }
  }

  const handelDel = (id) => {
    const delTodo = list.filter((i) => i.id !== id);
    setList([...delTodo]);
  }

  const handelEdit = (id) => {
    const editTodo = list.find((i) => i.id === id);
    setTxt(editTodo.txt);
    setEditId(id);
  }

  function DelAll() {
    setList([]);
  }
  let addTodo = () => {
    setList([ txt , ...list]);
      console.log(txt)
      console.log(list)
      setTxt("");
    console.log(list)
  }
  return <>
    <TouchableWithoutFeedback onPress={() => { }}>
      <View>
        <View className="App-header">
          <View style={styles.loginScreenContainer}>
            <Text style={{ color: "black", textAlign: "center", fontSize: 20, fontWeight: "bold" }} >TODO APP</Text>

            <View style={styles.loginFormView}>

              <TextInput
                placeholder="Add ITEM..."
                maxLength={40}
                style={{
                  color: 'black', fontSize: 14,
                  borderRadius: 5,
                  borderWidth: 2,
                  borderColor: "black",
                  backgroundColor: "#fafafa", paddingLeft: 10,
                  height: 40,
                  marginBottom: 5,
                  width: "80%"
                }}
                onChange={(e)=>{setTxt(e)}}
              />

              {/* <TextInput
                // value={txt}
                placeholder="Add ITEM..." placeholderColor="black" style={styles.loginFormTextInput}
                onChange={handelChange} /> */}
              <Button onPress={addTodo} title={editId ? "EDIT" : "ADD"} />
            </View>

            <View className='todoList'>
              {list.map((e) => {
                return <View style={{display:"flex",flexDirection:"row",backgroundColor:"black",marginVertical:4,justifyContent:"space-between"}}>
                  <Text style={{color:"white",width:"60%",padding:4}} key={e.id}>{e.txt.value}ghfhjkjf</Text>
                  <Button onPress={() => handelEdit(e.id)} title="Edit" />
                  <Button onPress={() => handelDel(e.id)} title="Delete" />
                </View>
              })}
            </View>
            <Button onPress={DelAll} title="Delete All" />
          </View>
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
  loginScreenContainer: {
    // flex: 1,
    height: "100%",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 20,
    backgroundColor: "yellow",
    // justifyContent: "center",

  },
  logoText: {
    fontSize: 40,
    fontWeight: "800",
    marginTop: 150,
    marginBottom: 30,
    textAlign: "center",
  },
  loginFormView: {
    alignItems: "flex-start",
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  loginFormTextInput: {
    height: 40,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "#fafafa",
    paddingLeft: 10,
    marginBottom: 5,
    width: "80%"
  },

  loginButton: {
    backgroundColor: "black",
    borderRadius: 5,
    height: 45,
    marginTop: 10,
    width: '100%',
    paddingHorizontal: 10,
    alignItems: "center",
    alignContent: "center",
    marginBottom: 10,
    marginTop: 10
  },
  fbLoginButton: {
    height: 45,
    marginTop: 10,
    backgroundColor: 'transparent',
  },
});

export default App;
