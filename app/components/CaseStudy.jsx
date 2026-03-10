"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { ArrowRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// 1. Data Constant
const CASE_STUDIES = [
{
    "id": 1,
    "category": "RESIDENTIAL | LUXURY",
    "title": "Redefining Urban Sanctuaries:",
    "subtitle": "Architectural Excellence and Sustainable Living at 1 Central Park",
    "description": "True luxury isn't just about the view—it's about integrating nature into the heart of the modern metropolitan lifestyle.",
    "image": "/assets/blog/download.jpg"
  },
  {
    "id": 2,
    "category": "COMMERCIAL | REAL ESTATE",
    "title": "The Future of Integrated Workspace:",
    "subtitle": "Strategic Development and Lifestyle Curation by M3M",
    "description": "The most successful developments don't just build structures; they create ecosystems where work, play, and living coexist seamlessly.",
    "image": "/assets/blog/download (1).jpg"
  },
  {
    id: 3,
    category: "CONSULTING",
    title: "Driving Digital Efficiency:",
    subtitle: "Optimizing Legacy Workflows for Modern Enterprises",
    description: "Transformation isn't just about tools; it's about the people and processes that drive them forward.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  }
];

export default function CaseStudySlider() {
  return (
    <section className="bg-white py-20 px-4 font-sans">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <p className="text-[#b79660] font-bold tracking-[0.3em] text-xs mb-4 ">
          Client Success Stories
        </p>
        <h2 className="text-[#2d2d2d] text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          Real Challenges. Real Solutions. Real Impact.
        </h2>
        <p className="text-[#b79660] text-lg max-w-2xl mx-auto">
          See how we help organizations achieve meaningful, lasting results.
        </p>
      </div>

      {/* Slider Viewport */}
      <div className="max-w-7xl mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet !bg-gray-300 !opacity-100',
            bulletActiveClass: '!bg-[#b79660] !w-10 !rounded-full transition-all duration-300',
          }}
          breakpoints={{
            1024: { slidesPerView: 2 }, // Shows two cards side-by-side on desktop
          }}
          className="!pb-16" 
        >
          {CASE_STUDIES.map((item) => (
            <SwiperSlide key={item.id}>
              {/* Card Container with Static Height */}
              <div className="flex flex-col md:flex-row border border-gray-100 shadow-xl bg-white overflow-hidden h-[580px] md:h-[400px] group transition-all duration-300 hover:shadow-2xl">
                
                {/* Image Section */}
                <div className="h-48 md:h-full md:w-[42%] relative overflow-hidden flex-shrink-0">
                  <img 
                    src={item.image} 
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-[#b79660]/5 group-hover:bg-transparent transition-colors" />
                </div>
                
                {/* Content Section */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex-grow">
                    <span className="text-gray-400 text-[10px] font-bold tracking-widest block mb-4 uppercase">
                      {item.category}
                    </span>
                    <h4 className="text-[#b79660] font-semibold text-lg leading-tight mb-2">
                      {item.title}
                    </h4>
                    <h3 className="text-[#2d2d2d] font-bold text-xl leading-tight mb-4 line-clamp-3">
                      {item.subtitle}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                  
                  {/* Action Button */}
                  <div className="mt-6 flex justify-end">
                    <button className="flex items-center gap-3 border border-[#b79660] px-6 py-2.5 text-[11px] font-bold uppercase tracking-widest text-[#b79660] hover:bg-[#b79660] hover:text-white transition-all duration-300">
                      Case Study <ArrowRight size={16} />
                    </button>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Footer View All Button */}
      <div className="mt-8 text-center">
        <button className="bg-[#b79660] text-white px-12 py-4 font-bold uppercase text-xs tracking-[0.2em] hover:brightness-110 transition-all shadow-lg shadow-[#b79660]/20">
          View All Case Studies
        </button>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          height: 8px !important;
          width: 8px !important;
          transition: all 0.3s ease !important;
        }
      `}</style>
    </section>
  );
}