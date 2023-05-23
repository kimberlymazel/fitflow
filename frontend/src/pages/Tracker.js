import React from 'react'
import Header from '../components/general/Header'
import Navigation from '../components/general/Navigation'
import Goals from '../components/tracker/Goals'
import Checkin from '../components/tracker/Checkin'

export const Tracker = () => {
  return (
    <div className="Tracker">
        <Header></Header>

        <div class="left">
            <Navigation></Navigation>
        </div>

        <div class="middle">
            <Goals></Goals>

        </div>

        <div class="right">
            <Checkin></Checkin>
        </div>
    </div>
  )
}