"use client";

import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FcGoogle } from "react-icons/fc";


// --- TESTIMONIAL DATA ---
const reviews = [
  {
    id: 1,
    name: "Rajinder Takhar",
    role: "Property Investor",
    content: "I have known Estate Avenues for the last many years. I found them to be very focused and thorough with their work. Their team has helped me in taking right/good decisions which yielded great results.",
    rating: 5
  },
  {
    id: 2,
    name: "Anjali Sharma",
    role: "CEO, Tech Start-up",
    content: "The fund-raising expertise is unmatched. We were able to secure capital in record time thanks to his colossal network and professional guidance.",
    rating: 5
  },
  {
    id: 3,
    name: "Vikram Singh",
    role: "Sales Director",
    content: "The workshops provided by Bhaswar transformed our sales culture. The team is more engaged and the results speak for themselves.",
    rating: 5
  }
];

export default function ParallaxReviewSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // --- NAVIGATION LOGIC ---
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % reviews.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  // --- AUTOPLAY LOGIC ---
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Changes every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex]); // Resets timer if user clicks manually

  return (
    <>
      
      <section 
        className="relative min-h-[65vh] flex items-center bg-fixed bg-cover bg-center py-15 mt-20 mb-5"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2000&auto=format&fit=crop')`,
        }}
      >
        {/* Dark Overlay for better contrast */}
        <div className="absolute inset-0 bg-black/45 pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-20 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            
            {/* Left Side Content */}
            <div className="w-full lg:w-5/12 text-white text-center lg:text-left">
              <span className="inline-block bg-[#b79662] px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 shadow-lg">
                Testimonials
              </span>
              <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Look What Our <br /> <span className="text-[#b79662]">Customers</span> Say!
              </h2>
              <p className="text-lg text-gray-200 font-light max-w-md mx-auto lg:mx-0 leading-relaxed">
                Well there is no better way to judge something other than hearing from the ones who have experienced it already.
              </p>
            </div>

            {/* Right Side: Glassmorphism Slider */}
            <div className="w-full lg:w-6/12 relative group">
              <div className="overflow-hidden py-5 px-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    // SMOOTH RIGHT-TO-LEFT TRANSITION
                    initial={{ opacity: 0, x: 150 }} // Enters from further right
                    animate={{ opacity: 1, x: 0 }}    // Settles at center
                    exit={{ opacity: 0, x: -150 }}   // Exits to the left
                    transition={{ 
                      duration: 0.5, 
                      ease: [0.25, 1, 0.5, 1] // Professional "Out-Quint" easing
                    }}
                    className="relative bg-white/10 backdrop-blur-xl border border-[#b79662]/40 p-4 md:p-10 rounded-[2.5rem] shadow-2xl"
                  >
                    {/* Header: Google Icon & Stars */}
                    <div className="flex justify-between items-center mb-8">
                      <div className="flex items-center gap-3">
                        <FcGoogle className="text-3xl" />
                        <span className="text-white text-sm font-medium tracking-tight">Review on Google</span>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={18} fill="#FFD700" className="text-[#FFD700]" />
                        ))}
                      </div>
                    </div>

                    {/* Review Body */}
                    <div className="min-h-[120px]">
                      <p className="text-white text-xl md:text-xl font-light leading-relaxed ">
                        "{reviews[currentIndex].content}"
                      </p>
                    </div>

                    {/* Footer: Avatar & Name */}
                    <div className="flex items-center justify-between border-t border-white/15 pt-5 mt-3">
                      <div className="flex items-center gap-5">
                        <div className="w-14 h-14 bg-[#b79662] rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-inner">
                          {reviews[currentIndex].name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-xl">{reviews[currentIndex].name}</h4>
                          <p className="text-gray-300 text-sm font-light tracking-wide">{reviews[currentIndex].role}</p>
                        </div>
                      </div>
                      <Quote size={40} className="text-white/10" />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Arrows */}
              <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-5 z-20">
                <button 
                  onClick={prevSlide} 
                  className="p-4 rounded-full bg-white/90 text-gray-900 shadow-2xl hover:bg-[#b79662] hover:text-white transition-all transform hover:scale-110"
                >
                  <ChevronLeft size={20} />
                </button>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-5 z-20">
                <button 
                  onClick={nextSlide} 
                  className="p-4 rounded-full bg-white/90 text-gray-900 shadow-2xl hover:bg-[#b79662] hover:text-white transition-all transform hover:scale-110"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}