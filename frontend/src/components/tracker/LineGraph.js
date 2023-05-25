import React from 'react'
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement }from "chart.js"
import Wide from '../cards/Wide'

ChartJS.register(
    LineElement, 
    CategoryScale, 
    LinearScale, 
    PointElement
)

function LineGraph() {
    const data ={
        labels:['Mon', 'Tue', 'Wed', 'Thu', 'Fri', "Sat", "Sun"],
        datasets: [{
            labels: 'Hours',
            data:[5,3,5,7,2,0,1],
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
                max : 24
            }
        }
    }
    return (
        <div style={{marginTop:"5px"}}>
            <div className='titleAndToday'>
                <h2 style={{color: '#531EB7', fontSize:16, marginBottom:5}}>Fitness activity history</h2>
            </div>
            <Wide className='linechart' style={{backgroundColor:"white", boxShadow:"1px 1px 3px 1px #C7C9C6"}}>
                <Line
                    data={data}
                    options={options}
                    style={{width:"100%", maxHeight:160}}
                />
            </Wide>
        </div>

    )
}

export default LineGraph