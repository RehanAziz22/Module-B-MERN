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
function CardData() {
    const location = useLocation();
    const navigate = useNavigate()
const [value,setValue] = useState(0)
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
            <Container maxWidth={"lg"} sx={{ marginTop: "20px" }}>
                <Card sx={{ maxWidth: "100%", display: { sm: "flex", xs: "block" } }}>
                    <Box sx={{ width: { sm: "35%" }, padding: "20px" }}>
                        <img className="card"
                            width={"100%"} height={"400px"}
                            src={location.state && location.state.image ? location.state.image : "--"}
                            alt="green iguana"

                        />
                    </Box>

                    <CardContent sx={{ width: { sm: "65%" }, padding: "25px", textAlign: "left" }}>
                        <Typography gutterBottom variant="h5" component="div">
                            {location.state.title ? location.state.title : "--"}
                        </Typography>
                        <Divider sx={{ margin: "15px 0px" }} />

                        <Typography variant="body2" color="text.secondary">{
                            location.state.description ? location.state.description : "--"}
                        </Typography>
                        <Divider sx={{ margin: "15px 0px" }} />

                        <Typography variant="body2" color="text.secondary"><b>Published Date: </b>{
                            location.state.publishedAt ? location.state.publishedAt : "--"}
                        </Typography>
                        <Divider sx={{ margin: "15px 0px" }} />

                        <Typography variant="body2" color="text.secondary"><b>Author: </b>{
                            location.state.author ? location.state.author : "--"}
                        </Typography>
                        <Divider sx={{ margin: "15px 0px" }} />

                        <Typography variant="body2" color="text.secondary"><b>content: </b>{
                            location.state.content ? location.state.content : "--"}
                        </Typography>
                        <Divider sx={{ margin: "15px 0px" }} />

                        <CardActions>
                            <Typography variant="body2" color="text.secondary"><b>more details : </b>{
                                location.state.url ? <Button onClick={() => navigate(location.state.url)} size="small">{location.state.url}</Button> : "--"}
                            </Typography>
                            <Divider sx={{ margin: "15px 0px" }} />

                        </CardActions>
                        <Rating name="simple-controlled" value={value} onChange={(event, newValue) => {setValue(newValue);}}                        />
                    </CardContent>
                </Card>
            </Container>
        </>
    );
}
export default CardData;