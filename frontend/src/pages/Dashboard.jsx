import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, LineChart, Line, CartesianGrid, ResponsiveContainer, AreaChart, Area } from "recharts";
import { Search, BarChart3, CheckCircle, ClipboardList, Folder, ChevronDown, ChevronUp, Calendar } from "lucide-react";
import API from "../api/api";
import DashboardSidebar from "../components/Dashboard/DashboardSidebar";
import { motion } from "framer-motion";

export default function Dashboard() {
    const [projects, setProjects] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [openProject, setOpenProject] = useState(null);
    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        async function fetchDashboardData() {
            try {
                const [projectsRes, tasksRes] = await Promise.all([
                    API.get(`/projects/${user?.uid}`),
                    API.get(`/tasks/user/${user?.uid}`)
                ]);
                setProjects(projectsRes.data);
                setTasks(tasksRes.data);
            } catch (error) {
                console.error("❌ Error fetching dashboard data:", error);
            }
        }
        fetchDashboardData();
    }, [user?.uid]);

    // Group tasks by day of the week
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const taskCountsByDay = daysOfWeek.map(day => ({
        name: day,
        tasks: tasks.filter(task => new Date(task.createdAt).getDay() === daysOfWeek.indexOf(day)).length
    }));

    // Project Completion Stats
    const completedProjects = projects.filter(proj => 
        tasks.filter(task => task.projectId === proj._id && task.completed).length === 
        tasks.filter(task => task.projectId === proj._id).length
    ).length;
    const incompleteProjects = projects.length - completedProjects;
    const projectCompletionRate = projects.length > 0 ? Math.round((completedProjects / projects.length) * 100) : 0;

    // Task Completion Stats
    const completedTasks = tasks.filter(task => task.completed).length;
    const pendingTasks = tasks.length - completedTasks;
    const taskCompletionRate = tasks.length > 0 ? Math.round((completedTasks / tasks.length) * 100) : 0;

    // Tasks per project (Bar Chart Data)
    const taskData = projects.map(project => ({
        name: project.title,
        tasks: tasks.filter(task => task.projectId === project._id).length
    }));

    const highPriority = projects.filter(proj => proj.priority === "High").length;
    const mediumPriority = projects.filter(proj => proj.priority === "Medium").length;
    const lowPriority = projects.filter(proj => proj.priority === "Low").length;
    // console.log("High:", highPriority, "Medium:", mediumPriority, "Low:", lowPriority);
    const priorityData = [
        { name: "High", value: highPriority || 0, color: "#dc2626" },   // Red
        { name: "Medium", value: mediumPriority || 0, color: "#eab308" },   // Yellow
        { name: "Low", value: lowPriority || 0, color: "#16a34a" }   // Green
    ];
    // console.log("Projects Data:", projects);
    console.log("Tasks:", tasks);
    // 


    return (
        <div className="flex min-h-screen bg-black text-white">
            <DashboardSidebar />

            <div className="flex-1 p-6">
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: -10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.5 }} 
                    className="flex justify-between items-center mb-6"
                >
                    <h1 className="text-3xl font-bold flex items-center gap-2">
                        <ClipboardList size={28} /> Dashboard
                    </h1>
                    <div className="relative">
                        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                        <input 
                            type="text" 
                            placeholder="Search..." 
                            className="pl-10 pr-4 py-2 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-green-500" 
                        />
                    </div>
                </motion.div>

        {/* Pie Charts & Bar Chart Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Tasks per Project (Bar Chart) - Full Width */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 0.5 }} 
                    className="bg-gray-950 p-6 rounded-lg shadow-lg col-span-3"
                >
                    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <BarChart3 size={22} /> Tasks per Project
                    </h2>
                    <ResponsiveContainer width="100%" height={350}>
                        <BarChart data={taskData}>
                            <XAxis dataKey="name" stroke="#ffffff" />
                            <YAxis stroke="#ffffff" />
                            <Tooltip />
                            <Bar dataKey="tasks" fill="#16a34a" barSize={100}/>
                        </BarChart>
                    </ResponsiveContainer>
                </motion.div>

                {/* Project Completion Pie Chart - Half Width */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 0.5 }} 
                    className="bg-gray-950 p-6 rounded-lg shadow-lg col-span-1"
                >
                    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <CheckCircle size={22} /> Project Completion
                    </h2>
                    <ResponsiveContainer width="100%" height={200}>
                        <PieChart>
                            <Pie 
                                data={[
                                    { name: "Completed", value: completedProjects }, 
                                    { name: "Incomplete", value: incompleteProjects }
                                ]} 
                                cx="50%" 
                                cy="50%" 
                                outerRadius={70} 
                                dataKey="value"
                            >
                                <Cell fill="#16a34a" />
                                <Cell fill="#dc2626" />
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                    <p className="text-center text-xl font-semibold mt-4">{projectCompletionRate}% Done</p>
                </motion.div>

                {/* Task Completion Pie Chart - Half Width */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 0.5 }} 
                    className="bg-gray-950 p-6 rounded-lg shadow-lg col-span-1"
                >
                    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <CheckCircle size={22} /> Task Completion
                    </h2>
                    <ResponsiveContainer width="100%" height={200}>
                        <PieChart>
                            <Pie 
                                data={[
                                    { name: "Completed", value: completedTasks }, 
                                    { name: "Pending", value: pendingTasks }
                                ]} 
                                cx="50%" 
                                cy="50%" 
                                outerRadius={70} 
                                dataKey="value"
                            >
                                <Cell fill="#16a34a" />
                                <Cell fill="#dc2626" />
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                    <p className="text-center text-xl font-semibold mt-4">{taskCompletionRate}% Done</p>
                </motion.div>


                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 0.5 }} 
                    className="bg-gray-950 p-6 rounded-lg shadow-lg col-span-1"
                >
                    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <CheckCircle size={22} /> Priority Chart
                    </h2>
                    <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                    <Pie 
                        data={priorityData} 
                        cx="50%" cy="50%" 
                        outerRadius={70} 
                        dataKey="value" 
                        label
                    >
                        {priorityData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>


                </motion.div>
            </div>

                {/* Line Chart */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 0.5 }} 
                    className="bg-gray-950 p-6 rounded-lg shadow-lg mt-6"
                >
                    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <Calendar size={22} /> Task Creation Trend (Weekly)
                    </h2>
                    <ResponsiveContainer width="100%" height={250}>
                        <LineChart data={taskCountsByDay}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                            <XAxis dataKey="name" stroke="#ffffff" />
                            <YAxis stroke="#ffffff" />
                            <Tooltip />
                            <Line type="monotone" dataKey="tasks" stroke="#16a34a" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </motion.div>

                <div className="mt-8 bg-gray-950 p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <Folder size={22} /> My Projects
                    </h2>
                    

                    {projects.length > 0 ? (
                        <div className="space-y-4">
                            {projects.map(project => {
                                const projectTasks = tasks.filter(task => String(task.projectId) === String(project._id));
                                console.log(`Tasks for Project ${project._id}:`, projectTasks);
                                return (
                                    <div key={project._id} className="p-4 bg-gray-900 rounded-lg">
                                        <div 
                                            className="flex justify-between items-center cursor-pointer" 
                                            onClick={() => setOpenProject(openProject === project._id ? null : project._id)}
                                        >
                                            <h3 className="text-lg font-bold">{project.title}</h3>
                                            {openProject === project._id ? <ChevronUp /> : <ChevronDown />}
                                        </div>
                                        {openProject === project._id && (
                                            <ul className="mt-2 text-gray-400 border-t border-gray-700 pt-2">
                                                {projectTasks.map(task => (
                                                    <li key={task._id} className="ml-4 py-1">- {task.text}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <p className="text-gray-400">No projects found.</p>
                    )}

                </div>

            </div>
        </div>
    );
}
