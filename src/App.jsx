import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import TaskCreationPage from "./pages/TaskCreationPage";
import Login from "./components/Home/Login"
import Register from "./components/Home/Register"
import './App.css'
import { Footer } from "./components/Footer";
import Header from "./components/Header";

function App() {
    return (
        <Router>
          <Header/>
              <Routes>
                  <Route 
                    path="/" 
                    element={<HomePage />} 
                  />
                  <Route
                    path="/login"
                    element={<Login/>}
                  />
                  <Route
                    path="/register"
                    element={<Register/>}
                  />
                  <Route 
                    path="/dashboard" 
                    element={<Dashboard />} 
                  />
                  <Route 
                    path="/createtask" 
                    element={<TaskCreationPage />} 
                  />
              </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
