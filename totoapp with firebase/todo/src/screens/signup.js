import React, { useState } from 'react'
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { signUpUser } from '../config/firebasemethods';
import PasswordChecklist from "react-password-checklist"

function Signup() {
    let [userName, setUserName] = useState("username")
    let [email, setEmail] = useState("")
    let [contact, setContact] = useState("123456789")
    let [password, setPassword] = useState("")
    let [value, setValue] = useState("none")
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
        <Container sx={{marginTop:"100px"}}>
            <Box sx={{
                width: { sm: "80%", md: "50%", lg:"40%" },
                display: "flex", padding: "20px", backgroundColor: "White", flexDirection: "column", margin: "10px auto", alignItems: "center", border: "1px solid", borderRadius: "10px", justifyContent: "space-between", minHeight: "220px"
            }}>
                <Typography variant="h5" sx={{fontWeight: "bold", color:"black",fontFamily:"Roboto,Helvetica,Arial,sans-serif"}} >Signup</Typography>
                <Box sx={{width:"100%", display:"flex",margin: "8px"}}>
                    <Button sx={{width:"50%", height:"50px",backgroundColor:"white",border:"1px solid #bdbbbb", color:"black"}} onClick={() => { navigate("/login") }} >Login</Button>
                    <Button sx={{width:"50%", height:"50px",backgroundImage: "linear-gradient(to right, #F3429A , #AA44B1);", color:"white"}}onClick={() => { navigate("#") }} >Signup</Button>

                </Box>
                <Box sx={{width:"104%" ,display:"flex"}}>
                <TextField onChange={(e) => { setUserName(e.target.value) }}  sx={{ margin: "8px" }} id="outlined-basic" label="UserName" variant="outlined" />
                <TextField onChange={(e) => { setContact(e.target.value) }}  sx={{ margin: "8px" }} id="outlined-basic" label="Contact Number" variant="outlined" type="number"/>
                </Box>
                <TextField onChange={(e) => { setEmail(e.target.value) }} fullWidth sx={{ margin: "8px" }} id="outlined-basic" label="Email" variant="outlined" type="email" />
                <TextField onClick={()=>{setValue("flex")}}onChange={(e) => { setPassword(e.target.value) }} fullWidth sx={{ margin: "8px" }} id="outlined-basic" label="Password" variant="outlined" type="password" />
                <PasswordChecklist
                style={{display:`${value}`, fontSize:"12px",color:"black",justifyContent:"left", width:"100%", margin: "18px"}}
                    rules={["minLength", "specialChar", "number", "capital"]}
                    minLength={8}
                    value={password}
                    messages={{
                        minLength: "atleast 8 characters.",
                        specialChar: " special character.",
                        number: "number.",
                        capital: "capital Letter,",
                    }}
                />
                    <Button fullWidth sx={{backgroundImage: "linear-gradient(to right, #F3429A , #AA44B1);", color:"white"}} onClick={signUp }>Signup</Button>
                <Typography variant='h6' sx={{color:"black",fontSize:"16px"}}>Already have an account ?
                    <Button onClick={() => { navigate("/login") }} >Login</Button></Typography>
            </Box>
        </Container>
    )
}

export default Signup