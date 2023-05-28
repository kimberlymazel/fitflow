import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import exercise from '../../icons/dailyexercise.png'
import intake from '../../icons/calorieintake.png'
import water from '../../icons/waterintake.png'
import progress from '../../icons/progresstracker.png'
import Standard from '../cards/Standard'
import '../../style/dashboard.css'

function Carousel() {
  return (
    <div className="carousel">
        <Box>
            <Grid 
                container spacing={2}
                wrap="nowrap"
                sx={{ overflow: "auto" }}
            >
                <Grid item>
                    <Standard
                        style={{
                            background: 'linear-gradient(to right, #E78403, #F9D601)'
                        }}
                    >
                        <img src={exercise} height={80}></img>
                        <div>
                            <h2>Daily Exercises</h2>
                        </div>
                    </Standard>
                </Grid>
                
                <Grid item>
                    <Standard
                        style={{
                            background: 'linear-gradient(to right, #2EDED4, #1B8ABA)'
                        }}
                    >
                        <img src={intake} height={80}></img>
                        <div>
                            <h2>Calories Intake</h2>
                        </div>
                    </Standard>
                </Grid>

                <Grid item>
                    <Standard
                        style={{
                            background: 'linear-gradient(to right, #EC4F73, #F272D1)'
                        }}
                    >
                        <img src={water} height={80}></img>
                        <div>
                            <h2>Water Intake</h2>
                        </div>
                    </Standard>
                </Grid>

                <Grid item>
                    <Standard
                        style={{
                            background: 'linear-gradient(to right, #712DDF, #871BBA)'
                        }}
                    >
                        <img src={progress} height={80}></img>
                        <div>
                            <h2>Progress Tracks</h2>
                        </div>
                    </Standard>
                </Grid>
            </Grid>
        </Box>
    </div>
  )
}

export default Carousel