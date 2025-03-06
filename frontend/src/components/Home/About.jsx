import React from "react";
import SparklesCore from "../../ui/sparkles"; // Adjust path if needed

export function About() {
  return (
    <div className="min-h-screen relative w-full bg-black flex flex-col items-center overflow-hidden rounded-md">
      {/* Background Effect */}
      <div className="w-full absolute inset-0 h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      {/* Heading Positioned at the Top */}
      <h1 className="absolute top-10 md:top-16 lg:top-20 text-3xl md:text-5xl lg:text-6xl font-bold text-white text-center z-20">
        About Us
      </h1>

      {/* Content Wrapper */}
      <div className="relative z-20 flex flex-col items-center w-full max-w-4xl mt-40">
        <div className="flex justify-aroundw-full gap-16">
          <div className="w-1/2 p-4 absolute left-0 top-[22rem]">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, consequatur.
            </p>
          </div>
          <div className="w-1/2 p-4 absolute right-0 top-[22rem]">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, neque!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
