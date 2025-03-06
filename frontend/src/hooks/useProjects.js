import { useState, useEffect } from "react";
import API from "../api/api";

export default function useProjects(userId) {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!userId) return;

        API.get(`/projects/${userId}`)
            .then((res) => {
                setProjects(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching projects:", err);
                setLoading(false);
            });
    }, [userId]);

    return { projects, loading };
}
