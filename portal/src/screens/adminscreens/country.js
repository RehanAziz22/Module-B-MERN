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

export default function Country() {
  let [module, setModule] = useState({});
  let [countryName, setCountryName] = useState("");
  let [countryCode, setCountryCode] = useState('');
  let [countryData, setCountryData] = useState([]);
  let [currency, setCurrency] = useState('');
  let [btnDisabled, setBtnDisabled] = useState(false);
  // database function 
  // send data in Database
  let addCountry = () => {
    console.log(module)
    module.countryName = countryName
    module.countryCode = countryCode
    module.currency = currency
    sendData(module,
      `country/`)
      .then(((success) => { console.log(success, emptyfields()) }))
      .catch((err => { console.log(err) }))
  }

  let getCountryData = () => {
    console.log(module)

    getData(`country/`)
      .then((res) => {
        setCountryData(res)
        console.log(res)
      })
      .catch((err) => {
        alert(err)
      })
  }
  useEffect(() => { getCountryData() }, [])

  let emptyfields = () => {
    setCountryName('')
    setCountryCode('')
    setCurrency('')
  }

  return (
    <>
      <Container sx={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;", backgroundColor: "white", padding: "15px", borderRadius: "5px", width: { xs: "100%", md: "100%" } }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12}>
            <Typography variant='h5' sx={{ fontWeight: "bold" }}>Add Country</Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={4} >
            <MyTextField
              // -------------------------------------> Countyr Name
              label={"Country Name"}
              required={true}
              disabled={btnDisabled}
              value={countryName}
              type={"text"}
              onChange={(e) => { setCountryName(e.target.value) }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} >

            <MyTextField
              // -------------------------------------> Country Code
              label={"Country Code"}
              required={true}
              disabled={btnDisabled}
              value={countryCode}
              type={"text"}
              onChange={(e) => { setCountryCode(e.target.value) }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} >

            <MyTextField
              // -------------------------------------> Currency
              label={"Currency"}
              required={true}
              disabled={btnDisabled}
              value={currency}
              type={"text"}
              onChange={(e) => { setCurrency(e.target.value) }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={1} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Button variant="contained"
              sx={{ backgroundImage: "linear-gradient( 109.6deg, rgb(107 155 227) 11.2%, rgba(110,123,251,1) 91.1% );" }} onClick={addCountry}>Add</Button>
          </Grid>
          <DenseTable
              datasource={countryData}
              Cols={[
                {
                  key: "id",
                  displayName: "Id",
                },
                {
                  key: "countryName",
                  displayName: "Country Name",
                },
                {
                  key: "countryCode",
                  displayName: "Country Code",
                },
              ]}
            />
        </Grid>
      </Container></>
  )
}
