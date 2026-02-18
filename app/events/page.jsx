"use client";
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from "framer-motion";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
const data = [
  {
    title: "IREED X DCOIL at Shiksha Mahotsav 2025",
    desc: "Shiksha Mahotsav is a grand educational festival that brings together students, educators, and industry leaders. Over 800+ students visited our stallShiksha Mahotsav is a grand educational festival that brings together students, educators, and industry leaders. Over 800+ students visited our stallShiksha Mahotsav is a grand educational festival that brings together students, educators, and industry leaders. Over 800+ students visited our stall Shiksha Mahotsav is a grand educational festival that brings together students, educators, and industry leaders. Over 800+ students visited our stall, seeking guidance on career paths in real estate and business analytics. We witnessed an overwhelming response at Shiksha Mahotsav, with students eager to explore career opportunities in real estate. It was inspiring to see future leaders take their first step toward a thriving career",
    img: "/assets/Event/Doranda College.jpg",
    side: "left",
    tag: "Development"
  },
 {
    title: "IREED X DCOIL at Shiksha Mahotsav 2025",
    desc: "Shiksha Mahotsav is a grand educational festival that brings together students, educators, and industry leaders. Over 800+ students visited our stallShiksha Mahotsav is a grand educational festival that brings together students, educators, and industry leaders. Over 800+ students visited our stallShiksha Mahotsav is a grand educational festival that brings together students, educators, and industry leaders. Over 800+ students visited our stall Shiksha Mahotsav is a grand educational festival that brings together students, educators, and industry leaders. Over 800+ students visited our stall, seeking guidance on career paths in real estate and business analytics. We witnessed an overwhelming response at Shiksha Mahotsav, with students eager to explore career opportunities in real estate. It was inspiring to see future leaders take their first step toward a thriving career",
    img: "/assets/Event/Doranda College.jpg",
    side: "right",
    tag: "Development"
  },
  {
    title: "IREED X DCOIL at Shiksha Mahotsav 2025",
    desc: "Shiksha Mahotsav is a grand educational festival that brings together students, educators, and industry leaders. Over 800+ students visited our stallShiksha Mahotsav is a grand educational festival that brings together students, educators, and industry leaders. Over 800+ students visited our stallShiksha Mahotsav is a grand educational festival that brings together students, educators, and industry leaders. Over 800+ students visited our stall Shiksha Mahotsav is a grand educational festival that brings together students, educators, and industry leaders. Over 800+ students visited our stall, seeking guidance on career paths in real estate and business analytics. We witnessed an overwhelming response at Shiksha Mahotsav, with students eager to explore career opportunities in real estate. It was inspiring to see future leaders take their first step toward a thriving career",
    img: "/assets/Event/Doranda College.jpg",
    side: "left",
    tag: "Development"
  },
];

const ScrollSection = ({ item, index }) => {
  const container = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const isInView = useInView(container, { amount: 0.2, once: false });
  const isImageLeft = item.side === "left";

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const imgY = useTransform(smoothProgress, [0, 1], ["-5%", "5%"]);
  const textY = useTransform(smoothProgress, [0, 1], ["8%", "-8%"]);

  // Helper to truncate text
  const truncatedDesc = item.desc.slice(0, 150) + "...";

  return (
    <section 
      ref={container} 
      className="relative min-h-[70vh] border-t-4 border-dotted border-[#b79662] md:min-h-[90vh] w-full bg-[#fef1dd] flex items-center overflow-hidden py-10 md:py-16"
    >
      <div className={`container mx-auto px-6 flex flex-col ${isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-0 md:gap-10`}>
        
        {/* IMAGE BLOCK */}
        <motion.div 
          className="relative w-full md:w-7/12 aspect-[16/10] md:h-[65vh] overflow-hidden z-10 rounded-sm"
          style={{
            clipPath: isInView ? "inset(0% 0% 0% 0%)" : "inset(2% 2% 2% 2%)",
            transition: "clip-path 1s cubic-bezier(0.19, 1, 0.22, 1)"
          }}
        >
          <motion.img 
            style={{ y: imgY, scale: 1.05 }}
            src={item.img} 
            alt={item.title}
            className="w-full h-full object-cover  transition-all duration-1000"
          />
        </motion.div>

        {/* TEXT CONTENT BLOCK */}
        <motion.div 
          style={{ y: typeof window !== 'undefined' && window.innerWidth > 768 ? textY : 0 }}
          className={`
            relative z-20 w-[94%] md:w-5/12 
            -mt-12 md:mt-0 
            ${isImageLeft ? "md:-ml-20" : "md:-mr-20"} 
            p-8 md:p-12  
            bg-[#111111]/98 backdrop-blur-md 
            border border-white/5 shadow-2xl
          `}
        >
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-[#b79662] font-mono tracking-[0.3em] uppercase text-[9px] block mb-3">0{index + 1} / {item.tag}</span>
            <h2 className="text-1xl md:text-4xl font-black text-white leading-none uppercase mb-5">
              <span className="text-[#b79662] font-light">{item.title}</span>
            </h2>
            <div className="w-10 h-[1px] bg-[#b79662] mb-5" />
            
            {/* DESCRIPTION SECTION WITH READ MORE */}
            <div className="relative">
              <motion.p 
                layout
                className="text-gray-400 text-sm md:text-base leading-relaxed mb-4 max-w-sm"
              >
                {isExpanded ? item.desc : truncatedDesc}
              </motion.p>
              
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-[#b79662] text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2"
              >
                {isExpanded ? "Show Less" : "Read More"}
                <motion.span animate={{ rotate: isExpanded ? 180 : 0 }}>
                  ↓
                </motion.span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default function BhaswarPaulEvents() {
  return (
    <>
      <Header />
    <main className="bg-[#0a0a0a] selection:bg-[#b79662] selection:text-white overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="relative h-[100vh] md:h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute " />
          <div className="absolute " />
          
          <motion.video 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }} 
            transition={{ duration: 1.5 }}
            autoPlay loop muted playsInline 
            className="w-full h-full object-cover "
          >
            <source src="/assets/video/slider-video.mp4" type="video/mp4" />
          </motion.video>
        </div>

        {/* <div className="relative z-20 text-center px-4">
          <motion.p 
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "1em" }}
            transition={{ duration: 1 }}
            className="text-[#b79662] uppercase text-[10px] md:text-xs mb-4"
          >
            Strategic Excellence
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl md:text-[9rem] font-black text-white uppercase tracking-tighter leading-tight"
          >
            Visionary
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "60px" }}
            transition={{ delay: 1, duration: 0.8 }}
            className="h-[1px] bg-[#b79662] mx-auto mt-6"
          />
        </div> */}

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
            <div className="w-[1px] h-12 " />
        </div>
      </section>
<br/>
<br/>
<br/>
      {/* CONTENT SECTIONS */}
      <div className="relative z-10 -mt-10 md:-mt-20">
        {data.map((item, index) => (
          <ScrollSection key={index} item={item} index={index} />
        ))}
      </div>

     

    </main>
    <Footer />
    </>
  );
}