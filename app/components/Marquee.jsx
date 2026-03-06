import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Optional: npm i lucide-react

const ElegantSlider = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const workImages = [
    { src: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200", title: "Corporate Branding" },
    { src: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=1200", title: "Modern Analytics" },
    { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200", title: "Creative Studio" },
    { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200", title: "Digital Marketing" },
  ];

  const next = () => setActiveIdx((prev) => (prev + 1) % workImages.length);
  const prev = () => setActiveIdx((prev) => (prev - 1 + workImages.length) % workImages.length);

  return (
    <section className="bg-[#f4f4f4] py-20 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="text-[#cc0000] font-bold tracking-widest text-sm mb-2 uppercase">Portfolio</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#333333]">Our <span className="text-[#cc0000]">Work</span></h2>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex gap-4">
            <button onClick={prev} className="p-4 rounded-full border border-[#b3b3b3] hover:bg-[#cc0000] hover:border-[#cc0000] hover:text-white transition-all duration-300">
              <ChevronLeft size={24} />
            </button>
            <button onClick={next} className="p-4 rounded-full border border-[#b3b3b3] hover:bg-[#cc0000] hover:border-[#cc0000] hover:text-white transition-all duration-300">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Slider Track */}
        <div className="relative flex items-center justify-center h-[400px] md:h-[550px]">
          {workImages.map((item, idx) => {
            // Logic for 3D stacking effect
            const isCenter = idx === activeIdx;
            const isLeft = idx === (activeIdx - 1 + workImages.length) % workImages.length;
            const isRight = idx === (activeIdx + 1) % workImages.length;

            let positionClasses = "opacity-0 scale-75 translate-x-0 z-0";
            if (isCenter) positionClasses = "opacity-100 scale-100 z-30 translate-x-0";
            if (isLeft) positionClasses = "opacity-40 scale-90 z-20 -translate-x-[50%] md:-translate-x-[70%]";
            if (isRight) positionClasses = "opacity-40 scale-90 z-20 translate-x-[50%] md:translate-x-[70%]";

            return (
              <div
                key={idx}
                className={`absolute transition-all duration-700 ease-in-out w-full max-w-[320px] md:max-w-[750px] aspect-video rounded-3xl overflow-hidden shadow-2xl ${positionClasses}`}
              >
                <img src={item.src} alt={item.title} className="w-full h-full object-cover" />
                
                {/* Content Overlay for center slide only */}
                {isCenter && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 md:p-12">
                    <h3 className="text-white text-2xl md:text-4xl font-bold">{item.title}</h3>
                    <div className="w-12 h-1 bg-[#cc0000] mt-4"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Progress Bar Indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {workImages.map((_, idx) => (
            <div 
              key={idx}
              className={`h-1.5 transition-all duration-500 rounded-full ${activeIdx === idx ? 'w-12 bg-[#cc0000]' : 'w-4 bg-[#b3b3b3]'}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ElegantSlider;