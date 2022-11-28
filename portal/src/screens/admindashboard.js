import { Button, Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import MyDrawer from '../components/mydrawer'
import { checkUser, getData } from '../config/firebasemethods'
import studentimg from '../assets/2799142.png'
import quizimg from '../assets/3406808.png'
import courseimg from '../assets/icons8-books-96.png'
import resultimg from '../assets/icons8-result-64.png'
import adminimg from '../assets/icons8-administrator-male-100.png'
import trainerimg from '../assets/icons8-training-100.png'
import countryimg from '../assets/icons8-country-96.png'
import cityimg from '../assets/icons8-city-buildings-64.png'
export default function AdminDashboard() {
    let navigate = useNavigate()
    const location = useLocation();
    const params = useParams();
    let [userId, setUserId] = useState('');

    // const getUserData = () => {
    //     getData(`admin/${userId}`)
    //       .then((res) => {
    //         // console.log(res)
    //       })
    //       .catch((err) => {
    //         alert(err)
    //       })
    //   }
    useEffect(() => {
        if (location.state && location.state.id) {
            // setUser(location.state)
            console.log(location.state)
            // console.log(Object.values(location.state.id))
        } else {
            // navigate("/");
        };
        checkUser()
            .then((res) => {
                console.log(res);
                if (params.id == res.uid) {
                    setUserId(res.uid);
                    // getUserData();
                }
                else {
                    navigate("/login/adminLogin")
                }
            })

    }, [])
    return (
        <div style={{ paddingTop: "80px",width:"100%" }}>

            <MyDrawer
            nodeName="adminLogin"
            userId={userId}
            profileNode={`adminprofile`}
            state={{ userId: userId}}
                datasourse={
                    [
                        {
                            route: "Students",
                            name: "Enrolled Students",
                            img : studentimg
                       },
                        {
                            route: "quiz",
                            name: "Create Quiz",
                            img : quizimg
                        },
                        {
                            route: "result",
                            name: "Result",
                            img: resultimg
                        },
                        {
                            route: "course",
                            name: "Course",
                            img: courseimg
                        },
                        {
                            route: "signupAdmin",
                            name: "Create Admin",
                            img: adminimg
                        },
                        {
                            route: "trainerRecords",
                            name: "Trainer Records",
                            img: trainerimg
                        },
                        {
                            route: "country",
                            name: "Add Country",
                            img: countryimg
                        },
                        {
                            route: "city",
                            name: "Add City",
                            img: cityimg
                        },
                    ]
                } />
        </div>
        // <Container width={"lg"}>
        // </Container>
    )
}
