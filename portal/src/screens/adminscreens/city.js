import React, { useEffect, useState } from 'react'
import { Container, Divider, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import MyTextField from '../../components/mytextfield';
import sendData, { getData } from '../../config/firebasemethods';
import Button from '@mui/material/Button';
import MySelect from '../../components/mySelect';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import DenseTable from '../../components/table';

export default function City() {
  let [module, setModule] = useState({});
  let [selectedCourse, setSelectedCourse] = useState("");
  let [btnDisabled, setBtnDisabled] = useState(false);
  let [countryName, setCountryName] = useState("");
  let [cityCode, setCityCode] = useState('');
  let [cityName, setCityName] = useState('');
  let[cityData,setCityData]=useState([])
  // database function 
  // send data in Database
  let addCity = () => {
    console.log(module)
    module.countryName = countryName
    module.cityName = cityName
    module.cityCode = cityCode
    sendData(module,
      `cities/`)
      .then(((success) => { console.log(success, emptyfields()) }))
      .catch((err => { console.log(err) }))
  }
  let getCountryData = () => {
    console.log(module)

    getData(`cities/`)
      .then((res) => {
        setCityData(res)
        console.log(res)
      })
      .catch((err) => {
        alert(err)
      })
  }
  useEffect(() => { getCountryData() }, [])

  let emptyfields = () => {
    setCountryName('')
    setCityName('')
    setCityCode('')
  }
  return (
    <>
      <Container sx={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;", backgroundColor: "white", padding: "15px", borderRadius: "5px", width: { xs: "100%", md: "100%" } }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12}>
            <Typography variant='h5' sx={{ fontWeight: "bold" }}>Add City</Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={4} >
            <MySelect
              // -------------------------------------> City Name
              label={"Country "}
              required={true}
              disabled={btnDisabled}
              type={"text"}
              value={countryName}
              nodeName="country"
              valueField={"countryName"}
              displayField={"countryName"}
              onChange={(e) => { setCountryName(e.target.value) }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} >

            <MyTextField
              // -------------------------------------> city Name
              label={"City Name"}
              required={true}
              disabled={btnDisabled}
              value={cityName}
              type={"text"}
              onChange={(e) => { setCityName(e.target.value) }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} >

            <MyTextField
              // -------------------------------------> city Code
              label={"City Code"}
              required={true}
              disabled={btnDisabled}
              value={cityCode}
              type={"text"}
              onChange={(e) => { setCityCode(e.target.value) }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={1} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Button variant="contained"
              sx={{ backgroundImage: "linear-gradient( 109.6deg, rgb(107 155 227) 11.2%, rgba(110,123,251,1) 91.1% );" }} onClick={addCity}>Add</Button>
          </Grid>
          <DenseTable
              datasource={cityData}
              Cols={[
                {
                  key: "id",
                  displayName: "Id",
                },
                {
                  key: "cityName",
                  displayName: "City Name",
                },
                {
                  key: "cityCode",
                  displayName: "City Code",
                },
                {
                  key: "countryName",
                  displayName: "Country",
                },
              ]}
            />
        </Grid>
      </Container></>
  )
}
