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
    <div class="carousel" style={{paddingLeft:'20px', display:"flex",width:"100%"}}>
        <div class="right" style={{width:"50%", margin:"0px 10px 10px 5px"}}>
                <h2 style={{color: '#531EB7', fontSize:16, marginBottom:3}}>Heart Rate</h2>
                <div
                    style={{
                        backgroundColor:"white",
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
                    <div className='donutchart' style={{display :'flex', flexDirection:'row', height:"100%"}}>
                        <div className='leftdonutpart' style={{display :'flex', flexDirection:'row', height:"100%"}}>
                            <Doughnut                              
                                data = {heartrate}
                                style={{borderWidth:'0.2', marginTop:'0px',height:'100%'}}/>
                        </div>
                        <div className='rightdonutpart'style={{marginLeft:'8%',paddingTop:"12px", marginTop:"auto", marginBottom:"auto"}}>
                            <h2 style={{color: 'black', fontSize:30, marginLeft :"-5px",marginTop:-10}}>112</h2>
                            <h2 style={{color: 'black', fontSize:13, marginLeft :"auto", marginRight :"auto",marginTop:"-22px"}}>bpm</h2>
                        </div>
                    </div>
                </div>
        </div>
        <div class="left" style={{width:"50%", margin:"0px 40px 10px 8px"}}>
            <h2 style={{color: '#531EB7', fontSize:16, marginBottom:3}}>Calorie Deficit/Surplus</h2>
                <div
                    style={{
                        backgroundColor:"white",
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
                    <div className='donutchart' style={{display :'flex', flexDirection:'row', height:"100%"}}>
                        <div className='leftdonutpart' style={{display :'flex', flexDirection:'row', height:"100%"}}>
                            <Doughnut                              
                                data = {datacalorie}
                                style={{borderWidth:'0.2', marginTop:'0px',height:'100%'}}/>
                        </div>
                        <div className='rightdonutpart'style={{marginLeft:'8%',paddingTop:"12px", marginTop:"auto", marginBottom:"auto"}}>
                            <h2 style={{color: 'black', fontSize:30, marginLeft :"-22px",marginTop:-10}}>-678</h2>
                            <h2 style={{color: 'black', fontSize:13, marginLeft :"auto", marginRight :"auto",marginTop:"-22px"}}>kcal</h2>
                        </div>
                    </div>                    
                </div>
        </div>
    </div>
  )
}
export default Goals