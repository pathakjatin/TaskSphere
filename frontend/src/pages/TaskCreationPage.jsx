import { useState, useEffect } from "react";
import NewProject from "../components/TaskCreationPage/NewProject";
import NoProjectSelected from "../components/TaskCreationPage/NoProjectSelected";
import Sidebar from "../components/TaskCreationPage/Sidebar";
import SelectedProject from "../components/TaskCreationPage/SelectedProject";
import API from "../api/api";

export default function TaskCreationPage() {
    const [projectState, setProjectState] = useState({
        selectedProjectId: undefined,
        projects: [],
        tasks: []
    });

    
    useEffect(() => {
        async function fetchProjects() {
            try {
                const user = JSON.parse(localStorage.getItem("user"));
                if (!user) return;

                const response = await API.get(`/projects/${user.uid}`);
                setProjectState(prevState => ({
                    ...prevState,
                    projects: response.data
                }));
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        }
        fetchProjects();
    }, []);

    function handleSelectProject(id) {
        setProjectState(prevState => ({
            ...prevState,
            selectedProjectId: id
        }));
    }

    function handleStartAddProject() {
        setProjectState(prevState => ({
            ...prevState,
            selectedProjectId: null
        }));
    }

    async function handleAddProject(projectData) {
        try {
            const user = JSON.parse(localStorage.getItem("user"));
            if (!user) return alert("User not logged in");

            const newProject = {
                ...projectData,
                userId: user.uid
            };

            const response = await API.post("/projects", newProject);

            setProjectState(prevState => ({
                ...prevState,
                selectedProjectId: response.data._id, 
                projects: [...prevState.projects, response.data]
            }));
        } catch (error) {
            console.error("Error creating project:", error);
            alert("Failed to create project. Try again.");
        }
    }

    async function handleDeleteProject() {
        try {
            const projectId = projectState.selectedProjectId;
            if (!projectId) return;

            await API.delete(`/projects/${projectId}`);

            setProjectState(prevState => ({
                ...prevState,
                selectedProjectId: undefined,
                projects: prevState.projects.filter(project => project._id !== projectId)
            }));
        } catch (error) {
            console.error("Error deleting project:", error);
            alert("Failed to delete project. Try again.");
        }
    }
// console.log("Current projectState:", projectState); // ✅ Debugging
// console.log("Projects array:", projectState.projects); // ✅ Check if it's an array
// console.log("Selected Project ID:", projectState.selectedProjectId); // ✅ Ensure ID exists
// console.log("🟢 Selected Project ID:", projectState.selectedProjectId);
// console.log("🟢 Available Projects:", projectState.projects);


    // const selectedProject = projectState.projects.find(project => project._id === projectState.selectedProjectId);
    
    let content = <SelectedProject 
                        projectId={projectState.selectedProjectId} // ✅ Pass only `projectId`
                        onDelete={handleDeleteProject}
                        tasks={projectState.tasks}
                    />;

    if (projectState.selectedProjectId === null) {
        content = <NewProject onAdd={handleAddProject} />;
    } else if (projectState.selectedProjectId === undefined) {
        content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
    }

    return (
        <main className="h-screen my-8 bg-black text-amber-50 z-[100] flex gap-8">
            <Sidebar
                onStartAddProject={handleStartAddProject}
                projects={projectState.projects} 
                onSelectProject={handleSelectProject}
                selectedProjectId={projectState.selectedProjectId}
            />
            {content}
        </main>
    );
}
