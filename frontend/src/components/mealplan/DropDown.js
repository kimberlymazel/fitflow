import React from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import '../../style/mealplan.css'

function DropDown() {
  return (
    <div>
        <Box>
            <Stack>
                <div className="drop">
                    <div className="right-align">
                        <h3>I want to eat</h3>
                        <TextField
                            type="number"
                            label="# Calories"
                            sx={{width: 300}}
                        >
                        </TextField>
                    </div>

                    <div className="right-align">
                        <h3>In</h3>
                        <TextField
                            type="number"
                            label="# Meals"
                            sx={{width: 295}}
                        >
                        </TextField>
                    </div>
                </div>
            </Stack>
        </Box>
    </div>
  )
}

export default DropDown