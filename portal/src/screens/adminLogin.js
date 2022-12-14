import React, { useState } from 'react'
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../config/firebasemethods';
import CircularProgress from '@mui/material/CircularProgress';

function AdminLogin() {

    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [isloading, setLoader] = useState(false)
    let navigate = useNavigate()
    let Login = async () => {
        setLoader(true)
        await loginUser({ email, password },'admin')
            .then((success) => {
                // console.log(success)
                let { email, password, username, id } = success
                // console.log(email, password, username, id)
                navigate(`/adminLogin/${success.id}`,{state:{id:id,username:username,email:email,password:password}})
                setLoader(false)
            })
            .catch((error) => {
                console.log(error);
                setLoader(false)
                // ..
            });

    }
    return (
        <Container sx={{padding:"0px"}}>
            <Box sx={{
                // width: { sm: "80%", md: "50%", lg: "40%" },
                display: "flex",
                flexDirection: "column", 
                margin: "10px auto", 
                alignItems: "center", 
                // padding: "20px", 
                // backgroundColor: "white", 
                // border: "1px solid", 
                // borderRadius: "10px", 
                // justifyContent: "space-between", 
                // minHeight: "220px"
            }}>
                {/* <Typography variant="h5" sx={{ fontWeight: "bold", color: "black", fontFamily: "Roboto,Helvetica,Arial,sans-serif" }} >Admin Login</Typography> */}
                <TextField onChange={(e) => { setEmail(e.target.value) }} sx={{ margin: "8px" }} fullWidth id="outlined-basic" label="Email" variant="outlined" type="email" />
                <TextField onChange={(e) => { setPassword(e.target.value) }} sx={{ margin: "8px" }} fullWidth id="outlined-basic" label="Password" variant="outlined" type="password" />
                <Button variant="contained" sx={{ backgroundImage: "linear-gradient( 109.6deg, rgb(107 155 227) 11.2%, rgba(110,123,251,1) 91.1% );" }}  onClick={Login}>{isloading?<CircularProgress color="inherit" />:"Login"}</Button>
                
            </Box>
        </Container>
    )
}

export default AdminLogin;