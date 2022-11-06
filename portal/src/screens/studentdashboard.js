import { Button, Container } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import MyDrawer from '../components/mydrawer'
import CourseScreen from './adminscreens/courseScreen'
import Quiz from './adminscreens/quiz'
import Result from './adminscreens/result'
import Students from './adminscreens/students'
import AdminDashboard from './admindashboard'

export default function StudentDashboard() {
    let navigate = useNavigate()
    return (
        <div  style={{paddingTop:"80px"}}>

            <MyDrawer
            datasourse={[
                {
                    route: "studentquiz",
                    name: "Quiz",
                },
                {
                    route: "studentresult",
                    name: "Result",
                },
                {
                    route: "adminDashboard",
                    name: "adminDashboard",
                },
                {
                    route: "adminDashboard/*",
                    name: "adminDashboard",
                },
            ]}
            />
        </div>
    )
}
