import Header from './components/Header'
import Navigation from './components/Navigation'
import Agenda from './components/Agenda'
import Card from './components/Card'
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
          <Card></Card>
        </div>
      </div>

      
    </div>
  );
}

export default App;
