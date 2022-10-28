import React, { useState } from 'react'
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../config/firebasemethods';
import CircularProgress from '@mui/material/CircularProgress';

function Login() {

    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [isloading, setLoader] = useState(false)
    let navigate = useNavigate()
    let Login = async () => {
        setLoader(true)
        await loginUser({ email, password })
            .then((success) => {
                navigate(`/home/${success.id}`)
                setLoader(false)
            })
            .catch((error) => {
                console.log(error);
                setLoader(false)
                // ..
            });

    }
    return (
        <Container sx={{ marginTop: "100px" }}>
            <Box sx={{
                width: { sm: "80%", md: "50%", lg: "40%" },
                display: "flex", padding: "20px", backgroundColor: "white", flexDirection: "column", margin: "10px auto", alignItems: "center", border: "1px solid", borderRadius: "10px", justifyContent: "space-between", minHeight: "220px"
            }}>
                <Typography variant="h5" sx={{ fontWeight: "bold", color: "black", fontFamily: "Roboto,Helvetica,Arial,sans-serif" }} >Login</Typography>
                <Box sx={{ width: "100%", display: "flex", margin: "8px" }}>
                    <Button sx={{ width: "50%", height: "50px", backgroundImage: "linear-gradient(to right, #F3429A , #AA44B1);", color: "white" }} onClick={() => { navigate("#") }} >Login</Button>
                    <Button sx={{ width: "50%", height: "50px", backgroundColor: "white", border: "1px solid #bdbbbb", color: "black" }} onClick={() => { navigate("/") }} >Signup</Button>

                </Box>
                <TextField onChange={(e) => { setEmail(e.target.value) }} sx={{ margin: "8px" }} fullWidth id="outlined-basic" label="Email" variant="outlined" type="email" />
                <TextField onChange={(e) => { setPassword(e.target.value) }} sx={{ margin: "8px" }} fullWidth id="outlined-basic" label="Password" variant="outlined" type="password" />
                <Button  fullWidth sx={{ backgroundImage: "linear-gradient(to right, #F3429A , #AA44B1);", color: "white" }} onClick={Login}>{isloading?<CircularProgress color="inherit" />:"Login"}</Button>
                <Typography variant='h6' sx={{ color: "black", fontSize: "16px" }}>Create new account
                     <Button onClick={() => { navigate("/") }} >Sign Up</Button> 
                </Typography>
            </Box>
        </Container>
    )
}

export default Login