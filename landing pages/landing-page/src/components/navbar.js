import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DehazeIcon from '@mui/icons-material/Dehaze';

function Navbar() {

    const [show, setShow] = useState(true)
    const handleResize = () => {
        if (window.innerWidth > 600) {
            setShow(true)
        } else {
            setShow(false)
        }

    }
    // create an event listener
    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })
    return <navbar style={{
        display: "flex",
        padding: "15px",
        justifyContent: "space-between",
        position: "sticky",
        top: "0",
        zindex: "1",
        backgroundColor: "rgb(0, 153, 255)",
        alignItems: "center"
    }}>
        <div style={{ width: "40%", textAlign: "left" }}>
            <span style={{ textTransform: "uppercase", fontFamily: "Roboto, sans-serif", fontSize: "24px", fontWeight: "bold", marginLeft: "20px" }}>Tutor's</span>
        </div>
        <div className="toggle-btn" >
            <Button onClick={() => setShow(!show)} sx={{ color: "white" }}><DehazeIcon sx={{ fontSize: "2.5rem" }} /></Button>
        </div>
        {show && <div className="linkContainer" style={{
            display: "flex", justifyContent: "space-around", alignSelf: "right"
        }} >
            <Button className="toggle-btn" sx={{ alignSelf: "flex-start ", color: "white" }} onClick={() => setShow(!show)}><DehazeIcon sx={{ fontSize: "2.5rem" }} /></Button>
            <Link onClick={handleResize} className="navLinks" to="/">Home</Link>
            <Link onClick={handleResize} className="navLinks" to="about">About</Link>
            <Link onClick={handleResize} className="navLinks" to="services">Services</Link>
            <Link onClick={handleResize} className="navLinks" to="contact">Contact</Link>
            <Button sx={{ border: "solid white", color: "white", width: "max-content", alignSelf: "center" }} variant="outlined" >Sign Up</Button>
        </div>}
    </navbar >
}

export default Navbar;