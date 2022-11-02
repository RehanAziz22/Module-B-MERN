import React, { useEffect, useState } from 'react'
import { Container, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import MyTextField from '../components/mytextfield';
import sendData from '../config/firebasemethods';
import Button from '@mui/material/Button';

export default function Quiz() {
  let [module, setModule] = useState({});
  let [btnDisabled, setBtnDisabled] = useState(false);
  let [newField, setNewField] = useState([]);

  let handleAdd = () => {
    const abc = [...newField, [[]]]
    setNewField(abc)
  }

  let handleChange = (e,i) => {
    const array = [...newField]
    array[i]=e.target.value
    setNewField(array)
  }
  let handledel = (i) => {
    const delarray = [...newField]
    delarray.splice(i,1)
    setNewField(delarray)
  }
  console.log(newField)
  let fillModule = (key, val) => {
    module[key] = val;
    setModule({ ...module })
    // console.log(module)
  }
  let sendStdData = () => {
    console.log(module)

    sendData({
      quiz: module,
      // time: new Date(),
      // userId: userId
    },
      `Quiz/`)
      .then((StudentInfo => { console.log(StudentInfo) }))
      .catch((err => { console.log(err) }))
  }
  return (
    <>
      <Container sx={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;", backgroundColor: "white", padding: "15px", borderRadius: "5px", width: { xs: "100%", md: "100%" } }}>
        <Grid container spacing={2}>

          <Grid item xs={12} sm={12} md={12}>
            <Typography variant='h5' sx={{ fontWeight: "bold" }}>Create Quiz</Typography>
          </Grid>

          {newField.map((e,i) => {
            return (<>
              <Grid item xs={12} sm={12} md={12} sx={{ display: "flex" }}>
                <MyTextField
                  // -------------------------------------> Question
                  label={"Question"}
                  required={true}
                  type={"text"}
                  value={e}
                  onChange={(e) => { handleChange(e,i) }}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} sx={{ display: "flex", justifyContent: "space-between" }}>
                <MyTextField
                  // -------------------------------------> Option 1
                  label={"Option 1"}
                  required={false}
                  value={e}
                  type={"text"}
                  onChange={(e) => { handleChange(e,i) }}
                />
                <MyTextField
                  // -------------------------------------> Option 2
                  label={"Option 2"}
                  required={true}
                  value={e}
                  type={"text"}
                  onChange={(e) => { handleChange(e,i) }}
                />
                <MyTextField
                  // -------------------------------------> Option 3
                  label={"Option 3"}
                  required={true}
                  value={e}
                  type={"text"}
                  onChange={(e) => { handleChange(e,i) }}
                />

                <MyTextField
                  // -------------------------------------> Option 4
                  label={"Option 4"}
                  required={true}
                  value={e}
                  type={"text"}
                  onChange={(e) => { handleChange(e,i)}}
                />
            <Button variant="contained" sx={{ backgroundImage: "linear-gradient( 109.6deg, rgb(107 155 227) 11.2%, rgba(110,123,251,1) 91.1% );" }} onClick={(e) => { handledel(i)}}>Remove</Button>

              </Grid>

            </>

            )
          })}
          <Grid item xs={12} sm={12} md={12}>
            <Button variant="contained" sx={{ backgroundImage: "linear-gradient( 109.6deg, rgb(107 155 227) 11.2%, rgba(110,123,251,1) 91.1% );" }} disabled={btnDisabled} onClick={sendStdData}>Add</Button>
            <Button variant="contained" sx={{ backgroundImage: "linear-gradient( 109.6deg, rgb(107 155 227) 11.2%, rgba(110,123,251,1) 91.1% );" }} onClick={() => handleAdd()}>New Field</Button>
          </Grid>


        </Grid>
      </Container></>
  )
}
