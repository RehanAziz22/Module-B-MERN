import { Container } from "@mui/system";

function About() {
    return <>
        <Container sx={{marginTop:"100px",width:"90%",display:"flex", backgroundColor:"white", flexWrap:"wrap",justifyContent:"center",alignItems:"center",minHeight:"500px",boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"}}>
        <div><h1 style={{fontSize:"50px",color: "blue",fontFamily:"fantasy", textTransform: "uppercase", fontWeight: "bold"}}>About US</h1>
            <p style={{color: "black"}}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:

“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.</p></div>
        </Container>
    </>

}
export default About;