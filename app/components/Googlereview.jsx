
"use client";

import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import Heroslider from "../components/Heroslider";
import Textslider from "../components/Textslider";

// --- TESTIMONIAL DATA (Defined inside or properly scoped) ---
const reviews = [
  {
    id: 1,
    name: "Rajinder Takhar",
    role: "Property Investor",
    content:
      "I have known Estate Avenues for the last many years. I found them to be very focused and thorough with their work. Their team has helped me in taking right/good decisions which yielded great results.",
    rating: 5,
    bgImage:
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Anjali Sharma",
    role: "CEO, Tech Start-up",
    content:
      "The fund-raising expertise is unmatched. We were able to secure capital in record time thanks to his colossal network and professional guidance. Their team has helped me in taking right/good decisions which yielded great results.",
    rating: 5,
    bgImage:
      "/assets/images/Club-Capri-Exterior-Dusk-without-background-building.jpg",
  },
  {
    id: 3,
    name: "Vikram Singh",
    role: "Sales Director",
    content:
      "The workshops provided by Bhaswar transformed our sales culture. The team is more engaged and the results speak for themselves. Their team has helped me in taking right/good decisions which yielded great results.",
    rating: 5,
    bgImage: "/assets/images/m3m-urbana-business-park-banner-95984.jpg",
  },
];

export default function ParallaxReviewSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // --- NAVIGATION LOGIC ---
  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  // --- AUTOPLAY LOGIC ---
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <>
      <section className="relative min-h-[80vh] md:min-h-[70vh] flex items-center overflow-hidden py-12 md:py-20 mt-10 md:mt-20 mb-5 bg-black">
        {/* --- SEAMLESS BACKGROUND CROSS-FADE --- */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{
                backgroundImage: `url('${reviews[currentIndex].bgImage}')`,
                willChange: "opacity",
              }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/60 z-10" />
        </div>

        <div className="container mx-auto px-4 md:px-10 lg:px-20 relative z-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
            {/* Left Side Content */}
            <div className="w-full lg:w-5/12 text-white text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="inline-block bg-[#b79662] px-4 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-4 md:mb-6 shadow-lg">
                  Testimonials
                </span>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
                  Look What Our <br className="hidden md:block" />{" "}
                  <span className="text-[#b79662]">Customers</span> Say!
                </h2>
                <p className="text-sm md:text-lg text-gray-200 font-light max-w-md mx-auto lg:mx-0 leading-relaxed">
                  Well there is no better way to judge something other than
                  hearing from the ones who have experienced it already.
                </p>
              </motion.div>
            </div>

            {/* Right Side: Glassmorphism Slider */}
            <div className="w-full lg:w-6/12 relative group">
              <div className="overflow-visible py-5 px-1 md:px-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                    className="relative bg-white/10 backdrop-blur-xl border border-[#b79662]/40 p-6 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl"
                  >
                    {/* Google Icon & Stars */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 md:mb-8">
                      <div className="flex items-center gap-3">
                        <FcGoogle className="text-2xl md:text-3xl" />
                        <span className="text-white text-xs md:text-sm font-medium tracking-tight">
                          Review on Google
                        </span>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            fill="#FFD700"
                            className="text-[#FFD700]"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Review Body */}
                    <div className="min-h-[120px] md:min-h-[140px] flex items-center">
                      <p className="text-white text-base md:text-xl lg:text-[18px] font-light leading-relaxed ">
                        "{reviews[currentIndex].content}"
                      </p>
                    </div>

                    {/* Footer: Avatar & Name */}
                    <div className="flex items-center justify-between border-t border-white/15 pt-5 md:pt-6 mt-5 md:mt-6">
                      <div className="flex items-center gap-3 md:gap-5">
                        <div className="w-10 h-10 md:w-14 md:h-14 bg-[#b79662] rounded-full flex items-center justify-center text-white font-bold text-lg md:text-2xl shadow-inner">
                          {reviews[currentIndex].name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-base md:text-xl">
                            {reviews[currentIndex].name}
                          </h4>
                          <p className="text-gray-300 text-xs md:text-sm font-light tracking-wide">
                            {reviews[currentIndex].role}
                          </p>
                        </div>
                      </div>
                      <Quote
                        size={30}
                        className="text-[#b79662]/30 hidden sm:block"
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Arrows - Only show on hover via 'group' */}
              <div className="flex justify-center lg:block mt-6 lg:mt-0 gap-4">
                <div className="lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:-left-16 z-30">
                  <button
                    onClick={prevSlide}
                    className="p-3 ml-10 md:p-4 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 shadow-2xl hover:bg-[#b79662] transition-all transform hover:scale-110 active:scale-95 
      opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto"
                  >
                    <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                  </button>
                </div>
                <div className="lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:-right-8 z-30">
                  <button
                    onClick={nextSlide}
                    className="p-3 mr-3 md:p-4 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 shadow-2xl hover:bg-[#b79662] transition-all transform hover:scale-110 active:scale-95 
      opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto"
                  >
                    <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 flex justify-center">
        <img
          src="/assets/images/goldenmap.png" 
          alt="Global Connect Map"
          className="w-full h-auto max-w-5xl object-contain"
        />
      </div>
    </section> */}

      {/* <Heroslider /> */}
      {/* <Textslider /> */}
    </>
  );
}
