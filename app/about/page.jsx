// "use client"; // Required for interactivity

// import React, { useState } from "react";
// import Footer from "../layout/Footer";
// import Header from "../layout/Header";
// import BookStore from "../components/BookStore";
// import BusinessChallenges from "../components/Faq";
// import {
//   Heart,
//   Star,
//   Phone,
//   Handshake,
//   User,
//   Shield,
//   ChevronRight,
// } from "lucide-react";

// const videoTestimonials = [
//   // Replace 'dQw4w9WgXcQ' with your actual YouTube Video IDs
//   {
//     id: "video1",
//     title: "Shailendra Chaurasia | Success Story",
//     youtubeId: "dQw4w9WgXcQ",
//   },
//   {
//     id: "video2",
//     title: "Suraj Bode OKR Testimonial",
//     youtubeId: "dQw4w9WgXcQ",
//   },
//   {
//     id: "video3",
//     title: "Dr. Amit Verma Testimonial",
//     youtubeId: "dQw4w9WgXcQ",
//   },
//   {
//     id: "video4",
//     title: "Dr Hitesh Khuran Testimonial",
//     youtubeId: "dQw4w9WgXcQ",
//   },
// ];

// const ValueCard = ({ icon, title, desc }) => (
//   <div className="bg-[#4c4949] p-8 mx-6 lg:mx-0 rounded-lg text-white text-center  hover:-translate-y-2 transition-transform duration-300 border border-gray-600 hover:border-[#b79662] shadow-lg group">
//     <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform">
//       {icon}
//     </div>
//     <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#b79662] transition-colors">
//       {title}
//     </h3>
//     <p className="text-gray-400 group-hover:text-white text-sm ">{desc}</p>
//   </div>
// );
// // --- Sub-Components ---

// const TestimonialHero = () => (
//   <section className="flex flex-col lg:flex-row w-full min-h-[600px] max-w-7xl mx-auto mt-10 lg:mt-20 mb-10 shadow-2xl rounded-lg overflow-hidden">
//     {/* Left Text Side: Background #4c4949 */}
//     <div className="w-full lg:w-1/2 bg-[#4c4949] p-10 md:p-16  flex flex-col justify-center relative overflow-hidden">
//       <div className="relative z-10">
//         <span className="block text-[#b79662] font-bold tracking-widest  mb-4 text-sm">
//           Pr and Media
//         </span>
//         <h2 className="text-3xl lg:text-4xl font-bold mb-8 leading-none text-white">
//           After hours with Tajurba <br />
//           <span className="text-[#b79662]">Bhaswar Paul in Media Coverage</span>
//         </h2>
//         <p className="text-gray-200 text-lg mb-10 leading-relaxed max-w-xl font-light">
//           My weekdays start early — usually with a cup of tea and some reading,"
//           Mansharamani said. "I find that this quiet time in the morning helps
//           set a productive tone for the day. The calmness of the early hours
//           allows me to focus without distractions, whether it's diving into a
//           good book or reflecting on my goals for the day. It’s become an
//           essential part of my routine that fuels my energy and creativity
//           throughout the busy workday.
//         </p>
//         <button
//           style={{
//             padding: "14px 40px",
//             backgroundColor: "#b79662", // Default Gold Background
//             borderRadius: "8px",
//             color: "#fff", // Default White Text
//             fontSize: "1.1rem",
//             fontWeight: "700",
//             cursor: "pointer",
//             display: "flex",

//             gap: "10px",
//             position: "relative",
//             overflow: "hidden",
//             zIndex: 1,
//             border: "2px solid #b79662", // Border keeps the button size stable

//             letterSpacing: "1px",
//             transition: "all 0.3s ease",
//           }}
//           onMouseEnter={(e) => {
//             const fill = e.currentTarget.querySelector(".hover-fill");
//             const text = e.currentTarget.querySelector(".btn-text");

//             // Slide in the white background
//             if (fill) fill.style.width = "100%";

//             // Change text color to Gold
//             if (text) text.style.color = "#b79662";
//           }}
//           onMouseLeave={(e) => {
//             const fill = e.currentTarget.querySelector(".hover-fill");
//             const text = e.currentTarget.querySelector(".btn-text");

//             // Slide out the white background
//             if (fill) fill.style.width = "0%";

//             // Reset text color to White
//             if (text) text.style.color = "#fff";
//           }}
//         >
//           {/* Hover Fill Layer: White */}
//           <div
//             className="hover-fill"
//             style={{
//               position: "absolute",
//               top: 0,
//               left: 0,
//               width: "0%",
//               height: "100%",
//               background: "#ffffff", // White background on hover
//               transition: "width 0.4s ease",
//               zIndex: -1,
//             }}
//           />

//           {/* Text Span with Transition */}
//           <span
//             className="btn-text"
//             style={{
//               position: "relative",
//               zIndex: 1,
//               color: "#fff", // Initial color
//               transition: "color 0.3s ease",
//             }}
//           >
//             Read Article
//           </span>
//         </button>
//       </div>
//     </div>

//     {/* Right Image Side with Theme Overlay */}
//     {/* Added 'group' class here so children can react to hover */}
//     <div className="twx w-full lg:w-1/2 relative min-h-[400px] lg:min-h-auto bg-[#1e1e1e] group">
//       <img
//         src="/assets/TEDx TAPMI/IMG_6622.jpg" // Replace with actual image
//         alt="Suresh Mansharamani"
//         // The existing classes here will now work because of the parent 'group' class
//         className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
//       />

//       {/* Overlay: Gold tint with multiply blend mode */}
//       {/* Added group-hover:opacity-0 and transition so the tint fades out on hover, revealing true colors */}
//       <div className="absolute inset-0 bg-[#b79662]/60 mix-blend-multiply z-10 group-hover:opacity-0 transition-all duration-500"></div>

//       {/* Texture */}
//       <div
//         className="absolute inset-0 opacity-20 z-20 pointer-events-none"
//         style={{
//           backgroundImage:
//             "radial-gradient(circle, #ffffff 1px, transparent 1px)",
//           backgroundSize: "20px 20px",
//         }}
//       ></div>
//     </div>
//     <style jsx>{`
//       /* ... your existing styles ... */

//       @media (max-width: 768px) {
//         .twx {
//           height: 235px;
//           object-fit: cover;
//         }
//       }
//     `}</style>
//   </section>
// );

// const VideoCard = ({ video }) => (
//   // Card BG: #4c4949
//   <div className="bg-[#4c4949] rounded-lg overflow-hidden shadow-lg border border-gray-600 group hover:border-[#b79662] transition-colors duration-300">
//     <div className="relative pb-[56.25%] h-0 bg-black">
//       <iframe
//         className="absolute top-0 left-0 w-full h-full"
//         src={`https://www.youtube.com/embed/${video.youtubeId}`}
//         title={video.title}
//         frameBorder="0"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//         allowFullScreen
//       ></iframe>
//     </div>
//     <div className="p-5 text-center">
//       <h3 className="text-base font-medium text-white group-hover:text-[#b79662] transition-colors duration-300 line-clamp-2">
//         {video.title}
//       </h3>
//     </div>
//   </div>
// );

// // --- Main Component ---

// const MediaSection = () => {
//   // State to manage visible articles
//   const [visibleCount, setVisibleCount] = useState(9); // Start with 9 items

//   // Handler to load more articles
//   const handleLoadMore = () => {
//     setVisibleCount((prevCount) => prevCount + 3); // Load 3 more
//   };

//   return (
//     <>
//       <Header />
//       <div className="bg-white flex flex-col">
//         {/* Section 1: Testimonial Hero */}
//         <TestimonialHero />

//         {/* Section 2:  */}
//         <section
//           className="bg-[#1e1e1e] py-20 my:20"
//           style={{
//             margin: "50px 0",
//           }}
//         >
//           <div className=" mx-auto px-6 text-center mb-12">
//             <p className="text-[#b79662] font-bold  tracking-widest text-sm mb-2">
//               Core Values
//             </p>
//             <h2 className="text-3xl md:text-4xl font-bold text-white">
//               We Innovate With Purpose.
//             </h2>
//           </div>

//           <div className="max-w-7xl mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {/* Helper for Core Value Cards */}
//             <ValueCard
//               icon={<Heart className="w-10 h-10 text-[#b79662]" />}
//               title="Empathy"
//               desc="Understanding the customer needs deeply and acting with care."
//             />
//             <ValueCard
//               icon={<Star className="w-10 h-10 text-[#b79662]" />}
//               title="Purpose Driven"
//               desc="Every action is aligned with the long-term vision of success."
//             />
//             <ValueCard
//               icon={<Phone className="w-10 h-10 text-[#b79662]" />}
//               title="Communication"
//               desc="Clear, transparent, and constant communication channels."
//             />
//             <ValueCard
//               icon={<Handshake className="w-10 h-10 text-[#b79662]" />}
//               title="Collaboration"
//               desc="Building strong partnerships to achieve mutual growth."
//             />
//             <ValueCard
//               icon={<User className="w-10 h-10 text-[#b79662]" />}
//               title="Leadership"
//               desc="Inspiring others to dream more, learn more, and do more."
//             />
//             <ValueCard
//               icon={<Shield className="w-10 h-10 text-[#b79662]" />}
//               title="Integrity"
//               desc="Upholding the highest standards of honesty and ethics."
//             />
//           </div>
//         </section>

//         {/* Section 3:  */}

//         <BusinessChallenges />

//         {/* Section 4:  */}
//         <BookStore />
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default MediaSection;

// {
//   /* Section 3: Video Grid (Commented out in original, kept commented) */
// }
// {
//   /* <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#1e1e1e] relative">
//           ...
//         </section> */
// }

// "use client";

// import React, { useState } from "react";
// import Footer from "../layout/Footer";
// import Header from "../layout/Header";
// import BookStore from "../components/BookStore";
// import BusinessChallenges from "../components/Faq";
// import {
//   Heart,
//   Star,
//   Phone,
//   Handshake,
//   User,
//   Shield,
// } from "lucide-react";

// const ValueCard = ({ icon, title, desc }) => (
//   <div className="bg-[#4c4949] p-8 mx-6 lg:mx-0 rounded-lg text-white text-center hover:-translate-y-2 transition-transform duration-300 border border-gray-600 hover:border-[#b79662] shadow-lg group">
//     <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform">
//       {icon}
//     </div>
//     <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#b79662] transition-colors">
//       {title}
//     </h3>
//     <p className="text-gray-400 group-hover:text-white text-sm ">{desc}</p>
//   </div>
// );

// const TestimonialHero = () => (
//   /* FIX: Changed 'w-full' to 'w-auto' 
//      This prevents the gap in the menu bar and the horizontal scroll.
//   */
//   <section className="mobile flex flex-col lg:flex-row w-auto min-h-[600px] max-w-7xl mx-auto mt-10 lg:mt-20 mb-10 shadow-2xl rounded-lg overflow-hidden">
//     <div className="w-full lg:w-1/2 bg-[#4c4949] p-10 md:p-16 flex flex-col justify-center relative overflow-hidden">
//       <div className="relative z-10">
//         <span className="mb-4 block text-sm font-bold tracking-widest text-[#b79662]">About Bhaswar Paul</span>
//         <h2 className="text-3xl lg:text-4xl font-bold mb-8 leading-none text-white">
//           After hours with Tajurba <br />
//           <span className="text-[#b79662]">Bhaswar Paul in Media Coverage</span>
//         </h2>
//         <p className="text-gray-200 text-lg mb-10 leading-relaxed max-w-xl font-light">
//           My weekdays start early — usually with a cup of tea and some reading,"
//           Mansharamani said. "I find that this quiet time in the morning helps
//           set a productive tone for the day. The calmness of the early hours
//           allows me to focus without distractions, whether it's diving into a
//           good book or reflecting on my goals for the day. It’s become an
//           essential part of my routine that fuels my energy and creativity
//           throughout the busy workday.
//         </p>
//         <button
//           style={{
//             padding: "14px 40px",
//             backgroundColor: "#b79662",
//             borderRadius: "8px",
//             color: "#fff",
//             fontSize: "1.1rem",
//             fontWeight: "700",
//             cursor: "pointer",
//             display: "flex",
//             gap: "10px",
//             position: "relative",
//             overflow: "hidden",
//             zIndex: 1,
//             border: "2px solid #b79662",
//             letterSpacing: "1px",
//             transition: "all 0.3s ease",
//           }}
//           onMouseEnter={(e) => {
//             const fill = e.currentTarget.querySelector(".hover-fill");
//             const text = e.currentTarget.querySelector(".btn-text");
//             if (fill) fill.style.width = "100%";
//             if (text) text.style.color = "#b79662";
//           }}
//           onMouseLeave={(e) => {
//             const fill = e.currentTarget.querySelector(".hover-fill");
//             const text = e.currentTarget.querySelector(".btn-text");
//             if (fill) fill.style.width = "0%";
//             if (text) text.style.color = "#fff";
//           }}
//         >
//           <div
//             className="hover-fill"
//             style={{
//               position: "absolute",
//               top: 0,
//               left: 0,
//               width: "0%",
//               height: "100%",
//               background: "#ffffff",
//               transition: "width 0.4s ease",
//               zIndex: -1,
//             }}
//           />
//           <span
//             className="btn-text"
//             style={{
//               position: "relative",
//               zIndex: 1,
//               color: "#fff",
//               transition: "color 0.3s ease",
//             }}
//           >
//             Read Article
//           </span>
//         </button>
//       </div>
//     </div>

//     {/* Right Image Side - Restored original style */}
//     <div className="twx w-full lg:w-1/2 relative min-h-[400px] lg:min-h-auto bg-[#1e1e1e] group">
//       <img
//         src="/assets/TEDx TAPMI/IMG_6622.jpg"
//         alt="Bhaswar"
//         className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
//       />
//       <div className="absolute inset-0 bg-[#b79662]/60 mix-blend-multiply z-10 group-hover:opacity-0 transition-all duration-500"></div>
//       <div
//         className="absolute inset-0 opacity-20 z-20 pointer-events-none"
//         style={{
//           backgroundImage:
//             "radial-gradient(circle, #ffffff 1px, transparent 1px)",
//           backgroundSize: "20px 20px",
//         }}
//       ></div>
//     </div>

//     <style jsx>{`
//       @media (max-width: 1024px) {
//         .mobile {
//           margin: 35px 35px;
//         }
//       }

//       @media (max-width: 768px) {
//         .mobile {
//           margin: 15px 15px;
//         }
//         /* Restored your height fix for image */
//         .twx {
//           height: 235px;
//           object-fit: cover;
//         }
//       }

//       @media (max-width: 480px) {
//         .mobile {
//           margin: 15px 15px;
//         }
//       }
//     `}</style>
//   </section>
// );

// const MediaSection = () => {
//   return (
//     <>
//       <Header />
//       <div className="bg-white flex flex-col">
//         <TestimonialHero />

//         <section className="bg-[#1e1e1e] py-20" style={{ margin: "50px 0" }}>
//           <div className="mx-auto px-6 text-center mb-12">
//             <p className="text-[#b79662] font-bold tracking-widest text-sm mb-2">
//               Core Values
//             </p>
//             <h2 className="text-3xl md:text-4xl font-bold text-white">
//               We Innovate With Purpose.
//             </h2>
//           </div>

//           <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             <ValueCard
//               icon={<Heart className="w-10 h-10 text-[#b79662]" />}
//               title="Empathy"
//               desc="Understanding the customer needs deeply and acting with care."
//             />
//             <ValueCard
//               icon={<Star className="w-10 h-10 text-[#b79662]" />}
//               title="Purpose Driven"
//               desc="Every action is aligned with the long-term vision of success."
//             />
//             <ValueCard
//               icon={<Phone className="w-10 h-10 text-[#b79662]" />}
//               title="Communication"
//               desc="Clear, transparent, and constant communication channels."
//             />
//             <ValueCard
//               icon={<Handshake className="w-10 h-10 text-[#b79662]" />}
//               title="Collaboration"
//               desc="Building strong partnerships to achieve mutual growth."
//             />
//             <ValueCard
//               icon={<User className="w-10 h-10 text-[#b79662]" />}
//               title="Leadership"
//               desc="Inspiring others to dream more, learn more, and do more."
//             />
//             <ValueCard
//               icon={<Shield className="w-10 h-10 text-[#b79662]" />}
//               title="Integrity"
//               desc="Upholding the highest standards of honesty and ethics."
//             />
//           </div>
//         </section>

//         <BusinessChallenges />
//         <BookStore />
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default MediaSection;

"use client";

import React, { useState } from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import BookStore from "../components/BookStore";
import BusinessChallenges from "../components/Faq";
import {
  Heart,
  Star,
  Phone,
  Handshake,
  User,
  Shield,
} from "lucide-react";

const ValueCard = ({ icon, title, desc }) => (
  <div className="bg-[#4c4949] p-8 mx-6 lg:mx-0 rounded-lg text-white text-center hover:-translate-y-2 transition-transform duration-300 border border-gray-600 hover:border-[#b79662] shadow-lg group">
    <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#b79662] transition-colors">
      {title}
    </h3>
    <p className="text-gray-400 group-hover:text-white text-sm ">{desc}</p>
  </div>
);

const TestimonialHero = () => (
  <section className="mobile flex flex-col lg:flex-row w-auto min-h-[600px] max-w-7xl mx-auto mt-10 lg:mt-20 mb-5 shadow-2xl rounded-lg overflow-hidden">
    <div className="w-full lg:w-1/2 bg-[#4c4949] p-10 md:p-16 flex flex-col justify-center relative overflow-hidden">
      <div className="relative z-10">
        <span className="mb-4 block text-sm font-bold tracking-widest text-[#b79662]">About Bhaswar Paul</span>
        <h2 className="text-3xl lg:text-4xl font-bold mb-8 leading-none text-white">
          After hours with Tajurba <br />
          <span className="text-[#b79662]">Bhaswar Paul in Media Coverage</span>
        </h2>
        <p className="text-gray-200 text-lg mb-10 leading-relaxed max-w-xl font-light">
         Bhaswar Paul is a seasoned professional with over two decades of experience across real estate, education, IT/ITES, and hospitality. He is the driving force behind IREED Academy (India) Private Limited, shaping leaders and high-performance professionals through strategic insight, industry depth, and execution-led growth. Mr. Paul has developed winning sales structures, marketing strategies, and performance-driven training modules. As a highly sought-after consultant, mentor, and motivational speaker, he is known for creating market-ready professionals and driving growth for leading real estate companies.
        </p>
        <button
          style={{
            padding: "14px 40px",
            backgroundColor: "#b79662",
            borderRadius: "8px",
            color: "#fff",
            fontSize: "1.1rem",
            fontWeight: "700",
            cursor: "pointer",
            display: "flex",
            gap: "10px",
            position: "relative",
            overflow: "hidden",
            zIndex: 1,
            border: "2px solid #b79662",
            letterSpacing: "1px",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            const fill = e.currentTarget.querySelector(".hover-fill");
            const text = e.currentTarget.querySelector(".btn-text");
            if (fill) fill.style.width = "100%";
            if (text) text.style.color = "#b79662";
          }}
          onMouseLeave={(e) => {
            const fill = e.currentTarget.querySelector(".hover-fill");
            const text = e.currentTarget.querySelector(".btn-text");
            if (fill) fill.style.width = "0%";
            if (text) text.style.color = "#fff";
          }}
        >
          <div
            className="hover-fill"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "0%",
              height: "100%",
              background: "#ffffff",
              transition: "width 0.4s ease",
              zIndex: -1,
            }}
          />
          <span
            className="btn-text"
            style={{
              position: "relative",
              zIndex: 1,
              color: "#fff",
              transition: "color 0.3s ease",
            }}
          >
            Read Article
          </span>
        </button>
      </div>
    </div>

    <div className="twx w-full lg:w-1/2 relative min-h-[400px] lg:min-h-auto bg-[#1e1e1e] group">
      <img
        src="/assets/TEDx TAPMI/IMG_6622.jpg"
        alt="Bhaswar"
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
      />
      <div className="absolute inset-0 bg-[#b79662]/60 mix-blend-multiply z-10 group-hover:opacity-0 transition-all duration-500"></div>
      <div
        className="absolute inset-0 opacity-20 z-20 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      ></div>
    </div>
  </section>
);

const MediaSection = () => {
  return (
    <>
      <Header />
      <div className="bg-white flex flex-col">
        <TestimonialHero />

        {/* Core Values Section - Kept Original */}
        <section className="bg-[#1e1e1e] py-20" style={{ margin: "50px 0" }}>
          <div className="mx-auto px-6 text-center mb-12">
            <p className="text-[#b79662] font-bold tracking-widest text-sm mb-2">
              Core Principles
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Innovation That Creates Impact
            </h2>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ValueCard
              icon={<Heart className="w-10 h-10 text-[#b79662]" />}
              title="Understanding"
              desc="Deep knowledge of markets, people, and changing business conditions."
            />
            <ValueCard
              icon={<Star className="w-10 h-10 text-[#b79662]" />}
              title="Partnership"
              desc="Collaborative relationships that are built on shared goals and mutual success."
            />
            <ValueCard
              icon={<Phone className="w-10 h-10 text-[#b79662]" />}
              title="Clarity"
              desc="Clear communication that maintains transparency and eliminates ambiguity in decision-making."
            />
            <ValueCard
              icon={<Handshake className="w-10 h-10 text-[#b79662]" />}
              title="Vision-Led"
              desc="Strategy guided by foresight, purpose, and long-term value creation."
            />
            <ValueCard
              icon={<User className="w-10 h-10 text-[#b79662]" />}
              title="Influence"
              desc="Shaping decisions, mindsets, and outcomes through credible leadership."
            />
            <ValueCard
              icon={<Shield className="w-10 h-10 text-[#b79662]" />}
              title="Trust"
              desc="Earned through consistency, integrity, and a no-compromise approach."
            />
          </div>
        </section>

        {/* Common Business Challenges - Applied .mobile Responsive Margins */}
        <div className="mobile max-w-7xl mx-auto mb-10 shadow-2xl rounded-lg overflow-hidden">
           <BusinessChallenges />
        </div>

        <BookStore />
      </div>
      <Footer />

      <style jsx global>{`
        @media (max-width: 1024px) {
          .mobile {
            margin-left: 35px !important;
            margin-right: 35px !important;
          }
        }

        @media (max-width: 768px) {
          .mobile {
            margin-left: 15px !important;
            margin-right: 15px !important;
          }
          .twx {
            height: 235px;
            object-fit: cover;
          }
        }

        @media (max-width: 480px) {
          .mobile {
            margin-left: 15px !important;
            margin-right: 15px !important;
          }
        }
      `}</style>
    </>
  );
};

export default MediaSection;