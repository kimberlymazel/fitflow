import React, {useState} from 'react';
import WorkoutList from "../components/workouts/WorkoutList"

export const WorkoutGenerator = () => {
    const [workoutData, setWorkoutData] = useState([]);
    const [time, setTime] = useState(30);
    const [selectedMuscles, setSelectedMuscles] = useState([]);
    const [location, setLocation] = useState('');
    const [selectedEquipments, setSelectedEquipments] = useState([]);

    const handleOptionChange = (e) => {
        setLocation(e.target.value);
      };

    const handleCheckboxChange = (event, setFunction) => {
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

    function handleChange(e){
        setTime(e.target.value);
    }

    const getWorkoutData = () =>{
        fetch(`https://workout-planner1.p.rapidapi.com/?time=${time}&muscle=${selectedMuscles}&location=${location}&equipment=${selectedEquipments}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'e39c6884afmsh5da1a719306a27dp18107fjsna3af94cde058',
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
        <div>
            <section className="controls">
                Time
                <input
                type="number"
                placeholder="in minutes"
                onChange={handleChange} />

                Location
                <div>
                    <input
                    type="radio"
                    id="gym"
                    value="gym"
                    checked={location === 'gym'}
                    onChange={handleOptionChange}
                    />
                    <label htmlFor="gym">Gym</label>
                </div>
                <div>
                    <input
                    type="radio"
                    id="home"
                    value="home"
                    checked={location === 'home'}
                    onChange={handleOptionChange}
                    />
                    <label htmlFor="home">At home</label>
                </div>

                Equipment
                <div className="checkbox">
                    <label>
                    <input
                        type="checkbox"
                        value="treadmill"
                        checked={selectedEquipments.includes('treadmill')}
                        onChange={(event) => handleCheckboxChange(event, setSelectedEquipments)}
                    />
                    treadmill
                    </label>

                    <label>
                    <input
                        type="checkbox"
                        value="dumbbells"
                        checked={selectedEquipments.includes('dumbbells')}
                        onChange={(event) => handleCheckboxChange(event, setSelectedEquipments)}
                    />
                    dumbbells
                    </label>
                </div>

                Target muscles
                <div className="checkbox">
                    <label>
                    <input
                        type="checkbox"
                        value="biceps"
                        checked={selectedMuscles.includes('biceps')}
                        onChange={(event) => handleCheckboxChange(event, setSelectedMuscles)}
                    />
                    biceps
                    </label>

                    <label>
                    <input
                        type="checkbox"
                        value="shoulders"
                        checked={selectedMuscles.includes('shoulders')}
                        onChange={(event) => handleCheckboxChange(event, setSelectedMuscles)}
                    />
                    shoulders
                    </label>
                </div>
            </section>
            <button onClick={getWorkoutData}>Generate</button>

            {workoutData && <WorkoutList workoutData={workoutData}/>}
        </div>
    )
}
