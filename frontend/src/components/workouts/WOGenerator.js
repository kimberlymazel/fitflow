import React, {useState} from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Button from '@mui/material/Button'
import WorkoutList from "./WorkoutList"

function WOGenerator() {
  const [workoutData, setWorkoutData] = useState([]);
  const [time, setTime] = useState(30);
  const [location, setLocation] = useState('');
  const [selectedEquipments, setSelectedEquipments] = useState([]);
  const [selectedMuscles, setSelectedMuscles] = useState([]);

  function handleTime(e){
    setTime(e.target.value);
  }

  const handleLocation = (event, newSelect) => {
    setLocation(newSelect);
  };

  const handleCheck = (event, setFunction) => {
    const option = event.target.value;
    const isChecked = event.target.checked;

    // Update the selectedOptions array based on checkbox state
    setFunction(prevSelectedOptions => {
      if (isChecked) {
        return [...prevSelectedOptions, option];
      } else {
        return prevSelectedOptions.filter(item => item !== option);
      }
    });
  };

  const getWorkoutData = () =>{
    fetch(`https://workout-planner1.p.rapidapi.com/?time=${time}&muscle=${selectedMuscles}&location=${location}&equipment=${selectedEquipments}`, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6c1a7f9eb4msh17aa6ace300ca74p1e406cjsn50d074622f24',
            'X-RapidAPI-Host': 'workout-planner1.p.rapidapi.com'
        }
    })
    .then(response => response.json())
    .then((data) => {
        setWorkoutData(data);
        console.log(data);
    })
    .catch(() => {
        console.log("error");
    })
  }

  return (
    <div className="wo-generator">
        <h1>Create a workout routine</h1>
        <h3>Answer a few simple questions and we'll
                generate a unique routine just for you</h3>

        <Box>
          <div className="time">
            <h2>Time</h2>
            <TextField
              type="number"
              label="in minutes"
              sx={{width: 300}}
              onChange={handleTime}
            >
            </TextField>
          </div>

          <div className="location">
            <h2>Location</h2>
            <ToggleButtonGroup
              value={location}
              exclusive="true"
              onChange={handleLocation}
            >
              <ToggleButton 
                value="gym" 
                sx={{
                  width: '10vw'
                }}
                style={{
                  backgroundColor: '#D9D9D9'
                }}
              >
                <h2>Gym</h2>
              </ToggleButton>

              <ToggleButton 
                value="home"
                sx={{
                  width: '10vw'
                }}
                style={{
                  backgroundColor: '#D9D9D9'
                }}
              >
                <h2>At Home</h2>
              </ToggleButton>        
            </ToggleButtonGroup>
          </div>

          <div className="equipment">
            <h2>Equipment</h2>
            <FormGroup>
              <FormControlLabel
                value="treadmill"
                control={<Checkbox checked={selectedEquipments.includes('treadmill')} />}
                onChange={(event) => handleCheck(event, setSelectedEquipments)}
                label="Treadmill"
                labelPlacement="end"
              />

              <FormControlLabel
                value="dumbbells"
                control={<Checkbox checked={selectedEquipments.includes('dumbbells')} />}
                onChange={(event) => handleCheck(event, setSelectedEquipments)}
                label="Dumbbells"
                labelPlacement="end"
              />
            </FormGroup>
          </div>

          <div className="muscles">
            <h2>Target Muscles</h2>
            <FormGroup>
              <FormControlLabel
                value="biceps"
                control={<Checkbox checked={selectedMuscles.includes('biceps')} />}
                onChange={(event) => handleCheck(event, setSelectedMuscles)}
                label="Biceps"
                labelPlacement="end"
              />

              <FormControlLabel
                value="shoulders"
                control={<Checkbox checked={selectedMuscles.includes('shoulders')} />}
                onChange={(event) => handleCheck(event, setSelectedMuscles)}
                label="Shoulders"
                labelPlacement="end"
              />
            </FormGroup>
          </div>

          <div className="buttondiv">
              <Button 
                  variant="contained" 
                  onClick={getWorkoutData}
                  style={{
                      backgroundColor: "#EA9C39"
                  }}
              >
                  Generate
              </Button>
          </div>
        </Box>

        <div className="generated">
          {workoutData && <WorkoutList workoutData={workoutData}/>}
        </div>
    </div>
  )
}

export default WOGenerator