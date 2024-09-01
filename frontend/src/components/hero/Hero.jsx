import React from 'react';
import phoneTS from '../../assets/tasksphere.png';
import {FaArrowRight , FaPlus , FaStar} from 'react-icons/fa';


const Hero = () => {
    return (<>
        <section className="home min-h-screen flex items-center justify-around relative -z-10 mb-20">
            <div className="section__container flex justify-around items-center flex-wrap gap-28 my-6">
                <div className="section__content md:w-1/2 w-2/3 p-5 relative  md:mt-16 mt-20">
                    <h1 className="md:text-7xl text-6xl pb-10 font-semibold">Managing Your Tasks and Productivity Becomes Easier</h1>

                    <p className="text-base mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aliquam doloribus neque incidunt porro animi, fuga beatae doloremque earum vel? Odio ratione hic deleniti enim laborum maiores ducimus eius, autem tenetur laudantium delectus?</p>

                    <button className='flex justify-around items-center gap-1 text-lg h-12 w-48 bg-gray-900 text-white rounded-3xl cursor-pointer  hover:text-black hover:scale-125 transition-all duration-300 ease-in-out'>
                        Get Started 
                        <span className='bg-gray-800 h-8 w-10 rounded-full flex justify-center items-center'>
                            <FaArrowRight className=' h-8 w-6'/>
                        </span>
                    </button>

                    <div className="container">
                        <div className="flex flex-wrap">
                            <div className="p-4 flex flex-col justify-center items-center">
                                <div className="flex gap-1">
                                    <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">20K</h2> 
                                    <FaPlus className="text-base w-4 h-4 text-green-400"/>
                                </div>
                                <p class="leading-relaxed">Dowloads</p>
                            </div>
                            <div className="p-4 flex flex-col justify-center items-center">
                                <div className="flex gap-1">
                                    <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">4.5</h2>
                                    <FaStar className="text-base w-4 h-4 text-yellow-400"/>
                                </div>
                                <p class="leading-relaxed">Overall Rating</p>
                            </div>
                            <div className="p-4 flex flex-col justify-center items-center">
                                <div className="flex gap-1">
                                    <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">10K</h2>
                                    <FaPlus className="text-base w-4 h-4 text-red-400"/>
                                </div>
                                <p class="leading-relaxed">Active Users</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section__image  flex justify-center items-center relative">
                    <div className="wrapper flex justify-center items-center gap-8 relative">
                        <img src={phoneTS} alt="phone-image" className="bg-cover relative md:-bottom-20  md:right-16"/>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}


export default Hero;