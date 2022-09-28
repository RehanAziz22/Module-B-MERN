import "./App.css";
import navBar, { BottomBanner } from "./components/navbar";
import ActionAreaCard from "./components/cards";
import { Button, Grid } from "@mui/material";
import Container from "@mui/material/Container";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <navBar />
        <Container maxWidth="xl">
          <img src="https://images.olx.com.pk/thumbnails/288602233-800x600.webp"/>
        </Container>
        <Container maxWidth="md">
          <img src="https://tpc.googlesyndication.com/simgad/7634354312590663214"/>
        </Container>
        <Container maxWidth="xl" sx={{ textAlign: "center" }}>
          <h3 style={{color:"#002f34" , textAlign:"left"}}>Fresh recommendations</h3>
          <Grid
            container
            spacing={3}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <ActionAreaCard
                img="https://images.olx.com.pk/thumbnails/288801229-240x180.webp"
                title="Tufted Australian Bird"
                price="Rs 1,200"
                location="North Karachi, Karachi"
              />
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
            <ActionAreaCard
                img="https://images.olx.com.pk/thumbnails/285718932-240x180.webp"
                title="Toyota Corolla 1.3 Delux 1973 Sports"
                price="Rs 480,000"
                location="Gulberg 2, Lahore"
              />
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
            <ActionAreaCard
                img="https://images.olx.com.pk/thumbnails/288801223-240x180.webp"
                title="Acer Laptop Model V1 Aspire Ram 4 Hard 500"
                price="Rs 23,000"
                location="Johar Town, Lahore"
              />
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
            <ActionAreaCard
                img="https://images.olx.com.pk/thumbnails/272450991-240x180.webp"
                title="20% OFF ( 5 years warranty)+Guitars ( Acoustic Guitars)"
                price="Rs 12,500"
                location="Faisalabad, Punjab"
              />
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <ActionAreaCard
                img="https://images.olx.com.pk/thumbnails/285164111-240x180.webp"
                title="Avail Yourself A Great 1350 Square Feet Flat In Badar Commercial Area"
                price="Rs 50,000"
                location="Badar Commercial Area, Karachi"
              />
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
            <ActionAreaCard
                img="https://images.olx.com.pk/thumbnails/277826522-240x180.webp"
                title="Windows 10 Pro 64-Bit DVD Pack with activatation key"
                price="Rs 6,500"
                location="Gulberg 3, Lahore"
                />
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
            <ActionAreaCard
                img="https://images.olx.com.pk/thumbnails/275361602-240x180.webp"
                title="1 Kanal Residential Plot is for Sale in DHA Multan Block X-74"
                price="Rs 9,000,000"
                location="DHA Phase 1 - Sector X, Multan"
              />
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
            <ActionAreaCard
                img="https://images.olx.com.pk/thumbnails/288801217-240x180.webp"
                title="vitz 2014 back dor gaty"
                price="Rs 15,000"
                location="Allama Iqbal Town - Neelam Block, Lahore"
              />
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <ActionAreaCard
                img="https://images.olx.com.pk/thumbnails/288801212-240x180.webp"
                title="Nokia 110"
                price="Rs 3,899"
                location="DA Market, Muridike"
              />
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
            <ActionAreaCard
                img="https://images.olx.com.pk/thumbnails/285137907-240x180.webp"
                title="Buy Youtube 1k+ to 1M Subscribers 4k watch time Buy Monetized chnl"
                price="Rs 123"
                location="Expo One, Lahore"
              />
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
            <ActionAreaCard
                img="https://images.olx.com.pk/thumbnails/271401570-240x180.webp"
                title="Best Beginner to Professional Acoustic Guitars - Hi Volts"
                price="Rs 1,800"
                location="F-7 Markaz, Islamabad"
              />
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
            <ActionAreaCard
                img="https://images.olx.com.pk/thumbnails/273707842-240x180.webp"
                title="10 pcs - Chicken Peepers Eye Glasses Pheasant Poultry Blinders"
                price="Rs 250"
                location="Baghbanpura, Lahore"
              />
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <ActionAreaCard
                img="https://images.olx.com.pk/thumbnails/280658186-240x180.webp"
                title="Ac Srvice/AC maintainance/AC Installation/AC Repairing at door step"
                price=""
                location="Valencia Homes, Lahore"
              />
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
            <ActionAreaCard
                img="https://images.olx.com.pk/thumbnails/280065882-240x180.webp"
                title="CIVIC RS TURBO AVAILABLE"
                price="Rs 5,700,000"
                location="I-8, Islamabad"
              />
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
            <ActionAreaCard
                img="https://images.olx.com.pk/thumbnails/288801205-240x180.webp"
                title="Taddy Breader Pair For Sale"
                price="Rs 8,000"
                location="Allama Iqbal Town - Khyber Block, Lahore"
              />
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
            <ActionAreaCard
                img="https://images.olx.com.pk/thumbnails/288801197-240x180.webp"
                title="i phone 11 128GB my whatsapp number 0325=73=57=483"
                price="Rs 60,000"
                location="Bazar Kalan, Peshawar"
              />
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <ActionAreaCard
                img="https://images.olx.com.pk/thumbnails/288801192-240x180.webp"
                title="Wall,Cladding,Aluminum,Composite,ACP, Curtain,12mm,Glass,Alucobond"
                price=""
                location="Ali Model Town, Peshawar"
              />
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
            <ActionAreaCard
                img="https://images.olx.com.pk/thumbnails/288801189-240x180.webp"
                title="Token Rides"
                price="Rs 35,000"
                location="North Karachi, Karachi"
              />
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
            <ActionAreaCard
                img="https://images.olx.com.pk/thumbnails/288801174-240x180.webp"
                title="Poco x3"
                price="Rs 32,000"
                location="Aamir Town, Lahore"
              />
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
            <ActionAreaCard
                img="https://images.olx.com.pk/thumbnails/288801163-240x180.webp"
                title="Honda 125"
                price="Rs 135,000"
                location="Township-sector D2,lahore"
              />
            </Grid>
            {/* <Grid item lg={3} md={3} sm={6} xs={12}>
            <ActionAreaCard
                img=""
                title=""
                price="Rs "
                location=""
              />
            </Grid> */}
          </Grid>
          <Button sx={{color:"black" , border: "2px solid black"}} variant="outlined" size="large">
          Load More
        </Button>
        </Container>
        <Container maxWidth="md">
          <img style={{width:"100%"}} src="https://s0.2mdn.net/simgad/3922715619172844932"/>
        </Container>
        <BottomBanner/>
      </header>
    </div>
  );
}

export default App;
