import React, { useState, useEffect } from 'react'
import '../../style/App.css'
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'
import {Doughnut} from 'react-chartjs-2';
import axiosInstance from "../../services/axios";
import '../../style/tracker/goals.css'

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
        <div class="carouselgoal" >
            <div class="rightgoalcont">
                <h2 className="goaltitle">Cardio Goal</h2>
                    <div className='rightgoal'>
                        <h2 className="goalprocesstitle">Goal Progress</h2>
                        <div className='goaldonutchart'>
                            <div className='leftgoaldonutpart'>
                                <Doughnut                              
                                    data = {datafitness}
                                    style={{
                                        borderWidth:'0.2', 
                                        marginTop:'-20px',
                                        height:'100%'}}/>
                            </div>
                            <div className='rightgoaldonutpart'>
                                <h2 className="completedtitle">Completed</h2>
                                <h2 className="goaldatacount">{totalSteps}</h2>
                                <h2 className="totalgoaldatacount">out of {userData.cardio_goal} steps </h2>
                            </div>
                        </div>
                    </div>
            </div>
            <div class="leftgoalcont">
                <h2 className="goaltitle">Calorie Goal</h2>
                    <div className='leftgoal'>
                        <h2 className="goalprocesstitle">Goal Progress</h2>
                        <div className='goaldonutchart'>
                            <div className='leftgoaldonutpart'>
                                <Doughnut                              
                                    data = {datacalorie}
                                    style={{
                                        borderWidth:'0.2', 
                                        margin:'-20px -0px 10px 10px',
                                        height:'100%'}}/>
                            </div>
                            <div className='rightgoaldonutpart'>
                                <h2 className="completedtitle" >Completed</h2>
                                <h2 className="goaldatacount">{totalCaloriesBurnt}</h2>
                                <h2 className="totalgoaldatacount">out of {userData.calorie_goal} kcal</h2>
                            </div>
                        </div>   
                    </div>               
            </div>
                    
    
                    

                    
        </div>
    )
    }
export default Goals