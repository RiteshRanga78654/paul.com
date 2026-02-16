"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Mr. Vineet Chopra",
    role: "Trident Realty",
    image: "/assets/images/person 1.jfif",
    text: "Working with IREED India has been a valuable experience for our team. The corporate training and workshop were practical, well-structured, and impactful, significantly enhancing our sales approach, confidence, and overall performance.",
  },
  {
    id: 2,
    name: "Mr. Kanwal Babber",
    role: "Trident Realty",
    image: "/assets/images/person 2.jfif",
    text: "The real estate training and workshop delivered clear insights and practical learning. Our team benefited from improved client engagement, stronger execution, and a more confident, professional sales approach.",
  },
  {
    id: 3,
    name: "Mr. Jagadish Singh",
    role: "Paras Buildtech",
    image: "/assets/images/person 5.jfif",
    text: "Hands-on learning and strong industry relevance defined this corporate training and workshop. It supported our team in developing a sharper sales mindset, better market clarity, and more confident on-ground execution.",
  },
  {
    id: 4,
    name: "Mr. Pritam Dey",
    role: "Paras Buildtech",
    image: "/assets/images/person 3.jfif",
    text: "Engaging sessions and practical discussions made this training impactful. Our team gained improved selling skills, a clearer understanding of market dynamics, and confidence to handle real estate clients.",
  },
  {
    id: 5,
    name: "Ms. Suneet Singh",
    role: "Whiteland",
    image: "/assets/images/person 3.jfif",
    text: "Participating in this real estate workshop added clear value to our team. Practical insights and real scenarios helped improve client engagement, execution quality, and professional sales approach.",
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
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
    <section className="bg-white py-8 px-4 sm:px-6 lg:px-12 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="abc flex flex-col md:flex-row justify-between items-end mb-12 gap-6 border-b border-gray-700 p-8">
          <div className="space-y-2 xyz">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e1e1e] leading-tight">
              <span className="text-[#b79662]">{"Testimonials"}</span>
            </h2>
            <p className="text-gray-400 text-sm">
              See what our partners have to say
            </p>
            {/* <h2 className="text-4xl md:text-6xl font-bold text-[#1e1e1e] leading-tight">
               <span className="text-[#b79662]">{'Testimonials'}</span> 
             </h2>
             <p className="text-gray-400 text-lg">See what our partners have to say</p> */}
          </div>
          <style jsx>{`
            /* ... your existing styles ... */

            @media (max-width: 768px) {
              .abc {
                align-items: center;
              }
            }
          `}</style>

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
              transition: isTransitioning
                ? `transform ${transitionTime}ms ease-in-out`
                : "none",
              transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
            }}
          >
            <div className="flex w-full">
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
                      <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-6 ">
                        "{item.text}"
                      </p>
                      <div>
                        {/* Name: Gold */}
                        <h4 className="text-[#b79662] font-bold text-lg tracking-wide">
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
