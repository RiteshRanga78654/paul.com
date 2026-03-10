"use client";
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  { id: "01", title: "", category: "Gurugram", image: "/assets/images/gurugram.jpg.jpeg" },
  { id: "02", title: "", category: "Hyderabad", image: "/assets/images/hyderabad.webp" },
  { id: "03", title: "", category: "Vizag", image: "/assets/images/vizag.jpg.jpeg" },
  { id: "04", title: "", category: "Bangalore", image: "/assets/images/bangalore.jfif.jpeg" },
  { id: "05", title: "", category: "Ranchi", image: "/assets/images/ranchi.jfif" },
  // { id: "06", title: "Health Tracker", category: "MOBILE APP", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop" },
];

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="relative bg-white w-[80vw] md:w-[330px] h-[400px] md:h-[500px] flex-shrink-0 cursor-pointer overflow-hidden bg-[#4c4949]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full h-full relative pointer-events-none">
        <div className={`absolute inset-0 bg-black/0 transition-colors duration-700 z-10 ${isHovered ? 'bg-black/40' : ''}`} />
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover transition-transform duration-1000 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
      </div>

      <motion.div
        className="absolute bottom-0 left-0 z-30 bg-[#b79662]/80 overflow-hidden shadow-1xl"
        animate={{ width: isHovered ? "80%" : 70, height: isHovered ? 300 : 80 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        style={{ originX: 0, originY: 1 }}
      >
        <div className="relative w-full h-full">
          <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
            <span className="text-white text-2xl md:text-3xl font-light font-mono tracking-tighter">{project.id}</span>
          </div>

          <div className={`absolute inset-0 p-5 flex flex-col justify-between transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <h3 className="text-white text-xs font-bold opacity-90 whitespace-nowrap overflow-hidden text-ellipsis">{project.title}</h3>
            <h2 className="text-white text-3xl font-black my-auto leading-tight font-sans tracking-tight">{project.category}</h2>
            {/* <p className="text-white text-[10px] md:text-xs font-bold tracking-widest font-mono">{`{VIEW PROJECT}`}</p> */}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const SelectedWork = () => {
  const component = useRef(null);
  const slider = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (!slider.current || !component.current) return;

      const getScrollAmount = () => {
        let horizontalWidth = slider.current.scrollWidth;
        // Match the 8vw padding logic from your Services component
        return -(horizontalWidth - window.innerWidth + (window.innerWidth * 0.08));
      };

      gsap.to(slider.current, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: component.current,
          start: "top top",
          end: () => `+=${slider.current.scrollWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, component);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={component} className="overflow-hidden bg-white">
      {/* Title Section matching ServicesSection */}
      <h2 className="text-4xl text-center md:text-4xl font-bold  pt-25 text-[#000]">
        Our <span className="text-[#b79662]">Presence</span>
      </h2>
      
      <div className="w-24 h-1 bg-[#b79662] mx-auto mt-4 rounded-full"></div>

      {/* Slider Container matching ServicesSection height and padding */}
      <div className="flex items-center h-[75vh]">
        <div 
          ref={slider} 
          className="flex flex-nowrap gap-5 px-[8vw]"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectedWork;



