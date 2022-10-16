import React from "react";
import {
    BrowserRouter as Router, Routes, Route

} from "react-router-dom";
import Navbar from "../components/navbar";
import About from "../screens/about";
import Contact from "../screens/contact";
import Home from "../screens/home";
import Services from "../screens/services";
import Dashboard from "../screens/dashboard";
import NotFound from "../screens/notfound";
import CardDetails from "../screens/cardDetails";

export default function AppRouter() {
    return (
        <Router>
            <Navbar />
            {/* <Dashboard/> */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="services" element={<Services />} />
                <Route path="contact" element={<Contact />} />
                <Route path="dashboard/*" element={<Dashboard />} />
                <Route path="cardDetails/*" element={<CardDetails />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

