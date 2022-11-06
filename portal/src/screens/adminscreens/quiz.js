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
  let [lockQuiz, setLockQuiz] = useState(true);
  const [question, setQuestion] = useState("")
  const [arrQuestions, setArrQuestions] = useState([])
  const [allQuestions, setAllQuestions] = useState([])
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

    sendData( module,
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
      setAllQuestions([...allQuestions,arrQuestions]);
      console.log(allQuestions)
      fillModule("allquestion",allQuestions)
      console.log(allQuestions)
  }
  
  const lockQuizPage = () => {
    setLockQuiz(false)
  }

  return (
    <>
      <Container sx={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;", backgroundColor: "white", padding: "15px", borderRadius: "5px", width: { xs: "100%", md: "100%" } }}>
        <Grid container spacing={2}>

          {lockQuiz && <><Grid item xs={12} sm={12} md={12}>
            <Typography variant='h5' sx={{ fontWeight: "bold" }}>Create Quiz</Typography>
          </Grid>

            {/* -----------------------------------------Section 1 */}
            <Grid item xs={12} sm={6} md={4} >
              <MyTextField
                // -------------------------------------> Quiz Name
                label={"Quiz Name"}
                required={true}
                disabled={btnDisabled}
                type={"text"}
                onChange={(e) => { fillModule("quizName", e.target.value) }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} >

              <MyTextField
                // -------------------------------------> Course Name
                label={"Quiz Score"}
                required={true}
                disabled={btnDisabled}
                type={"text"}
                onChange={(e) => { fillModule("quizScore", e.target.value) }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} >
            <MySelect
              label={"Course"}
              valueField="fullName"
              displayField="fullName"
              datasource={course}
              disabled={btnDisabled}
              onChange={(e) => { fillModule("course", e.target.value) }}
            />
            </Grid>
            <Grid item xs={12} sm={6} md={1} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Button variant="contained"
                sx={{ backgroundImage: "linear-gradient( 109.6deg, rgb(107 155 227) 11.2%, rgba(110,123,251,1) 91.1% );" }} disabled={btnDisabled} onClick={nextSection}>Next</Button>
            </Grid>

            <Divider />
            {/*---------------------------------- Section 2 */}
            {btnDisabled && <>
              <Grid item xs={12} sm={12} md={11} >
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
              <Grid item xs={12} sm={12} md={12} >
                {/*------------------------------------------- check Box  */}
                {arrOptions.length > 0 ? <Box sx={{ display: 'flex' }}>
                  <FormControl sx={{ m: 3, textAlign: "left" }} component="fieldset" variant="standard" >
                    <FormLabel component="legend">Options</FormLabel>
                    <FormGroup>
                      {arrOptions.map((e, i) => {
                        return <>
                          <FormControlLabel
                            control={
                              <Checkbox value={e} onChange={(e) => {
                                fillQuestion("correctoption", e.target.value)
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
              <Grid item xs={12} sm={8} md={9} >

                <MyTextField
                  // -------------------------------------> options
                  label={"Option"}
                  required={true}
                  type={"text"}
                  onChange={(e) => { setOption(e.target.value) }}
                />

              </Grid>
              <Grid item xs={12} sm={4} md={2} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Button variant="contained" sx={{ backgroundImage: "linear-gradient( 109.6deg, rgb(107 155 227) 11.2%, rgba(110,123,251,1) 91.1% );" }} onClick={addOption}>Add Option</Button>
              </Grid>

              <Grid item xs={6} sm={6} md={6}>
                <Button variant="contained" sx={{ backgroundImage: "linear-gradient( 109.6deg, rgb(107 155 227) 11.2%, rgba(110,123,251,1) 91.1% );" }} onClick={submitQuestion}>Add Question</Button>
              </Grid>
              <Grid item xs={6} sm={6} md={6}>
                <Button variant="contained" sx={{ backgroundImage: "linear-gradient( 109.6deg, rgb(107 155 227) 11.2%, rgba(110,123,251,1) 91.1% );" }} onClick={lockQuizPage}>lock Quiz</Button>
              </Grid>
            </>}</>}

          {!lockQuiz && <>
          <Grid item xs={12} sm={12} md={12}>
            <Button variant="contained" sx={{ backgroundImage: "linear-gradient( 109.6deg, rgb(107 155 227) 11.2%, rgba(110,123,251,1) 91.1% );" }} onClick={sendQuizData}>Submit Form</Button>
          </Grid>
          {/* <Grid item xs={12} sm={12} md={12}>
          {question.map((e,i)=>{
            const{quizName,quizScore,course} = e
            return <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12}>
          <Typography variant='h5' sx={{ fontWeight: "bold" }}>{quizName}</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
          <Typography variant='h5' sx={{ fontWeight: "bold" }}>{quizScore}</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
          <Typography variant='h5' sx={{ fontWeight: "bold" }}>{course}</Typography>
          </Grid>
          
          <Grid item xs={12} sm={12} md={12}>
          <Typography variant='h5' sx={{ fontWeight: "bold" }}>{e.question.question}</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <ul>
              <li>{Object.values(e.arrOptions)}</li>
            </ul>
          </Grid>
            </Grid>
          })}
          </Grid> */}

          </>
          }
        </Grid>
      </Container></>
  )
}
