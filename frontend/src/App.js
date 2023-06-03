import './style/App.css'
import { MealPlan } from './pages/MealPlan';
import { WorkoutGenerator } from './pages/WorkoutGenerator';
import { WorkoutGen } from './pages/WorkoutGen';
import { Dashboard } from './pages/Dashboard';
import { Tracker } from './pages/Tracker';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components/auth/Login";
import { Info } from "./components/auth/Info";
import { Register } from "./components/auth/Register";

import { Authenticated } from "./components/auth/Authenticated";
import { PublicRoute } from "./components/auth/PublicRoute";
import { AuthConsumer, AuthProvider } from "./context/JWTAuthContext";
import { Contact } from './pages/Contact';

function App() {
    return (
      <div className="App">
        <>
        <AuthProvider>
          <BrowserRouter>
            <AuthConsumer>
              {({ isInitialized }) => {
                if (!isInitialized) {
                  return (
                    <div
                      style={{
                        display: "flex",
                        height: "100vh",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      Loading...
                    </div>
                  );
                } else {
                  return (
                    <Routes>
                      <Route
                        path="/login"
                        element={
                          <PublicRoute>
                            <Login />
                          </PublicRoute>
                        }
                      />
                      <Route
                        path="/register"
                        element={
                          <PublicRoute>
                            <Register />
                          </PublicRoute>
                        }
                      />
                      <Route
                        path="/info"
                        element={
                          <PublicRoute>
                            <Info />
                          </PublicRoute>
                        }
                      />
                      <Route 
                        path="/"
                        element={
                          <Authenticated>
                            <Dashboard />
                          </Authenticated>
                        }
                      />
                      <Route
                        path="/tracker"
                        element={
                          <Authenticated>
                            <Tracker />
                          </Authenticated>
                        }
                      />
                      <Route
                        path="/meal-plan"
                        element={
                          <Authenticated>
                            <MealPlan />
                          </Authenticated>
                        }
                      />
                      <Route
                        path="/workouts"
                        element={
                          <Authenticated>
                            <WorkoutGen />
                          
                          </Authenticated>
                        }
                      />
                      <Route
                        path="/contacts"
                        element={
                          <Authenticated>
                            <Contact />
                          </Authenticated>
                        }
                      />
                    </Routes>
                  );
                }
              }}
            </AuthConsumer>
          </BrowserRouter>
        </AuthProvider>
        </>
        
        {/*
         <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/info" element={<Info />}/>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tracker" element={<Tracker />} />
            <Route exact path="/meal-plan" element={<MealPlan />} />
            <Route exact path="/workouts" element={<WorkoutGen />} />
            <Route exact path="/workout-generator" element={<WorkoutGenerator />} />
          </Routes>
        </BrowserRouter> 
        */}

      </div>
    );
  }

export default App;