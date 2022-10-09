import React from "react";
import {
    BrowserRouter as Router,Routes,Route

} from "react-router-dom";
import Navbar from "../components/navbar";
import About from "../screens/about";
import Contact from "../screens/contact";
import Home from "../screens/home";
import Services from "../screens/services";

export default function AppRouter() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="services" element={<Services/>}/>
                <Route path="contact" element={<Contact/>}/>
            </Routes>
        </Router>
    );
}

