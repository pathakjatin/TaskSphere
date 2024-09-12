import {FaCalendar , FaAirbnb , FaGift} from "react-icons/fa";
export default function HomeSideNavbar(){
    return(
        <aside className="bg-stone-50 w-[60px] h-screen flex flex-col items-center py-4 gap-4">
            <FaAirbnb className="w-5 h-5 text-stone-600 hover:text-stone-800"/>
            <FaCalendar className="w-5 h-5 text-stone-600 hover:text-stone-800"/>
            <FaGift className="w-5 h-5 text-stone-600 hover:text-stone-800"/>
        </aside>
    );
}