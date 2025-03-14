import { Link } from "react-router-dom";
import { Home, List, Settings, User } from "lucide-react";

export default function DashboardSidebar({ isOpen, toggleSidebar }) {
    return (
        <div className={`fixed lg:relative top-0 left-0 h-screen bg-gray-900 text-white transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 w-64 lg:w-20 flex flex-col items-center py-6 z-50`}>
            <button onClick={toggleSidebar} className="absolute top-4 right-4 lg:hidden text-white">
                ✕
            </button>
            <Link to="/" className="mb-6 text-green-400">
                <Home size={24} />
            </Link>
            <Link to="/dashboard" className="mb-6 text-gray-400 hover:text-green-400">
                <List size={24} />
            </Link>
            <Link to="/settings" className="mb-6 text-gray-400 hover:text-green-400">
                <Settings size={24} />
            </Link>
            <Link to="/profile" className="text-gray-400 hover:text-green-400">
                <User size={24} />
            </Link>
        </div>
    );
}
