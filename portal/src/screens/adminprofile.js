import { Box, Button, Container, Divider, Fade, FormControlLabel, Grid, Switch, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { getData } from '../config/firebasemethods';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import userimg from '../assets/man-avatar-profile-round-icon_24640-14044.webp'
import CircularProgress from '@mui/material/CircularProgress';
export default function AdminProfile() {
    const location = useLocation();
    const [profileDetails, setProfiledetails] = useState([])
    const [accountDetails, setAccountDetails] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    let [isloading, setLoader] = useState(false)
    let getProfile = () => {
        // console.log(module)
        getData(`admin/`)
            .then((res) => {
                // console.log(res)
                let arr = res.filter((x) => x.id == location.state.userId)
                console.log(arr)
                let obj = arr.find((x) => x.email)
                console.log(obj)
                setProfiledetails(obj)
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
        getProfile()
    }, []);


    return (<>
        <Container sx={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;", backgroundColor: "white", padding: "15px", borderRadius: "5px", width: { xs: "100%", md: "100%" } }}>
            <Grid container spacing={2} sx={{ width: "100%", margin: "auto" }}>
                <Grid item xs={12} sm={12} md={12}>
                    <Typography variant="h5" sx={{ fontWeight: "bold", color: "black", fontFamily: "Roboto,Helvetica,Arial,sans-serif" }} >Profile</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <img src={userimg} width="200px" style={{ borderRadius: "50%", border: "3px solid" }} />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    
                     <Typography gutterBottom variant="h5" component="div">
                            {profileDetails.username ? profileDetails.username.toUpperCase() : !isloading?<CircularProgress/>:"nodata"}
                        </Typography>
                </Grid>
                <Divider sx={{ margin: "15px 0px" }} />


               {profileDetails.length!==0&&<Grid item xs={12} sm={12} md={12} sx={{ padding: "0px !important", margin: "5px 0px" }}
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
                                            { profileDetails.username?profileDetails.username : ""}
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
                                            <span style={{ marginRight: "10px" }}>{ profileDetails.password ? (showPassword ? profileDetails.password : "********") : "----"}</span>
                                            <Button sx={{ padding: "0px", display: "contents" }} onMouseEnter={() => setShowPassword(true)} onMouseLeave={() => setShowPassword(false)}>{showPassword ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
                                            </Button>
                                        </Typography>
                                    </Grid>
                                </Box> }
                            </Fade>
                        </Box>
                    </Box>
                </Grid>}



            </Grid>
        </Container>

    </>
    )
}
