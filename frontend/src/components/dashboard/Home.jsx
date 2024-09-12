import React from 'react';
import { useState } from 'react';
import {FaBars , FaSearch} from "react-icons/fa";
import HomeSideNavbar from './HomeSideNavbar';
import MainContent from './MainContent';
import AsideContent from './AsideContent';

// import DoughnutGraph from './Doughnut';

const Home = () => {

    const [ clickNavbar , setClickNavbar ] = useState(false);
    function handleClick(){
        setClickNavbar( val => !val );
    }

    return (
        <>
            <header className="flex items-center justify-between bg-stone-50 w-full h-10 px-4">
                <div className="flex items-center">
                    <FaBars className="w-6 h-6 cursor-pointer" onClick={handleClick}/>
                </div>
                <div className="flex-grow flex justify-center">
                    <h1 className="text-center md:text-2xl text-xl font-bold text-stone-800">
                    Dashboard
                    </h1>
                </div>
                <div>
                    <FaSearch className="w-6 h-6 cursor-pointer"/>
                </div>
            </header>
            <div className="flex">
                {clickNavbar && 
                    (<HomeSideNavbar  
                        className={` hidden relative lg:block transition-all transform ease-in-out duration-400 ${
                        clickNavbar ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
                    />)}
                <div className="flex flex-1 lg:justify-between lg:items-start lg:flex-nowrap flex-wrap relative top-0">
                        <MainContent/>   

                        <AsideContent/>
                </div>
            </div>
        </>
    );
}

export default Home;