import Message from "./dashboard_screens/messages"
import Feedback from "./dashboard_screens/feedback"
import Notification from "./dashboard_screens/notification"
import { Route, Routes, Link } from "react-router-dom";
import { Container } from "@mui/system";

function Dashboard() {
    return <>
        <Container className="conLeft" sx={{height: "100vh", flexDirection: "column", width: "30%", display: "flex", position: "fixed", left: "0", backgroundColor: "white", flexWrap: "wrap", justifyContent: "center", alignItems: "center", minHeight: "500px", boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;" }}>
            <Container sx={{ width: "100%", height: "70vh", flexDirection: "column", display: "flex", alignItems: "flex-start" }}>
                <Link style={{margin:"5px 0px"}} to='message'>Message</Link>
                <Link style={{margin:"5px 0px"}} to='feedback'>Feedback</Link>
                <Link style={{margin:"5px 0px"}} to='notification'>Notification</Link></Container>
        </Container>
        <Container className="conRight" sx={{ width: "70%", marginRight:"0px",display: "flex", backgroundColor: "transparent", flexWrap: "wrap",  justifyContent: "center", alignItems: "center", minHeight: "500px" }}>
            <Routes>
                <Route path='message' element={<Message />} />
                <Route path="feedback" element={<Feedback />} />
                <Route path="notification" element={<Notification />} />
            </Routes>
        </Container>
    </>
}
export default Dashboard