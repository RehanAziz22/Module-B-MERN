import Message from "./dashboard_screens/messages"
import Feedback from "./dashboard_screens/feedback"
import Notification from "./dashboard_screens/notification"
import { Route, Routes, Link } from "react-router-dom";
import { Container } from "@mui/system";
import ResponsiveDrawer from "../components/drawer";
import Navbar from "../components/navbar";

function Dashboard() {
    return <>
        <ResponsiveDrawer />
    </>
}
export default Dashboard