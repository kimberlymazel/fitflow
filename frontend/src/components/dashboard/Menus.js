import React from 'react'
import '../../style/App.css'
import exercise from '../../icons/dailyexercise.png'
import intake from '../../icons/calorieintake.png'
import water from '../../icons/waterintake.png'
import progress from '../../icons/progresstracker.png'
import {useNavigate } from "react-router-dom";


function Menu() {
    const navigate= useNavigate();
    const toWorkout = (e) => {
        e.preventDefault();
        navigate("/workout-generator");
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
    <div style={{maxWidth:"100%"}}>
        <div className='slider' style={{marginLeft:"30px",display:"grid",gridAutoFlow:"column", width:'93%', overflowX:"auto", overflowY:"hidden"}}>
            <div onClick={toWorkout}  id="dailyexercise" className='menu item' style={{borderRadius:"20px",boxShadow:"2px 2px 2px 2px lightgrey",width:"400px",margin:"10px 15px 10px 0px", padding:"10px 10px 10px 10px", height:"80%", background: 'linear-gradient(to right, #E78403, #F9D601)'}}>
                <img src={exercise} height={"110px"} style={{padding:"5px 30px 0px 20px"}}></img>
                <h2 style={{color:"white", padding:"0px 30px 0px 20px", marginTop:"5px", marginBottom:"10px"}}>Daily Exercises</h2>
            </div>
            <div onClick={toMealPlan} id="caloriesintake" className='menu item' style={{borderRadius:"20px",boxShadow:"2px 2px 2px 2px lightgrey",width:"400px",margin:"10px 15px 10px 0px", padding:"10px 10px 10px 10px", height:"80%", background: 'linear-gradient(to right, #2EDED4, #1B8ABA)'}}>
                <img src={intake} height={"110px"} style={{padding:"5px 30px 0px 20px"}}></img>
                <h2 style={{color:"white", padding:"0px 30px 0px 20px", marginTop:"5px", marginBottom:"10px"}}>Your Meals</h2>
            </div>
            <div onClick={toTracker} id="prorgesstrack" className='menu item' style={{borderRadius:"20px",boxShadow:"2px 2px 2px 2px lightgrey",width:"400px",margin:"10px 15px 10px 0px", padding:"10px 10px 10px 10px", height:"80%", background: 'linear-gradient(to right, #712DDF, #871BBA)'}}>
                <img src={progress} height={"110px"} style={{padding:"5px 30px 0px 20px"}}></img>
                <h2 style={{color:"white", padding:"0px 30px 0px 20px", marginTop:"5px", marginBottom:"10px"}}>Progress Track</h2>
            </div>
        </div>

    </div>


  )
}
export default Menu