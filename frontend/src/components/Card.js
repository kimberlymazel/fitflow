import React from 'react'
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import exercise from '../icons/exercise.png'
import intake from '../icons/intake.png'
import '../App.css'

const Item = styled(Paper)(({ theme }) => ({
    width: 230,
    height: 130,
    padding: theme.spacing(2),
    display: 'flex-inline',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 20
}));

function Card() {
  return (
    <div class="card">
        <Box>
            <Grid container spacing={2}>
                <Grid item>
                    <Item
                        style={{
                            background: 'linear-gradient(to right, #E78403, #F9D601)'
                        }}
                    >
                        <img src={exercise} width={85}></img>
                        <div>
                            <h2>Daily Exercises</h2>
                        </div>
                    </Item>
                </Grid>
                
                <Grid item>
                    <Item
                        style={{
                            background: 'linear-gradient(to right, #2EDED4, #1B8ABA)'
                        }}
                    >
                        <img src={intake} width={85}></img>
                        <div>
                            <h2>Calories Intake</h2>
                        </div>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    </div>
  )
}

export default Card