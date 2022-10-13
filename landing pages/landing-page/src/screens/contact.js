import { Grid, Button } from "@mui/material";
import { Box, Container } from "@mui/system";
import image from "../undraw_personal_information_re_vw8a.png"
import TextField from '@mui/material/TextField';
import Textarea from '@mui/joy/Textarea';
import SendIcon from '@mui/icons-material/Send';

function Contact() {
    return <><Container
        sx={{ marginTop:"100px",backgroundColor: "white", maxWidth: "90%", color: "black", fontWeight: "bold", fontSize: "30px", marginBottom: "20px", boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;" }}
    >

        <Grid container sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "500px",paddingBottom :"20px" }}>
            <Grid item md="6" sm="12" xs="12">
                <img
                    width={200} height={300} style={{ width: "100%", height: "1005" }}
                    src={image} />
            </Grid>
            <Grid item md="6" sm="12" xs="12">
                <h1 style={{ fontSize: "50px", color: "blue", fontFamily: "fantasy", textTransform: "uppercase", fontWeight: "bold" }}>Contact US</h1>
                <Box component="form">
                    <TextField id="outlined-basic" label="Your Name" variant="outlined" fullWidth sx={{ margin: "10px 0px" }} />
                    <TextField id="outlined-basic" label="Email Address" variant="outlined" fullWidth sx={{ margin: "10px 0px" }} />
                    <Textarea fullWidth placeholder="Your Queries..." minRows={4} sx={{ margin: "10px 0px", width: "100%" }} /></Box>
                <div style={{ textAlign: "right" }}>
                    <Button sx={{ fontSize: "20px" }} variant="contained" ><SendIcon sx={{ width: "60px", fontSize: "30px" }} /></Button>
                </div>            
                </Grid>
        </Grid>
    </Container></>

}
export default Contact;