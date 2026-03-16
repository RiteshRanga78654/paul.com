"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const images = [
  { id: 1, src: "/assets/testimonial/Screenshot 2026-03-16 155526.png" },
  { id: 2, src: "/assets/testimonial/Screenshot 2026-03-16 160254.png" },
  { id: 3, src: "/assets/testimonial/Screenshot 2026-03-16 160405.png" },
  { id: 4, src: "/assets/testimonial/Screenshot 2026-03-16 161228.png" },
];

export default function ImageSwiper() {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <section className="bg-white py-12  max-w-7xl mx-auto relative group">
      {/* We only render Swiper once domLoaded is true. 
          This ensures the .prev-btn and .next-btn classes exist in the DOM 
          when Swiper initializes.
      */}
      {domLoaded && (
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          navigation={{
            prevEl: ".prev-btn",
            nextEl: ".next-btn",
          }}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          autoplay={{
            delay: 6500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="relative"
        >
          {images.map((img) => (
            <SwiperSlide key={img.id}>
              {/* aspect-[4/5] + object-contain + bg-white ensures image isn't cut */}
              <div className="group relative aspect-[4/5]  overflow-hidden border border-gray-100 bg-white shadow-md">
                <img
                  src={img.src}
                  alt="Testimonial screenshot"
                  className="w-full h-full object-fill"
                />
                <div className="absolute bottom-0 left-0 h-1.5 w-0 bg-[#b79662] group-hover:w-full transition-all duration-500" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Navigation Buttons - Z-index ensures they stay on top */}
      <button className="prev-btn absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-white border border-gray-200 shadow-xl p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 hidden md:flex items-center justify-center -ml-4 hover:bg-[#b79662] hover:border-[#b79662] cursor-pointer outline-none">
        <svg
          className="w-6 h-6 text-[#b79662] transition-colors duration-200 [button:hover_&]:text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button className="next-btn absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-white border border-gray-200 shadow-xl p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 hidden md:flex items-center justify-center -mr-4 hover:bg-[#b79662] text-[#b79662] hover:text-white hover:border-[#b79662]">
        <svg
          className="w-6 h-6 transition-colors duration-200"
          fill="none"
          stroke="currentColor" // Yeh button ke text color ko follow karega
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Pagination Dots */}
      <div className="custom-pagination flex justify-center mt-10 gap-2 h-4" />

      <style jsx global>{`
        .swiper-pagination-bullet-active {
          background: #b79662 !important;
          width: 28px !important;
          border-radius: 5px !important;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet {
          background: #d1d5db;
          opacity: 1;
          height: 8px;
          width: 8px;
          margin: 0 4px !important;
        }
        /* Disable default swiper styles that might conflict */
        .swiper-button-lock {
          display: block !important;
        }
        .swiper-button-next,
        .swiper-button-prev {
          display: none !important;
        }
      `}</style>
    </section>
  );
}
