import { Box, Button, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import CreateCourse from './createCourse'
import AvaliableCourse from './avaliableCourse'

export default function CourseScreen() {
    const navigate = useNavigate()
    const [bgimagebtn2, setbgImagebtn2] = useState("")
    const [bgimagebtn1, setbgImagebtn1] = useState("")
    const [bgcolorbtn1, setbgColorbtn1] = useState("white")
    const [bgcolorbtn2, setbgColorbtn2] = useState("white")
    let showCourseRoute = () => {
        navigate("avaliableCourse")
        setbgImagebtn2("linear-gradient( 109.6deg, rgb(107 155 227) 11.2%, rgba(110,123,251,1) 91.1% )")
        setbgImagebtn1("none")
        setbgColorbtn1("white")
        setbgColorbtn2("none")
    }
    let createCourseRoute = () => {
        navigate("createCourse")
        setbgImagebtn1("linear-gradient( 109.6deg, rgb(107 155 227) 11.2%, rgba(110,123,251,1) 91.1% )")
        setbgImagebtn2("none")
        setbgColorbtn2("white")
        setbgColorbtn1("none")
    }
    return (
        <>
            <Box  sx={{  display: "flex", marginBottom:"10px",width:"100%"}}>
                <Button  sx={{ width: "50%", height: "50px", backgroundImage: bgimagebtn1, backgroundColor: bgcolorbtn1,  color: "black" }} onClick={createCourseRoute} >Create Course</Button>
                <Button  sx={{ width: "50%", height: "50px", backgroundImage: bgimagebtn2, backgroundColor: bgcolorbtn2,  color: "black" }} onClick={showCourseRoute} >Avaliable Course</Button>

            </Box>
            <Divider />
            
            <Box>
                <Routes>
                    <Route path="createCourse" element={<CreateCourse />} />
                    <Route path="avaliableCourse" element={<AvaliableCourse />} />
                </Routes>
            </Box></>
    )
}
