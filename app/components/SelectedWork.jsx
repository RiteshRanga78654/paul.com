// import React, { useRef, useEffect, useState } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';

// const projects = [
//   { id: "01", title: "Partner with NumberDekho", category: "WEB & APP", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop" },
//   { id: "02", title: "Broopi Movers", category: "DATA & APP", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" },
//   { id: "03", title: "StarStell Astrology", category: "WEB DEV", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" },
//   { id: "04", title: "Eco Mobile App", category: "MOBILE APP", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop" },
//   { id: "05", title: "FinTech Dashboard", category: "UI/UX DESIGN", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" },
//   { id: "06", title: "Health Tracker", category: "MOBILE APP", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop" },
// ];

// const ProjectCard = ({ project }) => {
//   const [isHovered, setIsHovered] = React.useState(false);

//   return (
//     <motion.div
//       className="relative w-[80vw] md:w-[290px] min-h-[280px] md:min-h-[350px]] md:h-[400px] flex-shrink-0 cursor-pointer mr-5 overflow-hidden bg-[#4c4949]"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <div className="w-full h-full relative pointer-events-none">
//         <div className={`absolute inset-0 bg-black/0 transition-colors duration-700 z-10 ${isHovered ? 'bg-black/40' : ''}`} />
//         <img
//           src={project.image}
//           alt={project.title}
//           className={`w-full h-full object-cover transition-transform duration-1000 ${isHovered ? 'scale-110' : 'scale-100'}`}
//         />
//       </div>

//       <motion.div
//         className="absolute bottom-0 left-0 z-30 bg-[#b79662] overflow-hidden shadow-2xl"
//         animate={{ width: isHovered ? 250 : 70, height: isHovered ? 300 : 70 }}
//         transition={{ duration: 0.4, ease: "easeInOut" }}
//         style={{ originX: 0, originY: 1 }}
//       >
//         <div className="relative w-full h-full">
//           <motion.div className="absolute inset-0 flex items-center justify-center" animate={{ opacity: isHovered ? 0 : 1 }}>
//             <span className="text-white text-2xl md:text-3xl font-light font-mono tracking-tighter">{`{${project.id}}`}</span>
//           </motion.div>

//           <motion.div className="absolute inset-0 p-5 flex flex-col justify-between" initial={{ opacity: 0 }} animate={{ opacity: isHovered ? 1 : 0 }}>
//             <h3 className="text-white text-xs font-bold opacity-90 whitespace-nowrap overflow-hidden text-ellipsis">{project.title}</h3>
//             <h2 className="text-white text-xl font-black uppercase leading-tight font-mono tracking-tight">{`{${project.category}}`}</h2>
//             <p className="text-white text-[10px] md:text-xs font-bold uppercase tracking-widest font-mono">{`{VIEW PROJECT}`}</p>
//           </motion.div>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// const SelectedWork = () => {
//   const targetRef = useRef(null);
//   const scrollContainerRef = useRef(null);
//   const [offsetX, setOffsetX] = useState(0);

//   useEffect(() => {
//     const updateScroll = () => {
//       if (scrollContainerRef.current) {
//         // Calculate total width of all cards minus the visible screen width
//         const totalWidth = scrollContainerRef.current.scrollWidth;
//         const windowWidth = window.innerWidth;
//         // We subtract the window width so the last card stops at the right edge
//         setOffsetX(-(totalWidth - windowWidth + 40)); // +40 for some end padding
//       }
//     };

//     updateScroll();
//     window.addEventListener('resize', updateScroll);
//     return () => window.removeEventListener('resize', updateScroll);
//   }, []);

//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//   });

//   // Dynamically uses the calculated offsetX so there is NO blank space
//   const x = useTransform(scrollYProgress, [0, 1], ["0px", `${offsetX}px`]);

//   return (
//     <section ref={targetRef} className="relative h-[300vh] bg-white">
//       <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        
//         <div className="container mx-auto mb-12 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-[#b79662] mb-4 tracking-tight">
//             Selected Work
//           </h2>
//           <div className="w-24 h-1 bg-[#b79662] mx-auto rounded-2xl" />
//         </div>
        

//         <div className="flex items-center">
//           <motion.div 
//             ref={scrollContainerRef}
//             style={{ x }} 
//             className="flex pl-6 md:pl-[120px]"
//           >
//             {projects.map((project, index) => (
//               <ProjectCard key={index} project={project} />
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SelectedWork;



"use client";
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  { id: "01", title: "Partner with NumberDekho", category: "WEB & APP", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop" },
  { id: "02", title: "Broopi Movers", category: "DATA & APP", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" },
  { id: "03", title: "StarStell Astrology", category: "WEB DEV", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" },
  { id: "04", title: "Eco Mobile App", category: "MOBILE APP", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop" },
  { id: "05", title: "FinTech Dashboard", category: "UI/UX DESIGN", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" },
  { id: "06", title: "Health Tracker", category: "MOBILE APP", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop" },
];

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="relative bg-white w-[80vw] md:w-[290px] h-[350px] md:h-[400px] flex-shrink-0 cursor-pointer overflow-hidden bg-[#4c4949]"
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
        className="absolute bottom-0 left-0 z-30 bg-[#b79662] overflow-hidden shadow-2xl"
        animate={{ width: isHovered ? "100%" : 70, height: isHovered ? 300 : 70 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        style={{ originX: 0, originY: 1 }}
      >
        <div className="relative w-full h-full">
          <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
            <span className="text-white text-2xl md:text-3xl font-light font-mono tracking-tighter">{`{${project.id}}`}</span>
          </div>

          <div className={`absolute inset-0 p-5 flex flex-col justify-between transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <h3 className="text-white text-xs font-bold opacity-90 whitespace-nowrap overflow-hidden text-ellipsis">{project.title}</h3>
            <h2 className="text-white text-xl font-black  leading-tight font-mono tracking-tight">{`{${project.category}}`}</h2>
            <p className="text-white text-[10px] md:text-xs font-bold tracking-widest font-mono">{`{VIEW PROJECT}`}</p>
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
      <h2 className="text-3xl text-center md:text-4xl font-bold pt-30 text-[#b79662]">
        Selected <span className="text-[#b79662]">Work</span>
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



