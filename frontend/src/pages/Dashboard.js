import Header from '../components/general/Header'
import Navigation from '../components/general/Navigation'
import Agenda from '../components/dashboard/Agenda'
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

      <div className="left">
        <Navigation></Navigation>
      </div>

      <div className="middle">
        <Agenda></Agenda>
        
        <div className="under">
          <Menu></Menu>
        </div>

        <div className="under">
            <LineGraph></LineGraph>
        </div>

        <div className="under">
          <Today></Today>
        </div>
      </div>

      <div className="right">
        <div className="heightadjust" style={{height:'120vh'}}>
          <Profile></Profile>
          </div>

      </div>
    </div>
  )
}
