import './style/App.css'
import { MealGenerator } from './pages/MealGenerator';
import { WorkoutGenerator } from './pages/WorkoutGenerator';
import { Dashboard } from './pages/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route exact path="/meal-generator" element={<MealGenerator />} />
            <Route exact path="/workout-generator" element={<WorkoutGenerator />} />
          </Routes>
        </BrowserRouter>
      </div>
  
    );
  }