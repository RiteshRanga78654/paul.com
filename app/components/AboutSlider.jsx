"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

const originalImages = [
  { url: "/assets/BPimages/FOB_0149.JPG",  title:""}, 
  { url: "/assets/BPimages/DSC_0342.JPG",  title:""},
  { url: "/assets/BPimages/DSC_0382.JPG",  title:""},
  { url: "/assets/BPimages/DSC02419.JPG",  title:""},
  { url: "/assets/BPimages/DSC02249.JPG",  title:""}, 
  { url: "/assets/BPimages/DSC02396.JPG",  title:""}, 
  { url: "/assets/BPimages/paras (1).jpg", title:""},
  { url: "/assets/BPimages/DSC_0421.JPG",  title:""}, 
];

// Clones for the infinite loop
const images = [
  originalImages[originalImages.length - 1],
  ...originalImages,
  originalImages[0],
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timeoutRef = useRef(null);

  const nextSlide = useCallback(() => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev + 1);
  }, [isTransitioning]);

  const prevSlide = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    if (currentIndex === images.length - 1) {
      setIsTransitioning(false);
      setCurrentIndex(1);
    } else if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(images.length - 2);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => setIsTransitioning(true), 20);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  useEffect(() => {
    timeoutRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timeoutRef.current);
  }, [nextSlide]);

  return (
    <section className="py-12 md:py-16 px-4 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl text-center md:text-4xl font-bold text-[#b79662]">
          Our <span className="text-[#b79662]">Services</span>
        </h2>
        <div className="w-24 h-1 bg-[#b79662] mx-auto mt-4 mb-10 rounded-full"></div>

        <div className="relative group">
          <div className="relative h-[400px] md:h-[600px] w-full overflow-hidden rounded-[5px] shadow-xl">
            <div
              className={`flex h-full ${isTransitioning ? "transition-transform duration-700 ease-in-out" : ""}`}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              onTransitionEnd={handleTransitionEnd}
            >
              {images.map((slide, index) => (
                <div
                  key={index}
                  className="relative w-full h-full flex-shrink-0 bg-center bg-cover"
                  style={{ backgroundImage: `url('${slide.url}')` }}
                >
                  {/* Title Overlay */}
                  <div className="absolute inset-x-0 bottom-10 flex justify-center items-center pointer-events-none">
                    <h3
                      className="text-2xl md:text-5xl font-extrabold text-white  "
                      style={{
                        // Combining a dark gold glow with a very dark sharp shadow for depth
                        filter: `
                                  drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.8)) 
                                  drop-shadow(0px 0px 15px rgba(139, 101, 43, 1))
                                  drop-shadow(0px 0px 25px rgba(183, 150, 98, 0.6))
                                `,
                      }}
                    >
                      {slide.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-[#b79662]/80 hover:bg-[#b79662] text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all z-10"
            >
              <ChevronLeft size={30} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#b79662]/80 hover:bg-[#b79662] text-white p-3 rounded-full opacity-0 group-hover:opacity-100 shadow-lg z-10"
            >
              <ChevronRight size={30} />
            </button>
          </div>

          <div className="flex justify-center mt-6 gap-3">
            {originalImages.map((_, index) => {
              const activeIndex =
                currentIndex === 0
                  ? originalImages.length - 1
                  : currentIndex === images.length - 1
                    ? 0
                    : currentIndex - 1;
              return (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index + 1)}
                  className={`transition-all duration-300 rounded-full ${
                    activeIndex === index
                      ? "bg-[#b79662] w-10 h-2"
                      : "bg-gray-300 w-2 h-2"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
