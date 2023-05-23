import Header from '../components/general/Header'
import Navigation from '../components/general/Navigation'
import Agenda from '../components/dashboard/Agenda'
import Carousel from '../components/dashboard/Carousel'
import Activity from '../components/dashboard/Activity'
import Today from '../components/dashboard/Today'
import Profile from '../components/dashboard/Profile'
import '../style/App.css'

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
