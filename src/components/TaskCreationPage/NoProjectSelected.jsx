import Button from "./Button";

export default function NoProjectSelected({onStartAddProject}){
    return <div className="mt-24 text-center w-2/3">
        <img src="/task.png" alt="task icon" className="w-16 h-16 mx-auto object-contain"/>
        <h2 className="text-xl font-bold text-stone-50 my-4">No Project Selected</h2>
        <p className="text-stone-100 mb-4">Select a project or get started with new one</p>
        <p className="mt-8">
            <Button 
                onClick={onStartAddProject}
            >
                Create new Project
            </Button>
        </p>
    </div>
}