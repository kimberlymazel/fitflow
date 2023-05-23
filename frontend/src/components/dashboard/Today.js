import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Standard from '../cards/Standard'
import '../../style/dashboard.css'

function Today() {
  return (
    <div class="today">
        <Box>
            <Grid 
                container spacing={2}
                wrap="nowrap"
                sx={{ overflow: "auto" }}
            >
                <Grid item>
                    <Standard
                        style={{
                            background: 'white'
                        }}
                    >
                        <h3>Your BMI</h3>
                    </Standard>
                </Grid>
                
                <Grid item>
                    <Standard
                        style={{
                            background: 'white'
                        }}
                    >
                        <h3>Today's lunch</h3>
                    </Standard>
                </Grid>
            </Grid>
        </Box>
    </div>
  )
}

export default Today