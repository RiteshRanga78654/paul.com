"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // Combined imports

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const projects = [
  { id: "G", title: "", category: "Gurugram", image: "/assets/images/gurugram.jpg.jpeg" },
  { id: "H", title: "", category: "Hyderabad", image: "/assets/images/hyderabad.webp" },
  { id: "V", title: "", category: "Vizag", image: "/assets/images/vizag.jpg.jpeg" },
  { id: "B", title: "", category: "Bangalore", image: "/assets/images/bangalore.jfif.jpeg" },
  { id: "R", title: "", category: "Ranchi", image: "/assets/images/ranchi.jfif" },
];

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative bg-[#4c4949] w-full h-[400px] md:h-[500px] flex-shrink-0 cursor-pointer overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full h-full relative pointer-events-none">
        <div className={`absolute inset-0 transition-colors duration-700 z-10 ${isHovered ? "bg-black/40" : "bg-black/0"}`} />
        <img
          src={project.image}
          alt={project.category}
          className={`w-full h-full object-cover transition-transform duration-1000 ${isHovered ? "scale-110" : "scale-100"}`}
        />
      </div>

      <motion.div
        className="absolute bottom-0 left-0 z-30 bg-[#b79662]/80 overflow-hidden shadow-xl"
        animate={{
          width: isHovered ? "80%" : "70px",
          height: isHovered ? "300px" : "80px",
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        style={{ originX: 0, originY: 1 }}
      >
        <div className="relative w-full h-full">
          <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isHovered ? "opacity-0" : "opacity-100"}`}>
            <span className="text-white text-2xl md:text-5xl font-blod font-mono tracking-tighter">{project.id}</span>
          </div>
          <div className={`absolute inset-0 p-5 flex flex-col justify-between transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}>
            <h3 className="text-white text-xs font-bold opacity-90">{project.title}</h3>
            <h2 className="text-white text-3xl font-black my-auto leading-tight font-sans tracking-tight">{project.category}</h2>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const SelectedWork = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl text-center md:text-4xl font-bold pt-6 text-[#000]">
          Our <span className="text-[#b79662]">Presence</span>
        </h2>
        <div className="w-24 h-1 bg-[#b79662] mx-auto mt-4 mb-10 rounded-full" />

        <div className="relative group">
          {/* Navigation Buttons */}
          <button
            ref={prevRef}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-20 w-12 h-12 rounded-full shadow-xl flex items-center justify-center opacity-0 invisible group-hover:opacity-100 group-hover:visible bg-white text-[#b79662] border border-[#b79662]/20 hover:bg-[#b79662] hover:text-white transition-all duration-300 focus:outline-none"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="15 18 9 12 15 6" /></svg>
          </button>

          <button
            ref={nextRef}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-20 w-12 h-12 rounded-full shadow-xl flex items-center justify-center opacity-0 invisible group-hover:opacity-100 group-hover:visible bg-white text-[#b79662] border border-[#b79662]/20 hover:bg-[#b79662] hover:text-white transition-all duration-300 focus:outline-none"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="9 18 15 12 9 6" /></svg>
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true, // Stops sliding while user hovers a card
            }}
            loop={true} // Seamless infinite sliding
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SelectedWork;