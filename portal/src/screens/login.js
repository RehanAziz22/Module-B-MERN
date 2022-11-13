import React, { useState } from 'react'
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../config/firebasemethods';
import CircularProgress from '@mui/material/CircularProgress';
import { Route, Routes } from 'react-router-dom'
import StudentLogin from './studentLogin';
import AdminLogin from './adminLogin';

function Login() {
    const [bgimagebtn2, setbgImagebtn2] = useState("")
    const [bgimagebtn1, setbgImagebtn1] = useState("linear-gradient( 109.6deg, rgb(107 155 227) 11.2%, rgba(110,123,251,1) 91.1% )")
    const [bgcolorbtn1, setbgColorbtn1] = useState("none")
    const [bgcolorbtn2, setbgColorbtn2] = useState("white")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [isloading, setLoader] = useState(false)
    let navigate = useNavigate()
    let [nodeName, setNodeName] = useState('users')
    let [routeName, setRouteName] = useState('studentLogin')
    let Login = async () => {
        setLoader(true)
        await loginUser({ email, password }, `${nodeName}`)
            .then((success) => {
                // console.log(success)
                let { email, password, username, id } = success
                // console.log(email, password, username, id)
                navigate(`/${routeName}/${success.id}`, { state: { id: id, username: username, email: email, password: password } })
                setLoader(false)
            })
            .catch((error) => {
                console.log(error);
                setLoader(false)
                // ..
            });

    }
    let showStudentRoute = () => {
        setNodeName(`users`)
        setRouteName(`studentLogin`)
        navigate("studentLogin")
        setbgImagebtn1("linear-gradient( 109.6deg, rgb(107 155 227) 11.2%, rgba(110,123,251,1) 91.1% )")
        setbgImagebtn2("none")
        setbgColorbtn2("white")
        setbgColorbtn1("none")

    }
    let createAdminRoute = () => {
        navigate("adminLogin")
        setRouteName(`admin`)
        setNodeName(`adminLogin`)
        setbgImagebtn2("linear-gradient( 109.6deg, rgb(107 155 227) 11.2%, rgba(110,123,251,1) 91.1% )")
        setbgImagebtn1("none")
        setbgColorbtn1("white")
        setbgColorbtn2("none")
    }
    return (
        <Container >
            <Box sx={{
                width: { sm: "100%", md: "100%", lg: "100%" },
                display: "flex", padding: "20px", backgroundColor: "white", flexDirection: "column", margin: "10px auto", alignItems: "center", border: "1px solid", borderRadius: "10px", justifyContent: "space-between", minHeight: "220px"
            }}>
                <Box sx={{ display: "flex", marginBottom: "10px", width: "100%" }}>
                    <Button sx={{ width: "50%", height: "50px", backgroundImage: bgimagebtn1, backgroundColor: bgcolorbtn1, color: bgcolorbtn2 === "white" ? bgcolorbtn2 : "black" }} onClick={showStudentRoute} >Student Login</Button>
                    <Button sx={{ width: "50%", height: "50px", backgroundImage: bgimagebtn2, backgroundColor: bgcolorbtn2, color: bgcolorbtn1 === "white" ? bgcolorbtn1 : "black" }} onClick={createAdminRoute} >Admin Login</Button>

                </Box>
                {/* <Typography variant="h5" sx={{ fontWeight: "bold", color: "black", fontFamily: "Roboto,Helvetica,Arial,sans-serif" }} >Login</Typography>
                <TextField onChange={(e) => { setEmail(e.target.value) }} sx={{ margin: "8px" }} fullWidth id="outlined-basic" label="Email" variant="outlined" type="email" />
                <TextField onChange={(e) => { setPassword(e.target.value) }} sx={{ margin: "8px" }} fullWidth id="outlined-basic" label="Password" variant="outlined" type="password" />
                <Button variant="contained" sx={{ backgroundImage: "linear-gradient( 109.6deg, rgb(107 155 227) 11.2%, rgba(110,123,251,1) 91.1% );" }} onClick={Login}>{isloading ? <CircularProgress color="inherit" /> : "Login"}</Button> */}
                <Routes>
                    <Route path="studentLogin" element={<StudentLogin />} />
                    <Route path="adminlogin" element={<AdminLogin />} />
                </Routes>

            </Box>
        </Container>
    )
}

export default Login;