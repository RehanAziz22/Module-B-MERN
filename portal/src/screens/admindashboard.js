import { Button, Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import MyDrawer from '../components/mydrawer'
import { checkUser, getData } from '../config/firebasemethods'

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
                if (params.id == res) {
                    setUserId(res);
                    // getUserData();
                }
                else {
                    navigate("/adminLogin")
                }
            })

    }, [])
    return (
        <div style={{ paddingTop: "80px" }}>

            <MyDrawer
            nodeName="adminLogin"
            userId={userId}
            state={{ userId: userId, email: location.state.email, username: location.state.username, password: location.state.password }}
                datasourse={
                    [
                        {
                            route: "Students",
                            name: "Enrolled Students",
                        },
                        {
                            route: "quiz",
                            name: "Quiz",
                        },
                        {
                            route: "result",
                            name: "Result",
                        },
                        {
                            route: "course",
                            name: "Course",
                        },
                        {
                            route: "signupAdmin",
                            name: "Create Admin",
                        },
                        {
                            route: "country",
                            name: "Country",
                        },
                        {
                            route: "city",
                            name: "City",
                        },
                    ]
                } />
        </div>
        // <Container width={"lg"}>
        // </Container>
    )
}
