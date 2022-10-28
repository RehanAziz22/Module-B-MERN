import React, { useEffect } from 'react'
import Container from '@mui/material/Container';
import { useState } from 'react';
import MyButton from '../components/Button';
import {Button } from '@mui/material';

import { useNavigate, useParams } from 'react-router-dom';
import { checkUser, getData, sendData, signoutUser } from '../config/firebasemethods';
import CircularProgress from '@mui/material/CircularProgress';

function Home() {
  const params = useParams();
  let navigate = useNavigate()
  let [txt, setTxt] = useState('');
  let [userId, setUserId] = useState('');
  let [list, setList] = useState([])
  let [editId, setEditId] = useState(0)
  let [isloading, setLoader] = useState(false)

  const addTodo = (e) => {
    e.preventDefault();
    sendData({
      txt: txt,
      // time: new Date(),
      userId: userId
    },
      `todos/${userId}`)
      .then((userId => { console.log(userId) }))
      .catch((err => { console.log(err) }))

    if (!txt) {
      alert("txt is required")
      return;
    }
    // if (editId) {
    //   const editTodo = list.find((i) => i.id === editId);
    //   const updatedTodos = list.map((e) =>
    //     e.id === editTodo.id
    //       ? (e = { id: e.id, txt })
    //       : { id: e.id, txt: e.txt }
    //   );
    //   setList(updatedTodos);
    //   setEditId(0);
    //   setTxt("");
    //   return;
    // }

    // else if (txt !== "") {
    //   setList([{ id: `${txt}-${Date.now()}`, txt }, ...list]);
    //   console.log(txt)
    //   console.log(list)
    //   setTxt("");
    // }
  }

  const getTodosData = () => {
    getData(`todos/${userId}`)
      .then((res) => {
        setList(res)
      })
      .catch((err) => {
        alert(err)
      })
  }

  const signOut = () => {
    setLoader(true)
    signoutUser(`todos/${userId}`)
      .then(() => {
        setLoader(false)
        navigate("/login")
      })
      .catch((err) => {
        setLoader(false)
        console.log(err)
      })
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
  useEffect(() => {
    checkUser()
      .then((res) => {
        console.log(res);
        if (params.id == res) {
          setUserId(res);
          getTodosData();
        }
        else {
          navigate("/login")
        }
      })

  }, [])
  return (
    <div className="homeApp">
      <header className="App-header" style={{ width: "100%" }}>
        <div className='sectionOne'>
                <Button  fullWidth sx={{ backgroundImage: "linear-gradient(to right, #F3429A , #AA44B1);", color: "white" }} onClick={signOut}>{isloading?<CircularProgress color="inherit" />:"Logout"}</Button>
          <h1 >TODO APP</h1>

          <div className='container-One'>
            <input
              value={txt}
              onChange={(e) => { setTxt(e.target.value) }} />
            <MyButton otherClass="btn add" btnType="submit" onClick={addTodo} btnName={editId ? "EDIT" : "ADD"} />
          </div>

          <ul className='todoList'>
            {list.map((e) => {
              return <div className='display-con' key={e.id}>
                <li className='listItems'><span>{e.txt}</span></li>
                <MyButton otherClass="btn del" onClick={() => handelEdit(e.id)} btnName="Edit" />
                <MyButton otherClass="btn edit" onClick={() => handelDel(e.id)} btnName="Delete" />
              </div>
            })}
          </ul>
          <MyButton otherClass="btn delAll" onClick={DelAll} btnName="Delete All" />
        </div>
      </header>
    </div>
  );
}

export default Home;