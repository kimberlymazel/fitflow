import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import '../App.css'

import dashboard from '../icons/dashboard.png'
import tracker from '../icons/tracker.png'
import calculator from '../icons/calculator.png'
import mealplan from '../icons/mealplan.png'
import workout from '../icons/workout.png'
import schedule from '../icons/schedule.png'

const Item = styled(Paper)(({ theme }) => ({
  width: 250,
  height: 30,
  padding: theme.spacing(1.8),
  display: 'flex',
  alignSelf: 'center',
  alignItems: 'center',
  backgroundColor: 'transparent',
  borderRadius: 20
}));

function Navigation() {
  return (
    <div class="nav">
        <Box
          sx={{
            alignSelf: "left",
            width: 300,
            height: 610
          }}
          style={{
            background: 'linear-gradient(to bottom, #5A1BB9, #9801CC)'
          }}
        >
            <Stack 
              spacing={1.5}
              paddingTop={2}
            >
              <Item>
                <img src={dashboard} width={30}></img>
                <h3>Dashboard</h3>
              </Item>
              
              <Item>
                <img src={tracker} width={30}></img>
                <h3>Tracker</h3>
              </Item>

              <Item>
                <img src={calculator} width={30}></img>
                <h3>Calculator</h3>
              </Item>

              <Item>
                <img src={mealplan} width={30}></img>
                <h3>Meal Plan</h3>
              </Item>

              <Item>
                <img src={workout} width={30}></img>
                <h3>Workouts</h3>
              </Item>

              <Item>
                <img src={schedule} width={30}></img>
                <h3>Schedules</h3>
              </Item>
            </Stack>

            <div class="bottom">
              <h3>Contact us</h3>
            </div>
        </Box>
    </div>
  )
}

export default Navigation