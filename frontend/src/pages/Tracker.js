import React from 'react'
import Header from '../components/general/Header'
import Navigation from '../components/general/Navigation'
import Goals from '../components/tracker/Goals'

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
            
            </div>

            <div class="under">
            
            </div>

            <div class="under">
            
            </div>
        </div>

        <div class="right">
            
        </div>
    </div>
  )
}