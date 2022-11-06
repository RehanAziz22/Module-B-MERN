import { Button, Container } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import MyDrawer from '../components/mydrawer'

export default function AdminDashboard() {
    let navigate = useNavigate()
    return (
        <div  style={{paddingTop:"80px"}}>

            <MyDrawer
            datasourse={
                [
                    {
                        route: "Students",
                        name: "Enrolled Students",
                    },
                    {
                        route: "quiz",
                        name: "Quiz",
                    },
                    {
                        route: "result",
                        name: "Result",
                    },
                    {
                        route: "course",
                        name: "Course",
                    },
                    {
                        route: "signupAdmin",
                        name: "Create Admin",
                    },
                ]
            }/>
        </div>
        // <Container width={"lg"}>
        // </Container>
    )
}
