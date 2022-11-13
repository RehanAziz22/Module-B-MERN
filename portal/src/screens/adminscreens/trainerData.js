import React, { useEffect, useState } from 'react'
import { CircularProgress, Container, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import MyTextField from '../../components/mytextfield';
import sendData, { getData } from '../../config/firebasemethods';
import Button from '@mui/material/Button'
import DenseTable from '../../components/table';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



export default function Trainer() {
    let [module, setModule] = useState({});
    let [trainerData, setTrainerData] = useState([])
    let getTrainerData = () => {
        console.log(module)

        getData(`Trainer/`)
            .then((res) => {
                setTrainerData(res)
                console.log(res)
            })
            .catch((err) => {
                alert(err)
            })
    }
    useEffect(() => { getTrainerData() }, [])
    return (
        <>
            <Container sx={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;", backgroundColor: "white", padding: "15px", borderRadius: "5px", width: { xs: "100%", md: "100%" }}}>
                <Grid container spacing={2}>

                    <Grid item xs={12} sm={12} md={12}>
                        <Typography variant='h5' sx={{ fontWeight: "bold" }}>Trainer Record</Typography>
                    </Grid>


                        <DenseTable
                            datasource={trainerData}
                            Cols={[
                                {
                                    key: "id",
                                    displayName: "Id",
                                },
                                {
                                    key: "firstName",
                                    displayName: "First Name",
                                },{
                                    key: "lastName",
                                    displayName: "lastName",
                                },{
                                    key: "username",
                                    displayName: "Username",
                                },
                                {
                                    key: "email",
                                    displayName: "Email",
                                },
                                {
                                    key: "contact",
                                    displayName: "Contact",
                                },
                                {
                                    key: "cnic",
                                    displayName: "Cnic",
                                },
                                {
                                    key: "dateOfBirth",
                                    displayName: "DOB",
                                },
                            ]}
                        />
                  </Grid>
            </Container></>
    )
}
