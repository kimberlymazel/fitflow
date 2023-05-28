import React from 'react'
import '../style/mealplan.css'
import Header from '../components/general/Header'
import Navigation from '../components/general/Navigation'
import MPGenerator from '../components/mealplan/MPGenerator'

export const MealPlan = () => {
    return(
        <div className="mealplan">
            <Header></Header>

            <div class="left">
                <Navigation></Navigation>
            </div>

            <div class="right">
                <MPGenerator></MPGenerator>
            </div>
        </div>
    )
}