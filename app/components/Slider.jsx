import React from 'react';
import Image from 'next/image'; // Assuming Next.js based on the 'fill' prop
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const ImageCarousel = () => {
  // 1. Define your data
  const slides = [
    { src: '/assets/TEDx TAPMI/IMG_9697.jpg', label: 'Modern Architecture' },
    { src: '/assets/TEDx TAPMI/IMG_6622.jpg', label: 'Interior Design' },
    { src: '/assets/TEDx TAPMI/IMG_9508.jpg', label: 'Urban Planning' },
    { src: '/assets/TEDx TAPMI/IMG_9698.jpg', label: 'Sustainable Building' },
    {src: '/assets/TEDx TAPMI/IMG_9543.jpg'}
  ];

  return (
    <section data-aos="fade-left" className="bg-white py-12   mx-auto max-w-7xl">
      {/* 2. Added a title to your empty H2 */}
       <h2 className="text-3xl text-center md:text-4xl font-bold text-[#b79662]">
         Bhaswar Paul at TEDx TAPMI <br/> <span className="text-[#b79662]"> Guest Speaker</span>
        </h2>
        <div className="w-24 h-1 bg-[#b79662] mx-auto mt-5 mb-12 rounded-full"></div>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={800}
        spaceBetween={16} // Increased slightly for better visual breathing room
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
        }}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[300px] md:h-[400px] rounded-lg shadow-md overflow-hidden">
              <img
                src={slide.src}
                alt={slide.label}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ImageCarousel;