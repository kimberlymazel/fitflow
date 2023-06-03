import React, {useState} from 'react'
import TextField from '@mui/material/TextField'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Button from '@mui/material/Button'
import WorkoutList from "./WorkoutList"
import workout from "../../icons/workout-header.svg"
import "../../style/workout.css"

function WOGenerator() {
  const [workoutData, setWorkoutData] = useState([]);
  const [time, setTime] = useState(30);
  const [location, setLocation] = useState('');
  const [selectedEquipments, setSelectedEquipments] = useState([]);
  const [selectedMuscles, setSelectedMuscles] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);

  function handleTime(e){
    setTime(e.target.value);
  }

  const handleLocation = (event, newSelect) => {
    setLocation(newSelect);
  };

  const handleClick = (event, newSelect) => {
    setIsActive(current => !current);
    setIsActive2(false);
  };

  const handleClick2 = (event, newSelect) => {
    setIsActive2(current => !current);
    setIsActive(false);
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
      <div className="header">
        <img src={workout}></img>
      </div>
      
      <div className="input">
        <h1>Create a workout routine</h1>
        <h3>Answer a few simple questions and we'll
                generate a unique routine just for you</h3>
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
              onClick={handleClick}
              sx={{
                height: '5vh',
                width: '10vw', 
                textTransform:"none"
              }}
              style={{
                backgroundColor: isActive ? '#EA9C39' : ''
              }}
            >
              <h2
                style={{
                  color: isActive ? 'white' : '#7248C3'
                }}
              >
                Gym</h2>
            </ToggleButton>

            <ToggleButton 
              value="home"
              onClick={handleClick2}
              sx={{
                height: '5vh',
                width: '10vw',
                textTransform:"none"
              }}
              style={{
                backgroundColor: isActive2 ? '#EA9C39' : ''
              }}
            >
              <h2
                style={{
                  color: isActive2 ? 'white' : '#7248C3'
                }}
              >At Home</h2>
            </ToggleButton>        
          </ToggleButtonGroup>
        </div>

        <h2>Equipment</h2>
        <div className="equipment">
          <FormGroup>
            <div className="equip-left">
              <FormControlLabel
                value="treadmill"
                control={<Checkbox checked={selectedEquipments.includes('treadmill')} />}
                onChange={(event) => handleCheck(event, setSelectedEquipments)}
                label="Treadmill"
                labelPlacement="end"
                sx={{
                  width: '10vw'
                }}
              />

              <FormControlLabel
                value="dumbbells"
                control={<Checkbox checked={selectedEquipments.includes('dumbbells')} />}
                onChange={(event) => handleCheck(event, setSelectedEquipments)}
                label="Dumbbells"
                labelPlacement="end"
                sx={{
                  width: '10vw'
                }}
              />

              <FormControlLabel
                value="barbells"
                control={<Checkbox checked={selectedEquipments.includes('barbells')} />}
                onChange={(event) => handleCheck(event, setSelectedEquipments)}
                label="Barbells"
                labelPlacement="end"
                sx={{
                  width: '10vw'
                }}
              />
            </div>

            <div className="equip-mid">
              <FormControlLabel
                value="power rack"
                control={<Checkbox checked={selectedEquipments.includes('power rack')} />}
                onChange={(event) => handleCheck(event, setSelectedEquipments)}
                label="Power Rack"
                labelPlacement="end"
                sx={{
                  width: '10vw'
                }}
              />

              <FormControlLabel
                value="exercise bike"
                control={<Checkbox checked={selectedEquipments.includes('exercise bike')} />}
                onChange={(event) => handleCheck(event, setSelectedEquipments)}
                label="Exercise Bike"
                labelPlacement="end"
                sx={{
                  width: '10vw'
                }}
              />

              <FormControlLabel
                value="chest press"
                control={<Checkbox checked={selectedEquipments.includes('chest press')} />}
                onChange={(event) => handleCheck(event, setSelectedEquipments)}
                label="Chest Press"
                labelPlacement="end"
                sx={{
                  width: '10vw'
                }}
              />
            </div>

            <div className="equip-right">
              <FormControlLabel
                value="curl bench"
                control={<Checkbox checked={selectedEquipments.includes('curl bench')} />}
                onChange={(event) => handleCheck(event, setSelectedEquipments)}
                label="Curl Bench"
                labelPlacement="end"
                sx={{
                  width: '10vw'
                }}
              />

              <FormControlLabel
                value="leg press"
                control={<Checkbox checked={selectedEquipments.includes('leg press')} />}
                onChange={(event) => handleCheck(event, setSelectedEquipments)}
                label="Leg Press"
                labelPlacement="end"
                sx={{
                  width: '10vw'
                }}
              />

              <FormControlLabel
                value="raise machine"
                control={<Checkbox checked={selectedEquipments.includes('raise machine')} />}
                onChange={(event) => handleCheck(event, setSelectedEquipments)}
                label="Raise Machine"
                labelPlacement="end"
                sx={{
                  width: '10vw'
                }}
              />
            </div>
          </FormGroup>
        </div>

        <div className="muscles">
          <h2>Target Muscles</h2>
          <FormGroup>
            <div className="muscles-left">
              <FormControlLabel
                value="biceps and triceps"
                control={<Checkbox checked={selectedMuscles.includes('biceps', 'triceps')} />}
                onChange={(event) => handleCheck(event, setSelectedMuscles)}
                label="Biceps & Triceps"
                labelPlacement="end"
                sx={{
                  width: '10vw'
                }}
              />

              <FormControlLabel
                value="shoulders"
                control={<Checkbox checked={selectedMuscles.includes('shoulders')} />}
                onChange={(event) => handleCheck(event, setSelectedMuscles)}
                label="Shoulders"
                labelPlacement="end"
                sx={{
                  width: '10vw'
                }}
              />

              <FormControlLabel
                value="lower arm"
                control={<Checkbox checked={selectedMuscles.includes('lower arm')} />}
                onChange={(event) => handleCheck(event, setSelectedMuscles)}
                label="Lower Arm"
                labelPlacement="end"
                sx={{
                  width: '10vw'
                }}
              />
            </div>

            <div className="muscles-right">
              <FormControlLabel
                value="legs and knees"
                control={<Checkbox checked={selectedMuscles.includes('legs', 'knees')} />}
                onChange={(event) => handleCheck(event, setSelectedMuscles)}
                label="Legs & Knees"
                labelPlacement="end"
                sx={{
                  width: '10vw'
                }}
              />

              <FormControlLabel
                value="glutes and thighs"
                control={<Checkbox checked={selectedMuscles.includes('glutes', 'thighs')} />}
                onChange={(event) => handleCheck(event, setSelectedMuscles)}
                label="Glutes & Thighs"
                labelPlacement="end"
                sx={{
                  width: '10vw'
                }}
              />

              <FormControlLabel
              value="upper and lower back"
              control={<Checkbox checked={selectedMuscles.includes('upper back', 'lower back')} />}
              onChange={(event) => handleCheck(event, setSelectedMuscles)}
              label="Upper & Lower Back"
              labelPlacement="end"
              sx={{
                width: '12vw'
              }}
              />
            </div>
          </FormGroup>
        </div>

        <div className="buttondiv">
            <Button 
                variant="contained" 
                onClick={getWorkoutData}
                style={{
                    backgroundColor: "#EA9C39",
                    textTransform:"none",
                    padding:"10px 40px 10px 40px",
                    fontSize:"20px",
                    borderRadius:"10px"
                }}
                sx={{
                  height: '4.5vh'
                }}
            >
                Generate
            </Button>
        </div>
      </div>

      <div className="generated-wo">
        <div className='generated-wobackground'>
          <h2>Generated Workout</h2>
          {workoutData && <WorkoutList workoutData={workoutData}/>}
        </div>
      </div>
    </div>
  )
}

export default WOGenerator