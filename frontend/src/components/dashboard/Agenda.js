import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import calendar from '../../icons/calendar.png'
import activity from '../../icons/activity-heart.png'
import Thin from '../cards/Thin'
import '../../style/dashboard.css'

import axiosInstance from "../../services/axios";

function Agenda() {
    const [todayDate, setTodayDate] = useState('');
    const [registrationDate, setRegistrationDate] = useState([]);
    const [weekSinceRegistration, setWeekSinceRegistration] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            axiosInstance
            .get('/users/me')
            .then((response) => {
                setRegistrationDate(response.data);
            })
            .catch((error) => {
                console.error(error);
            })
        };
      
        fetchData();
      }, []);

    useEffect(() => {
        const currentDate = new Date();
        const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
        const formattedDate = currentDate.toLocaleDateString('en-US', options);
        setTodayDate(formattedDate);

        if (registrationDate) {
            const diffInTime = currentDate.getTime() - new Date(registrationDate.created_at);
            const weekSinceRegistration = Math.floor(diffInTime / (1000 * 3600 * 24 * 7));
            setWeekSinceRegistration(weekSinceRegistration);
          }

      }, [registrationDate]);

    return (
        <div class="agenda" style={{maxWidth:"100%"}}>
            <Box marginLeft={"30px"} marginTop={"-5px"} marginBottom={"16px"}>
                <Grid container spacing={1}>
                    <Grid item>
                        <Thin>
                            <img src={calendar} width={40}></img>
                            <div>
                                <h4>Day {weekSinceRegistration + 1}, Week {weekSinceRegistration + 1}</h4>
                                <h4>{todayDate}</h4>
                            </div>
                        </Thin>
                    </Grid>
                    
                    <Grid item>
                        <Thin>
                            <img src={activity} width={40}></img>
                            <div>
                                <h4>Goal</h4>
                                <h4>Toned Abs</h4>
                            </div>
                        </Thin>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
    }

export default Agenda