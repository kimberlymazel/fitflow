import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Standard from '../cards/Standard'
import '../../style/App.css'

function Goals() {
  return (
    <div className="goals">
        <Box>
            <Grid 
                container spacing={2}
            >
                <Grid item>
                    <h3>Fitness Goal</h3>
                    <Standard
                        style={{
                            background: 'linear-gradient(to right, #58A5FF, #027AE9)'
                        }}
                    >
                    </Standard>
                </Grid>
                
                <Grid item>
                    <h3>Calorie Goal</h3>
                    <Standard
                        style={{
                            background: 'linear-gradient(to right, #F279E6, #EB4A67)'
                        }}
                    >
                    </Standard>
                </Grid>
            </Grid>
        </Box>
    </div>
  )
}

export default Goals