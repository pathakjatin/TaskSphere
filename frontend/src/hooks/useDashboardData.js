import { useState, useEffect } from "react";
import API from "../api/api";

export default function useDashboardData(userId) {
    const [dashboardData, setDashboardData] = useState({
        totalProjects: 0,
        totalTasks: 0,
        completedTasks: 0,
        pendingTasks: 0,
        upcomingDeadlines: [],
        recentProjects: [],
        recentTasks: []
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!userId) return;

        async function fetchDashboardData() {
            try {
                const [projectsRes, tasksRes] = await Promise.all([
                    API.get(`/projects/${userId}`),
                    API.get(`/tasks/user/${userId}`)
                ]);

                const projects = projectsRes.data;
                const tasks = tasksRes.data;

                const completedTasks = tasks.filter(task => task.completed).length;
                const pendingTasks = tasks.length - completedTasks;
                const upcomingDeadlines = projects
                    .filter(project => new Date(project.dueDate) > new Date())
                    .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
                    .slice(0, 3); // Show next 3 upcoming deadlines

                setDashboardData({
                    totalProjects: projects.length,
                    totalTasks: tasks.length,
                    completedTasks,
                    pendingTasks,
                    upcomingDeadlines,
                    recentProjects: projects.slice(-3).reverse(), // Last 3 projects
                    recentTasks: tasks.slice(-5).reverse() // Last 5 tasks
                });
            } catch (error) {
                console.error("❌ Error fetching dashboard data:", error);
            }
            setLoading(false);
        }

        fetchDashboardData();
    }, [userId]);

    return { dashboardData, loading };
}
