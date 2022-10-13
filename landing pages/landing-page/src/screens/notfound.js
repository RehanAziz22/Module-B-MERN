import { Container } from "@mui/system";

function NotFound() {
    return <>
        <Container sx={{marginTop:"100px",width:"90%",display:"flex", backgroundColor:"white", flexWrap:"wrap",justifyContent:"center",alignItems:"center",minHeight:"500px",boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"}}>
        <h1 style={{fontSize:"50px",color: "blue",fontFamily:"fantasy", textTransform: "uppercase", fontWeight: "bold"}}>Page not found </h1>
        </Container>
    </>

}
export default NotFound;