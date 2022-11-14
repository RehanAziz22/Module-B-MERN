import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import StudentForm from './registeration';
import SchoolIcon from '@mui/icons-material/School';
import Login from './login';
import { Container, Grid } from '@mui/material';
import MyButton from '../components/mybutton';
const drawerWidth = 240;
// const navItems = ['Home', 'About', 'Contact'];
function Home(props) {
    let [btnDisabled, setBtnDisabled] = React.useState(true);
    const { window } = props;
    let navigate = useNavigate();
    let location = useLocation();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [navItem, setNaveItems] = React.useState([
        {
            path: "/",
            name: "Home",
        }, {
            path: "/registration",
            name: "Registeration",
        },
        {
            path: "/login/studentLogin",
            name: "Login",
        },
    ])

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    React.useEffect(() => {
        if (location.pathname === "/") {
            setBtnDisabled(true)
        } else {
            setBtnDisabled(false)
        }
    }, [])
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <SchoolIcon sx={{ marginRight: '10px' }} /> LMS
            </Typography>
            <Divider />
            <List>

                {navItem.map((item, i) => (
                    <ListItem key={i} disablePadding>
                        <ListItemButton onClick={() => { navigate(item.path); { item.path == "/" ? setBtnDisabled(true) : setBtnDisabled(false) } }} sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>


        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' }, textAlign: "left", alignItems: "center" }}
                    >
                        <SchoolIcon sx={{ marginRight: '10px' }} /> LMS
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItem.map((item, i) => (
                            <Button key={i} onClick={() => { navigate(item.path); { item.path == "/" ? setBtnDisabled(true) : setBtnDisabled(false) } }} sx={{ color: '#fff' }}>
                                {item.name}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main" sx={{ p: 3,width:"100%" }}>
                {/* <Toolbar /> */}
                {btnDisabled &&
                    <Container maxWidth={"xl"} sx={{ display: "flex", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;", backgroundColor: "white", padding: "15px", borderRadius: "5px", width: { xs: "100%", md: "100%" }, }}>
                        <Grid containe spacing={2}>
                            <Grid item xs={12} sm={12} sx={{ position: "relative" }}>
                                <Box className='homebgimage' sx={{ width: "100%", marginLeft: "auto",height:"60vh" }}>
                                    <Box  sx={{ width: "100%", marginLeft: "auto",height:"60vh",backgroundColor:"black",opacity:"0.3" }}>
                                    <img src={"https://i.tribune.com.pk/media/images/2109856-whattodoifyourkidcheatsingamesorontestsxx-1575194902/2109856-whattodoifyourkidcheatsingamesorontestsxx-1575194902.jpg"} height="200" width="600" style={{width: "100%", height: "600px", opacity: "0" }} />
                                
                                </Box></Box>
                                <Box  sx={{ position: "absolute", top: "70px", left: "30px", textAlign: "left", color: "#99F6F3" }}>
                                    <h1 style={{margin:"0px"}}>STUDY WITH</h1>
                                    <h3 style={{margin:"15px 0px"}}>

                                        GROUP OF
                                    </h3>
                                    <h2 style={{margin:"15px 0px"}}>Professionals</h2>
                                    <MyButton 
                                    label={"Register"}
                                    backgroundColor={"#99F6F3"}
                                    onClick={()=>{navigate('/registration');setBtnDisabled(false)}}/>
                                </Box>

                            </Grid>
                            <Grid item xs={12} sm={12}>
                                
                            </Grid>
                        </Grid>
                    </Container>}
                <Routes>
                    <Route path="registration" element={<StudentForm />} />
                    <Route path="login/*" element={<Login />} />
                </Routes>
            </Box>

        </Box>
    );
}

Home.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Home;