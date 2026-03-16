"use client";
import React from 'react';

// 1. Add your Short IDs here
const videoIds = [
  "LiEGVnu_toY",
  "0y5jOZ19Jaw", 
  "ifZ67OcAmqw",
  
  "8xR1LD54LXU",
  "1_xINtDHqCw",
  "5CEd62HoTpA",
  "KRcaa1r8xk8",
  "uPP3CFH32uU",
];

export default function EmbeddedShorts() {
  return (
    <section className="bg-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videoIds.map((id, index) => (
            <div 
              key={index} 
              className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-black group"
            >
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&autohide=1`}
                title={`YouTube Short ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>

              {/* Subtle Overlay to match the design aesthetics when not playing */}
              <div className="absolute inset-0 pointer-events-none border-2 border-transparent group-hover:border-red-500/20 rounded-2xl transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}