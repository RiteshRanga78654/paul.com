"use client";
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Abhishek Tripathi",
    role: "Client",
    image: "/assets/images/book-1.jpeg",
    text: "Working with Mariox has been a transformative experience for our company. Their team has been instrumental in guiding our digital strategy and implementing innovative solutions that have significantly improved our business operations.",
  },
  {
    id: 2,
    name: "Anil Mehta",
    role: "Client",
    image: "/assets/images/book-1.jpeg",
    text: "My efforts in app development have changed massively thanks to Mariox. They have tremendously sophisticated technologies that I use to streamline campaigns, analyse data, and improve outcomes. I've had great growth and success because of their professional resources.",
  },
  {
    id: 3,
    name: "Sarah Jenkins",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&h=300&auto=format&fit=crop",
    text: "The strategic insights provided were invaluable. We saw a 200% increase in engagement within the first quarter. The team is professional, responsive, and truly cares about the success of their clients.",
  },
  {
    id: 4,
    name: "David Chen",
    role: "Tech Lead",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&h=300&auto=format&fit=crop",
    text: "Implementation was seamless. The support team was there every step of the way, ensuring our transition to the new system was smooth and error-free. Highly recommended for any growing enterprise.",
  },
];

const TestimonialSlider = () => {
  // We duplicate the list to create the illusion of infinity
  const extendedTestimonials = [...testimonials, ...testimonials];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);
  
  const timeoutRef = useRef(null);
  const transitionTime = 500; // 500ms match css duration

  // Responsive logic
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // --- SEAMLESS LOOP LOGIC ---

  const nextSlide = useCallback(() => {
    if (isTransitioning) {
      setCurrentIndex((prev) => prev + 1);
    }
  }, [isTransitioning]);

  const prevSlide = () => {
    if (isTransitioning) {
       setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0)); 
    }
  };

  // Watch Index Changes to Handle the "Snap Back"
  useEffect(() => {
    if (currentIndex === testimonials.length) {
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, transitionTime);
    }
  }, [currentIndex]);

  // Turn animation back on after the snap
  useEffect(() => {
    if (!isTransitioning) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            setIsTransitioning(true);
        });
      });
    }
  }, [isTransitioning]);

  // Auto-play Timer
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000); 
      return () => clearInterval(interval);
    }
  }, [isPaused, nextSlide, currentIndex]);

  return (
    // Background changed to Dark Charcoal #1e1e1e
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-12 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 border-b border-gray-700 pb-8">
          <div className="space-y-2">
             <h2 className="text-4xl md:text-6xl font-bold text-[#1e1e1e] leading-tight">
               Our Clients <span className="text-[#b79662]">{'Testimonials'}</span> 
             </h2>
             <p className="text-gray-400 text-lg">See what our partners have to say</p>
          </div>

          <div className="flex gap-4">
            {/* Buttons updated to Gold Border/Text */}
            <button 
              onClick={prevSlide}
              className="w-12 h-12 md:w-14 md:h-14 border border-[#b79662] flex items-center justify-center hover:bg-[#b79662] group transition-colors duration-300 rounded-sm"
            >
              <ChevronLeft className="w-6 h-6 text-[#b79662] group-hover:text-white transition-colors" />
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 md:w-14 md:h-14 border border-[#b79662] flex items-center justify-center hover:bg-[#b79662] group transition-colors duration-300 rounded-sm"
            >
              <ChevronRight className="w-6 h-6 text-[#b79662] group-hover:text-white transition-colors" />
            </button>
          </div>
        </div>

        {/* Slider Track */}
        <div 
          className="relative w-full overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            className="flex gap-8"
            style={{ 
              transition: isTransitioning ? `transform ${transitionTime}ms ease-in-out` : 'none',
              transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` 
            }}
          >
             <div 
               className="flex w-full"
             >
               {extendedTestimonials.map((item, index) => (
                <div 
                  key={`${item.id}-${index}`} 
                  className="flex-shrink-0 px-4"
                  style={{ width: `${100 / itemsPerPage}%` }}
                >
                  {/* Card Container: Dark Gray #4c4949 */}
                  <div className="bg-[#4c4949] p-8 rounded-lg shadow-xl border border-gray-700 h-full flex flex-col md:flex-row gap-6 items-start hover:shadow-[#b79662]/10 transition-shadow duration-300 relative group">
                    
                    {/* Decorative Quote Icon */}
                    <Quote className="absolute top-4 right-4 w-10 h-10 text-[#3d3a3a] group-hover:text-[#b79662]/20 transition-colors" />

                    {/* Image Area */}
                    <div className="relative flex-shrink-0">
                      <div className="w-24 h-24 md:w-28 md:h-28 bg-[#3d3a3a] overflow-hidden rounded-sm border-2 border-gray-600">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                      </div>
                      {/* Decorative Box: Gold #b79662 */}
                      <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#b79662] rounded-sm"></div>
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 z-10">
                      <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-6 italic">
                        "{item.text}"
                      </p>
                      <div>
                        {/* Name: Gold */}
                        <h4 className="text-[#b79662] font-bold text-lg uppercase tracking-wide">
                          {item.name}
                        </h4>
                        <p className="text-gray-400 text-sm font-medium">
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialSlider;