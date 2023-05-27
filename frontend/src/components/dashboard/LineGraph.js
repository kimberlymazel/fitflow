import React from 'react'
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement }from "chart.js"
import { useState } from 'react';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { Button } from '@mui/material';

ChartJS.register(
    LineElement, 
    CategoryScale, 
    LinearScale, 
    PointElement
)

function LineGraph() {
    const [activeDataset, setActiveDataset] = useState('Hours');
    const handleButtonClick = (dataset) => {
      setActiveDataset(dataset);
    };    
    
    const data = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'Hours',
            data: [5, 3, 5, 7, 2, 0, 1],
            backgroundColor: 'white',
            borderColor: '#1DD0E4',
            pointBorderColor: '#1DD0E4',
            fill: true,
            tension: 0.4,
          },
          {
            label: 'Calories',
            data: [+219, -113, -49, 192, 92, -130, 63],
            backgroundColor: 'white',
            borderColor: '#FF9105',
            pointBorderColor: '#FF9105',
            fill: true,
            tension: 0.4,
          },
        ],
      };
    
    const options={
        plugins:{
            legend: false
        },
        responsive:true,
        mantainAspectRatio:true,
        scales: {
            y:{
                color:"white"
            }
        }
    }
    
    const activeData = {
        labels: data.labels,
        datasets: data.datasets.filter((dataset) => dataset.label === activeDataset),
      };
    return (
        <div style={{ margin:"20px 20px 10px 30px",maxWidth:"100%"}}>
            <h2 style={{color: 'black', fontSize:20, marginBottom:5, marginLeft:"5px"}}>Activity · This Week</h2>
            <div className='linechart' 
                style={{backgroundColor:"white", 
                boxShadow:"1px 1px 3px 1px #C7C9C6",
                width: "100%",
                height: "100%",
                display: 'flex-inline',
                alignSelf: 'center',
                alignItems: 'center',
                borderRadius: 20,
                paddingTop:"8px"
                }}>

                <Line style={{margin:"5px 20px 0px 20px"}}data={activeData} options={options} />
                <Button startIcon={<FitnessCenterIcon style={{fontSize:"35px"}}/>} style={{textTransform:"none", fontSize:"18px", fontFamily:"Quicksand",borderRadius:"10px",boxShadow:"1px 1px 1px 1px lightgrey",color:"white",backgroundColor:"#FF8F00", margin:"10px 10px 10px 20px"}} onClick={() => handleButtonClick('Hours')}>Exercises</Button>
                <Button startIcon={<RestaurantIcon style={{fontSize:"35px"}}/>} style={{textTransform:"none", fontSize:"18px",fontFamily:"Quicksand",borderRadius:"10px",boxShadow:"1px 1px 1px 1px lightgrey",color:"white", backgroundColor:"#2DD8D3", margin:"10px 10px 10px 5px"}} onClick={() => handleButtonClick('Calories')}>Calories</Button>
            </div>
        </div>

    )
}

export default LineGraph