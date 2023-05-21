import Header from './components/Header'
import Navigation from './components/Navigation'
import Agenda from './components/Agenda'
import Carousel from './components/Carousel'
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
      </div>

      
    </div>
  );
}

export default App;
