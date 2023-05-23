import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Standard from '../cards/Standard'
import '../../style/App.css'
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'
import {Doughnut} from 'react-chartjs-2';

ChartJS.register(
    ArcElement, Tooltip, Legend
)

function Goals() {
  const datafitness={
    labels:[],
    datasets:[{
        labels :[] ,
        data:[5,10],
        backgroundColor :['white', '#6DAFFD'],
        borderColor:['white', '#6DAFFD'],
    }]
  }
  const datacalorie={
    labels:[],
    datasets:[{
        labels :[] ,
        data:[456,544],
        backgroundColor :['white', '#F279E6'],
        borderColor:['white', '#F279E6'],
    }]
  }

  return (
    <div class="carousel" style={{paddingLeft:'20px'}}>
        <Box>
            <Grid 
                container spacing={2}
                wrap="nowrap"
                sx={{ overflow: "auto" }}
            >
                <Grid item>
                 <h2 style={{color: '#531EB7', fontSize:18, marginBottom:5}}>Fitness Goal</h2>
                    <Standard
                        style={{
                            background: 'linear-gradient(to right, #6DAFFD, #0079E9)'
                        }}
                    >
                        <h2 style={{color: 'white', fontSize:13, paddingLeft:10 ,marginTop:-1}}>Goal Progress</h2>
                        <div className='donutchart' style={{display :'flex', flexDirection:'row'}}>
                            <div className='leftdonutpart' style={{height:'8vh', marginTop:'10px'}}>
                                <Doughnut                              
                                    data = {datafitness}
                                    style={{borderWidth:'0.2', marginTop:'-20px',height:'12vh'}}/>
                            </div>
                            <div className='rightdonutpart'style={{marginLeft:'20%',marginTop:0}}>
                                <h2 style={{color: 'white', fontSize:13, marginLeft :"-30px",marginTop:-1}}>Completed</h2>
                                <h2 style={{color: 'white', fontSize:30, marginLeft :"-30px",marginTop:-10}}>5 km</h2>
                                <h2 style={{color: 'white', fontSize:13, marginLeft :"-30px",marginTop:-22}}>out of 15 km </h2>
                            </div>
                        </div>
                    </Standard>
                </Grid>
                
                <Grid item>
                <h2 style={{color: '#531EB7', fontSize:18, marginBottom:5}}>Calorie Goal</h2>
                    <Standard
                        style={{
                            background: 'linear-gradient(to right, #F279E6, #EB4A67)'
                        }}
                    >
                        <h2 style={{color: 'white', fontSize:13, paddingLeft:10 ,marginTop:-1}}>Goal Progress</h2>
                        <div className='donutchart' style={{display :'flex', flexDirection:'row'}}>
                            <div className='leftdonutpart' style={{height:'8vh', marginTop:'10px'}}>
                                <Doughnut                              
                                    data = {datacalorie}
                                    style={{borderWidth:'0.2', marginTop:'-20px',height:'12vh'}}/>
                            </div>
                            <div className='rightdonutpart'style={{marginLeft:'20%',marginTop:0}}>
                                <h2 style={{color: 'white', fontSize:13, marginLeft :"-30px",marginTop:-1}}>Completed</h2>
                                <h2 style={{color: 'white', fontSize:30, marginLeft :"-30px",marginTop:-10}}>456</h2>
                                <h2 style={{color: 'white', fontSize:13, marginLeft :"-30px",marginTop:-22}}>out of 1000 kcal</h2>
                            </div>
                        </div>                    
                        </Standard>
                </Grid>
            </Grid>
        </Box>
    </div>
  )
}
export default Goals