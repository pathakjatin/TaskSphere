import { useState, useEffect } from "react";
import API from "../api/api";

export default function useProjectDetails(projectId) {
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!projectId) {
            console.log("❌ No project ID provided.");
            setLoading(false);
            return;
        }

        // console.log("🔍 Fetching project details for ID:", projectId);

        API.get(`/projects/${projectId}`)
            .then((res) => {
                // console.log("✅ Raw API Response:", res.data);

                if (Array.isArray(res.data) && res.data.length > 0) {
                    setProject(res.data[0]); // ✅ Extract first item if response is an array
                } else if (typeof res.data === "object" && res.data !== null) {
                    setProject(res.data); // ✅ Assign directly if response is an object
                } else {
                    console.error("❌ Unexpected API response:", res.data);
                    setProject(null);
                }
                setLoading(false);
            })
            .catch((err) => {
                console.error("❌ Error fetching project details:", err);
                setProject(null);
                setLoading(false);
            });
    }, [projectId]);

    return { project, loading };
}
