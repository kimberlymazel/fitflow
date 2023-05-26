import './style/App.css'
import { MealGenerator } from './pages/MealGenerator';
import { MealPlanGenerator } from './pages/MealPlanGenerator';
import { WorkoutGenerator } from './pages/WorkoutGenerator';
import { Dashboard } from './pages/Dashboard';
import { Tracker } from './pages/Tracker';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tracker" element={<Tracker />} />
            <Route exact path="/meal-generator" element={<MealGenerator />} />
            <Route exact path="/meal-plan" element={<MealPlanGenerator />} />
            <Route exact path="/workout-generator" element={<WorkoutGenerator />} />
          </Routes>
        </BrowserRouter>
      </div>
  
    );
  }

export default App;