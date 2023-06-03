import React from 'react'
import Box from '@mui/material/Box'
import '../../style/general.css'
import { Button } from '@mui/material';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import AlignVerticalBottomOutlinedIcon from '@mui/icons-material/AlignVerticalBottomOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import {useNavigate, useLocation } from "react-router-dom";


function Navigation() {
  const navigate = useNavigate();
  const currentRoute = useLocation();

  const toDashboard = (e) => {
    e.preventDefault();
    navigate("/");
  }
  const toTracker = (e) => {
    e.preventDefault();
    navigate("/tracker");
  }
  // const toCalculator = (e) => {
  //   e.preventDefault();
  //   navigate("/calculator");
  // }
  const toMealPlan = (e) => {
    e.preventDefault();
    navigate("/meal-plan");
  }
  const toWorkouts = (e) => {
    e.preventDefault();
    navigate("/workouts");
  }
  // const toSchedule = (e) => {
  //   e.preventDefault();
  //   navigate("/schedule");
  // }
  const toContacts = (e) => {
    e.preventDefault();
    navigate("/contacts");
  }

  return (
    <div className="nav">
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
            <div className="buttons">
                <Button 
                  onClick={toDashboard}
                  startIcon={<GridViewOutlinedIcon style={{fontSize:"40px"}}/>} 
                  style={{
                    overflow:"hidden",
                    marginLeft:"0px",
                    marginTop:"20%",
                    marginRight:"0", 
                    fontFamily:"Quicksand", 
                    textTransform:"none", 
                    fontSize:"170%", 
                    maxWidth:"80%",
                    textAlign:"left",
                    // paddingRight:"65px",
                    borderRadius:"18px",
                    backgroundColor: currentRoute.pathname.includes("dashboard") ? "white" : "transparent",
                    color: currentRoute.pathname.includes("dashboard") ? "#5E19BA" : "white"
                  }}
                >
                      Dashboard
                </Button>
                
                <Button 
                  onClick={toTracker}
                  startIcon={<AlignVerticalBottomOutlinedIcon style={{fontSize:"40px"}}/>}
                  style={{
                    overflow:"hidden",
                    marginLeft:"0px", 
                    marginTop:"20%",
                    marginRight:"0", 
                    fontFamily:"Quicksand", 
                    textTransform:"none", 
                    fontSize:"170%",
                    maxWidth:"80%",
                    paddingRight:"40px",
                    borderRadius:"18px",
                    textAlign:"left",
                    backgroundColor: currentRoute.pathname.includes("tracker") ? "white" : "transparent",
                    color: currentRoute.pathname.includes("tracker") ? "#5E19BA" : "white"
                  }}
                  >
                  Tracker
                </Button>
                {/* <Button onClick={toCalculator} startIcon={<CalculateOutlinedIcon style={{fontSize:"40px"}}/>} style={{overflow:"hidden",marginLeft:"-4px",color:"white", marginTop:"20%", marginRight:"-10%", fontFamily:"Quicksand", textTransform:"none", fontSize:"170%",maxWidth:240}}>Calculator</Button> */}
                
                <Button 
                  onClick={toMealPlan}
                  startIcon={<RestaurantOutlinedIcon style={{fontSize:"40px"}}/>} 
                  style={{
                    overflow:"hidden",
                    marginLeft:"0px",
                    marginTop:"20%",
                    marginRight:"0", 
                    fontFamily:"Quicksand",
                    textTransform:"none",
                    fontSize:"170%",
                    maxWidth:"80%",
                    // paddingRight:"82px",
                    borderRadius:"18px",
                    backgroundColor: currentRoute.pathname.includes("meal-plan") ? "white" : "transparent",
                    color: currentRoute.pathname.includes("meal-plan") ? "#5E19BA" : "white"
                    }}
                  >
                  Meal Plan
                </Button>
                
                <Button 
                  onClick={toWorkouts} 
                  startIcon={<FitnessCenterOutlinedIcon style={{fontSize:"40px"}}/>} 
                  style={{
                    overflow:"hidden",
                    marginLeft:"0px",
                    marginTop:"20%",
                    marginRight:"-10%",
                    fontFamily:"Quicksand",
                    textTransform:"none",
                    fontSize:"170%",
                    maxWidth:"80%",
                    // paddingRight:"82px",
                    borderRadius:"18px",
                    backgroundColor: currentRoute.pathname.includes("workouts") ? "white" : "transparent",
                    color: currentRoute.pathname.includes("workouts") ? "#5E19BA" : "white"
                    }}
                  >
                    Workouts
                  </Button>
                {/* <Button onClick={toSchedule} startIcon={<CalendarMonthOutlinedIcon style={{fontSize:"40px"}}/>} style={{overflow:"hidden",marginLeft:"-3px",color:"white",marginTop:"20%", marginRight:"-10%", fontFamily:"Quicksand", textTransform:"none", fontSize:"170%",maxWidth:240}}>Schedules</Button> */}
                
                <Button
                  onClick={toContacts}
                  startIcon={<CallOutlinedIcon style={{fontSize:"40px"}}/>} 
                  style={{
                    overflow:"hidden",
                    marginLeft:"0px",
                    marginTop:"20%",
                    marginRight:"-10%",
                    fontFamily:"Quicksand",
                    textTransform:"none",
                    fontSize:"170%",
                    maxWidth:"80%",
                    // paddingRight:"60px",
                    borderRadius:"18px",
                    backgroundColor: currentRoute.pathname.includes("contacts") ? "white" : "transparent",
                    color: currentRoute.pathname.includes("contacts") ? "#5E19BA" : "white"
                  }}
                >
                  Contact Us
                </Button>
            </div>
        </Box>
    </div>
  )
}

export default Navigation