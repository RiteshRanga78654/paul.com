"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const storySlides = [
  {
    id: 1,
    title: "The Cityinfo Story",
    content: "The emergence of Cityinfo Services runs parallel to India's emergence as an economic superpower. In 1996, as the world started getting increasingly interested in the potential of India, Cityinfo established itself as an innovative provider of information services.",
    bgImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Market Leadership",
    content: "Today, we stand tall in the real estate advisory space – having successfully completed 1200+ transactions, with over 42 million sq.ft. of space transacted in 80 locations across India.",
    bgImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Our Commitment",
    content: "From day one, we have committed ourselves to the ethos of establishing an advisory and transaction support practice that is based on deep market knowledge and keen insights.",
    bgImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2000&auto=format&fit=crop"
  }
];

export default function StorySection() {
  const [index, setIndex] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [direction, setDirection] = useState(1); // 1 for Next, -1 for Prev

  const handleNext = () => {
    setDirection(1);
    if (!hasInteracted) setHasInteracted(true);
    setIndex((prev) => (prev + 1) % storySlides.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    if (!hasInteracted) setHasInteracted(true);
    setIndex((prev) => (prev - 1 + storySlides.length) % storySlides.length);
  };

  // Modern Animation Variants
  const variants = {
    initial: (dir) => ({
      // FIRST CLICK: Horizontal Slide | SUBSEQUENT: Vertical Glide from Bottom/Top
      x: !hasInteracted ? (dir > 0 ? 200 : -200) : 0,
      y: hasInteracted ? (dir > 0 ? 150 : -150) : 0, 
      opacity: 0
    }),
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.9, 
        ease: [0.19, 1, 0.22, 1] // High-end "Expo Out" easing
      }
    },
    exit: (dir) => ({
      // FIRST CLICK: Horizontal Exit | SUBSEQUENT: Vertical Exit
      x: !hasInteracted ? (dir > 0 ? -200 : 200) : 0,
      y: hasInteracted ? (dir > 0 ? -150 : 150) : 0,
      opacity: 0,
      transition: { duration: 0.5 }
    })
  };

  return (
    <section className="relative w-full h-[550px] md:h-[650px] overflow-hidden bg-blue-900">
      {/* Background Image Layer */}
      <AnimatePresence initial={false}>
        <motion.div
          key={`bg-${index}`}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${storySlides[index].bgImage}')` }}
        />
      </AnimatePresence>

      {/* Deep Blue/Indigo Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0a192f] via-[#0a192f]/80 to-transparent" />

      {/* Content Container */}
      <div className="relative z-20 h-full container mx-auto px-6 md:px-20 lg:px-32 flex flex-col justify-center">
        <div className="max-w-3xl text-white">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="will-change-transform"
            >
              <h2 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
                {storySlides[index].title}
              </h2>
              <p className="text-base md:text-xl leading-relaxed text-gray-300 font-light mb-10 max-w-2xl">
                {storySlides[index].content}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls (Screenshot Style) */}
          <div className="flex gap-6 items-center">
            <button 
              onClick={handlePrev}
              className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center hover:bg-[#b79662] hover:border-[#b79662] transition-all duration-300 group"
            >
              <ArrowLeft size={24} className="text-white group-hover:-translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={handleNext}
              className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center hover:bg-[#b79662] hover:border-[#b79662] transition-all duration-300 group"
            >
              <ArrowRight size={24} className="text-white group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}