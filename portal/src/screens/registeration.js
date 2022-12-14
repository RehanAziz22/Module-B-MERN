import React, { useEffect, useState } from 'react'
import { Container, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import MyTextField from '../components/mytextfield';
import sendData, { signUpUser } from '../config/firebasemethods';
import Button from '@mui/material/Button';
import MyDatePicker from '../components/myDatePicker';
import CircularProgress from '@mui/material/CircularProgress';
import { setDate } from '../config/core/helpermethods';
import generateUsername from 'generate-username-from-email';
import MySelect from '../components/mySelect';


export default function StudentForm() {
  let [module, setModule] = useState({});
  let [showPage, setShowPage] = useState(true);
  let [btnDisabled, setBtnDisabled] = useState(true);
  let [dateOfBirth, setDateOfBirth] = useState({});
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  let [username, setUserName] = useState("")
  let [selectedCategory, setSelectedCategory] = useState("")
  let [isLoading, setLoader] = useState(false)
  let [course, setCourse] = useState([
    { id: "Web and Mobile", name: "Web and Mobile" },
    { id: "Flutter", name: "Flutter" },
    { id: "Graphic Designing", name: "Graphic Designing" },
    { id: "Amazon", name: "Amazon" }
  ]);
  let [section, setSection] = useState([
    { section: "A" },
    { section: "B" },
    { section: "C" }
  ]);
  let [category, setCategory] = useState([
    { category: "Student" },
    { category: "Trainer" },
  ]);
  let [nodeName, setNodeName] = useState('')

  let fillModule = (key, val) => {
    module[key] = val;
    setModule({ ...module })
    console.log(module)
    console.log(module.dateOfBirth)
  }
  username = generateUsername(email)
  console.log(username)

  let nextPage = () => {
    module.category = selectedCategory
    module.isFeeSubmited = false;
    module.isApproved = false;
    module.isActive = false;
    setShowPage(false)
  }
  let signUp = () => {
    signUpUser({ email, password, username })
      .then((success) => {
        setLoader(false)
        console.log(success);
      })
      .catch((error) => {
        setLoader(false)
        console.log(error);
        // ..
      });
  }
  let checkCategory = () => {
    if (selectedCategory === "Student") {
      setNodeName('studentsRecord')
    } else {
      setNodeName('Trainer')
    }
  }
  let sendStdData = () => {
    setLoader(true)
    module.username = username
    module.email = email;
    module.registrationDate = setDate(new Date());

    sendData(module, `${nodeName}/`)
      .then((StudentInfo => {
        console.log(StudentInfo)
        if (selectedCategory === "Student") {
          signUp()
        }
        setLoader(false)
      }))
      .catch((err => {
        setLoader(false)
        console.log(err)
      }))
    console.log(module)
  }
  useEffect(() => {
    checkCategory()
  }, [])
  let handleEmail = (e) => {
    setEmail(e.target.value)
  }
  return (
    <>
      <Container sx={{ display: "flex", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;", backgroundColor: "white", padding: "15px", borderRadius: "5px", width: { xs: "90%", md: "80%" }, }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12}>
            <Grid container spacing={2}>

              <Grid item xs={12} sm={12} md={12}>
                <Typography variant='h5' sx={{ fontWeight: "bold" }}>Registeration Form</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>

            {showPage &&
              <Grid container spacing={2}>

                <Grid item xs={12} sm={6} md={6}>
                  <MyTextField
                    // -------------------------------------> first Name
                    label={"First Name"}
                    required={true}
                    type={"text"}
                    onChange={(e) => { fillModule("firstName", e.target.value) }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <MyTextField
                    // -------------------------------------> last Name
                    label={"Last Name"}
                    required={false}
                    type={"text"}
                    onChange={(e) => { fillModule("lastName", e.target.value) }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <MySelect
                    label={"Category"}
                    valueField="category"
                    displayField="category"
                    datasource={category}
                    onChange={(e) => { setSelectedCategory(e.target.value); setBtnDisabled(false) }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <MyTextField
                    // -------------------------------------> Contact
                    label={"Contact : 0310xxxxxxx"}
                    required={true}
                    type={"text"}
                    onChange={(e) => { fillModule("contact", e.target.value) }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <MyTextField
                    // -------------------------------------> CNIC
                    label={"CNIC : 92431.xxxxxxx.xxx"}
                    required={true}
                    type={"text"}
                    onChange={(e) => { fillModule("cnic", e.target.value) }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <MyTextField
                    // -------------------------------------> email
                    label={"Email"}
                    required={true}
                    type={"email"}
                    onChange={handleEmail}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <MyTextField
                    // -------------------------------------> date of birth
                    type="date"
                    onChange={(e) => { fillModule("dateOfBirth", e.target.value) }}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <Button
                    // -----------------------------------> register button
                    variant="contained"
                    sx={{ backgroundImage: "linear-gradient( 109.6deg, rgb(107 155 227) 11.2%, rgba(110,123,251,1) 91.1% );" }}
                    disabled={btnDisabled}
                    onClick={selectedCategory === "Student" ? nextPage : sendStdData}>{isLoading ? <CircularProgress color="inherit" /> : (selectedCategory === "Student" ? "Next" : "Submit")}
                  </Button>
                </Grid>
              </Grid>
            }
          </Grid>
          <Grid item xs={12} sm={12} md={12}>

            {!showPage && (selectedCategory === "Student" &&
              <Grid container spacing={2}>

                < Grid item xs={12} sm={6} md={6}>
                  <MySelect
                    label={"Course"}
                    valueField="id"
                    displayField="name"
                    datasource={course}
                    onChange={(e) => { fillModule("course", e.target.value) }}
                  />
                </Grid>

                <Grid item xs={12} sm={6} md={6}>
                  <MySelect

                    label="Section"
                    onChange={(e) => { fillModule("section", e.target.value) }}
                    valueField="section"
                    displayField="section"
                    datasource={section}
                  />
                </Grid>

                <Grid item xs={12} sm={6} md={6}>
                  <MyTextField
                    // -------------------------------------> Father Name
                    label={"Fathe Name"}
                    required={true}
                    type={"text"}
                    onChange={(e) => { fillModule("fatherName", e.target.value) }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <MyTextField
                    // -------------------------------------> Father CNIC
                    label={"Father CNIC : 92431.xxxxxxx.xxx"}
                    required={true}
                    type={"text"}
                    onChange={(e) => { fillModule("fatheCnic", e.target.value) }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <MyTextField
                    // -------------------------------------> Father Contact
                    label={"Father Contact: 0321xxxxx...."}
                    required={true}
                    type={"text"}
                    onChange={(e) => { fillModule("FatherContact", e.target.value) }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <MyTextField
                    // -------------------------------------> Emergency Contact
                    label={"Emergency Contact"}
                    required={true}
                    type={"text"}
                    onChange={(e) => { fillModule("emergencyContact", e.target.value) }}
                  />
                </Grid>

                <Grid item xs={12} sm={6} md={6}>
                  <MyTextField
                    // -------------------------------------> password
                    label={"Password"}
                    required={true}
                    type={"password"}
                    onChange={(e) => {
                      setPassword(e.target.value)
                      // ,fillModule("password", e.target.value)
                    }}
                  />
                </Grid>

                <Grid item xs={6} sm={6} md={12}>
                  <Button
                    // -----------------------------------> register button
                    variant="contained"
                    sx={{ backgroundImage: "linear-gradient( 109.6deg, rgb(107 155 227) 11.2%, rgba(110,123,251,1) 91.1% );" }}
                    disabled={btnDisabled}
                    onClick={sendStdData}>{isLoading ? <CircularProgress color="inherit" /> : "Submit Form"}</Button>
                </Grid>
              </Grid>
            )
            }
          </Grid>
        </Grid>

      </Container></>
  )
}
