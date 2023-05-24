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
  const heartrate={
    labels:[],
    datasets:[{
        labels :[] ,
        data:[112],
        backgroundColor :['#E88516', 'white'],
        borderColor:['#E88516', 'white'],
    }]
  }
  const datacalorie={
    labels:[],
    datasets:[{
        labels :[] ,
        data:[-678],
        backgroundColor :['#99D05A', '#white'],
        borderColor:['#99D05A', 'white'],
    }]
  }

  return (
    <div class="carousel" style={{ marginTop:"-1px"}}>
        <Box>
            <Grid 
                container spacing={2}
                wrap="nowrap"
                sx={{ overflow: "auto" }}
            >
                <Grid item>
                 <h2 style={{color: '#531EB7', fontSize:16, marginBottom:3}}>Heart Rate</h2>
                    <Standard
                        style={{
                            backgroundColor:"white" 
                        }}
                    >
                        <div className='donutchart' style={{display :'flex', flexDirection:'row'}}>
                            <div className='leftdonutpart' style={{height:'11vh', marginTop:'0px'}}>
                                <Doughnut                              
                                    data = {heartrate}
                                    style={{borderWidth:'0.2', marginTop:'-20px',height:'12vh'}}/>
                            </div>
                            <div className='rightdonutpart'style={{marginLeft:'10px',marginTop:"auto", marginBottom:"auto"}}>
                                <h2 style={{color: 'black', fontSize:30, marginLeft :"-5px",marginTop:-10}}>112</h2>
                                <h2 style={{color: 'black', fontSize:13, marginLeft :"auto", marginRight :"auto",marginTop:"-22px"}}>bpm</h2>
                            </div>
                        </div>
                    </Standard>
                </Grid>
                
                <Grid item>
                <h2 style={{color: '#531EB7', fontSize:16, marginBottom:3}}>Calorie Deficit/Surplus</h2>
                    <Standard
                        style={{
                            backgroundColor:"white" 
                        }}
                    >
                        <div className='donutchart' style={{display :'flex', flexDirection:'row'}}>
                            <div className='leftdonutpart' style={{height:'11vh', marginTop:'0px'}}>
                                <Doughnut                              
                                    data = {datacalorie}
                                    style={{borderWidth:'0.2', marginTop:'-20px',height:'12vh'}}/>
                            </div>
                            <div className='rightdonutpart'style={{marginLeft:'10%',marginTop:"auto", marginBottom:"auto"}}>
                                <h2 style={{color: 'black', fontSize:30, marginLeft :"-22px",marginTop:-10}}>-678</h2>
                                <h2 style={{color: 'black', fontSize:13, marginLeft :"auto", marginRight :"auto",marginTop:"-22px"}}>kcal</h2>
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