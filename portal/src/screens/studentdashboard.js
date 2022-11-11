import { Button, Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import MyDrawer from '../components/mydrawer'
import { checkUser, getData } from '../config/firebasemethods'

export default function StudentDashboard() {
    let navigate = useNavigate()
    const location = useLocation();
    const params = useParams();
    let [userEmail, setUserEmail] = useState('');
    let [userId, setUserId] = useState('');

    // const getUserData = () => {
    //     getData(`users/${userId}`)
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
                    setUserEmail(res.email);
                    setUserId(res.uid)
                    // getUserData();
                }
                else {
                    navigate("/studentLogin")
                }
            })

    }, [])
    return (
        <div style={{ paddingTop: "80px" }}>

            <MyDrawer
                nodeName="studentLogin"
                userId={userId}
                profileNode={`studentprofile`}
                // state={{ userId: userId, email: location.state.email, username: location.state.username, password: location.state.password }}
                state={{ userId:userId,userEmail: userEmail }}
                datasourse={[
                    {
                        route: "studentquiz",
                        name: "Quiz",
                    },
                    {
                        route: "studentresult",
                        name: "Result",
                    },
                    {
                        route: "adminDashboard",
                        name: "adminDashboard",
                    },
                    {
                        route: "adminDashboard/*",
                        name: "adminDashboard",
                    },
                ]}
            />
        </div>
    )
}
