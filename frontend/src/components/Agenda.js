import React from 'react'
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import calendar from '../icons/calendar.png'
import activity from '../icons/activity-heart.png'
import '../App.css'

const Item = styled(Paper)(({ theme }) => ({
    width: 230,
    height: 30,
    padding: theme.spacing(2),
    display: 'flex',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
}));

function Agenda() {
  return (
    <div class="agenda">
        <Box>
            <Grid container spacing={0}>
                
                <Grid item xs={1.5}>
                    <Item>
                        <img src={calendar} width={40}></img>
                        <div>
                            <h4>Day 1, Week 1</h4>
                            <h4>Saturday, 4 March 2023</h4>
                        </div>
                    </Item>
                </Grid>
                
                <Grid item xs={2}></Grid>
                    <Item>
                        <img src={activity} width={40}></img>
                        <div>
                            <h4>Goal</h4>
                            <h4>Toned Abs</h4>
                        </div>
                    </Item>
                </Grid>
        </Box>
    </div>
  )
}

export default Agenda