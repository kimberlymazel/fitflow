import React from 'react'
import '../../style/App.css'
import exercise from '../../icons/dailyexercise.png'
import intake from '../../icons/calorieintake.png'
import progress from '../../icons/progresstracker.png'
import {useNavigate } from "react-router-dom";
import '../../style/dashboard/menu.css'


function Menu() {
    const navigate= useNavigate();
    const toWorkout = (e) => {
        e.preventDefault();
        navigate("/workouts");
      }
    const toTracker = (e) => {
    e.preventDefault();
    navigate("/tracker");
    }
    const toMealPlan = (e) => {
    e.preventDefault();
    navigate("/meal-plan");
    }
  return (
    <div className="menuwhole">
        <div className='slider'>
            <div onClick={toWorkout}  id="dailyexercise" className='menuitem1'>
                <img className="menuimage" src={exercise}></img>
                <h2 className="menuitemtitle">Daily Exercises</h2>
            </div>
            <div onClick={toMealPlan} id="caloriesintake" className='menuitem2'>
                <img className="menuimage" src={intake}></img>
                <h2 className="menuitemtitle">Your Meals</h2>
            </div>
            <div onClick={toTracker} id="prorgesstrack" className='menuitem3'>
                <img className="menuimage" src={progress}></img>
                <h2 className="menuitemtitle">Progress Track</h2>
            </div>
        </div>

    </div>


  )
}
export default Menu