import React, { useState, useEffect } from 'react'
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement }from "chart.js"
import { CircularProgress } from '@mui/material';
import '../../style/tracker/linegraph.css'

import axiosInstance from "../../services/axios";

ChartJS.register(
    LineElement, 
    CategoryScale, 
    LinearScale, 
    PointElement
)

function LineGraph() {
    const [trackingData, setTrackingData] = useState([]);
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

    const stepsTakenData = trackingData.map(data => data.steps_taken);

    const data ={
        labels:['Mon', 'Tue', 'Wed', 'Thu', 'Fri', "Sat", "Sun"],
        datasets: [{
            labels: 'Hours',
            data:stepsTakenData,
            backgroundColor: "white",
            borderColor:"#92C13C",
            pointBorderColor:'#92C13C',
            fill:true
        }]
    }
    const options={
        plugins:{
            legend: false
        },
        responsive:true,
        mantainAspectRatio:true,
        scales: {
            y:{
                min: 0,
                max : Math.max(...stepsTakenData) + 100
            }
        }
    }
    return (
        <div className="trackerlinegraphwhole">
            <h2 className="fitnessgraohtitle">Fitness activity history</h2>

            <div className='trackerlinechart' 
                style={{backgroundColor:"white", 
                boxShadow:"1px 1px 3px 1px #C7C9C6",
                width: "100%",
                height: "100%",
                display: 'flex-inline',
                alignSelf: 'center',
                alignItems: 'center',
                borderRadius: 20,

                }}>
                {loading ? (
                    <CircularProgress color="inherit" />
                ) : (
                    <Line
                    data={data}
                    options={options}
                    style={{width:"100%", maxHeight:'100%', margin:"10px 10px 10px 10px"}}
                    />
                )}
            </div>
        </div>

    )
}

export default LineGraph