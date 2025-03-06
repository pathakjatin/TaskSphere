import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import TaskCreationPage from "./pages/TaskCreationPage";
import Login from "./components/Home/Login";
import Register from "./components/Home/Register";
import "./App.css";
import { Footer } from "./components/Footer";
import Header from "./components/Home/Header"; // Normal Header
import DashboardHeader from "./components/DashboardHeader"; // New Header for dashboard pages
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvide } from "./context/AuthContext";

function App() {
    return (
        <AuthProvide>
            <Router>
                <Layout /> {/* Handles conditional header */}
            </Router>
        </AuthProvide>
    );
}

// ✅ Extracted Layout component for better structure
function Layout() {
    const location = useLocation();

    // Define routes where DashboardHeader should be used
    const useDashboardHeader = ["/dashboard", "/createtask"].includes(location.pathname);

    return (
        <>
            {useDashboardHeader ? <DashboardHeader /> : <Header />}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                <Route path="/createtask" element={<PrivateRoute><TaskCreationPage /></PrivateRoute>} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
