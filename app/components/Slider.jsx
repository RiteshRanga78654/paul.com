import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ImageCarousel = () => {
  const slides = [
    { src: '/assets/TEDx TAPMI/IMG_9697.jpg', label: 'Modern Architecture' },
    { src: '/assets/TEDx TAPMI/IMG_6622.jpg', label: 'Interior Design' },
    { src: '/assets/TEDx TAPMI/IMG_9508.jpg', label: 'Urban Planning' },
    { src: '/assets/TEDx TAPMI/IMG_9698.jpg', label: 'Sustainable Building' },
    { src: '/assets/TEDx TAPMI/IMG_9543.jpg', label: 'TEDx Talk' }
  ];

  return (
    <section data-aos="fade-left" className="bg-white pt-12 pb-8 mx-4 md:mx-auto max-w-7xl">
      <h2 className="text-3xl text-center md:text-4xl font-bold text-[#000]">
        Guest Speaker<span className="text-[#b79662]"> @ TEDx TAPMI</span>
      </h2>
      <div className="w-24 h-1 bg-[#b79662] mx-auto mt-5 mb-6 rounded-full"></div>

      <div className="relative group px-2"> 
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={800}
          spaceBetween={16}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
          className="w-full !pb-14" 
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[200px] md:h-[400px] rounded-lg shadow-md overflow-hidden">
              <a href='https://www.youtube.com/watch?v=sjrOZIvuV70' target='_blank'>  <img
                  src={slide.src}
                  alt={slide.label || "Slide Image"}
                  className="object-cover w-full h-full"
                /></a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <style jsx global>{`
          /* --- 1. Navigation Arrows (Hidden by default) --- */
          .swiper-button-next,
          .swiper-button-prev {
            opacity: 0;
            transition: all 0.3s ease-in-out;
            color: #b79662 !important;
            transform: scale(0.6);
          }

          /* Show arrows on hover */
          .group:hover .swiper-button-next,
          .group:hover .swiper-button-prev {
            opacity: 1;
            transform: scale(1);
          }

          /* --- 2. Pagination Dots (Visible Permanently) --- */
          .swiper-pagination {
            opacity: 1; /* Always visible */
            bottom: 5px !important;
          }

          .swiper-pagination-bullet {
            background: #b79662 !important;
            width: 8px;
            height: 8px;
            opacity: 0.4;
            transition: all 0.3s ease;
          }

          .swiper-pagination-bullet-active {
            opacity: 1;
            width: 28px; /* Elegant pill shape */
            border-radius: 4px;
          }

          /* Responsive Tweaks */
          @media (max-width: 1024px) {
            .swiper-button-next, .swiper-button-prev {
              display: none; /* Better UX to hide arrows on touch devices */
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default ImageCarousel;