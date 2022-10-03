import { Box, Grid, Typography, Button } from "@mui/material";
import { Container } from "@mui/system";
import TextField from "@mui/material/TextField";
import CardMedia from "@mui/material/CardMedia";
import { Padding } from "@mui/icons-material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
function Quotations() {
  return (
    <>
      <Typography
        sx={{
          color: "#333333",
          textAlign: "left",
          display: "flex",
          alignItems: "center",
          maxWidth: "lg",
          alignSelf: "start",
        }}
      >
        <img
          src="https://img.alicdn.com/tfs/TB1BNqtyND1gK0jSZFKXXcJrVXa-96-68.png"
          width="50px"
          height="40px"
        />
        <h5 style={{ fontSize: "24px", margin: "auto 8px" }}>
          Request For Quotations
        </h5>
        <h6 style={{ fontSize: "14px", fontWeight: "normal" }}>
          Get customized quotes quickly
        </h6>
      </Typography>
      <Grid container spacing={1}>
        <Grid item md={6} xs={12} sm={6} >
        <Card
            sx={{
              padding: "0px",
              maxWidth: "md",
              height: "auto",
              position: "relative",
            }}
          >
            <CardMedia
              component="img"
              height="200"
              width="100%"
              image={
                "https://img.alicdn.com/tfs/TB1RrnvyuT2gK0jSZFvXXXnFXXa-800-375.png"
              }
              alt="green iguana"
              sx={{ minHeight: "283px" }}
            />
            <CardContent
              sx={{
                textAlign: "left",
                position: "absolute",
                top: "20px",
                zIndex: "100",
                color: "white",
              }}
            >
              <Typography
                sx={{ fontSize: 32 }}
                gutterBottom
                variant="h2"
                component="div"
              >
                Global sourcing marketplace
              </Typography>
              <Button
                sx={{
                  borderRadius: "20px",
                  height: "37px",
                  border: "1px solid #fff",
                  color: "#fff",
                }}
                variant="outlined"
              >
                Learn More
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={6} xs={12} sm={6} >
        <Container
            maxWidth="md"
            sx={{
              minHeight: "287px",
              border: "2px solid #F2F3F7",
              backgroundColor: "#ffffff",
              textAlign: "left",
              padding: "10px",
              border: "6px solid #dcdee3",
            }}
          >
            <Typography
              variant="h5"
              component="div"
              sx={{
                color: "#333333",
                textAlign: "left",
                fontSize: 36,
                fontWeight: "700",
              }}
            >
              One request, multiple quotes
            </Typography>
            <TextField
              id="outlined-basic"
              label="Enter product name"
              variant="outlined"
              fullWidth
              size="small"
              margin="normal"
            />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <TextField
                id="outlined-basic"
                label="Quantity"
                variant="outlined"
                type="number"
                size="small"
                margin="normal"
              />
              <TextField
                id="outlined-basic"
                type="number"
                label="Enter product name"
                variant="outlined"
                size="small"
                margin="normal"
              />
            </Box>
            <button
              style={{
                backgroundColor: "#FF8B2A",
                height: "34px",
                fontSize: "16px",
                color: "white",
                borderRadius: "20px",
                border: "none",
                margin: "5px 0px",
              }}
            >
              Request for Quotation
            </button>
          </Container>
        </Grid>
        
      </Grid>
    </>
  );
}
function DisplayCards(props) {
  const { title, link } = props;
  return (
    <>
      <Typography
        sx={{
          fontSize: 16,
          color: "#3a3a3a",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
        }}
        gutterBottom
        variant="h5"
        component="div"
      >
        <img
          style={{ width: "16px", height: "16px", marginRight: "5px" }}
          src={link}
        />
        {title}
      </Typography>
    </>
  );
}

export { Quotations, DisplayCards };
