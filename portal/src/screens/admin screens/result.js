import React, { useEffect, useState } from 'react'
import { Container, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import MyTextField from '../../components/mytextfield';
import Button from '@mui/material/Button';
import sendData from '../../config/firebasemethods';

export default function Result() {
  let [module, setModule] = useState({});
  let [course, setCourse] = useState([
    { courseName: "Web and Mobile" },
    { courseName: "Flutter" },
    { courseName: "Graphic Designing" },
    { courseName: "Amazon" }
  ]
  );
  let [section, setSection] = useState(
    [{ section: "A" }, { section: "B" }, { section: "C" }]
  );
  let [btnDisabled, setBtnDisabled] = useState(false);

  let fillModule = (key, val) => {
    module[key] = val;
    setModule({ ...module })
    console.log(module)
  }
  let sendStdData = () => {
    console.log(module)

    sendData({
      StudentInfo: module,
      // time: new Date(),
      // userId: userId
    },
      `studentsRecord/`)
      .then((StudentInfo => { console.log(StudentInfo) }))
      .catch((err => { console.log(err) }))
  }
  return (
    <>
      <Container sx={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;", backgroundColor: "white", padding: "15px", borderRadius: "5px", width: { xs: "100%", md: "100%" } }}>
        <Grid container spacing={2}>

          <Grid item xs={12} sm={12} md={12}>
            <Typography variant='h5' sx={{ fontWeight: "bold" }}>Results</Typography>
          </Grid>
          </Grid>
      </Container></>
  )
}
