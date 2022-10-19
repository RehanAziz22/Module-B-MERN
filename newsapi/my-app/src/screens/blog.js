import axios from "axios";
import { useEffect, useState } from "react";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import { Container } from "@mui/system";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { useNavigate } from "react-router-dom";
function Blog() {
    const [blogNews, setBlogNews] = useState([])
    const [techNews, setTechNews] = useState([])
    const [visible, setVisible] = useState(5)
    const navigate = useNavigate()
    const getData = async () => {
        

        await axios.get("https://newsapi.org/v2/everything?q=blog&apiKey=03a4359182214c24b8201e021a4589e0")
            .then((success) => {
                setBlogNews(success.data.articles);
            })
            .catch((err) => {
                console.log(err);
            });
        await axios.get("https://newsapi.org/v2/everything?q=technology&apiKey=03a4359182214c24b8201e021a4589e0")
            .then((success) => {
                setTechNews(success.data.articles);
            })
            .catch((err) => {
                console.log(err);
            });
            
            
            
        };
        
        console.log(blogNews)
        
    const loadMore = () => {
        setVisible(visible + 5)


    }
    useEffect(() => {
        getData();
    }, []);


    const blogCards = (e, i) => {
        const { author, content, description, publishedAt, url, name, title, urlToImage } = e
        return <>
            <div style={{ padding: "5px" }}>
                <Card onClick={() => {
                    navigate('/cardData', {
                        state: {
                            title: title,
                            author: author,
                            publishedAt: publishedAt,
                            image: urlToImage,
                            description: description,
                            content: content,
                            name: name,
                            url : url
                        }
                    })
                }} sx={{ width: "100%", height: "auto" }} key={i}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="300"
                            image={urlToImage}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card></div></>
    }
    const techCards = (e, i) => {
        const { author, content, description, publishedAt, url, name, title, urlToImage } = e
        return <>
            <div style={{ padding: "5px" }}>
                <Card onClick={() => {
                    navigate('/cardData', {
                        state: {
                            title: title,
                            author: author,
                            publishedAt: publishedAt,
                            image: urlToImage,
                            description: description,
                            content: content,
                            name: name,
                            url : url
                        }
                    })
                }} sx={{ width: "100%", height: "auto" }} key={i}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="200"
                            image={urlToImage}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {title}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card></div></>
    }
    return (
        <><Container maxWidth={"100%"} sx={{ paddingLeft: "0", minHeight: "92vh",marginTop: "20px"  }}>
            <Container sx={{ display: { xs: "block", sm: "flex" } }}>
                <div style={{
                    color: "white",
                    width: "70%",
                    overflowX: "hidden",//scroll
                    // overflowY: "hidden",
                    padding: 0,
                    margin: "0px auto"
                }}>
                    <div style={{ width: "fit-content", padding: "0", overflow: "hidden" }}>
                        {blogNews.slice(0, visible).map(blogCards)}
                        {visible < blogNews.length && (<Button sx={{ alignSelf: "center" }} onClick={loadMore}><ArrowCircleRightIcon sx={{ fontSize: "50px", color: "black" }} /></Button>)}

                    </div>
                </div>
                <div style={{
                    color: "white",
                    width: "30%",
                    overflowX: "hidden",//scroll
                    // overflowY: "hidden",
                    padding: 0,
                    margin: "0px auto"
                }}>
                    <div style={{ width: "fit-content", padding: "0", overflow: "hidden" }}>
                        {techNews.slice(0, visible).map(techCards)}
                    </div>
                </div>
            </Container>
        </Container></>
    );
}
export default Blog; 