import React from 'react'
import "../../style/workout.css"

export default function WorkoutList({ workoutData }) {
  return (
    <div className="list" style={{ color: 'white' }}>
        <main>
            <h3 style={{ color: 'white' }}>Warm Up:</h3>
            <ul>
                {workoutData['Warm Up']?.map((workout, index) => (
                <li key={index}>
                    <span style={{ color: 'white' }}>Exercise:</span> <span style={{ color: 'white' }}>{workout.Exercise}</span>, <span style={{ color: 'white' }}>Time:</span> {workout.Time}
                </li>
                ))}
            </ul>

            <h3 style={{ color: 'white' }}>Exercise:</h3>
            <ul>
                {workoutData['Exercises']?.map((workout, index) => (
                <li key={index}>
                    Exercise: {workout.Exercise}, Sets: {workout.Sets}, Reps: {workout.Reps}
                </li>
                ))}
            </ul>

            <h3 style={{ color: 'white' }}>Cool down:</h3>
            <ul>
                {workoutData['Cool Down']?.map((workout, index) => (
                <li key={index}>
                    <span style={{ color: 'white' }}>Exercise:</span> <span style={{ color: 'white' }}>{workout.Exercise}</span>, <span style={{ color: 'white' }}>Time:</span> {workout.Time}

                </li>
                ))}
            </ul>
        </main>
    </div>
  )
}
