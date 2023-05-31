import React from 'react'
import '../style/workout.css'
import Header from '../components/general/Header'
import Navigation from '../components/general/Navigation'
import WOGenerator from '../components/workouts/WOGenerator'

export const WorkoutGen = () => {
    return(
        <div className="workout">
            <Header></Header>

            <div class="main">
                <div class="left">
                    <Navigation></Navigation>
                </div>

                <div class="right">
                    <WOGenerator></WOGenerator>
                </div>
            </div>
           
        </div>
    )
}

export default WorkoutGen