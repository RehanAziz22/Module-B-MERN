import React, { useState } from 'react'
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { Box, Button, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
// import PasswordChecklist from "react-password-checklist"
import CircularProgress from '@mui/material/CircularProgress';
import { signUpAdmin } from '../../config/firebasemethods';
import MyTextField from '../../components/mytextfield';
import generateUsername from 'generate-username-from-email';

function SignupAdmin() {
    // let [username, setUserName] = useState("username")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [username, setUserName] = useState("username")
    let [value, setValue] = useState("none")
    let [isloading, setLoader] = useState(false)
    let navigate = useNavigate()
    
     username = generateUsername(email)
    console.log(username)
    let AdminsignUp = () => {
        setLoader(true)
        signUpAdmin({ email, password, username })
            .then((success) => {
                setLoader(false)
                console.log(success);
            })
            .catch((error) => {
                setLoader(false)
                console.log(error);
                // ..
            });
    }
    return (
        <>
            <Container sx={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;", backgroundColor: "white", padding: "15px", borderRadius: "5px", width: { xs: "100%", md: "80%" } }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={12}>
                        <Typography variant="h5" sx={{ fontWeight: "bold", color: "black", fontFamily: "Roboto,Helvetica,Arial,sans-serif" }} >Create Admin</Typography>

                    </Grid>
                    {/* <Grid item xs={12} sm={12} md={12}>
                        <MyTextField onChange={(e) => { setUserName(e.target.value) }} fullWidth sx={{ margin: "8px" }} id="outlined-basic" label="Username" variant="outlined" type="text" />
                    </Grid> */}
                    <Grid item xs={12} sm={12} md={12}>
                        <MyTextField onChange={(e) => { setEmail(e.target.value) }} fullWidth sx={{ margin: "8px" }} id="outlined-basic" label="Email" variant="outlined" type="email" />
                    </Grid>

                    <Grid item xs={12} sm={12} md={12}>
                        <MyTextField onClick={() => { setValue("flex") }} onChange={(e) => { setPassword(e.target.value) }} fullWidth sx={{ margin: "8px" }} id="outlined-basic" label="Password" variant="outlined" type="password" />
                    </Grid>
                    {/* <PasswordChecklist
                    style={{ display: `${value}`, fontSize: "12px", color: "black", justifyContent: "left", width: "100%", margin: "18px" }}
                    rules={["minLength", "specialChar", "number", "capital"]}
                    minLength={8}
                    value={password}
                    messages={{
                        minLength: "atleast 8 characters.",
                        specialChar: " special character.",
                        number: "number.",
                        capital: "capital Letter,",
                    }}
                /> */}
                    <Grid item xs={12} sm={12} md={12}>

                        <Button fullWidth sx={{ backgroundImage: "linear-gradient( 109.6deg, rgb(107 155 227) 11.2%, rgba(110,123,251,1) 91.1% );", color: "white" }} onClick={AdminsignUp}>{isloading ? <CircularProgress color="inherit" /> : "Create"}</Button>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default SignupAdmin