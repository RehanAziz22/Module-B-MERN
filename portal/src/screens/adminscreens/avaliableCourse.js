import React, { useEffect, useState } from 'react'
import { CircularProgress, Container, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import Button from '@mui/material/Button'
import DenseTable from '../../components/table';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getData } from '../../config/firebasemethods';



export default function AvaliableCourse() {
    let [module, setModule] = useState({});
    let [courseData, setCourseData] = useState([])
    let sendcourseData = () => {
        console.log(module)

        getData(`course/`)
            .then((res) => {
                setCourseData(res)
                console.log(res)
            })
            .catch((err) => {
                alert(err)
            })
    }
    useEffect(() => { sendcourseData() }, [])
    return (
        <>
            <Container sx={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;", backgroundColor: "white", padding: "15px", borderRadius: "5px", width: { xs: "100%", md: "100%" }}}>
                <Grid container spacing={2}>

                    <Grid item xs={12} sm={12} md={12}>
                        <Typography variant='h5' sx={{ fontWeight: "bold" }}>Avaliable Course</Typography>
                    </Grid>


                    <Grid item xs={12} sm={12} md={12} sx={{overflow:"hidden",width:{xs:"300px",md:"100%",lg:"100%"}}}>

                        <TableContainer component={Paper}>
                            <Table sx={{minWidth:650}} size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Course Name</TableCell>
                                        <TableCell align="right">Duration</TableCell>
                                        <TableCell align="right">Fees</TableCell>
                                        <TableCell align="right">Form Open/Close</TableCell>
                                        <TableCell align="right">No of Quiz</TableCell>
                                        <TableCell align="right">Trainer Id</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {courseData.length > 0 ? courseData.map((row,i) => (
                                        <TableRow
                                            key={i}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {`${row.courseName}`}
                                            </TableCell>
                                            <TableCell align="right">{row.duration} Months</TableCell>
                                            <TableCell align="right">{row.fees} Rs</TableCell>
                                            <TableCell align="right">{row.isFormOpen==("y"||"yes"||"Y"||"Yes")?"Yes":"No"}</TableCell>
                                            <TableCell align="right">{row.noOfQuiz}</TableCell>
                                            <TableCell align="right">{row.trainerId}</TableCell>
                                        </TableRow>
                                    )) :(
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
                </Grid>
            </Container></>
    )
}
