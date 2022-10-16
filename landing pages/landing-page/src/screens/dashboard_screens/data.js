import axios from "axios";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function AllData() {
    const [showData, setData] = useState([])
    let getData = () => {
        axios.get("https://fakestoreapi.com/products")
        .then((success) => { console.log(success.data, setData(success.data)) })
        .catch((error) => { console.log(error) })
    }
    useEffect(() => {
        getData()
    }, [])
    return <>

        <Container>
            <Grid container spacing={1} sx={{ marginBottom: "20px" }}>
                {showData.map((e, i) => {
                    const { id, image,price,rating,title,description} = e
                    return <>
                        <Grid item md={3} sm={6} xs={12} key={id} sx={{ display: "flex", justifyContent: "center" }}>
                            <Card sx={{ maxWidth: "100%", textAlign: "left", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;" }}>
                                <CardActionArea>
                                    <img
                                        width={200} height={200} style={{ width: "100%", height: "1005" }}
                                        src={image} />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" sx={{fontSize:"20px"}}>
                                            {title.slice(0, 35) + "..."}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{fontSize:"16px"}}>
                                            { (description).slice(0, 65)+"..."}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions sx={{ display: "flex", margin: "10px", justifyContent: "right" }}>
                                    <Button variant="contained" size="small" color="primary">
                                        show details
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid></>
                }
                )}
            </Grid>
        </Container>
    </>
}
export default AllData;