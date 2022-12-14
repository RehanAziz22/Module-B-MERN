import { Box, Checkbox, Container, FormControlLabel, Grid, selectClasses, Typography, Chip, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import MyButton from '../../components/mybutton'
import MySelect from '../../components/mySelect'
import MyTextField from '../../components/mytextfield'
import sendData, { getData } from '../../config/firebasemethods'
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
    let [quizScore, setQuizScore] = useState([])
    let [selectedCourse, setSelectedCource] = useState("")
    let [selectedOption, setSelectedOption] = useState("")
    let [sectionOne, setSectionOne] = useState(true)
    const [indexNumber, setIndexNumber] = useState(0)
    const [score, setScore] = useState(0)
    const [result, setResult] = useState(false)
    const [name, setName] = useState("")
    let percentage = ((score / quizQuestion.length) * 100);
    // let marks = ((Math.floor(percentage)*50)/100)
    let marks = ((Math.floor(percentage) * parseInt(quizScore)) / 100);
    console.log(parseInt(quizScore))
    console.log(marks)
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
    let sendQuizData = () => {
        module.marks = marks;
        module.course = selectedCourse
        module.courseTitle = selectedCourseTitle
        console.log(module)
        sendData(module,
            `quizresult/`)
            .then((quiz => { console.log(quiz) }))
            .catch((err => { console.log(err) }))
    }

    // display next container (section 2)
    let nextSection = () => {
        // setBtnDisabled(true)
    }
    let selectCourse = (e) => {
        setSelectedCource(e)
        console.log(selectedCourse)
        let obj = allQuestions.find((x) => x.course == e);
        console.log(obj);
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
        setQuizScore(obj.quizScore)
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
            console.log(score)
        }
        if (indexNumber + 1 == quizQuestion.length) {
            setResult(true)
            sendQuizData()
        }
        else {
            setIndexNumber(indexNumber + 1)
        }
    };
    useEffect(() => {
        getResultData()
    }, [])
    return (
        <>

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



                                {!result &&

                                    <Grid item xs={12} sm={12} md={12}>
                                        {/* <Box className="options-con" sx={{ background: "white", color: "black", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;", margin: "20px 30px", padding: "20px" }}> */}
                                        <Box sx={{ padding: 1 }}>
                                            <Box sx={{ display: "flex", justifyContent: "space-between", margin: "2px 0px 10px", padding: 1 }}>
                                                <Typography varient="h6" sx={{ color: "black" }} >
                                                    Questions #{indexNumber + 1}/{quizQuestion.length}
                                                </Typography>
                                                {/* <Typography varient="h6" sx={{ color: "black", display: "flex", alignItems: "center", fontSize: "20px" }} >
                                                <TimerIcon sx={{ fontSize: "22px" }} /> <span>{minutes < 10 ? ": 0" + minutes : `: ${minutes}`}:{seconds < 10 ? "0" + seconds : seconds}</span>
                                            </Typography>  */}
                                            </Box>

                                            {/* -------------------------Questions  */}
                                            <Typography variant="h5" sx={{ textAlign: "left" }}>
                                                {quizQuestion[indexNumber].question}
                                            </Typography>
                                        </Box>

                                        {/* -------------------------Options  */}

                                        <Box>
                                            <Grid container sx={{ display: "flex", justifyContent: "center", flexDirection: "column", margin: "5px 0px" }}>
                                                {quizQuestion[indexNumber].options.map((e, i) => (
                                                    <Grid item key={i} md={12}>
                                                        <Chip className="chip" sx={{
                                                            backgroundImage: "linear-gradient( 109.6deg, rgb(107 155 227) 11.2%, rgba(110,123,251,1) 91.1% );"
                                                            , color: "white",
                                                            width: "100%", margin: "5px 0px", fontSize: "16px", textAlign: "left"
                                                        }}
                                                            value={e}
                                                            onClick={() => setSelectedOption(e)} label={e} />
                                                    </Grid>))}
                                            </Grid>
                                        </Box>

                                        <Box sx={{ marginTop: "30px" }}>


                                            <MyButton

                                                label={indexNumber + 1 == quizQuestion.length ? "Finish" : "next"} onClick={() => checkQuestion(selectedOption, quizQuestion[indexNumber].correctoption)} />

                                        </Box>
                                        {/* </Box> */}
                                    </Grid>
                                }

                                {result && (<>
                                    <Box
                                        sx={{ width: "100%", minWidth: "100px", maxWidth: "300px", minHeight: "200px", maxHeight: "200px", margin: " 0px auto" }}
                                    >
                                        <h5 style={{ width: "100%", }}>{`${module.firstName.charAt(0).toUpperCase()}${module.firstName.slice(1)} ${module.lastName.charAt(0).toUpperCase()}${module.lastName.slice(1)}`} Thank you for taking the quiz! Your answers have been submitted successfully.</h5>
                                    </Box></>)}

                            </Grid>
                        </Grid>
                    </>
                    }
                </Grid>
            </Container></>
    )
}
