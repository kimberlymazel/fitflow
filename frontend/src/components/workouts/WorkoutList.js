import React from 'react'
import "../../style/workout.css"

export default function WorkoutList({ workoutData }) {
  return (
    <div className="list">
        <main>
            <h3>Warm Up:</h3>
            <ul>
                {workoutData['Warm Up']?.map((workout, index) => (
                <li key={index}>
                    Exercise: {workout.Exercise}, Time: {workout.Time}
                </li>
                ))}
            </ul>

            <h3>Exercise:</h3>
            <ul>
                {workoutData['Exercises']?.map((workout, index) => (
                <li key={index}>
                    Exercise: {workout.Exercise}, Sets: {workout.Sets}, Reps: {workout.Reps}
                </li>
                ))}
            </ul>

            <h3>Cool down:</h3>
            <ul>
                {workoutData['Cool Down']?.map((workout, index) => (
                <li key={index}>
                    Exercise: {workout.Exercise}, Time: {workout.Time}
                </li>
                ))}
            </ul>
        </main>
    </div>
  )
}
