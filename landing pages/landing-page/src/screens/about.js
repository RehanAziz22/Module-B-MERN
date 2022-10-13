import { Container } from "@mui/system";

function About() {
    return <>
        <Container sx={{marginTop:"100px",width:"90%",display:"flex", backgroundColor:"white", flexWrap:"wrap",justifyContent:"center",alignItems:"center",minHeight:"500px",boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"}}>
        <div><h1 style={{fontSize:"50px",color: "blue",fontFamily:"fantasy", textTransform: "uppercase", fontWeight: "bold"}}>About US</h1>
            <p style={{color: "black"}}>Tutor Academy provides home tutoring services where subject specialists teach the student one-on-one. Tutors are available for all levels of study to ensure success in the classroom and on tests. Find the right tutor to meet your needs today!</p></div>
        </Container>
    </>

}
export default About;