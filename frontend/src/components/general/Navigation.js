import React from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Thin from '../cards/Thin'
import '../../style/general.css'
import { Button } from '@mui/material';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import AlignVerticalBottomOutlinedIcon from '@mui/icons-material/AlignVerticalBottomOutlined';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import {useNavigate } from "react-router-dom";


function Navigation() {
  const navigate= useNavigate();
  const toDashboard = (e) => {
    e.preventDefault();
    navigate("/");
  }
  const toTracker = (e) => {
    e.preventDefault();
    navigate("/tracker");
  }
  const toCalculator = (e) => {
    e.preventDefault();
    navigate("/calculator");
  }
  const toMealPlan = (e) => {
    e.preventDefault();
    navigate("/meal-plan");
  }
  const toWorkouts = (e) => {
    e.preventDefault();
    navigate("/workout-generator");
  }
  const toSchedule = (e) => {
    e.preventDefault();
    navigate("/schedule");
  }
  const toContacts = (e) => {
    e.preventDefault();
    navigate("/contacts");
  }

  return (
    <div className="nav" style={{height:"125vh", width:"100%"}}>
        <Box
          sx={{
            alignSelf: "left",
            width: "100%",
            height: "100%"
          }}
          style={{
            background: 'linear-gradient(to bottom, #5A1BB9, #9801CC)',
            fontSize:"16px",
            height:"100%",
            overflow:"hidden",
          }}
        >
            <div
              style={{
                display:"flex",
                flexDirection:"column",
                justifyContent:"left",
                width:240,
                paddingLeft:"10%",
                overflow:"hidden",
                }}
            >
                <Button onClick={toDashboard} startIcon={<GridViewOutlinedIcon style={{fontSize:"40px"}}/>} style={{overflow:"hidden",color:"white", marginTop:"20%",marginRight:"-10%", fontFamily:"Quicksand", textTransform:"none", fontSize:"170%", maxWidth:240}}>Dashboard</Button>
                <Button onClick={toTracker} startIcon={<AlignVerticalBottomOutlinedIcon style={{fontSize:"40px"}}/>} style={{overflow:"hidden",marginLeft:"-22px",color:"white", marginTop:"20%",marginRight:"-10%", fontFamily:"Quicksand", textTransform:"none", fontSize:"170%",maxWidth:240}}>Tracker</Button>
                <Button onClick={toCalculator} startIcon={<CalculateOutlinedIcon style={{fontSize:"40px"}}/>} style={{overflow:"hidden",marginLeft:"-4px",color:"white", marginTop:"20%", marginRight:"-10%", fontFamily:"Quicksand", textTransform:"none", fontSize:"170%",maxWidth:240}}>Calculator</Button>
                <Button onClick={toMealPlan} startIcon={<RestaurantOutlinedIcon style={{fontSize:"40px"}}/>} style={{overflow:"hidden",marginLeft:"-10px",color:"white", marginTop:"20%",marginRight:"-10%", fontFamily:"Quicksand", textTransform:"none", fontSize:"170%",maxWidth:240}}>Meal Plan</Button>
                <Button onClick={toWorkouts} startIcon={<FitnessCenterOutlinedIcon style={{fontSize:"40px"}}/>} style={{overflow:"hidden",marginLeft:"-10px",color:"white", marginTop:"20%",marginRight:"-10%", fontFamily:"Quicksand", textTransform:"none", fontSize:"170%",maxWidth:240}}>Workouts</Button>
                <Button onClick={toSchedule} startIcon={<CalendarMonthOutlinedIcon style={{fontSize:"40px"}}/>} style={{overflow:"hidden",marginLeft:"-3px",color:"white",marginTop:"20%", marginRight:"-10%", fontFamily:"Quicksand", textTransform:"none", fontSize:"170%",maxWidth:240}}>Schedules</Button>
                <Button onClick={toContacts} startIcon={<CallOutlinedIcon style={{fontSize:"40px"}}/>} style={{overflow:"hidden",marginLeft:"5px",color:"white",marginTop:"20%", marginRight:"-10%", fontFamily:"Quicksand", textTransform:"none", fontSize:"170%",maxWidth:240}}>Contact Us</Button>

            </div>
        </Box>
    </div>
  )
}

export default Navigation