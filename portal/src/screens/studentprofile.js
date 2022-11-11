import { Box, Button, Container, Divider, Fade, FormControlLabel, Grid, Switch, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { getData } from '../config/firebasemethods';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import SchoolIcon from '@mui/icons-material/School';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CircularProgress from '@mui/material/CircularProgress';

export default function StudentProfile() {
    const location = useLocation();
    const [userDetails, setUserdetails] = useState([])
    const [profileDetails, setProfiledetails] = useState([])
    const [personalInfo, setPersonalInfo] = useState(false)
    const [accountDetails, setAccountDetails] = useState(false)
    const [courseDetails, setCourseDetails] = useState(false)
    const [helpSupport, setHelpSupport] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    let [isloading, setLoader] = useState(false)
    const params = useParams();

    let getUserData = () => {
        // console.log(module)
        getData(`users/`)
        .then((res) => {
            // console.log(res)
            let arr = res.filter((x) => x.id == params.id)
            console.log(arr)
            let obj = arr.find((x) => x.email)
            console.log(obj)
            setUserdetails(obj)
        })
        .catch((err) => {
            console.log(err)
        })
        }
    let getProfile = () => {
        getData(`studentsRecord/`)
            // setLoader(true)
            .then((res) => {
                // console.log(res)
                let arr = res.filter((x) => x.email == location.state.userEmail)
                // console.log(res)
                let obj = arr.find((x) => x.email)
                // console.log(obj)
                setProfiledetails(obj)
                setLoader(false)
            })
            .catch((err) => {
                console.log(err)
            })



    }
    useEffect(() => {
        if (location.state && location.state.userId) {
            // setUser(location.state)
            // console.log(location.state)
        } else {
            // navigate("/");
        }
        getUserData()
        getProfile()
    }, []);


    return (<>
        <Container sx={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;", backgroundColor: "white", padding: "15px", borderRadius: "5px", width: { xs: "100%", md: "100%" } }}>
            <Grid container spacing={2} sx={{ width: "100%", margin: "auto" }}>
                <Grid item xs={12} sm={12} md={12}>
                    <Typography variant="h5" sx={{ fontWeight: "bold", color: "black", fontFamily: "Roboto,Helvetica,Arial,sans-serif" }} >Profile</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <img src='https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=2000' width="200px" style={{ borderRadius: "50%", border: "3px solid" }} />
                </Grid>
                {
                    // -------------------------------------------Name
                }
                <Grid item xs={12} sm={12} md={12}>
                    {profileDetails.length !== 0 ?
                        <Typography gutterBottom variant="h5" component="div">
                            {profileDetails.firstName ? profileDetails.firstName.toUpperCase() : "--"}
                            {profileDetails.lastName ? profileDetails.lastName.toUpperCase() : "--"}
                        </Typography> : !isloading ? <CircularProgress /> : "nodata"}
                </Grid>
                <Divider sx={{ margin: "15px 0px" }} />

                {
                    // -------------------------------------------Profile & Information
                }
                {profileDetails.length !== 0 && <Grid item xs={12} sm={12} md={12} sx={{ padding: "0px !important", margin: "5px 0px" }}
                >
                    <Box
                        sx={{
                            backgroundImage: "linear-gradient( 109.6deg, rgb(107 155 227) 11.2%, rgba(110,123,251,1) 91.1% );", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;", color: "white", display: "flex", justifyContent: "space-between", borderRadius: "5px", padding: "10px 28px",
                            margin: "0px",
                            alignItems: "center"
                        }}
                        onClick={() => { setPersonalInfo((prev) => !prev); }}
                    >

                        <Typography gutterBottom variant="h6" component="div" sx={{ margin: "0px" }}>
                            Personal Information
                        </Typography>
                        {personalInfo ? <ExpandLessIcon sx={{ fontSize: "2.5rem" }} /> : <AccountCircleIcon />}
                    </Box>

                    <Box sx={{ height: "auto", width: "100%" }}>
                        <Box sx={{ display: personalInfo ? 'flex' : "none" }}>

                            <Fade in={personalInfo}>{<Box sx={{ backgroundColor: "#e1e1e1", width: "100%", padding: "0px 20px" }}>
                                <Typography gutterBottom variant="h6" component="div" sx={{ textAlign: "left", fontWeight: "bold", }}>
                                    Basic Info
                                </Typography>
                                <Box sx={{ borderTop: "dotted 2px grey" }}>
                                    <Grid item xs={12} sm={12} md={12} sx={{ display: "flex", justifyContent: "space-between" }}>
                                        <Typography gutterBottom variant="h6" sx={{ fontSize: { xs: "1rem" } }} component="div">
                                            Name :
                                        </Typography>
                                        <Typography gutterBottom variant="h6" sx={{ fontSize: { xs: "1rem" } }} component="div">
                                            {profileDetails.firstName ? profileDetails.firstName : "--"}
                                            {profileDetails.lastName ? profileDetails.lastName : "--"}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} sx={{ display: "flex", justifyContent: "space-between" }}>
                                        <Typography gutterBottom variant="h6" sx={{ fontSize: { xs: "1rem" } }} component="div">
                                            Father Name :
                                        </Typography> <Typography gutterBottom variant="h6" sx={{ fontSize: { xs: "1rem" } }} component="div">
                                            {profileDetails.fatherName ? profileDetails.fatherName : "--"}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} sx={{ display: "flex", justifyContent: "space-between" }}>
                                        <Typography gutterBottom variant="h6" sx={{ fontSize: { xs: "1rem" } }} component="div">
                                            Date Of Birth :
                                        </Typography> <Typography gutterBottom variant="h6" sx={{ fontSize: { xs: "1rem" } }} component="div">
                                            {profileDetails.dateOfBirth ? profileDetails.dateOfBirth.toUpperCase() : "--"}
                                        </Typography>
                                    </Grid>
                                </Box>
                                <Typography gutterBottom variant="h6" component="div" sx={{ textAlign: "left", fontWeight: "bold", }}>
                                    Contact Details
                                </Typography>
                                <Box sx={{ borderTop: "dotted 2px grey" }}>
                                    <Grid item xs={12} sm={12} md={12} sx={{ display: "flex", justifyContent: "space-between" }}>
                                        <Typography gutterBottom variant="h6" sx={{ fontSize: { xs: "1rem" } }} component="div">
                                            Contact :
                                        </Typography>
                                        <Typography gutterBottom variant="h6" sx={{ fontSize: { xs: "1rem" } }} component="div">
                                            {profileDetails.contact ? profileDetails.contact : "--"}

                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} sx={{ display: "flex", justifyContent: "space-between" }}>
                                        <Typography gutterBottom variant="h6" sx={{ fontSize: { xs: "1rem" } }} component="div">
                                            Email :
                                        </Typography> <Typography gutterBottom variant="h6" sx={{ fontSize: { xs: "1rem" } }} component="div">
                                            {profileDetails.email ? profileDetails.email : "--"}
                                        </Typography>
                                    </Grid>
                                </Box>

                            </Box>}
                            </Fade>
                        </Box>
                    </Box>
                </Grid>}
                {
                    // -------------------------------------------Account & Details
                }
                {profileDetails.length !== 0 && <Grid item xs={12} sm={12} md={12} sx={{ padding: "0px !important", margin: "5px 0px" }}
                >
                    <Box
                        sx={{
                            backgroundImage: "linear-gradient( 109.6deg, rgb(107 155 227) 11.2%, rgba(110,123,251,1) 91.1% );", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;", color: "white", display: "flex", justifyContent: "space-between", borderRadius: "5px", padding: "10px 28px",
                            margin: "0px",
                            alignItems: "center"
                        }}
                        onClick={() => { setAccountDetails((prev) => !prev); }}
                    >

                        <Typography gutterBottom variant="h6" component="div" sx={{ margin: "0px" }}>
                            Account Details
                        </Typography>
                        {accountDetails ? <ExpandLessIcon sx={{ fontSize: "2.5rem" }} /> : <LockPersonIcon />}
                    </Box>

                    <Box sx={{ height: "auto", width: "100%" }}>
                        <Box sx={{ display: accountDetails ? 'flex' : "none" }}>

                            <Fade in={accountDetails}>{
                                <Box sx={{ backgroundColor: "#e1e1e1", width: "100%", padding: "0px 20px" }}>
                                    <Grid item xs={12} sm={12} md={12} sx={{ display: "flex", justifyContent: "space-between" }}>
                                        <Typography gutterBottom variant="h6" sx={{ fontSize: { xs: "1rem" } }} component="div">
                                            Username :
                                        </Typography>
                                        <Typography gutterBottom variant="h6" sx={{ fontSize: { xs: "1rem" } }} component="div">
                                            {profileDetails.username ? profileDetails.username : ""}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} sx={{ display: "flex", justifyContent: "space-between" }}>
                                        <Typography gutterBottom variant="h6" sx={{ fontSize: { xs: "1rem" } }} component="div">
                                            Email :
                                        </Typography> <Typography gutterBottom variant="h6" sx={{ fontSize: { xs: "1rem" } }} component="div">
                                            {profileDetails.email ? profileDetails.email : "--"}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} sx={{ display: "flex", justifyContent: "space-between" }}>
                                        <Typography gutterBottom variant="h6" sx={{ fontSize: { xs: "1rem" } }} component="div">
                                            Password :
                                        </Typography> <Typography gutterBottom variant="h6" component="div" sx={{ display: "flex", alignItem: "center" }}>
                                            <span style={{ marginRight: "10px" }}>{userDetails.password ? (showPassword ? userDetails.password : "********") : "----"}</span>
                                            <Button sx={{ padding: "0px", display: "contents" }} onMouseEnter={() => setShowPassword(true)} onMouseLeave={() => setShowPassword(false)}>{showPassword ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
                                            </Button>
                                        </Typography>
                                    </Grid>
                                </Box>}
                            </Fade>
                        </Box>
                    </Box>
                </Grid>}
                {
                    // -------------------------------------------Course & Details
                }
                {profileDetails.length !== 0 && <Grid item xs={12} sm={12} md={12} sx={{ padding: "0px !important", margin: "5px 0px" }}
                >
                    <Box
                        sx={{
                            backgroundImage: "linear-gradient( 109.6deg, rgb(107 155 227) 11.2%, rgba(110,123,251,1) 91.1% );", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;", color: "white", display: "flex", justifyContent: "space-between", borderRadius: "5px", padding: "10px 28px",
                            margin: "0px",
                            alignItems: "center"
                        }}
                        onClick={() => { setCourseDetails((prev) => !prev); }}
                    >

                        <Typography gutterBottom variant="h6" component="div" sx={{ margin: "0px" }}>
                            Course Details
                        </Typography>
                        {courseDetails ? <ExpandLessIcon sx={{ fontSize: "2.5rem" }} /> : <SchoolIcon />}
                    </Box>

                    <Box sx={{ height: "auto", width: "100%" }}>
                        <Box sx={{ display: courseDetails ? 'flex' : "none" }}>

                            <Fade in={courseDetails}>{<Box sx={{ backgroundColor: "#e1e1e1", width: "100%", padding: "0px 20px" }}>
                                <Grid item xs={12} sm={12} md={12} sx={{ display: "flex", justifyContent: "space-between" }}>
                                    <Typography gutterBottom variant="h6" sx={{ fontSize: { xs: "1rem" } }} component="div">
                                        Enrolled Course :
                                    </Typography>
                                    <Typography gutterBottom variant="h6" sx={{ fontSize: { xs: "1rem" } }} component="div">
                                        {profileDetails.course ? profileDetails.course : "--"}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} sx={{ display: "flex", justifyContent: "space-between" }}>
                                    <Typography gutterBottom variant="h6" sx={{ fontSize: { xs: "1rem" } }} component="div">
                                        Section :
                                    </Typography> <Typography gutterBottom variant="h6" sx={{ fontSize: { xs: "1rem" } }} component="div">
                                        {profileDetails.section ? profileDetails.section : "--"}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} sx={{ display: "flex", justifyContent: "space-between" }}>
                                    <Typography gutterBottom variant="h6" sx={{ fontSize: { xs: "1rem" } }} component="div">
                                        Registeration date :
                                    </Typography> <Typography gutterBottom variant="h6" sx={{ fontSize: { xs: "1rem" } }} component="div">
                                        {profileDetails.registrationDate ? profileDetails.registrationDate : "--"}
                                    </Typography>
                                </Grid>
                            </Box>}
                            </Fade>
                        </Box>
                    </Box>
                </Grid>}
                {
                    // -------------------------------------------help & Support
                }
                {profileDetails.length !== 0 && <Grid item xs={12} sm={12} md={12} sx={{ padding: "0px !important", margin: "5px 0px" }}
                >
                    <Box
                        sx={{
                            backgroundImage: "linear-gradient( 109.6deg, rgb(107 155 227) 11.2%, rgba(110,123,251,1) 91.1% );", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;", color: "white", display: "flex", justifyContent: "space-between", borderRadius: "5px", padding: "10px 28px",
                            margin: "0px",
                            alignItems: "center"
                        }}
                        onClick={() => { setHelpSupport((prev) => !prev); }}
                    >

                        <Typography gutterBottom variant="h6" component="div" sx={{ margin: "0px" }}>
                            Help & Support
                        </Typography>
                        {helpSupport ? <ExpandLessIcon sx={{ fontSize: "2.5rem" }} /> : <SupportAgentIcon />}
                    </Box>

                    <Box sx={{ height: "auto", width: "100%" }}>
                        <Box sx={{ display: helpSupport ? 'flex' : "none" }}>

                            <Fade in={helpSupport}>{<Box sx={{ backgroundColor: "#e1e1e1", width: "100%", padding: "0px 20px" }}>

                                <Grid item xs={12} sm={12} md={12} sx={{ display: "flex", justifyContent: "space-between" }}>
                                    <Typography gutterBottom variant="h6" sx={{ fontSize: { xs: "1rem" } }} component="div">
                                        If you need help or support for the app, please contact us at support@app.com. We'll be happy to help you with any issues you're having.
                                    </Typography>

                                </Grid>

                            </Box>}
                            </Fade>
                        </Box>
                    </Box>
                </Grid>}


            </Grid>
        </Container>

    </>
    )
}
