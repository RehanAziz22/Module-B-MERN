import AppBar from "@mui/material/AppBar";
import { Grid } from "@mui/material";

function navBar() {
  return (
    <>
      <AppBar color="secondary" sx={{ backgroundColor: "black" }} />
    </>
  );
}

function BottomBanner() {
  return (
    <Grid container spacing={0}>
      <Grid item lg={4} md={3} sm={6} xs={12}>
        <img
          style={{ width: "100%" }}
          src="https://www.olx.com.pk/assets/olxMobileApp.f5579f77e849b600ad60857e46165516.webp"
        />
      </Grid>
      <Grid item lg={4} md={3} sm={6} xs={12} sx={{backgroundColor:"#F7F8F8" ,color:"#002f34",textAlign:"left"}}>
        <div>
          <h2>TRY THE OLX APP</h2>
          <h5>
            Buy, sell and find just about anything using the app on your mobile.
          </h5>
        </div>
      </Grid>
      <Grid item lg={4} md={3} sm={6} xs={12} sx={{backgroundColor:"#F7F8F8", color:"#002f34", textAlign:"left"}}>
        <div >
          <h6>GET YOUR APP TODAY</h6>
          <div style={{display: "flex" }}>
            <img style={{width: "30%" }} src="https://www.olx.com.pk/assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg" />
            <img style={{width: "30%" }} src="https://www.olx.com.pk/assets/iconGooglePlayEN_noinline.9892833785b26dd5896b7c70b089f684.svg" />
            <img style={{width: "30%" }} src="https://www.olx.com.pk/assets/iconAppGallery_noinline.6092a9d739c77147c884f1f7ab3f1771.svg" />
          </div>
        </div>
      </Grid>
    </Grid>
    // <div style={{ display: "flex" }}>
    // </div>
  );
}

export { navBar, BottomBanner };
