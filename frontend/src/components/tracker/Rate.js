import React, { useState, useEffect } from 'react'
import '../../style/App.css'
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'
import {Doughnut} from 'react-chartjs-2';
import '../../style/tracker/rate.css';

import axiosInstance from "../../services/axios";

ChartJS.register(
    ArcElement, Tooltip, Legend
)

function Goals() {
    const [trackingData, setTrackingData] = useState([]);
    const [averageWaterConsumption, setAverageWaterConsumption] = useState(0);
    const [averageSleep, setAverageSleep] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            axiosInstance
            .get('/tracker/calories-burnt-weekly')
            .then((response) => {
                setTrackingData(response.data);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false)
            });
        };
      
        fetchData();
      }, []);

    useEffect(() => {
        // Calculate average water consumption from trackers
        const totalWaterDrank = trackingData.reduce((sum, tracker) => sum + tracker.water_drank, 0);
        const averageWaterConsumption = totalWaterDrank / trackingData.length || 0;
        setAverageWaterConsumption(Math.round(averageWaterConsumption));

        // Calculate average sleep time from trackers
        const totalHoursSlept = trackingData.reduce((sum, tracker) => sum + tracker.hours_slept, 0);
        const averageSleep = totalHoursSlept / trackingData.length || 0;
        setAverageSleep(Math.round(averageSleep));

      }, [trackingData]);

    const avgWater={
        labels:[],
        datasets:[{
            data:[averageWaterConsumption, 3000],
            backgroundColor :['#E88516', 'rgba(232, 133, 22, 0.5)']
        }]
    }
    const avgSleep={
        labels:[],
        datasets:[{
            data:[averageSleep, 8],
            backgroundColor :['#99D05A', 'rgba(153, 208, 90, 0.5)'],
        }]
    }

    return (
        <div class="ratewhole">
            <div class="rightrate">
                    <h2 className="ratecategorytitle">Avg. water intake</h2>
                    <div className='ratecontainer'>
                        <div className='ratedonutchart'>
                            <div className='leftratedonutpart'>
                                <Doughnut                              
                                    data = {avgWater}
                                    style={{borderWidth:'0.2', marginTop:'0px',height:'100%'}}/>
                            </div>
                            <div className='rightratedonutpart'>
                                <h2 className='ratedatacount'>{averageWaterConsumption}</h2>
                                <h2 className='bpmkcaltitle'>ml</h2>
                            </div>
                        </div>
                    </div>
            </div>
            <div class="leftrate">
                <h2 className="ratecategorytitle">Avg. hours slept</h2>
                    <div className='ratecontainer'>
                        <div className='ratedonutchart'>
                            <div className='leftratedonutpart'>
                                <Doughnut                              
                                    data = {avgSleep}
                                    style={{borderWidth:'0.2', marginTop:'0px',height:'100%'}}/>
                            </div>
                            <div className='rightratedonutpart'>
                                <h2 className='ratedatacount'>{averageSleep}</h2>
                                <h2  className='bpmkcaltitle'>hours</h2>
                            </div>
                        </div>                    
                    </div>
            </div>
        </div>
    )
    }
export default Goals