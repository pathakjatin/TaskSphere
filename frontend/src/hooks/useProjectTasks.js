import { useState, useEffect } from "react";
import API from "../api/api";

export default function useProjectTasks(projectId) {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!projectId) {
            console.log("❌ No project ID provided for tasks.");
            setLoading(false);
            return;
        }

        // Fetch tasks based on project ID
        API.get(`/tasks/${projectId}`)
            .then((res) => {
                if (Array.isArray(res.data)) {
                    setTasks(res.data);
                } else {
                    console.error("❌ Unexpected API response:", res.data);
                    setTasks([]);
                }
                setLoading(false);
            })
            .catch((err) => {
                console.error("❌ Error fetching tasks:", err);
                setTasks([]);
                setLoading(false);
            });
    }, [projectId]);

    return { tasks, loading, setTasks };
}
