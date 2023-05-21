import Header from './components/Header'
import Navigation from './components/Navigation'
import Agenda from './components/Agenda'
import Carousel from './components/Carousel'
import Activity from './components/Activity'
import Today from './components/Today'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header></Header>

      <div class="left">
        <Navigation></Navigation>
      </div>

      <div class="right">
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

      
    </div>
  );
}

export default App;
