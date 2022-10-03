import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { useState } from "react";
import { Grid, Chip, Tooltip, Box, Container, Button } from "@mui/material";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
function TradeCards() {
  const [tradeListData, setTradeListData] = useState([
    {
      id: 1,
      title: "Trade Assurance",
      description:
        "Trade Assurance is a free order protection service offered by Alibaba.com.",
      subDescription: "ORDER PROTECTION",
      image:
        "https://s.alicdn.com/@img/tfs/TB1uRJAxnqWBKNjSZFxXXcpLpXa-1180-360.png",
    },
    {
      id: 2,
      title: "Payment",
      description:
        "Trade Assurance is a free order protection service offered by Alibaba.com.",
      subDescription: "PAYMENT SOLUTION",
      image:
        "https://s.alicdn.com/@img/imgextra/i3/O1CN017MSDFT1euu038qE9l_!!6000000003932-0-tps-1180-360.jpg",
    },
    {
      id: 3,
      title: "Inspection solution",
      description:
        "Trade Assurance is a free order protection service offered by Alibaba.com.",
      subDescription: "INSPECTION",
      image:
        "https://s.alicdn.com/@img/tfs/TB10TSmw67nBKNjSZLeXXbxCFXa-1180-360.png",
    },
    {
      id: 4,
      title: "Ocean and air shipping",
      description:
        "Trade Assurance is a free order protection service offered by Alibaba.com.",
      subDescription: "LOGISTICs SERVICES",
      image:
        "https://s.alicdn.com/@img/tfs/TB17KqGN7zoK1RjSZFlXXai4VXa-1180-360.png",
    },
  ]);

  return (
    <Container maxWidth="lg" sx={{ margin: "0px auto" }}>
      <Typography sx={{ color: "#333333", textAlign: "left" }}>
        <h5 style={{ fontSize: "24px" }}>Trade services</h5>
        <h6 style={{ fontSize: "14px", fontWeight: "normal" }}>
          Alibaba.com's trade services help ensure that your purchases are
          protected.
        </h6>
      </Typography>
      <Grid container spacing={1}>
        {tradeListData.map((e, i) => (
          <Grid item md={6} xs={6} sm={6} key={i}>
            <Card sx={{ padding: "5px", maxWidth: "100%", height: "auto" }}>
              <CardMedia
                component="img"
                height="200"
                width="100%"
                image={e.image}
                alt="green iguana"
              />
              <CardContent sx={{ textAlign: "left" }}>
                <Typography
                  sx={{ fontSize: 14 }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  {e.title.slice(0, 20) + (e.title.length > 20 ? "..." : "")}
                </Typography>
                <Typography
                  gutterBottom
                  sx={{ fontSize: 16, fontWeight: "bold" }}
                  variant="h6"
                  component="div"
                >
                  {e.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {e.subDescription.slice(0, 20) +
                    (e.subDescription.length > 20 ? "..." : "")}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

function Navbar() {
  return (
    <> 
      <Box sx={{width:"20%", display:"flex", justifyContent:"space-around" , selfAlign:"right"}}>
      <PersonOutlineOutlinedIcon sx={{color:"black", width:"40px",height:"40px"}}/>
      <MessageOutlinedIcon sx={{color:"black", width:"40px",height:"40px"}}/>
      <ShoppingCartOutlinedIcon sx={{color:"black", width:"40px",height:"40px"}}/>
      <ShoppingBagOutlinedIcon sx={{color:"black", width:"40px",height:"40px"}}/>
      </Box>
    </>
  );
}

export { TradeCards, Navbar };
