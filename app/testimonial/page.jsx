"use client";
import React, { useState } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import TestimonialSlider from '../components/TestimonialSlider';

// Mock Data: Added more items to demonstrate Load More functionality
const testimonials = [
  { id: 1, title: "Shailendra Chaurasia | Success Story", videoId: "amFIbFAZx4A" },
  { id: 2, title: "Suraj Bode OKR Testimonial", videoId: "amFIbFAZx4A" },
  { id: 3, title: "Dr. Amit Verma Testimonial", videoId: "amFIbFAZx4A" },
  { id: 4, title: "Corporate Training Feedback", videoId: "amFIbFAZx4A" },
  { id: 5, title: "Business Coaching Review", videoId: "amFIbFAZx4A" },
  { id: 6, title: "Startup Growth Story", videoId: "amFIbFAZx4A" },
  { id: 7, title: "Leadership Workshop Review", videoId: "amFIbFAZx4A" },
  { id: 8, title: "SME IPO Success Journey", videoId: "amFIbFAZx4A" },
  { id: 9, title: "Sales Mastery Feedback", videoId: "amFIbFAZx4A" },
  { id: 10, title: "Digital Transformation Result", videoId: "amFIbFAZx4A" },
  { id: 11, title: "Team Management Skills", videoId: "amFIbFAZx4A" },
  { id: 12, title: "Financial Freedom Journey", videoId: "amFIbFAZx4A" },
];

const VideoTestimonials = () => {
  // State to track how many items are visible (Start with 9)
  const [visibleCount, setVisibleCount] = useState(9);

  // Function to load 3 more items
  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  const TestimonialHero = () => (
  <section className="flex flex-col lg:flex-row w-full min-h-[600px] max-w-7xl mx-auto mt-20 mb-10 shadow-2xl rounded-lg overflow-hidden">
    {/* Left Text Side: Background #4c4949 */}
    <div className="w-full lg:w-1/2 bg-[#4c4949] p-10 md:p-16  flex flex-col justify-center relative overflow-hidden">
      
      <div className="relative z-10">
        <span className="block text-[#b79662] font-bold tracking-widest uppercase mb-4 text-sm">
          Testimonials
        </span>
        <h2 className="text-3xl lg:text-4xl font-extrabold mb-8 leading-none text-white">
          Here's What Our <br />
          <span className="text-[#b79662]">
            Customers Have To Say
          </span>
        </h2>
        <p className="text-gray-200 text-lg mb-10 leading-relaxed max-w-xl font-light">
          A vibrant network of entrepreneurs, business owners, and professionals united by a shared passion for growth and success. Whether you're seeking valuable connections, strategic partnerships, or collaborative opportunities, our network offers a dynamic platform to propel your business forward.
        </p>
        <button className="bg-[#b79662] hover:bg-[#967d51] text-white font-bold py-4 px-10 rounded shadow-md hover:shadow-lg transition-all duration-300 w-fit text-lg uppercase tracking-wide">
          Join our community now
        </button>
      </div>
    </div>

    {/* Right Image Side with Theme Overlay */}
    {/* Added 'group' class here so children can react to hover */}
    <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-auto bg-[#1e1e1e] group">
      <img 
        src="/assets/TEDx TAPMI/IMG_6622.jpg" // Replace with actual image
        alt="Suresh Mansharamani" 
        // The existing classes here will now work because of the parent 'group' class
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
      />
      
      {/* Overlay: Gold tint with multiply blend mode */}
      {/* Added group-hover:opacity-0 and transition so the tint fades out on hover, revealing true colors */}
      <div className="absolute inset-0 bg-[#b79662]/60 mix-blend-multiply z-10 group-hover:opacity-0 transition-all duration-500"></div>
      
      {/* Texture */}
      <div className="absolute inset-0 opacity-20 z-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
    </div>
  </section>
);

  return (
    <>
    <Header />
    <TestimonialHero />
    {/* Video Testimonials Section */}
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#b79662] mb-4">
            Our Clients <span className="text-[#b79662]">Testimonial</span>
          </h2>
          <div className="w-24 h-1 bg-[#b79662] mx-auto rounded"></div>
        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.slice(0, visibleCount).map((item) => (
            <div 
              key={item.id} 
              className="bg-[#4c4949] p-2 rounded-lg shadow-lg border border-gray-700 hover:border-[#b79662] transition-colors duration-300 group"
            >
              {/* Video Container (16:9 Aspect Ratio) */}
              <div className="relative w-full aspect-video rounded overflow-hidden bg-black">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${item.videoId}`}
                  title={item.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              
              {/* Title Section */}
              <div className="p-4 text-center">
                <h3 className="text-white font-medium text-lg group-hover:text-[#b79662] transition-colors truncate">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < testimonials.length && (
          <div className="flex justify-center">
            <button
              onClick={handleLoadMore}
              className="px-8 py-3 bg-[#b79662] hover:bg-[#967d51] text-white font-bold rounded shadow-lg transform transition-all duration-300 hover:scale-105 active:scale-95 uppercase tracking-wider"
            >
              Load More
            </button>
          </div>
        )}

      </div>
    </section>
    <TestimonialSlider />
    <Footer />
    </>
  );
};

export default VideoTestimonials;