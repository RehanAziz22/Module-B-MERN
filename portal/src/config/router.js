import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import AdminLogin from "../screens/adminLogin";
import AdminScreen from "../screens/admindashboard";
import Home from "../screens/home";
import StudentForm from "../screens/studentform";
import QuizApp from "../screens/studentsScreen/givequiz";
import AdminDashboard from "../screens/admindashboard";
import StudentLogin from "../screens/studentLogin";
import StudentDashboard from "../screens/studentdashboard";
import SignupAdmin from "../screens/adminscreens/signupAdmin";

export default function AppRouter() {
    return (
        <Router>


            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Routes>
                <Route path="registration" element={<StudentForm />} />
            </Routes>
            <Routes>
                <Route path="adminLogin" element={<AdminLogin />} />
            </Routes>
            <Routes>
                <Route path="studentLogin" element={<StudentLogin />} />
            </Routes>
            <Routes>
                <Route path="studentLogin/:id/*" element={<StudentDashboard/>} />
            </Routes>
            <Routes>
                <Route path="adminLogin/:id/*" element={<AdminDashboard  />} />
            </Routes>
            <Routes>
                <Route path="quiz" element={<QuizApp />} />
            </Routes>
            {/* <Routes>
            <Route path="/*" element={<p>Path not resolved</p>} />
            </Routes> */}
        </Router>
    );
}