import logo from '../../../public/logo.svg';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import {FaBars } from 'react-icons/fa'
import { ImCross } from "react-icons/im";

export default function Header(){

    const [ toggle , setToggle] = useState(false);
    function handleToggle(){
        setToggle((click) => !click);
    }

    const ulClassList = `
        flex flex-col md:flex-row justify-between gap-7 items-center list-none font-title font-semibold 
        absolute top-20 md:fixed md:top-8 md:right-8 transition-transform duration-300 ease-in-out
        ${toggle ? 'left-1/2 transform -translate-x-1/2 bg-gray-300 border-solid border-gray-900 border-y-2 rounded-lg w-full py-8' : '-left-3/4 md:left-auto'}
    `;

    return(
        <div className='bg-slate-200 fixed w-full h-18 z-10'>
        <header className=" flex justify-between items-center md:m-7 mt-4">
            <div className="flex justify-start gap-6 items-center" >
                <img src={logo} className="cursor-pointer"></img>
                <h3 className="md:text-3xl text-xl font-bold font-title cursor-pointer ">TaskSphere</h3>
            </div>
            <nav className=''>
            <ul className={ulClassList}>
                <NavLink to="/" className={({ isActive }) => (isActive ? "active__element" : "")}>
                    <li className='cursor-pointer text-gray-700 hover:text-black hover:scale-125 transition-all duration-300 ease-in-out'>
                        Home
                    </li>
                </NavLink>
                <NavLink to="/service" className={({ isActive }) => (isActive ? "active__element" : "")}>
                    <li className='cursor-pointer text-gray-700 hover:text-black hover:scale-125 transition-all  duration-300 ease-in-out'>
                        Services
                    </li>
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => (isActive ? "active__element" : "")}>
                    <li className='cursor-pointer text-gray-700 hover:text-black hover:scale-125 transition-all duration-300 ease-in-out'>
                        About
                    </li>
                </NavLink>
                <NavLink to="/contact" className={({ isActive }) => (isActive ? "active__element" : "")}>
                    <li className='cursor-pointer text-gray-700 hover:text-black hover:scale-125 transition-all duration-300 ease-in-out'>
                        Contact
                    </li>
                </NavLink>
                <NavLink to="/login">
                    <li className='cursor-pointer'>
                        <button className="bg-black text-white px-6 py-1.5  rounded-lg hover:scale-125 transition-all  duration-300 ease-in-out">
                            Login
                        </button>
                    </li>
                </NavLink>
            </ul>    
            </nav>
            <div>
            { toggle ? 
            <ImCross 
            className='text-black text-2xl cursor-pointer block md:hidden absolute top-4 right-6' 
            onClick={handleToggle}/> : 
            <FaBars 
            className='text-black text-2xl cursor-pointer block md:hidden absolute top-4 right-6' 
            onClick={handleToggle}/>}
            </div>
        </header>
        </div>
    );
}