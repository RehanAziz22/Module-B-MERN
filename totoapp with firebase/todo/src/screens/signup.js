import React, { useState } from 'react'
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { signUpUser } from '../config/firebasemethods';

function Signup() {
    let [userName, setUserName] = useState("")
    let [email, setEmail] = useState("")
    let [contact, setContact] = useState("")
    let [password, setPassword] = useState("")
    let navigate = useNavigate()
    let signUp = () => {
        signUpUser({ email, password, userName, contact })
            .then((success) => { console.log(success, navigate("/login")) })// .then((userCredential) => {
            //     // Signed in 
            //     const user = userCredential.user;
            //     console.log(user)
                // navigate("/login")
            //     // ...
            // })
            .catch((error) => {

                console.log(error);
                // ..
            });
    }
    return (
        <Container>
            <h1>Signup</h1>
            <Box sx={{
                width: { xs: "100%", sm: "80%", md: "50%" },
                display: "flex", padding: "10px", backgroundColor: "wheat", flexDirection: "column", margin: "10px auto", alignItems: "center", border: "1px solid", borderRadius: "10px", justifyContent: "space-between", minHeight: "220px"
            }}>
                <TextField onChange={(e) => { setUserName(e.target.value) }} fullWidth sx={{ margin: "8px" }} id="outlined-basic" label="UserName" variant="outlined" />
                <TextField onChange={(e) => { setEmail(e.target.value) }} fullWidth sx={{ margin: "8px" }} id="outlined-basic" label="Email" variant="outlined" type="email"/>
                <TextField onChange={(e) => { setContact(e.target.value) }} fullWidth sx={{ margin: "8px" }} id="outlined-basic" label="Contact Number" variant="outlined" type="number"/>
                <TextField onChange={(e) => { setPassword(e.target.value) }} fullWidth sx={{ margin: "8px" }} id="outlined-basic" label="Password" variant="outlined" type="password" />
                <Button onClick={signUp} variant="contained">Sign Up</Button>
                <Typography variant='h6'>Already have an account ?
                    <Button onClick={() => { navigate("/login") }} >Login</Button></Typography>
            </Box>
        </Container>
    )
}

export default Signup