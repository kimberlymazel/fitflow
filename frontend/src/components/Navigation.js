import React from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Thin from './cards/Thin'
import '../App.css'

import dashboard from '../icons/dashboard.png'
import tracker from '../icons/tracker.png'
import calculator from '../icons/calculator.png'
import mealplan from '../icons/mealplan.png'
import workout from '../icons/workout.png'
import schedule from '../icons/schedule.png'

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
              <Thin>
                <img src={dashboard} width={30}></img>
                <h3>Dashboard</h3>
              </Thin>
              
              <Thin>
                <img src={tracker} width={30}></img>
                <h3>Tracker</h3>
              </Thin>

              <Thin>
                <img src={calculator} width={30}></img>
                <h3>Calculator</h3>
              </Thin>

              <Thin>
                <img src={mealplan} width={30}></img>
                <h3>Meal Plan</h3>
              </Thin>

              <Thin>
                <img src={workout} width={30}></img>
                <h3>Workouts</h3>
              </Thin>

              <Thin>
                <img src={schedule} width={30}></img>
                <h3>Schedules</h3>
              </Thin>
            </Stack>

            <div class="bottom">
              <h3>Contact us</h3>
            </div>
        </Box>
    </div>
  )
}

export default Navigation