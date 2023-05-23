import React from 'react'
import '../style/App.css'
import Header from '../components/general/Header'
import Navigation from '../components/general/Navigation'
import Categories from '../components/mealplan/Categories'

export const MealPlanGenerator = () => {
    return(
        <div className="MealPlan">
            <Header></Header>

            <div class="left">
                <Navigation></Navigation>
            </div>

            <div class="middle">
                <Categories></Categories>
            </div>
        </div>
    )
}