import React from "react";
import { service_data } from "../../utilities/service";
import ServiceCard from "./ServiceCard";

const Service = () => {
    return (
    <section className="service text-gray-700 service__bg">

    <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
        <h1 className="sm:text-5xl text-2xl font-medium title-font mb-2 text-gray-700 hover:text-black hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">What TaskSphere offers you?</h1>
        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500 mt-8">TaskSphere offers you powerful tools to manage tasks, enhance productivity, and achieve your goals with ease, all tailored to fit your unique workflow.</p>
    </div>
    <div className="flex flex-wrap -m-4">
        {service_data.map((item) => 
            (<ServiceCard key={item.image} {...item}/>)
        )}
    </div>
    </div>

    </section>
    );
};

export default Service;
