import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {CardActions} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function ActionAreaCard(props) {
  const { img, title, price, location } = props;
  return (
    <Card sx={{ maxWidth: 345 , textAlign: "left"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          width="100%"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" justifyContent="space-between" display="flex"  sx={{fontSize:16}}>
            {title} <FavoriteBorderIcon/>
          </Typography>
          <Typography variant="body2" color="text.primary" sx={{fontSize:18 , fontWeight: "bold"}}>
            {price}
          </Typography>
          <CardActions>
          <Typography variant="body2" color="text.secondary">
            {location}
          </Typography>
          </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

