export default function Sidebar(){
    return(
        <aside className="bg-white text-black min-h-screen w-1/5 flex flex-col  items-center py-12 rounded-xl shadow-3xl gap-4">
            <h1 className="text-3xl">Task List</h1>
            <ul className="flex flex-col gap-1">
                <li>somthing 1</li>
                <li>somthing 1</li>
                <li>somthing 1</li>
                <li>somthing 1</li>
                <li>somthing 1</li>
            </ul>
            <button className="bg-black text-amber-50 hover:text-red-500 p-4 cursor-pointer">
                + New Project
            </button>
        </aside>
    );
}