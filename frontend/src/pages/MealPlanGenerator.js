import React from 'react'
import '../style/mealplan.css'
import Header from '../components/general/Header'
import Navigation from '../components/general/Navigation'
import Categories from '../components/mealplan/Categories'
import DropDown from '../components/mealplan/DropDown'

export const MealPlanGenerator = () => {
    return(
        <div className="mealplan">
            <Header></Header>

            <div class="left">
                <Navigation></Navigation>
            </div>

            <div class="right">
                <Categories></Categories>
                <DropDown></DropDown>
            </div>
        </div>
    )
}