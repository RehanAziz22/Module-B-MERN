import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Button from './components/Button';

function App() {

  let [txt, setTxt] = useState("")
  // let [input, setInput] = useState("")
  let [list, setList] = useState([])

  const handelChange = (e) => {
    setTxt(e.target.value)
    // console.log(txt)
    // setList(list)
  }

  function add(props) {
    if (!txt) {
      alert("txt is required")
      return;
    }
    list.push(txt);
    console.log(txt);
    setList([{ id: `${txt}-${Date.now()}`, txt }, ...list]);
    console.log(list);
    setTxt('')

  }

  function edit() {

  }
  function del() {
    // list.filter((e,i)=>{})

  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{
          marginTop: 60
        }}
        >TODO APP</h1>

        <div className='container-One'>
          <input
            value={txt}
            onChange={handelChange} />
          <Button otherClass="btn" onClick={add} btnName="ADD" />
        </div>

        <ul className='list'>
          {list.map((e,i) => {
            return <div className='display-con'>
              <li className='listItems' key={i}>{e}</li>
              <Button otherClass="btn del" onClick={edit} btnName="Edit" />
              <Button otherClass="btn" onClick={del} btnName="Delete" />
            </div>
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;