import React from 'react'
import Header from '../components/general/Header'
import Navigation from '../components/general/Navigation'
import Goals from '../components/tracker/Goals'
import {Checkin} from '../components/tracker/Checkin'
import LineGraph from '../components/tracker/LineGraph'
import Rate from '../components/tracker/Rate'

export const Tracker = () => {
  return (
    <div className="Tracker">
        <Header></Header>

        <div class="left">
            <Navigation></Navigation>
        </div>

      <div class="middle">
          <Goals></Goals>

          <div class="under">
            <LineGraph></LineGraph>
          </div>

          <div class="under">
            <Rate></Rate>
          </div>
      </div>

        <div class="right">
          <div class="heightadjust" style={{height:'120vh'}}>
            <Checkin></Checkin>
          </div>

        </div>

   
        
    </div>
  )
}