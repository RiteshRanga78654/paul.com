"use client";

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const techSlides = [
  {
    id: 1,
    heading: "Embracing the digital world.",
    subHeading: "With cutting-edge technology.",
    description: "Cityinfo's best-in-class services are augmented by next-generation technology applications",
    bgImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 2,
    heading: "Strategic Growth.",
    subHeading: "Powered by real-time data.",
    description: "Experience market intelligence that transforms how you approach real estate investments.",
    bgImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 3,
    heading: "Innovative Solutions.",
    subHeading: "Built for the future.",
    description: "Leveraging AI and automation to streamline corporate training and project consulting.",
    bgImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2000&auto=format&fit=crop"
  }
];

export default function DigitalMistSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full h-[500px] md:h-[650px] overflow-hidden group bg-white">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        speed={1000}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        className="h-full w-full"
      >
        {techSlides.map((slide, index) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full">
            {/* Background Image Container with Fixed Height */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[7000ms] scale-110 group-hover:scale-105"
              style={{ backgroundImage: `url('${slide.bgImage}')` }}
            />

            {/* THE MIST EFFECT: Heavy white fade at the top */}
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-white via-white/40 to-transparent h-2/3" />
            
            {/* Content Area */}
            <div className="relative z-20 h-full flex flex-col items-center justify-start pt-20 md:pt-32 px-4 text-center">
              <div className="max-w-5xl">
                {/* Using AnimatePresence with a unique key based on the slide index 
                  forces the animation to run every time the slide changes.
                */}
                <AnimatePresence mode="wait">
                  {activeIndex === index && (
                    <motion.div
                      key={`slide-text-${index}`}
                      initial={{ opacity: 0, y: -100 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ 
                        duration: 1.2, 
                        ease: [0.16, 1, 0.3, 1] // Super smooth glide-down
                      }}
                    >
                      <h2 className="text-3xl md:text-6xl font-bold text-[#222222] tracking-tight mb-2">
                        {slide.heading}
                      </h2>
                      <h3 className="text-3xl md:text-6xl font-bold text-[#b79662] mb-6">
                        {slide.subHeading}
                      </h3>
                      
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="text-white text-sm md:text-2xl max-w-2xl mx-auto font-semibold leading-relaxed"
                      >
                        {slide.description}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* HOVER-ONLY NAVIGATION */}
        <div className="absolute inset-y-0 left-0 z-30 flex items-center">
          <button className="custom-prev ml-0 p-4 bg-black/10 hover:bg-black/30 text-white transition-all opacity-0 group-hover:opacity-100">
            <ChevronLeft size={32} />
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 z-30 flex items-center">
          <button className="custom-next mr-0 p-4 bg-black/10 hover:bg-black/30 text-white transition-all opacity-0 group-hover:opacity-100">
            <ChevronRight size={32} />
          </button>
        </div>
      </Swiper>
    </section>
  );
}