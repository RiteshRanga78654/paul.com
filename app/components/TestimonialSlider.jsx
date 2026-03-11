"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Shruti Purwar",
    role: "Trident Realty",
    image: "/assets/images/person 1.jfif",
    text: "Paul Sir is a treasure of knowledge and integrity. Paul Sir has taken real estate to a very different level of professionalism which was not there before. He is doing a great service to real estate by providing his valuable guidance and mentorship to all the people who are taking his sessions on real estate. Thank you very much for your mentorship and guidance Sir.",
  },
  {
    id: 2,
    name: "Pooja Jhakar",
    role: "Trident Realty",
    image: "/assets/images/person 2.jfif",
    text: "First of all a very big Thank You to Bhaswar Paul Sir for the wonderful training session (IREED). I'm feeling very great full to be a part of the training session because I learnt a lot from these classes. It really helps us in enhancing our skills as well as knowledge and I would like to suggest these classes to those who want to make their career in real estate.",
  },
  {
    id: 3,
    name: "Ritu Singh",
    role: "Paras Buildtech",
    image: "/assets/images/person 5.jfif",
    text: "Exceptionally grateful for the privilege of learning from Mr. Bhaswar Paul Sir. His profound knowledge, unwavering dedication, and impactful mentorship are unmatched. The contagious passion he has for the subject elevates the learning journey to a whole new level. Highly recommended for unparalleled guidance and expertise. Simply the best!",
  },
  {
    id: 4,
    name: "Tripti Kumari",
    role: "Paras Buildtech",
    image: "/assets/images/person 3.jfif",
    text: "Grateful to have received instruction from the finest, Mr. Bhaswar Paul Sir. His extensive experience, unrelenting commitment, and influential mentoring have made a big difference. His infectious enthusiasm for the subject makes learning genuinely rewarding. Strongly advised for anyone looking for excellent advice.",
  },
  {
    id: 5,
    name: "Pooja Galiyan",
    role: "Whiteland",
    image: "/assets/images/person 3.jfif",
    text: "A privilege to be under the guidance of Mr. Bhaswar Paul Sir. His extensive knowledge, unwavering dedication, and mentorship are unparalleled. The contagious passion he brings to the subject creates an environment of true enrichment. Highly recommended for those in search of top-notch guidance and expertise.",
  },
  {
    id: 6,
    name: "Pawan Upadhaya",
    role: "Whiteland",
    image: "/assets/images/person 3.jfif",
    text:"Embarking on Mr. Bhaswar Paul's Real Estate course journey at IREED was a remarkable experience. His ability to make complex concepts understandable, combined with a well-organized structure, fostered a conducive learning environment. I highly recommend his sessions for a comprehensive and effective learning experience.",
  },
   {
    id: 7,
    name: "Shubham Tanwar",
    role: "Trident Realty",
    image: "/assets/images/person 1.jfif",
    text: "Mr. Bhaswar Paul Sir's teachings have been invaluable to my development. I am genuinely grateful for the positive impact on both my professional and personal aspects. This learning experience with him is a pivotal milestone in my real estate journey.",
  },
  {
    id: 8,
    name: "Kunal Chhabra",
    role: "Trident Realty",
    image: "/assets/images/person 2.jfif",
    text: "Attending Mr. Bhaswar Paul's Real Estate course at IREED was a truly enriching experience. His engaging teaching style and depth of knowledge made the learning process enjoyable and insightful. Highly recommended for a comprehensive and effective learning journey.",
  },
  {
    id: 9,
    name: "Simran Bora",
    role: "Paras Buildtech",
    image: "/assets/images/person 5.jfif",
    text: "Big thanks to Bhaswar Paul Sir for the insightful training session at IREED. Being part of these classes has been a fulfilling experience, contributing significantly to my skill set and knowledge. I enthusiastically recommend these sessions for anyone looking to establish a career in real estate.",
  },
  {
    id: 10,
    name: "Neeraj Patel",
    role: "Paras Buildtech",
    image: "/assets/images/person 3.jfif",
    text: "The impact of learning from Mr. Bhaswar Paul Sir goes beyond just knowledge; it has been a transformative experience. His guidance has been instrumental in my growth in the real estate field, and I am thankful for the privilege to be mentored by him.",
  },
  {
    id: 11,
    name: "Anchal Saini",
    role: "Whiteland",
    image: "/assets/images/person 3.jfif",
    text: "I feel fortunate to have learned under the guidance of Mr. Bhaswar Paul Sir. His expertise and mentorship have profoundly shaped my professional and personal growth. I am confident that his influence will continue to propel me forward in my real estate journey.",
  },
  {
    id: 12,
    name: "Kunwar Udit",
    role: "Whiteland",
    image: "/assets/images/person 3.jfif",
    text:"Incredibly thankful for the opportunity to learn from Mr. Bhaswar Paul Sir. His depth of knowledge, dedication, and mentorship are truly exceptional. The contagious passion he exudes for the subject makes the learning experience highly enriching. I highly recommend him for unparalleled guidance and expertise.",
  },
    {
    id: 13,
    name: "Barkha Asija",
    role: "Whiteland",
    image: "/assets/images/person 3.jfif",
    text:"I have been attending IREED Sessions by Bhaswar Paul sir for a few days now. It's been a great experience interacting with him, learning from him. The lessons Paul sir gave us are helping in my real estate journey and in my daily routine as well. Thanks for the guidance and support Paul sir.",
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
                        {/* <p className="text-gray-400 text-sm font-medium">
                          {item.role}
                        </p> */}
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
