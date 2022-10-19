import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
} from "react-router-dom";
import Home from "../screens/home";
import Login from "../screens/login";
import Signup from "../screens/signup";

export default function AppRouter() {
    return (
        <Router>

            <Routes>
                <Route path="/" element={<Signup />} />
            </Routes>
            <Routes>
                <Route path="login" element={<Login />} />
            </Routes>
            <Routes>
                <Route path="home" element={<Home />} />
            </Routes>


        </Router>
    );
}