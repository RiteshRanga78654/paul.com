"use client";
import React from "react";
import Image from "next/image";
import {
  FaPlay,
  FaNetworkWired,
  FaUserFriends,
  FaChalkboardTeacher,
  FaTags,
} from "react-icons/fa";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

// Replace these with your actual image paths
const manInSuit = "/assets/TEDx TAPMI/Tanky You - TEDX & TAPMI.png";
const manWithMic = "/assets/TEDx TAPMI/IMG_9508.jpg"; // New image for Membership section
const articleImg1 = "/path/to/article-img-1.jpg";
const articleImg2 = "/path/to/article-img-2.jpg";
const articleImg3 = "/path/to/article-img-3.jpg";
const videoThumb1 = "/path/to/video-thumb-1.jpg";
const videoThumb2 = "/path/to/video-thumb-2.jpg";
const videoThumb3 = "/path/to/video-thumb-3.jpg";
const videoThumb4 = "/path/to/video-thumb-4.jpg";

const DesignComponent = () => {
  return (
    
    <>
    <Header />
    <div className="font-sans bg-[#1e1e1e] text-white">
      {/* 1. Testimonials Intro Section */}
     <section className="relative flex flex-col lg:flex-row border-b border-gray-800">
  <div className="w-full lg:w-1/2 p-10 lg:p-24 flex flex-col justify-center z-10 bg-[#4c4949]">
    <h4 className="text-[#b79662] font-bold text-sm tracking-wider mb-4">
     Networks
    </h4>
    <h1 className="text-4xl font-bold text-white mb-6">
      Here's What Our <br />
      <span className="text-[#b79662]">Customers Have To Say</span>
    </h1>
    <p className="text-gray-200 text-lg mb-8 font-light leading-relaxed">
      A vibrant network of entrepreneurs,{" "}
      <span className="font-bold text-white">business owners</span>, and
      professionals united by a shared passion for{" "}
      <span className="font-bold text-white">growth</span> and success.
      Whether you're seeking valuable connections, strategic partnerships,
      or collaborative opportunities, our network offers a dynamic
      platform to foster meaningful relationships.
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
        width: "fit-content", // <--- ADDED THIS LINE TO FIX WIDTH
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
        Join Our Communities
      </span>
    </button>
  </div>
  
  {/* Right Image Part */}
  <div className="w-full lg:w-1/2 relative min-h-[500px] bg-[#1e1e1e]  ">
    <Image
      src={manInSuit}
      alt="Man in Suit"
      layout="fill"
      objectFit="cover"
      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
    />
    <div className="absolute inset-0 bg-[#b79662]/40 mix-blend-multiply z-10 group-hover:opacity-0 transition-all duration-500" ></div>
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 z-20" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
  </div>

  
</section>

      {/* Why Join Our Community Section */}
      <section className="py-20 px-4 lg:px-24 bg-[#1e1e1e] text-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Why Join Our <span className="text-[#b79662]">Community?</span>
            </h2>
            <div className="w-24 h-1 bg-[#b79662] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Point 1 */}
            <div className="flex bg-[#4c4949] p-8 rounded-xl border border-gray-600 hover:border-[#b79662] transition-all duration-300 shadow-lg group hover:-translate-y-1">
              <div className="bg-[#b79662] text-white font-bold text-2xl h-14 w-14 flex items-center justify-center rounded-lg mr-6 flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#b79662] transition-colors">
                  Connect With Like-Minded Professionals
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed font-light">
                  Surround yourself with a diverse community of driven
                  individuals who share your entrepreneurial spirit and
                  ambition. Our network provides a supportive environment where
                  you can exchange ideas, seek advice, and collaborate on
                  exciting ventures.
                </p>
              </div>
            </div>

            {/* Point 2 */}
            <div className="flex bg-[#4c4949] p-8 rounded-xl border border-gray-600 hover:border-[#b79662] transition-all duration-300 shadow-lg group hover:-translate-y-1">
              <div className="bg-[#b79662] text-white font-bold text-2xl h-14 w-14 flex items-center justify-center rounded-lg mr-6 flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#b79662] transition-colors">
                  Access To Exclusive Resources And Opportunities
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed font-light">
                  Gain access to a wealth of resources, including industry
                  insights, market trends, and business tools, to stay ahead of
                  the curve. From workshops and seminars to networking events
                  and mastermind groups, our network offers valuable
                  opportunities.
                </p>
              </div>
            </div>

            {/* Point 3 */}
            <div className="flex bg-[#4c4949] p-8 rounded-xl border border-gray-600 hover:border-[#b79662] transition-all duration-300 shadow-lg group hover:-translate-y-1">
              <div className="bg-[#b79662] text-white font-bold text-2xl h-14 w-14 flex items-center justify-center rounded-lg mr-6 flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#b79662] transition-colors">
                  Forge Strategic Partnerships
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed font-light">
                  Cultivate strategic partnerships with fellow members to
                  leverage each other's strengths and accelerate mutual growth.
                  Whether you're seeking new clients, suppliers, or investors,
                  our network serves as a fertile ground for cultivating
                  fruitful collaborations.
                </p>
              </div>
            </div>

            {/* Point 4 */}
            <div className="flex bg-[#4c4949] p-8 rounded-xl border border-gray-600 hover:border-[#b79662] transition-all duration-300 shadow-lg group hover:-translate-y-1">
              <div className="bg-[#b79662] text-white font-bold text-2xl h-14 w-14 flex items-center justify-center rounded-lg mr-6 flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#b79662] transition-colors">
                  Promote Your Business And Personal Brand
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed font-light">
                  Showcase your expertise, products, and services to a captive
                  audience within our network. From featured profiles and guest
                  blog posts to speaking opportunities and sponsored events, we
                  provide various channels to amplify your brand visibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NEW SECTION: Membership Benefits */}
      <section className="flex flex-col lg:flex-row bg-white">
        {/* Left: Image */}
        <div className="w-full lg:w-1/2 relative min-h-[500px] lg:min-h-auto">
          <Image
            src={manWithMic} // Replace with your image of man with microphone
            alt="Bhaswar Paul Speaking"
            layout="fill"
            objectFit="cover"
            
          />
          {/* Dark/Gold Overlay */}
          <div className="absolute inset-0 bg-[#1e1e1e]/20 z-10"></div>
        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-1/2 p-10 lg:p-20 bg-[#1e1e1e] flex flex-col justify-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12  ">
            Membership <span className="text-[#b79662]">Benefits</span>
          </h2>

          <div className="space-y-10">
            {/* Benefit 1 */}
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 mt-1">
                <FaNetworkWired className="text-4xl text-[#b79662]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Networking Events
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Attend exclusive networking events, mixers, and conferences to
                  expand your professional circle and foster valuable
                  connections.
                </p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 mt-1">
                <FaUserFriends className="text-4xl text-[#b79662]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Business Referrals
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Tap into our network's referral network to generate leads,
                  referrals, and new business opportunities.
                </p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 mt-1">
                <FaChalkboardTeacher className="text-4xl text-[#b79662]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white  mb-2">
                  Educational Resources
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Access curated resources, including webinars, e-books, and
                  whitepapers, to enhance your knowledge and skills across
                  various business disciplines.
                </p>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 mt-1">
                <FaTags className="text-4xl text-[#b79662]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white  mb-2">
                  Member Discounts
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Enjoy special discounts and offers on business services,
                  software tools, and training programs from our trusted
                  partners and affiliates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>

  );
};

export default DesignComponent;




 <section className="flex flex-col lg:flex-row w-full min-h-[600px] max-w-7xl mx-auto mt-10 lg:mt-20  mb-10 shadow-2xl rounded-lg overflow-hidden">
    {/* Left Text Side: Background #4c4949 */}
    <div className="w-full lg:w-1/2 bg-[#4c4949] p-10 md:p-16  flex flex-col justify-center relative overflow-hidden">
      <div className="relative z-10">
        <span className="block text-[#b79662] font-bold tracking-widest mb-4 text-sm">
         Media
        </span>
        <h2 className="text-3xl lg:text-4xl font-bold mb-8 leading-none text-white">
          After hours with Tajurba <br />
          <span className="text-[#b79662]">Baswar Paul in Media Coverage</span>
        </h2>
        <p className="text-gray-200 text-lg mb-10 leading-relaxed max-w-xl font-light">
          My weekdays start early — usually with a cup of tea and some reading,"
          Paul said. "I find that this quiet time in the morning helps
          set a productive tone for the day. The calmness of the early hours
          allows me to focus without distractions, whether it's diving into a
          good book or reflecting on my goals for the day. It’s become an
          essential part of my routine that fuels my energy and creativity
          throughout the busy workday.
        </p>
        <button
          style={{
            padding: "14px 40px",
            backgroundColor: "#b79662", // Default Gold Background
            borderRadius: "8px",
            color: "#fff", // Default White Text
            fontSize: "1.1rem",
            fontWeight: "700",
            cursor: "pointer",
            display: "flex",

            gap: "10px",
            position: "relative",
            overflow: "hidden",
            zIndex: 1,
            border: "2px solid #b79662", // Border keeps the button size stable

            letterSpacing: "1px",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            const fill = e.currentTarget.querySelector(".hover-fill");
            const text = e.currentTarget.querySelector(".btn-text");

            // Slide in the white background
            if (fill) fill.style.width = "100%";

            // Change text color to Gold
            if (text) text.style.color = "#b79662";
          }}
          onMouseLeave={(e) => {
            const fill = e.currentTarget.querySelector(".hover-fill");
            const text = e.currentTarget.querySelector(".btn-text");

            // Slide out the white background
            if (fill) fill.style.width = "0%";

            // Reset text color to White
            if (text) text.style.color = "#fff";
          }}
        >
          {/* Hover Fill Layer: White */}
          <div
            className="hover-fill"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "0%",
              height: "100%",
              background: "#ffffff", // White background on hover
              transition: "width 0.4s ease",
              zIndex: -1,
            }}
          />

          {/* Text Span with Transition */}
          <span
            className="btn-text"
            style={{
              position: "relative",
              zIndex: 1,
              color: "#fff", // Initial color
              transition: "color 0.3s ease",
            }}
          >
            Read More
          </span>
        </button>
      </div>
    </div>

    {/* Right Image Side with Theme Overlay */}
    {/* Added 'group' class here so children can react to hover */}
    <div className="twx w-full lg:w-1/2 relative min-h-[400px] lg:min-h-auto bg-[#1e1e1e] group">
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
      <div
        className="absolute inset-0 opacity-20 z-20 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      ></div>
    </div>
    <style jsx>{`
      /* ... your existing styles ... */

      @media (max-width: 768px) {
        .twx {
          height: 235px;
          object-fit: cover;
        }
      }
    `}</style>
  </section>