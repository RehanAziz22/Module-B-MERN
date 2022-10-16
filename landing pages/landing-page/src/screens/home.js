import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import image from "../undraw_Teaching_re_g7e3.png"

function Home() {
    return <>
    <Container 
    sx={{marginTop:"100px",backgroundColor:"white",maxWidth:"90%", color:"black", fontWeight:"bold", fontSize:"30px",boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"}}
     >
        <Grid container sx={{display:"flex", justifyContent:"center",alignItems:"center",minHeight:"500px"}}>
            <Grid item md="6" sm="12" xs="12">
                <h1 style={{fontSize:"50px",color: "blue",fontFamily:"inherit", textTransform: "uppercase", fontWeight: "bold"}}>GET THE BEST PRODUCTS !</h1>
            </Grid>
            <Grid item md="6" sm="12" xs="12">
            <img 
            width={200} height={300} style={{width: "100%", height:"1005"}}
             src={image}/>
            </Grid>
        </Grid>
    </Container>
    </>

}
export default Home;