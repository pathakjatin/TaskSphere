import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SparklesCore from "../../ui/sparkles";
import Button from "../TaskCreationPage/Button";
import { Link } from "react-router-dom";

const Hero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
      setIsVisible(true);
    } else {
      controls.start({ opacity: 0, y: -50 });
      setIsVisible(false);
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -50 }}
      animate={controls}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="min-h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md"
    >
      <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
        TaskSphere
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
      <Button>
        <Link to="/createtask">Get Started</Link>
      </Button>
    </motion.div>
  );
};

export default Hero;
