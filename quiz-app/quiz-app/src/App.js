import { Box, Button, Chip, Grid, Typography } from "@mui/material";
import { style } from "@mui/system";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [questions, setQuestions] = useState([
    {
      question: "Html Stands For _______________________",
      options: [
        "Hyper Text Makeup Language",
        "html",
        "Case Cading Style Sheet",
        "Hypertext markup language",
      ],
      correctAns: "Hypertext markup language",
    },
    {
      question: "Css Stands For _______________________",
      options: [
        "Casecading Style Sheet",
        "Java",
        "Ram",
        "Hypertext markup language",
      ],
      correctAns: "Casecading Style Sheet",
    },
    {
      question: "Js Stands For _______________________",
      options: ["Java Style", "Java Script", "Script", "Script Src"],
      correctAns: "Java Script",
    },
    {
      question: "Dom Stands For _______________________",
      options: ["Document Object Model", "html", "Css", "Java"],
      correctAns: "Document Object Model",
    },
    {
      question: "Ram Stands For _______________________",
      options: ["Read Only Memory", "Dom", "Random Acccess Memory", "For Pc"],
      correctAns: "Random Acccess Memory",
    },
    {
      question: "Rom Stands For _______________________",
      options: [
        "Hyper Text Markup Language",
        "html",
        "HTml",
        "Read Only Memory",
      ],
      correctAns: "Read Only Memory",
    },
  ]);
  const [indexNumber, setIndexNumber] = useState(0)
  const [score, setScore] = useState(0)
  const [result, setResult] = useState(false)
  const [seconds, setSeconds] = useState(59)
  const [minutes, setMinutes] = useState(1)

  let timer;
  // --------------- timer
  useEffect(() => {

    timer = setInterval(() => {

      setSeconds(seconds - 1);
      if (seconds === 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      }
    }, 1000)
    return () => clearInterval(timer)
  })

  let start = () => {
    setSeconds(59)
    setMinutes(1)
    
  }

  let stop = () => {
    clearInterval(timer);
  }

  useEffect(() => {

    if (minutes === 0 && seconds === 0)
      stop()
  })
  // ---------------------- check Q
  let checkQuestion = (a, b) => {
    if (a == b) {
      setScore(score + 1)
    }
    if (indexNumber + 1 == questions.length) {
      setResult(true)
    }
    else {
      setIndexNumber(indexNumber + 1)
    }
  }


  return (
    <div className="App">
      <header className="App-header">

        <Typography varient="h1" sx={{ color: "black", fontSize: "30px", fontWeight: "bold" }} >
          QUIZ APP</Typography>
        {/* {setResult?<div><h1>your percentage is {(score/questions.length)*100}</h1></div>:<Box> */}
        {/* ---------------------start box */}
        <Box sx={{ background: "white", color: "black", border: "3px solid", padding: "10px" }}>
          <Typography varient="h5" >
            Click on start button to start Quiz
          </Typography>
          <Button onClick={start} >start</Button>
        </Box>
        {/* ----------------------Quiz box */}
            <Box sx={{ background: "white", color: "black", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;", border: "3px solid", padding: "20px" }}>
        <Box>
              <Box sx={{ display: "flex", justifyContent: "space-between", margin: "2px 0px 10px" }}>
                <Typography varient="h6" sx={{ color: "black" }} >
                  Questions #{indexNumber + 1}/{questions.length}
                </Typography>
                <Typography varient="h6" sx={{ color: "black" }} >
                  {(score / questions.length) * 100}
                </Typography>
                <Typography varient="h6" sx={{ color: "black" }} >
                  {minutes < 10 ? "0" + minutes : minutes}:{seconds < 10 ? "0" + seconds : seconds}
                </Typography>
              </Box>
            </Box>
            <Typography variant="h5" >
              {questions[indexNumber].question}
            </Typography>
            <Box>
              <Grid container sx={{ display: "flex", justifyContent: "center", flexDirection: "column", margin: "5px 0px" }}>
                {questions[indexNumber].options.map((e, i) => (<Grid item key={i} md={6}>
                  <Chip sx={{ width: "100%" }} onClick={() => checkQuestion(e, questions[indexNumber].correctAns)} label={e} />
                </Grid>))}
              </Grid>
            </Box>
          </Box>
        {/* </Box>} */}
      </header>
    </div >
  );
}

export default App;
