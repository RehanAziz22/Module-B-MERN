import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import maths from "../undraw_mathematics_4otb.png"
import bio from "../undraw_medical_research_qg4d.png"
import chemistry from "../undraw_Science_re_mnnr.png"
import physics from "../undraw_mathematics_4otb.png"
import english from "../undraw_Books_re_8gea.png"
import computer from "../undraw_Code_thinking_re_gka2.png"
import history from "../undraw_in_thought_re_qyxl.png"

function Services() {

    const [course, setCourse] = useState([
        {
            id: 1,
            img: physics,
            name: "Physics",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nulla nunc, mattis eu pellentesque nec, tincidunt vel turpis. Curabitur non velit rutrum, consequat massa vitae, mollis leo. Integer eleifend sed massa sed tempus. Aenean erat ex, mollis quis viverra dapibus, eleifend et urna. Suspendisse venenatis arcu vitae urna semper, sed scelerisque massa euismod. Fusce ut ex pretium, feugiat dolor a, suscipit quam."
        },
        {
            id: 2,
            img: chemistry,
            name: "Chemistry",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nulla nunc, mattis eu pellentesque nec, tincidunt vel turpis. Curabitur non velit rutrum, consequat massa vitae, mollis leo. Integer eleifend sed massa sed tempus. Aenean erat ex, mollis quis viverra dapibus, eleifend et urna. Suspendisse venenatis arcu vitae urna semper, sed scelerisque massa euismod. Fusce ut ex pretium, feugiat dolor a, suscipit quam."
        },
        {
            id: 3,
            img: maths,
            name: "Maths",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nulla nunc, mattis eu pellentesque nec, tincidunt vel turpis. Curabitur non velit rutrum, consequat massa vitae, mollis leo. Integer eleifend sed massa sed tempus. Aenean erat ex, mollis quis viverra dapibus, eleifend et urna. Suspendisse venenatis arcu vitae urna semper, sed scelerisque massa euismod. Fusce ut ex pretium, feugiat dolor a, suscipit quam."
        },
        {
            id: 4,
            img: bio,
            name: "Biology",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nulla nunc, mattis eu pellentesque nec, tincidunt vel turpis. Curabitur non velit rutrum, consequat massa vitae, mollis leo. Integer eleifend sed massa sed tempus. Aenean erat ex, mollis quis viverra dapibus, eleifend et urna. Suspendisse venenatis arcu vitae urna semper, sed scelerisque massa euismod. Fusce ut ex pretium, feugiat dolor a, suscipit quam."
        },
        {
            id: 5,
            img: english,
            name: "English",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nulla nunc, mattis eu pellentesque nec, tincidunt vel turpis. Curabitur non velit rutrum, consequat massa vitae, mollis leo. Integer eleifend sed massa sed tempus. Aenean erat ex, mollis quis viverra dapibus, eleifend et urna. Suspendisse venenatis arcu vitae urna semper, sed scelerisque massa euismod. Fusce ut ex pretium, feugiat dolor a, suscipit quam."
        },
        {
            id: 6,
            img: history,
            name: "History",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nulla nunc, mattis eu pellentesque nec, tincidunt vel turpis. Curabitur non velit rutrum, consequat massa vitae, mollis leo. Integer eleifend sed massa sed tempus. Aenean erat ex, mollis quis viverra dapibus, eleifend et urna. Suspendisse venenatis arcu vitae urna semper, sed scelerisque massa euismod. Fusce ut ex pretium, feugiat dolor a, suscipit quam."
        },
        {
            id: 7,
            img: computer,
            name: "Computer Science",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nulla nunc, mattis eu pellentesque nec, tincidunt vel turpis. Curabitur non velit rutrum, consequat massa vitae, mollis leo. Integer eleifend sed massa sed tempus. Aenean erat ex, mollis quis viverra dapibus, eleifend et urna. Suspendisse venenatis arcu vitae urna semper, sed scelerisque massa euismod. Fusce ut ex pretium, feugiat dolor a, suscipit quam."
        }
    ])

    return <>
        <Container sx={{ maxWidth: "90%", backgroundColor: "white", height: "300px", margin: "20px auto", display:"flex",justifyContent:"center",alignItems:"center",boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;" }}>
            <h1 style={{ fontSize:"50px",color: "blue",fontFamily:"fantasy", textTransform: "uppercase", fontWeight: "bold" }}>Courses We Offer!</h1>
        </Container>
        <Container>
            <Grid container spacing={1} sx={{marginBottom:"20px"}}>
                {course.map((e, i) =>
                    <Grid item md="3" sm="6" xs="12" key={i} sx={{display:"flex",justifyContent:"center"}}>
                        <Card sx={{ maxWidth: "100%", textAlign: "left",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;" }}>
                            <CardActionArea>
                                <img
                                    width={200} height={200} style={{ width: "100%", height: "1005" }}
                                    src={e.img} />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {e.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {(e.details).slice(0, 76) + "..."}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions sx={{ display: "flex", margin: "10px", justifyContent: "right" }}>
                                <Button variant="contained" size="small" color="primary">
                                    Enroll Now
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>)}
            </Grid>
        </Container>

    </>

}
export default Services;