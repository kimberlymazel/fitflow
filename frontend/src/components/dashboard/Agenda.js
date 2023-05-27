import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import calendar from '../../icons/calendar.png'
import activity from '../../icons/activity-heart.png'
import Thin from '../cards/Thin'
import '../../style/dashboard.css'

function Agenda() {
  return (
    <div className="agenda">
        <Box marginLeft={"30px"} marginTop={"-5px"} marginBottom={"16px"}>
            <Grid container spacing={1}>
                <Grid item>
                    <Thin>
                        <img src={calendar} width={40}></img>
                        <div>
                            <h4>Day 1, Week 1</h4>
                            <h4>Saturday, 4 March 2023</h4>
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