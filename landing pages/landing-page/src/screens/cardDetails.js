import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Divider } from "@mui/material";
import Rating from '@mui/material/Rating';
function CardDetails() {
    const location = useLocation();
    const navigate = useNavigate()

    useEffect(() => {
        if (location.state && location.state.title) {
            // setUser(location.state)
            console.log(location.state)
        } else {
            navigate("/");
        }
    }, []);

    return (
        <>
            <Container maxWidth={"lg"} sx={{ marginTop: "100px" }}>

                {/* <button onClick={() => navigate("/")}>Go to Home</button> */}
                <Card sx={{ maxWidth: "100%", display:{sm:"flex",xs:"block"} }}>
                    <Box sx={{width:{sm:"35%"},padding:"20px"}}>
                    <img className="card"
                        width={"300px"} height={"400px"}
                        src={location.state && location.state.image ? location.state.image : "--"}
                        alt="green iguana"
                        
                        />
                    </Box>
                    
                    <CardContent sx={{width:{sm:"65%"}, padding:"25px", textAlign: "left"}}>
                        <Typography gutterBottom variant="h5" component="div">
                            { location.state.title ? location.state.title : "--"}
                        </Typography>
                        <Divider sx={{margin:"15px 0px"}}/>
                        <Typography variant="body2" color="text.secondary"><b>Product Details:</b> {
                            location.state.description ? location.state.description : "--"}
                        </Typography>
                        <Divider sx={{margin:"15px 0px"}}/>

                        <Typography variant="body2" color="text.secondary"><b>Category :</b>{
                            location.state.category ? location.state.category : "--"}
                        </Typography>
                        <Divider sx={{margin:"15px 0px"}}/>

                        <Typography variant="body2" color="text.secondary"><b>Price : </b>{
                            location.state.price ? location.state.price : "--"} PKR
                        </Typography>
                        <Divider sx={{margin:"15px 0px"}}/>
                        <Rating name="read-only" value={location.state.rate} readOnly />
                    <CardActions>
                        <Button size="small">BUY NOW</Button>
                    </CardActions>
                    </CardContent>
                </Card>
            </Container>
        </>
    );
}
export default CardDetails