import React, { useState } from 'react'
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../config/firebasemethods';

function Login() {

    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let navigate = useNavigate()
    let Login = async () => {
        await loginUser({ email, password })
            .then(() => {
                navigate("/home")
            })
            .catch((error) => {
                console.log(error);
                // ..
            });

    }
    return (
        <Container>
            <h1>Login</h1>
            <Box sx={{
                width: { xs: "100%", sm: "80%", md: "50%" },
                display: "flex", padding: "10px", backgroundColor: "wheat", flexDirection: "column", margin: "10px auto", alignItems: "center", border: "1px solid", borderRadius: "10px", justifyContent: "space-between", minHeight: "220px"
            }}>
                <TextField onChange={(e) => { setEmail(e.target.value) }} fullWidth id="outlined-basic" label="Email" variant="outlined" type="email" />
                <TextField onChange={(e) => { setPassword(e.target.value) }} fullWidth id="outlined-basic" label="Password" variant="outlined" type="password" />
                <Button onClick={Login} variant="contained">Login</Button>
                <Typography variant='h6'>Create new account
                    <Button onClick={() => { navigate("/") }} >Sign Up</Button></Typography>
            </Box>
        </Container>
    )
}

export default Login