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

                <Route path="registration" element={<StudentForm />} />
                <Route path="adminLogin" element={<AdminLogin />} />
                <Route path="studentLogin" element={<StudentLogin />} />
                <Route path="studentLogin/:id/*" element={<StudentDashboard />} />
                <Route path="adminLogin/:id/*" element={<AdminDashboard />} />
                <Route path="quiz" element={<QuizApp />} />
                <Route path="*" element={<p>Path not resolved</p>} />
            </Routes>
        </Router>
    );
}