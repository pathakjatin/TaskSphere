import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function DashboardHeader() {
    const { currentUser, logout } = useAuth();
    // console.log("user object",currentUser)
    // console.log("user image",currentUser?.photoURL)


    return (
        <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
            <Link to="/" className="flex justify-between items-center">
                <h1 className="text-3xl hover:scale-[1.15] transition-all duration-300 ease-in-out">
                  TaskSphere
                </h1>
            </Link>

            <nav className="flex items-center gap-6">
                <a href="/dashboard" className="hover:text-gray-300">Home</a>
                <a href="/createtask" className="hover:text-gray-300">Create Task</a>

                {/* Show user info if logged in */}
                {currentUser && (
                    <div className="flex items-center gap-3">
                        {console.log("Rendering image with URL:", currentUser.photoURL)}
                        <img 
                            
                            src={currentUser.photoURL} 
                            alt="User" 
                            className="w-10 h-10 rounded-full border-2 object-cover border-white"
                        />
                        <span className="font-medium">
                            {currentUser.firstName} {currentUser.lastName}
                        </span>
                        <button 
                            onClick={logout} 
                            className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm"
                        >
                            Logout
                        </button>
                    </div>
                )}
            </nav>
        </header>
    );
}
