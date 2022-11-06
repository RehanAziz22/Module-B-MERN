// // import { Box, Chip, Grid } from '@mui/material'
// // import React, { useEffect, useState } from 'react'
// // import { getData } from '../config/firebasemethods'

// // export default function QuizApp() {
// //   const [quizData, setQuizData] = useState([])
// //   const [indexNumber, setIndexNumber] = useState(0)
// //   const [score, setScore] = useState(0)
// //   const [result, setResult] = useState(false)
// //   const [showquizData, setShowquizData] = useState(false)
// //   const [disabled, setDisabled] = useState(true)
// //   const [name, setName] = useState("")
// //   let getQuizData = () => {
// //     console.log(module)

// //     getData(`Quiz/`)
// //       .then((res) => {
// //         setQuizData(res)
// //         console.log(res)
// //       })
// //       .catch((err) => {
// //         alert(err)
// //       })
// //   }
// //   let checkQuestion = (a, b) => {
// //     if (a == b) {
// //       setScore(score + 1)
// //     }
// //     if (indexNumber + 1 == quizData.length) {
// //       setResult(true)
// //     }
// //     else {
// //       setIndexNumber(indexNumber + 1)
// //     }
// //   };
// //   useEffect(() => { getQuizData() }, [])
// //   return (
// //     <>
// //       <Box>
// //         <Grid container sx={{ display: "flex", justifyContent: "center", flexDirection: "column", margin: "5px 0px" }}>
// //           {quizData[indexNumber].map((e, i) => (
// //             <Grid item key={i} md={12}>
// //               <Chip className="chip" sx={{
// //                 width: "100%", margin: "5px 0px", fontSize: "16px"
// //               }} onClick={() => checkQuestion(e, quizData[indexNumber].correctAns)} label={e} />
// //             </Grid>))}
// //         </Grid>
// //       </Box></>
// //   )
// // }
// import { Box, Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material'
// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import MyButton from '../../components/mybutton'
// import MySelect from '../../components/mySelect'
// import { getData } from '../../config/firebasemethods'

// export default function GiveQuiz() {
//     let navigate = useNavigate()
//     const [quizData, setQuizData] = useState([])
//     // const [filterData, setFilterData] = useState([])
//     const [course, setCourse] = useState("")
//     const [display, setDisplay] = useState(false)
//     let getQuizData = () => {
//         getData(`Quiz/`)
//             .then((res) => {
//                 setQuizData(res)
//                 console.log(quizData)
//                 console.log(res)
//             })
//             .catch((err) => {
//                 alert(err)
//             })
//     }
//     const unique = [...new Set(quizData.map(item => item.quiz.course))];
//     let filterData = quizData
//     let startQuiz = () => {
//         setDisplay(true)
//         filterData = quizData.find((x) => {
//             if (x.quiz.course === course)
//                 return x;
//         })
//         console.log(filterData)
//     }
//     useEffect(() => {
//         getQuizData()
//         // let obj = quizData.filter((x)=>{x.course})
//     }, [])

//     return (
//         < >

//             <Container sx={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;", backgroundColor: "white", padding: "15px", borderRadius: "5px", width: { xs: "100%", md: "100%" } }}>
//                 <Grid container spacing={2}>

//                     <Grid item xs={12} sm={12} md={12}>
//                         <Typography variant='h5' sx={{ fontWeight: "bold" }}>Avaliable quiz</Typography>
//                     </Grid>
//                     {/* <Grid item xs={12} sm={12} md={12}>
//                         <MySelect
//                             lable="courses"
//                             dataset={quizData}
//                         />
//                     </Grid> */}
//                     <Grid item xs={12} sm={6} md={4}>

//                         <FormControl fullWidth>
//                             <InputLabel id="demo-simple-select-label">Course</InputLabel>
//                             <Select
//                                 // -------------------------------------> Course 
//                                 labelId="demo-simple-select-label"
//                                 id="demo-simple-select"
//                                 // value={co}
//                                 label="Course"
//                                 defaultValue={''}
//                                 onChange={(e) => { setCourse(e.target.value) }}
//                             >
//                                 {
//                                     unique.map((x, i) => {
//                                         return <MenuItem key={i} value={x}>{x}</MenuItem>

//                                     })}
//                             </Select>
//                         </FormControl>
//                     </Grid>
//                     <Grid item xs={12} sm={12} md={12}>
//                         <MyButton
//                             onClick={startQuiz}
//                             label="start"
//                         />
//                     </Grid>
//                     {display && <>
//                         <Grid item xs={12} sm={12} md={12}>

//                             {filterData.map((e, i) => {
//                                 return <Grid container spacing={2} sx={{ border: "1px solid" }} key={e.id}>
//                                     <Grid item xs={12} sm={4} md={4}>
//                                     <Typography variant='h6' sx={{ fontWeight: "bold" }}>Quiz Title: {e.quiz.quizName}</Typography>
//                                     </Grid>
//                                     <Grid item xs={12} sm={4} md={4}>
//                                     <Typography variant='h6' sx={{ fontWeight: "bold" }}>Course: {e.quiz.course}</Typography>
//                                     </Grid>
//                                     <Grid item xs={12} sm={4} md={4}>
//                                     <Typography variant='h6' sx={{ fontWeight: "bold" }}>Marks: {e.quiz.quizScore}</Typography>
//                                     </Grid>

//                                 </Grid>
//                             })}
//                         </Grid></>}


//                 </Grid>
//             </Container>
//         </>
//     )
// }


import { Box, Checkbox, Container, FormControlLabel, Grid, selectClasses, Typography, Chip } from '@mui/material'
import React, { useEffect, useState } from 'react'
import MyButton from '../../components/mybutton'
import MySelect from '../../components/mySelect'
import MyTextField from '../../components/mytextfield'
import { getData } from '../../config/firebasemethods'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';

import CardMedia from '@mui/material/CardMedia';
export default function QuizApp() {
    let [module, setModule] = useState({})
    let [allQuestions, setAllQuestions] = useState([])
    let [courseTitle, setCourseTitle] = useState([])
    let [quizQuestion, setQuizQuestion] = useState([])
    let [studentResult, setStudentResult] = useState([])
    let [disabled, setDisabled] = useState(false)
    let [selectedCourse, setSelectedCource] = useState("")
    let [sectionOne, setSectionOne] = useState(true)
    const [indexNumber, setIndexNumber] = useState(0)
    const [score, setScore] = useState(0)
    const [result, setResult] = useState(false)
    const [name, setName] = useState("")
    let percentage = ((score / quizQuestion.length) * 100);

    let [selectedCourseTitle, setSelectedCourceTitle] = useState("")
    let [rollNum, setRollNum] = useState("")
    let getResultData = () => {
        getData(`Quiz/`)
            .then((res) => {
                console.log(res)
                let arr = res.filter((x) => x.course)
                setAllQuestions([...arr])
                console.log(allQuestions)
            })
            .catch((err) => {
                alert(err)
            })
    }
    // let sendQuizData = () => {
    //     module.score = score;
    //     module.
    //     console.log(module)
    //     sendData( module,
    //       `quizresult/`)
    //       .then((quiz => { console.log(quiz) }))
    //       .catch((err => { console.log(err) }))
    //   }
    
      // display next container (section 2)
      let nextSection = () => {
        setBtnDisabled(true)
      }
    let selectCourse = (e) => {
        setSelectedCource(e)
        console.log(selectedCourse)
        let obj = allQuestions.find((x) => x.course == e);
        // console.log(obj.result);
        setCourseTitle([obj])
        console.log(courseTitle)
        // setQuizQuestion([...obj.allquestion])
        // console.log(quizQuestion)
    }
    let selectCourseTitle = (e) => {
        setSelectedCourceTitle(e)
        console.log(selectedCourse)
        let obj = courseTitle.find((x) => x.quizName == e);
        // console.log(obj.result);
        // setCourseTitle([obj])
        // console.log(courseTitle)
        setQuizQuestion([...obj.allquestion])
        console.log(quizQuestion)
    }

    //    let showstudentResult = () => {
    //         // setRollNum(e)
    //         // console.log(rollNum)
    //         let obj = quizQuestion.filter((x) => x.rollNumber.includes(rollNum));
    //         console.log(obj);
    //         setStudentResult(obj)
    //     }

    let fillModule = (key, val) => {
        module[key] = val;
        setModule({ ...module })
        console.log(module)
    }

    let next = () => {
        setDisabled(true)
    }

    let startQuiz = () => {
        setSectionOne(false)
    }
    let checkQuestion = (a, b) => {
        if (a == b) {
            setScore(score + 1)
        }
        if (indexNumber + 1 == quizQuestion.length) {
            setResult(true)
        }
        else {
            setIndexNumber(indexNumber + 1)
        }
    };
    useEffect(() => {
        getResultData()
    }, [])
    return (
        < >

            <Container sx={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;", backgroundColor: "white", padding: "15px", borderRadius: "5px", width: { xs: "100%", md: "100%" } }}>
                <Grid container spacing={2}>

                    {sectionOne && <>
                        <Grid item xs={12} sm={12} md={12}>
                            <Typography variant='h5' sx={{ fontWeight: "bold" }}>Quiz Screen</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={5} >
                            <MySelect
                                label="Cource"
                                valueField="course"
                                displayField="course"
                                onChange={(e) => selectCourse(e.target.value)}
                                datasource={allQuestions}
                                disabled={disabled}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={5} >

                            <MySelect
                                label="Cource Title"
                                valueField="quizName"
                                displayField="quizName"
                                onChange={(e) => selectCourseTitle(e.target.value)}
                                datasource={courseTitle}
                                disabled={disabled}

                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={2} >
                            <MyButton
                                // onClick={showstudentResult}
                                onClick={next}
                                disabled={disabled}
                                label={"Next"}
                            />
                        </Grid>
                        {/* <Grid item xs={12} sm={12} md={5}>
                        <MyTextField
                            label="Enter Roll No"
                            onChange={(e) => setRollNum(e.target.value)}

                        />
                        </Grid> */}


                        {disabled && <>
                            <Grid item xs={12} sm={12} md={4} >
                                <MyTextField
                                    // -------------------------------------> First Name
                                    label={"First Name"}
                                    required={true}
                                    type={"text"}
                                    onChange={(e) => { fillModule("firstName", e.target.value) }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} >
                                <MyTextField
                                    // -------------------------------------> Last Name
                                    label={"Last Name"}
                                    required={true}
                                    type={"text"}
                                    onChange={(e) => { fillModule("lastName", e.target.value) }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} >
                                <MyTextField
                                    // -------------------------------------> Roll Number
                                    label={"Roll No"}
                                    required={true}
                                    type={"text"}
                                    onChange={(e) => { fillModule("rollNumber", e.target.value) }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} >
                                <MyButton
                                    // onClick={showstudentResult}
                                    onClick={startQuiz}
                                    label={"Start Quiz"}
                                />
                            </Grid>

                        </>}
                    </>
                    }

                    {!sectionOne && <>
                        <Grid item xs={12} sm={12} md={12}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12} md={12}>
                                    <Typography variant='h5' sx={{ fontWeight: "bold" }}>{selectedCourseTitle}</Typography>
                                </Grid>


                                {/* {quizQuestion.map((e) => {
                                    return <>
                                        <Grid item xs={12} sm={12} md={12}>
                                            <Typography variant='h6' sx={{ fontWeight: "bold",textAlign:"left" }}>{e.question}</Typography>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={12}>

                                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                                        {e.options.map((e, i) => {
                                            return <>
                                            <FormControlLabel
                                            control={
                                                <Checkbox value={e}
                                                // onChange={(e) => {}} 
                                                name={e} />
                                            }
                                            label={e}
                                            />
                                            </>
                                        })}
                                        </Box>
                                        </Grid>
                                        </>
                                    })} */}

                                {!result && <Box className="options-con" sx={{ background: "white", color: "black", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;", margin: "20px 30px", padding: "20px" }}>
                                    <Box sx={{ padding: 1 }}>
                                        <Box sx={{ display: "flex", justifyContent: "space-between", margin: "2px 0px 10px", padding: 1 }}>
                                            <Typography varient="h6" sx={{ color: "black" }} >
                                                Questions #{indexNumber + 1}/{quizQuestion.length}
                                            </Typography>
                                            {/* <Typography varient="h6" sx={{ color: "black", display: "flex", alignItems: "center", fontSize: "20px" }} >
                                                <TimerIcon sx={{ fontSize: "22px" }} /> <span>{minutes < 10 ? ": 0" + minutes : `: ${minutes}`}:{seconds < 10 ? "0" + seconds : seconds}</span>
                                            </Typography> */}
                                        </Box>

                                        {/* -------------------------Questions */}
                                        <Typography variant="h5" sx={{ textAlign: "left" }}>
                                            {quizQuestion[indexNumber].question}
                                        </Typography>
                                    </Box>

                                    {/* -------------------------Options */}

                                    <Box>
                                        <Grid container sx={{ display: "flex", justifyContent: "center", flexDirection: "column", margin: "5px 0px" }}>
                                            {quizQuestion[indexNumber].options.map((e, i) => (<Grid item key={i} md={12}>
                                                <Chip className="chip" sx={{
                                                    width: "100%", margin: "5px 0px", fontSize: "16px"
                                                }} onClick={() => checkQuestion(e, quizQuestion[indexNumber].correctoption)} label={e} />
                                            </Grid>))}
                                        </Grid>
                                    </Box>
                                </Box>}
                            </Grid>
                        </Grid>
                    </>
                    }
                                            {result && (<>
                                                <Box className="meter"
                                                    sx={{ width: "100%", minWidth: "100px", maxWidth: "300px", minHeight: "200px", maxHeight: "200px", margin: " 0px auto" }}
                                                >
                                                    <CardMedia
                                                        sx={percentage == 0 ? { rotate: '0deg' } : percentage <= 25 ? { rotate: '45deg' } : percentage <= 50 ? { rotate: '90deg' } : percentage <= 75 ? { rotate: '120deg' } : percentage <= 100 ? { rotate: '165deg' } : {}}
                                                        component="img"
                                                        className="arrowimg"
                                                        height="auto"
                                                        image="https://thumbs.dreamstime.com/b/red-arrow-isolated-white-background-red-arrow-vector-stock-arrow-icon-110771171.jpg"
                                                        alt="green iguana"
                                                    />
                                                </Box>
                                                <h3 style={{ width: "100%", }}>{name.charAt(0).toUpperCase() + name.slice(1)} your percentage is {percentage.toFixed(1)}%</h3></>)}
                </Grid>
            </Container></>
    )
}
