
// "use client";
// import React, { useState } from 'react';
// import Header from '../layout/Header';
// import Footer from '../layout/Footer';
// import TestimonialSlider from '../components/TestimonialSlider';

// // Mock Data
// const testimonials = [
//   { id: 1, title: "How Real Estate is Evolving in India | MBA in Real Estate Explained by IREED & DCOIL", videoId: "oLfuidzn2mw" },
//   { id: 2, title: "Real Estate Trends Analysis by Expert Panelist From L&T Realty & Bhaswar Paul", videoId: "G5P7hUiiZfc" },
//   { id: 3, title: "Evolving Buying Behavior in Real Estate | Critical Issues In Real Estate | Podcast", videoId: "n3lfxuttzwY" },
//   { id: 4, title: "Exclusive Interview with Mr Bhaswar Paul, Founder & CEO of IREED Academy", videoId: "amFIbFAZx4A" },
//   { id: 5, title: "आईरीड और डीकॉइल ने लॉन्च किया एमबीए प्रोग्राम, रियल एस्टेट में बढ़ेगे करियर के अवसर ", videoId: "BKVHaG1BNA4" },
//   { id: 6, title: "Transactions Through Channel Partners/Agents/Brokers?", videoId: "8Z6SOsk7lMg" },
//   { id: 7, title: "देश में पहली बार नया MBA कोर्स हुआ लांच ", videoId: "ZERcz3VGj30" },
//   { id: 8, title: "Transform Your Career with the New Real Estate MBA by IREED & DCOIL", videoId: "6S8qOrZMgUE" },
//   { id: 9, title: "Special Conversation with Mr Bhaswar Paul, Founder & CEO of IREED Academy", videoId: "cqQHAKXv_64" },
//   { id: 10, title: "Digital Transformation Result", videoId: "amFIbFAZx4A" },
//   { id: 11, title: "IREED Academy के CEO भास्वर पॉल के साथ खास बातचीत", videoId: "kS4KZSfon48" },
//   { id: 12, title: "Financial Freedom Journey", videoId: "amFIbFAZx4A" },
// ];

// const VideoTestimonials = () => {
//   const [visibleCount, setVisibleCount] = useState(9);

//   const handleLoadMore = () => {
//     setVisibleCount((prevCount) => prevCount + 3);
//   };

//   // --- Hero Component matching your Media code structure ---
//   const TestimonialHero = () => (
//     <section className="mobile mx-auto mt-10 mb-10 flex max-w-7xl flex-col overflow-hidden rounded-lg shadow-2xl lg:mt-20 lg:flex-row">
//       <div className="flex w-full flex-col justify-center bg-[#4c4949] p-10 md:p-16 lg:w-1/2">
//         <span className="mb-4 block text-sm font-bold tracking-widest text-[#b79662]">Testimonials</span>
//         <h2 className="mb-8 text-3xl font-bold leading-none text-white lg:text-4xl">
//           Here’s What Our <br />
//           <span className="text-[#b79662]">
//             Customers Are Saying
//           </span>
//         </h2>
//         <p className="mb-10 max-w-xl text-lg font-light leading-relaxed text-gray-200">
//           Real experiences of business leaders and professionals who have seen tangible growth and improved networking through our programs, partnerships, and strategic network.
//         </p>
        
//         {/* Gold Button Style */}
//         <div className="w-fit">
//           <button
//             style={{
//               padding: "14px 40px",
//               backgroundColor: "#b79662",
//               borderRadius: "8px",
//               color: "#fff",
//               fontSize: "1.1rem",
//               fontWeight: "700",
//               cursor: "pointer",
//               position: "relative",
//               overflow: "hidden",
//               zIndex: 1,
//               border: "2px solid #b79662",
//               letterSpacing: "1px",
//               transition: "all 0.3s ease",
//             }}
//             onMouseEnter={(e) => {
//               const fill = e.currentTarget.querySelector(".hover-fill");
//               const text = e.currentTarget.querySelector(".btn-text");
//               if (fill) fill.style.width = "100%";
//               if (text) text.style.color = "#b79662";
//             }}
//             onMouseLeave={(e) => {
//               const fill = e.currentTarget.querySelector(".hover-fill");
//               const text = e.currentTarget.querySelector(".btn-text");
//               if (fill) fill.style.width = "0%";
//               if (text) text.style.color = "#fff";
//             }}
//           >
//             <div className="hover-fill" style={{ position: "absolute", top: 0, left: 0, width: "0%", height: "100%", background: "#ffffff", transition: "width 0.4s ease", zIndex: -1 }} />
//             <span className="btn-text" style={{ position: "relative", zIndex: 1, color: "#fff", transition: "color 0.3s ease" }}>
//               Join Our Communities
//             </span>
//           </button>
//         </div>
//       </div>

//       <div className="group relative min-h-auto w-full bg-[#1e1e1e] lg:w-1/2">
//         <img 
//           src="/assets/TEDx TAPMI/testimonialimg.jpg" 
//           alt="Testimonial Hero" 
//           className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0" 
//         />
//         <div className="absolute inset-0 bg-[#b79662]/60 mix-blend-multiply z-10 group-hover:opacity-0 transition-all duration-500"></div>
//         <div className="absolute inset-0 z-20 pointer-events-none opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
//       </div>

//       {/* THE STYLE BLOCK ADDED EXACTLY AS IN YOUR MEDIA CODE */}
//       <style jsx>{`
//         /* Tablet */
//         @media (max-width: 1024px) {
//           .mobile {
//             margin: 35px 35px;
//           }
//         }

//         /* Mobile */
//         @media (max-width: 768px) {
//           .mobile {
//             margin: 15px 15px;
//           }
//         }

//         /* Small mobile */
//         @media (max-width: 480px) {
//           .mobile {
//             margin: 15px 15px;
//           }
//         }
//       `}</style>
//     </section>
//   );

//   return (
//     <>
//       <Header />
//       <main className="flex flex-col bg-white min-h-screen">
//         <TestimonialHero />

//         {/* Video Testimonials Section */}
//         <section className="bg-white py-10 px-4 sm:px-6 lg:px-8">
//           <div className="max-w-7xl mx-auto">
//             <div className="text-center mb-12">
//               <h2 className="text-3xl md:text-4xl font-bold text-[#b79662]">
//                 <span className="text-[#b79662]">Testimonials</span>
//               </h2>
//               <div className="w-24 h-1 bg-[#b79662] mx-auto mt-4 rounded-full"></div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
//               {testimonials.slice(0, visibleCount).map((item) => (
//                 <div 
//                   key={item.id} 
//                   className="bg-[#4c4949] p-2 rounded-lg shadow-lg border border-gray-700 hover:border-[#b79662] transition-colors duration-300 group"
//                 >
//                   <div className="relative w-full aspect-video rounded overflow-hidden bg-black">
//                     <iframe
//                       className="absolute top-0 left-0 w-full h-full"
//                       src={`https://www.youtube.com/embed/${item.videoId}`}
//                       title={item.title}
//                       allowFullScreen
//                       loading="lazy"
//                     ></iframe>
//                   </div>
//                   <div className="p-4 text-center">
//                     <h3 className="text-white font-medium text-lg group-hover:text-[#b79662] transition-colors truncate">
//                       {item.title}
//                     </h3>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Load More Button */}
//             {visibleCount < testimonials.length && (
//               <div className="flex justify-center"> 
//                 <button
//                   onClick={handleLoadMore}
//                   style={{
//                     padding: "14px 40px",
//                     backgroundColor: "#b79662",
//                     borderRadius: "8px",
//                     color: "#fff",
//                     fontSize: "1.1rem",
//                     fontWeight: "700",
//                     cursor: "pointer",
//                     position: "relative",
//                     overflow: "hidden",
//                     zIndex: 1,
//                     border: "2px solid #b79662",
//                     letterSpacing: "1px",
//                     transition: "all 0.3s ease",
//                   }}
//                   onMouseEnter={(e) => {
//                     const fill = e.currentTarget.querySelector(".hover-fill");
//                     const text = e.currentTarget.querySelector(".btn-text");
//                     if (fill) fill.style.width = "100%";
//                     if (text) text.style.color = "#b79662";
//                   }}
//                   onMouseLeave={(e) => {
//                     const fill = e.currentTarget.querySelector(".hover-fill");
//                     const text = e.currentTarget.querySelector(".btn-text");
//                     if (fill) fill.style.width = "0%";
//                     if (text) text.style.color = "#fff";
//                   }}
//                 >
//                   <div className="hover-fill" style={{ position: "absolute", top: 0, left: 0, width: "0%", height: "100%", background: "#ffffff", transition: "width 0.4s ease", zIndex: -1 }} />
//                   <span className="btn-text" style={{ position: "relative", zIndex: 1, color: "#fff", transition: "color 0.3s ease" }}>
//                     Load More
//                   </span>
//                 </button>
//               </div>
//             )}
//           </div>
//         </section>
        
//         <TestimonialSlider />
//       </main>
//       <Footer />
//     </>
//   );
// };

// export default VideoTestimonials;

