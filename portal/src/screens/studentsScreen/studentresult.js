import { Container, Grid, selectClasses, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import MyButton from '../../components/mybutton'
import MySelect from '../../components/mySelect'
import MyTextField from '../../components/mytextfield'
import { getData } from '../../config/firebasemethods'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';

export default function StudentResult() {
  let [allResults, setAllResults] = useState([])
  let [courseResults, setCourseResults] = useState([])
  let [studentResult, setStudentResult] = useState([])
  let [selectedCourse, setSelectedCource] = useState("")
  let [rollNum, setRollNum] = useState("")
  let getResultData = () => {
    getData(`result/`)
      .then((res) => {
        console.log(res)
        let arr = res.filter((x) => x.isShowResult == true)
        setAllResults([...arr])
        console.log(allResults)
      })
      .catch((err) => {
        alert(err)
      })
  }
  let showResult = (e) => {
    setSelectedCource(e)
    console.log(selectedCourse)
    let obj = allResults.find((x) => x.course == e);
    // console.log(obj.result);
    setCourseResults([...obj.result])
    console.log(courseResults)
  }
  let showstudentResult = () => {
    // setRollNum(e)
    // console.log(rollNum)
    let obj = courseResults.filter((x) => x.rollNumber.includes(rollNum));
    console.log(obj);
    setStudentResult(obj)
  }
  useEffect(() => {
    getResultData()
  }, [])
  return (
    < >

      <Container sx={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;", backgroundColor: "white", padding: "15px", borderRadius: "5px", width: { xs: "100%", md: "100%" } }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12}>
            <Typography variant='h5' sx={{ fontWeight: "bold" }}>Search Result</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={5}>
            <MySelect
              label="Cource"
              valueField="course"
              displayField="course"
              onChange={(e) => showResult(e.target.value)}
              datasource={allResults}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={5}>
            <MyTextField
              label="Enter Roll No"
              onChange={(e) => setRollNum(e.target.value)}

            />
          </Grid>
          <Grid item xs={12} sm={12} md={2}>
            <MyButton
              onClick={showstudentResult}
              label={"Search"}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} sx={{ overflow: "hidden", width: { xs: "300px", md: "100%", lg: "100%" } }}>

            <TableContainer component={Paper}>
              <Table size="small" aria-label="a dense table">
                {studentResult && studentResult.length > 0 ? studentResult.map((row, i) => (

                  <>
                    {/* <Typography variant='h5' sx={{ fontWeight: "bold" }}>Search Result</Typography>
 */}
                    <TableBody>
                      <TableRow align="left">
                        <TableCell align="left">Name </TableCell>
                        <TableCell align="left">{`${row.firstName} ${row.lastName}`}</TableCell>

                      </TableRow>
                      <TableRow align="left">
                        <TableCell align="left">Roll number </TableCell>
                        <TableCell align="left">{row.rollNumber}</TableCell>
                      </TableRow>
                      <TableRow align="left">
                        <TableCell align="left">Result </TableCell>
                        <TableCell align="left">{row.result}</TableCell>
                      </TableRow>
                      <TableRow align="left">
                        <TableCell align="left">Marks </TableCell>
                        <TableCell align="left">{row.marks}</TableCell>
                      </TableRow>

                    </TableBody>
                  </>
                )) : (
                  ""
                )

                }
              </Table>
            </TableContainer>

          </Grid>
        </Grid>
      </Container></>
  )
}

// import { Grid } from "@mui/material";
// import { Box } from "@mui/system";
// import { useEffect, useState } from "react";
// import MySelect from "../../components/mySelect";
// import MyTextField from "../../components/mytextfield";
// import { getData } from "../../config/firebasemethods";

// function StudentResult() {
//   const [allResults, setAllResults] = useState([]);
//   const [selectedCource, setSelectedCource] = useState("");
//   const [dropDownList, setDropDownList] = useState([]);
//   const [resultTableData, setResultTableData] = useState([]);

//   let getResultData = () => {
//     getData("result")
//       .then((res) => {
//         console.log(res);
//         let arr = res.filter((x) => x.isShowResult);
//         setAllResults([...arr]);
//         console.log(allResults)
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
//   useEffect(() => {
//     getResultData();
//   }, []);

//   let showResult = (e) => {
//     setSelectedCource(e);
//     let obj = allResults.find((x) => x.cource == e);
//     console.log(obj);
//     setResultTableData([...obj.result]);
//   };

//   return (
//     <>
//       <Box sx={{ backgroundColor: "#03045e", padding: 2, margin: 0 }}>
//         <h1 style={{ color: "white" }}>Result</h1>
//       </Box>
//       <Box>
//         <Grid container>
//           <Grid item md={6}>
//             <MySelect
//               label="Cource"
//               valueField="course"
//               displayField="course"
//               onChange={(e) => showResult(e.target.value)}
//               datasource={allResults}
//             />
//           </Grid>
//           <Grid item md={6}>
//             <MyTextField label="Enter Roll Number" />
//           </Grid>
//           <Grid item md={12} sm={12}>
//             <table>
//               {resultTableData && resultTableData.length > 0 ? (
//                 resultTableData.map((x, i) => (
//                   <tr key={i}>
//                     <td>{x.rollNum}</td>
//                     <td>{x.name}</td>
//                     <td>{x.result}</td>
//                     <td>{x.marks}</td>
//                   </tr>
//                 ))
//               ) : (
//                 <h1>No Result</h1>
//               )}
//             </table>
//           </Grid>
//         </Grid>
//       </Box>
//     </>
//   );
// }
// export default StudentResult;