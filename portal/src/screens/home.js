import { Button, Container } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    let navigate = useNavigate()
    return (
        <Container >
            <Button sx={{color:"black"}} onClick={()=>{navigate("/registration")}}>Registration</Button>
            <Button sx={{color:"black"}} onClick={()=>{navigate("/studentLogin")}}>Student Login</Button>
            <Button sx={{color:"black"}} onClick={()=>{navigate("/adminLogin")}}>Admin Login</Button>
            {/* <Button sx={{color:"black"}} onClick={()=>{navigate("/quiz")}}>Quiz</Button> */}
        </Container>
    )
}
