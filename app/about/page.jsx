"use client"; // Required for interactivity

import React, { useState } from 'react';
// import Footer from '../layout/Footer';
import Header from '../layout/Header';
import BookStore from '../components/BookStore';
import BusinessChallenges from '../components/Faq';
import { Heart, Star, Phone, Handshake, User, Shield, ChevronRight } from 'lucide-react';



const videoTestimonials = [
  // Replace 'dQw4w9WgXcQ' with your actual YouTube Video IDs
  { id: 'video1', title: 'Shailendra Chaurasia | Success Story', youtubeId: 'dQw4w9WgXcQ' },
  { id: 'video2', title: 'Suraj Bode OKR Testimonial', youtubeId: 'dQw4w9WgXcQ' },
  { id: 'video3', title: 'Dr. Amit Verma Testimonial', youtubeId: 'dQw4w9WgXcQ' },
  { id: 'video4', title: 'Dr Hitesh Khuran Testimonial', youtubeId: 'dQw4w9WgXcQ' },
];

      const ValueCard = ({ icon, title, desc }) => (
  <div className="bg-[#4c4949] p-8 rounded-lg text-white text-center hover:-translate-y-2 transition-transform duration-300 border border-gray-600 hover:border-[#b79662] shadow-lg group">
    <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform">{icon}</div>
    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#b79662] transition-colors">{title}</h3>
    <p className="text-gray-400 text-sm">{desc}</p>
  </div>
);
// --- Sub-Components ---



const TestimonialHero = () => (
  <section className="flex flex-col lg:flex-row w-full min-h-[600px] max-w-7xl mx-auto mt-20 mb-10 shadow-2xl rounded-lg overflow-hidden">
    {/* Left Text Side: Background #4c4949 */}
    <div className="w-full lg:w-1/2 bg-[#4c4949] p-10 md:p-16  flex flex-col justify-center relative overflow-hidden">
      
      <div className="relative z-10">
        <span className="block text-[#b79662] font-bold tracking-widest uppercase mb-4 text-sm">
          Pr and Media
        </span>
        <h2 className="text-3xl lg:text-4xl font-extrabold mb-8 leading-none text-white">
          After hours with Tajurba <br />
          <span className="text-[#b79662]">
           Baswar Paul in Media Coverage
          </span>
        </h2>
        <p className="text-gray-200 text-lg mb-10 leading-relaxed max-w-xl font-light">
          My weekdays start early — usually with a cup of tea and some reading," Mansharamani said. "I find that this quiet time in the morning helps set a productive tone for the day. The calmness of the early hours allows me to focus without distractions, whether it's diving into a good book or reflecting on my goals for the day. It’s become an essential part of my routine that fuels my energy and creativity throughout the busy workday.
        </p>
        <button className="bg-[#b79662] hover:bg-[#967d51] text-white font-bold py-4 px-10 rounded shadow-md hover:shadow-lg transition-all duration-300 w-fit text-lg uppercase tracking-wide">
          Read Article
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

const VideoCard = ({ video }) => (
  // Card BG: #4c4949
  <div className="bg-[#4c4949] rounded-lg overflow-hidden shadow-lg border border-gray-600 group hover:border-[#b79662] transition-colors duration-300">
    <div className="relative pb-[56.25%] h-0 bg-black"> 
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${video.youtubeId}`}
        title={video.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    <div className="p-5 text-center">
      <h3 className="text-base font-medium text-white group-hover:text-[#b79662] transition-colors duration-300 line-clamp-2">
        {video.title}
      </h3>
    </div>
  </div>
);

// --- Main Component ---

const MediaSection = () => {
  // State to manage visible articles
  const [visibleCount, setVisibleCount] = useState(9); // Start with 9 items

  // Handler to load more articles
  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3); // Load 3 more
  };

  return (
    <>
      <Header />
      <div className="bg-white flex flex-col">
        {/* Section 1: Testimonial Hero */}
        <TestimonialHero />

        {/* Section 2:  */}
            <section className="bg-[#1e1e1e] py-20 my:20" style={{
              margin:"50px 0"
            }}>
        <div className=" mx-auto px-6 text-center mb-12">
          <p className="text-[#b79662] font-bold uppercase tracking-widest text-sm mb-2">Core Values</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">We Innovate With Purpose.</h2>
        </div>

        <div className="max-w-7xl mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Helper for Core Value Cards */}
          <ValueCard icon={<Heart className="w-10 h-10 text-[#b79662]" />} title="Empathy" desc="Understanding the customer needs deeply and acting with care." />
          <ValueCard icon={<Star className="w-10 h-10 text-[#b79662]" />} title="Purpose Driven" desc="Every action is aligned with the long-term vision of success." />
          <ValueCard icon={<Phone className="w-10 h-10 text-[#b79662]" />} title="Communication" desc="Clear, transparent, and constant communication channels." />
          <ValueCard icon={<Handshake className="w-10 h-10 text-[#b79662]" />} title="Collaboration" desc="Building strong partnerships to achieve mutual growth." />
          <ValueCard icon={<User className="w-10 h-10 text-[#b79662]" />} title="Leadership" desc="Inspiring others to dream more, learn more, and do more." />
          <ValueCard icon={<Shield className="w-10 h-10 text-[#b79662]" />} title="Integrity" desc="Upholding the highest standards of honesty and ethics." />
        </div>
      </section>



        {/* Section 3:  */}
        
<BusinessChallenges />

        {/* Section 4:  */}
        <BookStore /> 
       
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default MediaSection;












 {/* Section 3: Video Grid (Commented out in original, kept commented) */}
        {/* <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#1e1e1e] relative">
          ...
        </section> */}