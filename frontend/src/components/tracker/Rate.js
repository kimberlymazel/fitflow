import React from 'react'
import '../../style/App.css'
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'
import {Doughnut} from 'react-chartjs-2';
import '../../style/tracker/rate.css'

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
    <div class="ratewhole">
        <div class="rightrate">
                <h2 className="ratecategorytitle">Heart Rate</h2>
                <div className='ratecontainer'>
                    <div className='ratedonutchart'>
                        <div className='leftratedonutpart'>
                            <Doughnut                              
                                data = {heartrate}
                                style={{borderWidth:'0.2', marginTop:'0px',height:'100%'}}/>
                        </div>
                        <div className='rightratedonutpart'>
                            <h2 className='ratedatacount'>112</h2>
                            <h2 className='bpmkcaltitle'>bpm</h2>
                        </div>
                    </div>
                </div>
        </div>
        <div class="leftrate">
            <h2 className="ratecategorytitle">Calorie Deficit/Surplus</h2>
                <div className='ratecontainer'>
                    <div className='ratedonutchart'>
                        <div className='leftratedonutpart'>
                            <Doughnut                              
                                data = {datacalorie}
                                style={{borderWidth:'0.2', marginTop:'0px',height:'100%'}}/>
                        </div>
                        <div className='rightratedonutpart'>
                            <h2 className='ratedatacount'>-678</h2>
                            <h2  className='bpmkcaltitle'>kcal</h2>
                        </div>
                    </div>                    
                </div>
        </div>
    </div>
  )
}
export default Goals