// "use client";

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
// import { ArrowRight } from "lucide-react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// const CASE_STUDIES = [
//   {
//     id: 1,
//     category: "RESIDENTIAL | LUXURY",
//     title: "Redefining Urban Sanctuaries:",
//     subtitle: "Architectural Excellence at Central Park Resorts",
//     description:
//       "True luxury isn't just about the view—it's about integrating nature into the heart of the modern metropolitan lifestyle.",
//     image: "/assets/blog/Location-Advantages-of-Central-Park-Sky-Villas-Sector-48-Sohna-Road-Gurgaon-scaled.webp",
//     pdfUrl: "/assets/pdf/Case Study - Central Park Resorts.pdf",
//   },
//   {
//     id: 2,
//     category: "COMMERCIAL | REAL ESTATE",
//     title: "The Future of Integrated Workspace:",
//     subtitle: "Strategic Development by M3M",
//     description:
//       "The most successful developments don't just build structures; they create ecosystems where work, play, and living coexist.",
//     image: "/assets/blog/m3m-65th-avenue-mobile-banner.jpg",
//     pdfUrl: "/assets/pdf/Case Study - M3M India.pdf",
//   },
//   {
//     id: 3,
//     category: "COMMERCIAL | REAL ESTATE",
//     title: "The Future of Integrated Workspace:",
//     subtitle: "Strategic Development by M3M",
//     description:
//       "The most successful developments don't just build structures; they create ecosystems where work, play, and living coexist.",
//     image: "/assets/blog/Tata-Steel-India-F1-768x514-1.webp",
//     pdfUrl: "/assets/pdf/DOC-20260320-WA0013_260321_190749.pdf",
//   },
// ];

// export default function CaseStudySlider() {
//   const handleDownload = (pdfUrl, fileName) => {
//     if (!pdfUrl) return;
//     const link = document.createElement("a");
//     link.href = pdfUrl;
//     link.setAttribute("download", fileName || "download.pdf");
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <section className="bg-white py-20 px-4">
//       <div className="max-w-7xl mx-auto text-center mb-16">
//         <p className="text-[#b79660] font-bold tracking-[0.3em] text-xs mb-4">
//           CLIENT SUCCESS STORIES
//         </p>
//         <h2 className="text-4xl md:text-5xl font-bold mb-6">
//           Real Challenges. <span className="text-[#b79660]">Real Impact.</span>
//         </h2>
//       </div>

//       <div className="max-w-7xl mx-auto">
//         <Swiper
//           modules={[Pagination, Autoplay]}
//           spaceBetween={30}
//           slidesPerView={1}
//           breakpoints={{ 1024: { slidesPerView: 2 } }}
//           pagination={{ clickable: true }}
//           className="pb-16"
//         >
//           {CASE_STUDIES.map((item) => (
//             <SwiperSlide key={item.id}>
//               <div
//                 onClick={() =>
//                   handleDownload(item.pdfUrl, `CaseStudy-${item.id}.pdf`)
//                 }
//                 className="flex flex-col md:flex-row border border-gray-100 shadow-xl bg-white overflow-hidden h-[580px] md:h-[400px] group cursor-pointer transition-all hover:shadow-2xl"
//               >
//                 <div className="h-48 md:h-full md:w-[42%] relative overflow-hidden flex-shrink-0">
//                   <img
//                     src={item.image}
//                     alt=""
//                     className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                   />
//                 </div>
//                 <div className="p-8 flex flex-col flex-grow">
//                   <div className="flex-grow">
//                     <span className="text-gray-400 text-[10px] font-bold tracking-widest block mb-4 uppercase">
//                       {item.category}
//                     </span>
//                     <h4 className="text-[#b79660] font-semibold text-lg mb-2">
//                       {item.title}
//                     </h4>
//                     <h3 className="text-[#2d2d2d] font-bold text-xl mb-4 line-clamp-3">
//                       {item.subtitle}
//                     </h3>
//                     <p className="text-gray-500 text-sm line-clamp-3">
//                       {item.description}
//                     </p>
//                   </div>
//                   <div className="mt-6 flex justify-start">
//                     <button
//                       style={{
//                         padding: "14px 40px",
//                         backgroundColor: "#b79662",
//                         borderRadius: "8px",
//                         color: "#fff",
//                         fontSize: "1.1rem",
//                         fontWeight: "700",
//                         cursor: "pointer",
//                         display: "flex",
//                         textAlign: "center",
//                         justifyContent: "center",
//                         alignItems: "center",
//                         gap: "10px",
//                         position: "relative",
//                         overflow: "hidden",
//                         zIndex: 1,
//                         border: "2px solid #b79662",

//                         letterSpacing: "1px",
//                         transition: "all 0.3s ease",
//                       }}
//                       onMouseEnter={(e) => {
//                         const fill =
//                           e.currentTarget.querySelector(".hover-fill");
//                         const text = e.currentTarget.querySelector(".btn-text");
//                         if (fill) fill.style.width = "100%";
//                         if (text) text.style.color = "#b79662";
//                       }}
//                       onMouseLeave={(e) => {
//                         const fill =
//                           e.currentTarget.querySelector(".hover-fill");
//                         const text = e.currentTarget.querySelector(".btn-text");
//                         if (fill) fill.style.width = "0%";
//                         if (text) text.style.color = "#fff";
//                       }}
//                     >
//                       <div
//                         className="hover-fill"
//                         style={{
//                           position: "absolute",
//                           top: 0,
//                           left: 0,
//                           width: "0%",
//                           height: "100%",
//                           background: "#ffffff",
//                           transition: "width 0.4s ease",
//                           zIndex: -1,
//                         }}
//                       />
//                       <span
//                         className="btn-text"
//                         style={{
//                           position: "relative",
//                           zIndex: 1,
//                           color: "#fff",
//                           transition: "color 0.3s ease",
//                         }}
//                       >
//                         Case Study
//                       </span>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// }


"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const CASE_STUDIES = [
  {
    id: 1,
    category: "RESIDENTIAL | LUXURY",
    title: "Redefining Urban Sanctuaries:",
    subtitle: "Architectural Excellence at Central Park Resorts",
    description:
      "True luxury isn't just about the view—it's about integrating nature into the heart of the modern metropolitan lifestyle.",
    image: "/assets/blog/Location-Advantages-of-Central-Park-Sky-Villas-Sector-48-Sohna-Road-Gurgaon-scaled.webp",
    pdfUrl: "/assets/pdf/Case Study - Central Park Resorts.pdf",
  },
  {
    id: 2,
    category: "COMMERCIAL | REAL ESTATE",
    title: "The Future of Integrated Workspace:",
    subtitle: "Strategic Development by M3M",
    description:
      "The most successful developments don't just build structures; they create ecosystems where work, play, and living coexist.",
    image: "/assets/blog/m3m-65th-avenue-mobile-banner.jpg",
    pdfUrl: "/assets/pdf/Case Study - M3M India.pdf",
  },
  {
    id: 3,
    category: "COMMERCIAL | REAL ESTATE",
    title: "Industrial Innovation:",
    subtitle: "Strategic Development by Tata Steel",
    description:
      "Integrating smart logistics with sustainable architecture to redefine the modern industrial landscape.",
    image: "/assets/blog/Tata-Steel-India-F1-768x514-1.webp",
    pdfUrl: "/assets/pdf/DOC-20260320-WA0013_260321_190749.pdf",
  },
];

export default function CaseStudySlider() {
  const handleDownload = (pdfUrl, fileName) => {
    if (!pdfUrl) return;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.setAttribute("download", fileName || "download.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="bg-white pt-20 px-4">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <p className="text-[#b79660] font-bold tracking-[0.3em] text-xs mb-4">
          CLIENT SUCCESS STORIES
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Real Challenges. <span className="text-[#b79660]">Real Impact.</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto relative group">
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true} // Fixed: This enables the infinite loop
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: ".prev-btn",
            nextEl: ".next-btn",
          }}
          breakpoints={{ 
            1024: { slidesPerView: 2 } 
          }}
          pagination={{ 
            clickable: true,
            el: '.custom-pagination' // Using a custom div for better placement
          }}
          className="relative"
        >
          {CASE_STUDIES.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                onClick={() =>
                  handleDownload(item.pdfUrl, `CaseStudy-${item.id}.pdf`)
                }
                className="flex flex-col md:flex-row border border-gray-100  bg-white overflow-hidden h-[580px] md:h-[400px] cursor-pointer transition-all  mb-12"
              >
                <div className="h-48 md:h-full md:w-[42%] relative overflow-hidden flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex-grow">
                    <span className="text-gray-400 text-[10px] font-bold tracking-widest block mb-4 uppercase">
                      {item.category}
                    </span>
                    <h4 className="text-[#b79660] font-semibold text-lg mb-2">
                      {item.title}
                    </h4>
                    <h3 className="text-[#2d2d2d] font-bold text-xl mb-4 line-clamp-3">
                      {item.subtitle}
                    </h3>
                    <p className="text-gray-500 text-sm line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-6 flex justify-start">
                    <button
                      className="relative overflow-hidden z-10 border-2 border-[#b79662] bg-[#b79662] text-white px-10 py-3 rounded-lg font-bold text-lg transition-all duration-300 hover:text-[#b79662]"
                      onMouseEnter={(e) => {
                        const fill = e.currentTarget.querySelector(".hover-fill");
                        if (fill) fill.style.width = "100%";
                      }}
                      onMouseLeave={(e) => {
                        const fill = e.currentTarget.querySelector(".hover-fill");
                        if (fill) fill.style.width = "0%";
                      }}
                    >
                      <div
                        className="hover-fill absolute top-0 left-0 h-full w-0 bg-white transition-all duration-400 -z-10"
                      />
                      Case Study
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Container */}
        <div className="custom-pagination flex justify-center gap-2 mt-4" />

        {/* Custom Navigation Buttons */}
        <button className="prev-btn absolute left-[-20px] top-1/2  z-30 w-12 h-12 flex items-center justify-center rounded-full bg-white text-[#b79660] shadow-lg border border-[#b79660] opacity-0 group-hover:opacity-100 group-hover:-left-6 transition-all duration-300 hover:bg-[#b79660] hover:text-white">
          <ChevronLeft size={24} />
        </button>
        <button className="next-btn absolute right-[-20px] top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center rounded-full bg-white text-[#b79660] shadow-lg border border-[#b79660] opacity-0 group-hover:opacity-100 group-hover:-right-6 transition-all duration-300 hover:bg-[#b79660] hover:text-white">
          <ChevronRight size={24} />
        </button>
      </div>

      <style jsx global>{`
        /* Fixed the typo and ensured proper color application */
        .swiper-pagination-bullet {
          background: #d1d1d1;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #b79660 !important;
          width: 25px;
          border-radius: 5px;
          transition: all 0.3s ease;
        }
      `}</style>
    </section>
  );
}