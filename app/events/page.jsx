

"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const data = [
  {
    title: "Real Estate Visionary",
    desc: "Transforming skylines and creating sustainable value through strategic land acquisition and innovative development frameworks.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
    side: "left",
  },
  {
    title: "Capital Infusion",
    desc: "Bridging the gap between ambitious industrial projects and elite global capital sources for rapid business scaling.",
    img: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=1974",
    side: "right",
  },
  {
    title: "Executive Mentorship",
    desc: "Empowering industry leaders with growth strategies that redefine market dominance and leadership excellence.",
    img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071",
    side: "left",
  }
];

const ScrollSection = ({ item, index }) => {
  const container = useRef(null);
  const isImageLeft = item.side === "left";

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  // Smoothing the scroll progress for the "Buttery" feel
  const smoothY = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });
  
  // This moves the text block vertically at a different speed than the scroll
  const yTranslate = useTransform(smoothY, [0, 1], [250, -250]);

  return (
    <div ref={container} className="relative h-screen w-full overflow-hidden bg-[#b3b3b3]">
      <div className="container mx-auto h-full flex items-center relative">
        
        {/* 1. THE STICKY IMAGE (Fixed in Background) */}
        <div className={`w-full md:w-8/12 h-[70vh] sticky top-[15vh] overflow-hidden 
          ${isImageLeft ? "md:mr-auto" : "md:ml-auto"}`}>
          <motion.img 
            initial={{ scale: 1.3 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src={item.img} 
            className="w-full h-full object-cover "
          />
        </div>

        {/* 2. THE MASSIVE GLIDING LAYER (Overlapping Foreground) */}
        <motion.div 
          style={{ y: yTranslate }}
          className={`absolute z-20 w-full md:w-6/12 h-[80vh] flex flex-col justify-center p-12 md:p-20 bg-[#151515] shadow-[0_0_100px_rgba(0,0,0,0.8)] border-y border-white/5
            ${isImageLeft ? "right-0 md:right-0" : "left-0 md:left-0"}`}
        >
          <span className="text-[#b79662] font-mono tracking-[0.5em] uppercase text-xs mb-4">
            Vertical 0{index + 1}
          </span>
          <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase leading-[0.9]">
            {item.title.split(' ')[0]} <br/>
            <span className="text-[#b79662]">{item.title.split(' ').slice(1).join(' ')}</span>
          </h2>
          <div className="h-[2px] w-24 bg-[#b79662] my-8" />
          <p className="text-[#b3b3b3] text-xl leading-relaxed max-w-md">
            {item.desc}
          </p>
          <button className="mt-10 self-start border-b-2 border-[#b79662] pb-1 text-[#b79662] uppercase tracking-[0.3em] text-xs font-bold hover:tracking-[0.5em] transition-all">
            Discover Project
          </button>
        </motion.div>

      </div>
    </div>
  );
};

export default function BhaswarPaulSmoothScroll() {
  return (
    <main className="bg-[#1e1e1e] selection:bg-[#b79662]">
      {/* HERO SECTION */}
      <section className="h-screen flex items-center justify-center relative z-30">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover grayscale opacity-50">
          <source src="/hero.mp4" />
        </video>
        <h1 className="relative z-20 text-8xl md:text-[12rem] font-black text-white tracking-tighter opacity-90 uppercase">
          Visionary
        </h1>
      </section>

      {/* CONNECTED GLIDING SECTIONS */}
      <div className="flex flex-col">
        {data.map((item, index) => (
          <ScrollSection key={index} item={item} index={index} />
        ))}
      </div>

      {/* FOOTER */}
      <footer className="h-screen flex flex-col items-center justify-center bg-[#151515] relative z-30">
          <h2 className="text-[#b79662] text-sm tracking-[1em] uppercase mb-10">Bhaswar Paul</h2>
          <div className="text-4xl md:text-6xl font-light text-white text-center">
            Strategic Growth. <br/> Industrial Impact.
          </div>
          <p className="mt-20 text-[#4c4949] text-[10px] tracking-widest">POWERED BY IREED INDIA</p>
      </footer>
    </main>
  );
}
