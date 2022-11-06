import React, { useEffect, useState } from 'react'
import { CircularProgress, Container, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import MyTextField from '../../components/mytextfield';
import Button from '@mui/material/Button';
import sendData from '../../config/firebasemethods';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MySwitch from '../../components/MySwitch';
import MySelect from '../../components/mySelect';


export default function Result() {
  let [module, setModule] = useState({});
  let [course, setCourse] = useState("");
  let [resultData, setResultData] = useState(
    [{
      firstName: "Muhammad",
      lastName: "Arif",
      result: "pass",
      course: "Flutter",
      marks: "75",
      section: "B",
      rollNumber: "AA072"

    },
    {
      firstName: "Muhammad",
      lastName: "Arif",
      result: "pass",
      course: "Flutter",
      marks: "75",
      section: "B",
      rollNumber: "AA073"

    }, {
      firstName: "Muhammad",
      lastName: "Arif",
      result: "pass",
      course: "Flutter",
      marks: "75",
      section: "B",
      rollNumber: "AA074"

    },
    {
      firstName: "Muhammad",
      lastName: "Arif",
      result: "pass",
      course: "Flutter",
      marks: "75",
      section: "B",
      rollNumber: "AA075"

    }]
  );
  let [result, setResult] = useState(false);
  let [isloading, setLoader] = useState(false);
  let [btnDisabled, setBtnDisabled] = useState(false);
  let [datasourse, setdatasourse] = useState(
    [    { courseName: "Web and Mobile" },
    { courseName: "Flutter" },
    { courseName: "Graphic Designing" },
    { courseName: "Amazon" }
]
  );

  let sendStdData = () => {

    module.isShowResult = result;
    module.result = resultData;
    console.log(module)

    sendData(module,
      `result/`)
      .then((sendResult => { console.log(sendResult) }))
      .catch((err => { console.log(err) }))
  }
  let fillModule = (key, val) => {
    module[key] = val;
    setModule({ ...module })
    console.log(module)
  }
  let handleCourse = (e) => {
    setCourse(e.target.value)
  }
  return (
    <>
      <Container sx={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;", backgroundColor: "white", padding: "15px", borderRadius: "5px", width: { xs: "100%", md: "100%" } }}>
        <Grid container spacing={2}>

          <Grid item xs={12} sm={12} md={12}>
            <Typography variant='h5' sx={{ fontWeight: "bold" }}>Result</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <MySwitch
              onChange={(e) => { setResult(e.target.checked) }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            
            <MySelect
              label={"Course"}
              valueField="courseName"
              displayField="courseName"
              datasource={datasourse}
              onChange={(e)=>fillModule("course", e.target.value)}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={12} sx={{ overflow: "hidden", width: { xs: "300px", md: "100%", lg: "100%" } }}>

            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell>Full Name</TableCell>
                    <TableCell align="right">Roll No</TableCell>
                    <TableCell align="right">Course</TableCell>
                    <TableCell align="right">Section</TableCell>
                    <TableCell align="right">Marks</TableCell>
                    <TableCell align="right">Result</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {resultData.length > 0 ? resultData.map((row, i) => (
                    <TableRow
                      key={i}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {`${row.firstName} ${row.lastName}`}
                      </TableCell>
                      <TableCell align="right">{row.rollNumber}</TableCell>
                      <TableCell align="right">{row.course}</TableCell>
                      <TableCell align="right">{row.section}</TableCell>
                      <TableCell align="right">{row.marks}</TableCell>
                      <TableCell align="right">{row.result}</TableCell>
                    </TableRow>
                  )) : (
                    <TableRow>
                      <TableCell align="right"><CircularProgress /></TableCell>
                      <TableCell align="right"><CircularProgress /></TableCell>
                      <TableCell align="right"><CircularProgress /></TableCell>
                      <TableCell align="right"><CircularProgress /></TableCell>
                      <TableCell align="right"><CircularProgress /></TableCell>
                      <TableCell align="right"><CircularProgress /></TableCell>
                    </TableRow>

                  )

                  }
                </TableBody>
              </Table>
            </TableContainer>

          </Grid>

          <Grid item xs={12} sm={12} md={12}>
            <Button variant="contained" sx={{ backgroundImage: "linear-gradient( 109.6deg, rgb(107 155 227) 11.2%, rgba(110,123,251,1) 91.1% );" }} disabled={btnDisabled} onClick={sendStdData}>{isloading ? <CircularProgress color="inherit" /> : "Submit Form"}</Button>
          </Grid>
        </Grid>
      </Container></>
  )
}
