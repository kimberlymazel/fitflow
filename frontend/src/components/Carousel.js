import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import exercise from '../icons/exercise.png'
import intake from '../icons/intake.png'
import Standard from './cards/Standard'
import '../App.css'

function Carousel() {
  return (
    <div class="card">
        <Box>
            <Grid container spacing={2}>
                <Grid item>
                    <Standard
                        style={{
                            background: 'linear-gradient(to right, #E78403, #F9D601)'
                        }}
                    >
                        <img src={exercise} width={85}></img>
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
                        <img src={intake} width={85}></img>
                        <div>
                            <h2>Calories Intake</h2>
                        </div>
                    </Standard>
                </Grid>
            </Grid>
        </Box>
    </div>
  )
}

export default Carousel