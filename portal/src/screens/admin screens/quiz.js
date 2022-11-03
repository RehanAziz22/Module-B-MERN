import React, { useEffect, useState } from 'react'
import { Container, Divider, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import MyTextField from '../../components/mytextfield';
import sendData from '../../config/firebasemethods';
import Button from '@mui/material/Button';
import MySelect from '../../components/mySelect';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';

export default function Quiz() {
  let [module, setModule] = useState({});
  let [selectedCourse, setSelectedCourse] = useState("");
  let [btnDisabled, setBtnDisabled] = useState(false);
  const [question, setQuestion] = useState("")
  const [arrQuestions, setArrQuestions] = useState([])
  const [option, setOption] = useState("")
  const [arrOptions, setArrOptions] = useState([])
  const [correctAnswer, setCheckedOptions] = useState()
  let [course, setCourse] = useState([
    {
      fullName: "Web and Mobile",
      id: "Web and Mobile"
    },
    {
      fullName: "Flutter",
      id: "Flutter"
    },
    {
      fullName: "Graphic Designing",
      id: "Graphic Designing"
    },
    {
      fullName: "Amazon",
      id: "Amazon"
    }
  ]
  );
  // database function 
  // send data in Database
  let sendQuizData = () => {
    console.log(module)

    sendData({
      quiz: module,
      // time: new Date(),
      // userId: userId
    },
      `Quiz/`)
      .then((quiz => { console.log(quiz) }))
      .catch((err => { console.log(err) }))
  }

  // display next container (section 2)
  let nextSection = () => {
    setBtnDisabled(true)
  }

  // module array
  let fillModule = (key, val) => {
    module[key] = val;
    setModule({ ...module })
    console.log(module)
  }

  // question Array
  let fillQuestion = (key, val) => {
    arrQuestions[key] = val;
    setArrQuestions({ ...arrQuestions })
    console.log(arrQuestions)
  }

  //------------------
  const addOption = () => {
    // 👇️ push to end of state array
    setArrOptions([option, ...arrOptions]);
    fillQuestion("options", arrOptions)
  };

  // set Correct option
  // const handleCheckBox = (e) => {
  //   setCheckedOptions(e.target.checked)
  //   // fillModule({ ...correctAnswer, correct: e.target.checked })
  //   console.log(correctAnswer)
  // }

  const submitQuestion = () => {
    fillModule("zuestion", arrQuestions)

  }
  return (
    <>
      <Container sx={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;", backgroundColor: "white", padding: "15px", borderRadius: "5px", width: { xs: "100%", md: "100%" } }}>
        <Grid container spacing={2}>

          <Grid item xs={12} sm={12} md={12}>
            <Typography variant='h5' sx={{ fontWeight: "bold" }}>Create Quiz</Typography>
          </Grid>

          {/* -----------------------------------------Section 1 */}
          <Grid item xs={12} sm={12} md={12} sx={{ display: "flex" }}>
            <MyTextField
              // -------------------------------------> Quiz Name
              label={"Quiz Name"}
              required={true}
              disabled={btnDisabled}
              type={"text"}
              onChange={(e) => { fillModule("quizName", e.target.value) }}
            />
            <MyTextField
              // -------------------------------------> Course Name
              label={"Quiz Score"}
              required={true}
              disabled={btnDisabled}
              type={"text"}
              onChange={(e) => { fillModule("quizScore", e.target.value) }}
            />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Course</InputLabel>
              <Select
                // -------------------------------------> Course 
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={co}
                label="Course"
                defaultValue={""}
                disabled={btnDisabled}
                onChange={(e) => { fillModule("course", e.target.value) }}
              >
                {course.map((x, i) => {
                  return <MenuItem key={i} value={x.fullName}>{x.fullName}</MenuItem>

                })}
              </Select>
            </FormControl>
            <Grid item xs={12} sm={12} md={12}>
              <Button variant="contained"
                sx={{ backgroundImage: "linear-gradient( 109.6deg, rgb(107 155 227) 11.2%, rgba(110,123,251,1) 91.1% );" }} disabled={btnDisabled} onClick={nextSection}>Next</Button>
            </Grid>
          </Grid>

          <Divider />
          {/*---------------------------------- Section 2 */}
          {btnDisabled &&

            <>
              <Grid item xs={12} sm={12} md={12} sx={{ display: "flex" }}>
                <MyTextField
                  // -------------------------------------> Question
                  label={"Question"}
                  required={true}
                  type={"text"}
                  onChange={(e) => {
                    fillQuestion("question", e.target.value)
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} sx={{ display: "flex" }}>
              {/*------------------------------------------- check Box  */}
                {arrOptions.length > 0 ? <Box sx={{ display: 'flex' }}>
                  <FormControl sx={{ m: 3, textAlign: "left" }} component="fieldset" variant="standard" >
                    <FormLabel component="legend">Options</FormLabel>
                    <FormGroup>
                      {arrOptions.map((e, i) => {
                        return <>
                          <FormControlLabel
                            control={
                              <Checkbox onChange={(e) => {
                                fillQuestion("correctoption", e.target.checked)
                              }} name={e} />
                            }
                            label={e}
                          />
                        </>
                      })}
                    </FormGroup>
                  </FormControl>
                </Box> : null}
              </Grid>
              <Grid item xs={12} sm={12} md={12} sx={{ display: "flex" }}>

                <MyTextField
                  // -------------------------------------> options
                  label={"Option"}
                  required={true}
                  type={"text"}
                  onChange={(e) => { setOption(e.target.value) }}
                />
                <Button variant="contained" sx={{ backgroundImage: "linear-gradient( 109.6deg, rgb(107 155 227) 11.2%, rgba(110,123,251,1) 91.1% );" }} onClick={addOption}>Add Option</Button>

              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <Button variant="contained" sx={{ backgroundImage: "linear-gradient( 109.6deg, rgb(107 155 227) 11.2%, rgba(110,123,251,1) 91.1% );" }} onClick={submitQuestion}>Add Question</Button>
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <Button variant="contained" sx={{ backgroundImage: "linear-gradient( 109.6deg, rgb(107 155 227) 11.2%, rgba(110,123,251,1) 91.1% );" }} onClick={sendQuizData}>Submit Form</Button>
              </Grid>

            </>

          }

        </Grid>
      </Container></>
  )
}
