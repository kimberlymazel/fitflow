import Header from '../components/general/Header'
import Navigation from '../components/general/Navigation'
import Agenda from '../components/dashboard/Agenda'
import Carousel from '../components/dashboard/Carousel'
import Today from '../components/dashboard/Today'
import Profile from '../components/dashboard/Profile'
import '../style/App.css'
import Menu
 from '../components/dashboard/Menus'
import LineGraph from '../components/dashboard/LineGraph'

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
          <Menu></Menu>
        </div>

        <div class="under">
            <LineGraph></LineGraph>
        </div>

        <div class="under">
          <Today></Today>
        </div>
      </div>

      <div class="right">
        <div class="heightadjust" style={{height:'120vh'}}>
          <Profile></Profile>
          </div>

      </div>
    </div>
  )
}
