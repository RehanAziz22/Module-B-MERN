import * as React from "react";
import { Container } from '@mui/system';
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DvrSharpIcon from "@mui/icons-material/DvrSharp";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
// import Message from "../screens/dashboard_screens/messages";
// import Feedback from "../screens/dashboard_screens/feedback";
// import Notification from "../screens/dashboard_screens/notification";
// import AllData from "../screens/dashboard_screens/data";
import StudentForm from "../screens/studentform";
import CourseScreen from "../screens/adminscreens/courseScreen";
import Result from "../screens/adminscreens/result";
import Students from "../screens/adminscreens/students";
import Quiz from "../screens/adminscreens/quiz";
import GiveQuiz from "../screens/studentsScreen/givequiz";
import StudentResult from "../screens/studentsScreen/studentresult";
import SignupAdmin from "../screens/adminscreens/signupAdmin";
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import City from "../screens/adminscreens/city";
import Country from "../screens/adminscreens/country";
import { signoutUser } from "../config/firebasemethods";
import Profile from "../screens/adminprofile";
import AdminProfile from "../screens/adminprofile";
import StudentProfile from "../screens/studentprofile";
const drawerWidth = 240;

function MyDrawer(props) {
    const { window, datasourse, routespath, value, nodeName, userId,state ,profileNode} = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const navigate = useNavigate();


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const signout = () => {
        setAnchorEl(null);
        signoutUser(`${nodeName}/${userId}`)
            .then(() => {
                // setLoader(false)
                navigate(`/${nodeName}`)
            })
            .catch((err) => {
                // setLoader(false)
                console.log(err)
            })
    };
    const profile = () => {
        setAnchorEl(null);
        navigate(`${profileNode}`,{state:state})

    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    //     const [navItems, setNaveItems] = React.useState([{
    //         path: "/",
    //         name: "Home",
    //         icon: () => <InboxIcon />
    //     },
    //     {
    //         path: "/about",
    //         name: "About",
    //         icon: () => <InboxIcon />
    //     },
    //     {
    //         path: "/services",
    //         name: "Services",
    //         icon: () => <InboxIcon />
    //     },
    //     {
    //         path: "/contact",
    //         name: "Contact",
    //         icon: () => <InboxIcon />
    //     },
    //     {
    //         path: "dashboard",
    //         name: "Dashboard",
    //         icon: () => <InboxIcon />
    //     }
    // ])
    const drawer = (

        <div>
            <Typography variant="h6" sx={{ my: 2, textAlign: "center" }}>
                Dashboard
            </Typography>
            <Divider />
            {/* <List sx={{ display: { xs: 'block', sm: 'none' } }}>
                        {navItems.map((item, i) => (
                            <ListItem key={i} disablePadding>
                        <ListItemButton onClick={() => {
                            navigate(item.path)
                        }}>
                            <ListItemIcon>
                                {item.icon()}
                            </ListItemIcon>
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    </ListItem>
                        ))}
                    </List> */}
            <Divider />
            <List>
                {datasourse.map((text, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton onClick={() => {
                            navigate(text.route)
                        }}>
                            <ListItemIcon>
                                {<DvrSharpIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    // const navigate = useNavigate();

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar sx={{ justifyContent: { xs: "space-between", sm: "right" } }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    {/* <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item, i) => (
                            <Link key={i} className="navLinks" to={item.path} sx={{ color: '#fff !important', margin: "0px 5px !important" }}>
                                {item.name}
                            </Link>
                        ))}
                    </Box> */}
                    {auth && (
                        <div>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={profile}>Profile</MenuItem>
                                <MenuItem onClick={signout}>Log Out</MenuItem>
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: "none", sm: "block" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                }}
            >
                <Box>
                    <Routes>
                        <Route path="students" element={<Students />} />
                        <Route path="quiz" element={<Quiz />} />
                        <Route path="result" element={<Result />} />
                        <Route path="course/*" element={<CourseScreen />} />
                        <Route path="signupAdmin" element={<SignupAdmin />} />
                        <Route path="studentquiz" element={<GiveQuiz />} />
                        <Route path="studentresult" element={<StudentResult />} />
                        <Route path="country" element={<Country />} />
                        <Route path="city" element={<City />} />
                        <Route path="adminprofile" element={<AdminProfile />} />
                        <Route path="studentprofile" element={<StudentProfile />} />
                    </Routes>
                </Box>
            </Box>
        </Box>
    );
}

MyDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default MyDrawer;