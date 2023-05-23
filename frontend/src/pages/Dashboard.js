import Header from './components/Header'
import Navigation from './components/Navigation'
import Agenda from './components/Agenda'
import Carousel from './components/Carousel'
import Activity from './components/Activity'
import Today from './components/Today'
import Profile from './components/Profile'
import './style/App.css'

export const Dashboard = () => {
  return (
    <div className="Dashboard">
      <Header></Header>

      <div class="left">
        <Navigation></Navigation>
      </div>

      <div class="middle">
        <Agenda></Agenda>
        
        <div class="under">
          <Carousel></Carousel>
        </div>

        <div class="under">
          <Activity></Activity>
        </div>

        <div class="under">
          <Today></Today>
        </div>
      </div>

      <div class="right">
          <Profile></Profile>
      </div>
    </div>
  )
}
