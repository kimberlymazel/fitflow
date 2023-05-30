import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Standard from '../cards/Standard'
import '../../style/App.css'
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'
import {Doughnut} from 'react-chartjs-2';
import axiosInstance from "../../services/axios";

ChartJS.register(
    ArcElement, Tooltip, Legend
)

function Goals() {
    const [userData, setUserData] = useState([]);
    const [totalCaloriesBurnt, setTotalCaloriesBurnt] = useState(0);
    const [totalSteps, setTotalSteps] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            axiosInstance
            .get('/users/me')
            .then((response) => {
                setUserData(response.data);
            })
            .catch((error) => {
                console.error(error);
            })
        };

        const fetchGoalData = async () => {
            axiosInstance
            .get('/tracker/calories-burnt-weekly')
            .then((response) => {
                // // calories_consumed
                // setGoalData(response.data);

                // Calculate total calories consumed
                let sum = 0;
                response.data.forEach((tracker) => {
                    sum += tracker.calories_burnt;
                });
                setTotalCaloriesBurnt(sum);

                let sum2 = 0;
                response.data.forEach((tracker) => {
                    sum2 += tracker.steps_taken;
                });
                setTotalSteps(sum2);
            })
            .catch((error) => {
                console.error(error);
            })
        };
      
        fetchGoalData();
        fetchData();
      }, []);

    const datafitness={
        labels:[],
        datasets:[{
            labels :[] ,
            data:[totalSteps,userData.cardio_goal],
            backgroundColor :['white', '#6DAFFD'],
            borderColor:['white', '#6DAFFD'],
        }]
    }
    const datacalorie={
        labels:[],
        datasets:[{
            labels :[] ,
            data:[totalCaloriesBurnt,userData.calorie_goal],
            backgroundColor :['white', '#F279E6'],
            borderColor:['white', '#F279E6'],
        }]
    }

    return (
        <div class="carousel" style={{paddingLeft:'20px', display:"flex",width:"100%"}}>
            <div class="right" style={{width:"50%", margin:"0px 10px 10px 5px"}}>
                <h2 style={{color: '#531EB7', fontSize:16, marginBottom:3}}>Cardio Goal</h2>
                    <div
                        style={{
                            background: 'linear-gradient(to right, #6DAFFD, #0079E9)',
                            width: '100%',
                            height: '80%',
                            display: 'flex-inline',
                            alignSelf: 'center',
                            alignItems: 'center',
                            borderRadius: 20,
                            border:"none",
                            boxShadow:"none",
                            overflow:"hidden"
                        }}
                    >
                        <h2 style={{color: 'white', fontSize:'90%', padding:"2% 5% 0% 7%"}}>Goal Progress</h2>
                        <div className='donutchart' style={{display :'flex', flexDirection:'row', height:"100%"}}>
                            <div className='leftdonutpart' style={{height:'70%', margin:'10px 0px 20px 10px'}}>
                                <Doughnut                              
                                    data = {datafitness}
                                    style={{borderWidth:'0.2', marginTop:'-20px',height:'100%'}}/>
                            </div>
                            <div className='rightdonutpart'style={{marginLeft:'20%',marginTop:6}}>
                                <h2 style={{color: 'white', fontSize:13, marginLeft :"-30px",marginTop:-1}}>Completed</h2>
                                <h2 style={{color: 'white', fontSize:30, marginLeft :"-30px",marginTop:-10}}>{totalSteps}</h2>
                                <h2 style={{color: 'white', fontSize:13, marginLeft :"-30px",marginTop:-22}}>out of {userData.cardio_goal} steps </h2>
                            </div>
                        </div>
                    </div>
            </div>
            <div class="left" style={{width:"50%", margin:"0px 40px 10px 8px"}}>
                <h2 style={{color: '#531EB7', fontSize:16, marginBottom:3}}>Calorie Goal</h2>
                    <div
                        style={{
                            background: 'linear-gradient(to right, #F279E6, #EB4A67)',
                            width: '100%',
                            height: '80%',
                            display: 'flex-inline',
                            alignSelf: 'center',
                            alignItems: 'center',
                            borderRadius: 20,
                            border:"none",
                            boxShadow:"none",
                            overflow:"hidden"
                        }}
                    >
                        <h2 style={{color: 'white', fontSize:'90%', padding:"2% 5% 0% 7%"}}>Goal Progress</h2>
                        <div className='donutchart' style={{display :'flex', flexDirection:'row', height:"100%"}}>
                            <div className='leftdonutpart' style={{height:'70%', margin:'10px 0px 20px 10px'}}>
                                <Doughnut                              
                                    data = {datacalorie}
                                    style={{borderWidth:'0.2', margin:'-20px -0px 10px 10px',height:'100%'}}/>
                            </div>
                            <div className='rightdonutpart'style={{marginLeft:'20%',marginTop:6}}>
                                <h2 style={{color: 'white', fontSize:13, marginLeft :"-30px",marginTop:-1}}>Completed</h2>
                                <h2 style={{color: 'white', fontSize:30, marginLeft :"-30px",marginTop:-10}}>{totalCaloriesBurnt}</h2>
                                <h2 style={{color: 'white', fontSize:13, marginLeft :"-30px",marginTop:-22}}>out of {userData.calorie_goal} kcal</h2>
                            </div>
                        </div>   
                    </div>               
            </div>
                    
    
                    

                    
        </div>
    )
    }
export default Goals