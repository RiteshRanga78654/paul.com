"use client";
import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

export default function ImageSlider() {
  // 1. Memoize images so they don't get recreated on every render
  const originalImages = useMemo(() => [
    { url: "/assets/BPimages/FOB_0149.JPG", title: "Luxury Service 1" },
    { url: "/assets/BPimages/DSC_0342.JPG", title: "Luxury Service 2" },
    { url: "/assets/BPimages/DSC_0382.JPG", title: "Luxury Service 3" },
    { url: "/assets/BPimages/DSC02419.JPG", title: "Luxury Service 4" },
    { url: "/assets/BPimages/DSC02249.JPG", title: "Luxury Service 5" },
    { url: "/assets/BPimages/DSC02396.JPG", title: "Luxury Service 6" },
    { url: "/assets/BPimages/paras (1).jpg", title: "Luxury Service 7" },
    { url: "/assets/BPimages/DSC_0421.JPG", title: "Luxury Service 8" },
  ], []);

  const images = useMemo(() => [
    originalImages[originalImages.length - 1],
    ...originalImages,
    originalImages[0],
  ], [originalImages]);

  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timeoutRef = useRef(null);

  // 2. Stable Navigation functions
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => prev - 1);
  }, []);

  // 3. Teleport logic for seamless loop
  const handleTransitionEnd = () => {
    if (currentIndex === images.length - 1) {
      setIsTransitioning(false);
      setCurrentIndex(1);
    } else if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(images.length - 2);
    }
  };

  // 4. Reset transition after teleport
  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => setIsTransitioning(true), 50);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  // 5. Optimized Autoplay logic
  useEffect(() => {
    const startSlider = () => {
      stopSlider(); // Always clear existing before starting
      timeoutRef.current = setInterval(nextSlide, 5000);
    };

    const stopSlider = () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };

    const handleVisibility = () => {
      document.hidden ? stopSlider() : startSlider();
    };

    startSlider();
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      stopSlider();
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [nextSlide]);

  return (
    <section className="py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl text-center md:text-4xl font-bold text-[#b79662]">
          Our <span className="text-[#b79662]">Services</span>
        </h2>
        <div className="w-24 h-1 bg-[#b79662] mx-auto mt-4 mb-10 rounded-full"></div>

        <div className="relative group">
          <div className="relative h-[400px] md:h-[600px] w-full overflow-hidden rounded-[5px] shadow-xl bg-gray-900">
            <div
              className={`flex h-full ${isTransitioning ? "transition-transform duration-700 ease-in-out" : ""}`}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              onTransitionEnd={handleTransitionEnd}
            >
              {images.map((slide, index) => (
                <div
                  key={`${slide.url}-${index}`}
                  className="relative w-full h-full flex-shrink-0 bg-center bg-cover bg-no-repeat"
                  style={{ backgroundImage: `url('${slide.url}')` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  <div className="absolute inset-x-0 bottom-12 flex justify-center px-4">
                    <h3 
                      className="text-2xl md:text-5xl font-extrabold text-white tracking-widest uppercase text-center"
                      style={{ 
                        filter: `
                          drop-shadow(0px 2px 2px rgba(0,0,0,1)) 
                          drop-shadow(0px 0px 15px rgba(139, 101, 43, 1))
                          drop-shadow(0px 0px 30px rgba(183, 150, 98, 0.8))
                        `
                      }}
                    >
                      {slide.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Controls */}
            <button onClick={prevSlide} className="absolute top-1/2 left-4 -translate-y-1/2 bg-[#b79662]/90 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all z-20 hover:scale-110">
              <ChevronLeft size={30} />
            </button>
            <button onClick={nextSlide} className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#b79662]/90 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all z-20 hover:scale-110">
              <ChevronRight size={30} />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-6 gap-3">
            {originalImages.map((_, index) => {
              const activeIndex = currentIndex === 0 ? originalImages.length - 1 : currentIndex === images.length - 1 ? 0 : currentIndex - 1;
              return (
                <button
                  key={index}
                  onClick={() => {
                    setIsTransitioning(true);
                    setCurrentIndex(index + 1);
                  }}
                  className={`transition-all duration-300 rounded-full ${activeIndex === index ? "bg-[#b79662] w-10 h-2" : "bg-gray-300 w-2 h-2"}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}