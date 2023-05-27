import './style/App.css'
import { MealGenerator } from './pages/MealGenerator';
import { MealPlanGenerator } from './pages/MealPlanGenerator';
import { WorkoutGenerator } from './pages/WorkoutGenerator';
import { Dashboard } from './pages/Dashboard';
import { Tracker } from './pages/Tracker';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";

import { Authenticated } from "./components/auth/Authenticated";
import { PublicRoute } from "./components/auth/PublicRoute";
import { AuthConsumer, AuthProvider } from "./context/JWTAuthContext";

function App() {
    return (
      <div className="App">
        {/* uncomment the following for auth */}
        {/* <>
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
                        path="/meal-generator"
                        element={
                          <Authenticated>
                            <MealGenerator />
                          </Authenticated>
                        }
                      />
                      <Route
                        path="/meal-plan"
                        element={
                          <Authenticated>
                            <MealPlanGenerator />
                          </Authenticated>
                        }
                      />
                      <Route
                        path="/workout-generatorn"
                        element={
                          <Authenticated>
                            <WorkoutGenerator />
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
        </> */}

        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
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