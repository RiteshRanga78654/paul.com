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
import { motion } from "framer-motion";
import { ArrowRight, Star, Target, Shield, Clock } from "lucide-react";
import {
  LayoutDashboard,
  Map,
  Briefcase,
  ShieldCheck,
  BarChart3,
  CheckCircle2,
} from "lucide-react";

// Replace these with your actual image paths
const manInSuit = "/assets/TEDx TAPMI/networkimg.jfif";
const manWithMic = "/assets/TEDx TAPMI/IMG_9508.jpg"; // New image for Membership section
const articleImg1 = "/path/to/article-img-1.jpg";
const articleImg2 = "/path/to/article-img-2.jpg";
const articleImg3 = "/path/to/article-img-3.jpg";
const videoThumb1 = "/path/to/video-thumb-1.jpg";
const videoThumb2 = "/path/to/video-thumb-2.jpg";
const videoThumb3 = "/path/to/video-thumb-3.jpg";
const videoThumb4 = "/path/to/video-thumb-4.jpg";


const services = [
  {
    id: "01",
    title: "Requirement Analysis",
    icon: LayoutDashboard,
  },
  {
    id: "02",
    title: "Planning & Strategy",
    icon: Map,
  },
  {
    id: "03",
    title: "Execution & Monitoring",
    icon: Briefcase,
  },
  {
    id: "04",
    title: "Quality & Audits",
    icon: ShieldCheck,
  },
  {
    id: "05",
    title: "Reporting & Optimization",
    icon: BarChart3,
  },
  {
    id: "06",
    title: "Successful Closure",
    icon: CheckCircle2,
  },
];

const DesignComponent = () => {
  return (
    <>
      <Header />
      <div className="font-sans bg-[#1e1e1e] text-white">
        {/* 1. Testimonials Intro Section */}
        <section className="relative min-h-[90vh] flex items-center bg-black overflow-hidden font-sans">
          {/* Background with Gold-Tinted Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
              alt="Corporate Building"
              className="w-full h-full object-cover opacity-40 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
          </div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-16">
            {/* Left Content */}
            <div className="w-full lg:w-3/5 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#b79662]/10 border border-[#b79662]/30 text-[#b79662] text-xs font-bold uppercase tracking-widest"
              >
                <Star size={14} fill="#b79662" /> Premium Construction Services
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl lg:text-7xl font-bold text-white leading-tight"
              >
                Building <br />
                <span className="text-[#b79662]">Excellence</span> <br />
                Through Precision
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-[#b3b3b3] text-lg lg:text-xl max-w-xl leading-relaxed"
              >
                At MANO Project Consultants, we provide end-to-end consulting
                solutions that help organizations plan smarter, execute faster,
                and maintain uncompromising quality.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4 justify-start" // Added justify-start to ensure alignment
              >
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
                    textAlign: "left",
                    justifyContent: "flex-start", // Changed from 'left' to 'flex-start' (standard flex property)
                    alignItems: "center", // Changed to 'center' for better vertical text alignment
                    gap: "10px",
                    position: "relative",
                    overflow: "hidden",
                    zIndex: 1,
                    border: "2px solid #b79662",
                    margin: "0", // Changed from "0 auto" to "0" to align left
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
                    Explore Services
                  </span>
                </button>
              </motion.div>
            </div>

            {/* Right Stats Card (Glassmorphism Gold Theme) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="w-full lg:w-2/5 relative"
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 lg:p-10 rounded-3xl shadow-2xl relative z-10">
                {/* Main Metric */}
                <div className="flex items-center gap-6 mb-10">
                  <div className="p-4 bg-[#b79662] rounded-2xl text-black">
                    <Target size={32} />
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-white">500+</div>
                    <div className="text-[#b3b3b3] text-sm uppercase tracking-wider">
                      Clients Served
                    </div>
                  </div>
                </div>

                {/* Satisfaction Progress */}
                <div className="mb-10 space-y-3">
                  <div className="flex justify-between text-sm uppercase tracking-widest font-bold">
                    <span className="text-white">Client Satisfaction</span>
                    <span className="text-[#b79662]">98%</span>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "98%" }}
                      transition={{ duration: 1.5, delay: 0.8 }}
                      className="h-full bg-[#b79662]"
                    ></motion.div>
                  </div>
                </div>

                {/* Sub Metrics Grid */}
                <div className="grid grid-cols-3 gap-4 text-center border-t border-white/10 pt-8">
                  <div>
                    <div className="text-2xl font-bold text-white">12+</div>
                    <div className="text-[10px] text-[#b3b3b3] uppercase mt-1">
                      Years
                    </div>
                  </div>
                  <div className="border-x border-white/10">
                    <div className="text-2xl font-bold text-white">100%</div>
                    <div className="text-[10px] text-[#b3b3b3] uppercase mt-1">
                      Quality
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">24/7</div>
                    <div className="text-[10px] text-[#b3b3b3] uppercase mt-1">
                      Support
                    </div>
                  </div>
                </div>

                {/* Badges */}
                <div className="flex gap-3 mt-8">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-[10px] font-bold uppercase">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>{" "}
                    Active
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#b79662]/10 border border-[#b79662]/20 text-[#b79662] text-[10px] font-bold uppercase">
                    <Shield size={10} /> Premium
                  </div>
                </div>
              </div>

              {/* Decorative Gold Glow */}
              <div className="absolute -inset-4 bg-[#b79662] opacity-10 blur-3xl -z-0"></div>
            </motion.div>
          </div>
        </section>

        {/* Why Join Our Community Section */}
        <section className="py-20 px-4 lg:px-24 bg-[#1e1e1e] text-white">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">
                Why Choose <span className="text-[#b79662]">Us?</span>
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
                    Right Connections
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed font-light">
                    We introduce you to industry players and growth-oriented
                    professionals, which helps you build relationships that
                    create business opportunities and provide measurable value
                    for your company.
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
                    Exclusive Access
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed font-light">
                    Get insider access to curated groups and high-value
                    information which help you maintain your competitive edge by
                    tracking market developments, competitive activities and
                    identifying new possibilities in your field.
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
                    Strategic Alliances
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed font-light">
                    We enable essential partnerships for businesses to operate
                    more efficiently while achieving faster growth. Our team
                    assists you with new avenues of sustainable growth and
                    market expansion.
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
                    Brand Visibility
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed font-light">
                    Position your brand where influence matters most through
                    premium exposure and thought leadership opportunities that
                    enhance credibility and recognition among key industry
                    stakeholders.
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
              Member <span className="text-[#b79662]">Advantages </span>
            </h2>

            <div className="space-y-10">
              {/* Benefit 1 */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 mt-1">
                  <FaNetworkWired className="text-4xl text-[#b79662]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Curated Events
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Well-organized meetings that generate top-tier discussions,
                    strategic contacts, and quality business deliverables.
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
                    Referral Business Network
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    A trusted network that produces reliable referrals, repeat
                    business, and stable growth.
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
                    Learning Resources
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Expert knowledge together with actionable frameworks and
                    practical insights which improve decision-making and
                    leadership effectiveness.
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
                    Member Privileges
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Priority access, special privileges, and tailored
                    opportunities are available only to network members.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

          <section className="py-16 bg-white text-[#b79662]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold mb-5 text-black">
          Service <span className="text-[#b79662]">Delivery Model</span>
        </h2>
         <div className="w-24 h-1.5 bg-[#b79662] mx-auto mt-4  mb-10 rounded-full"></div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="relative p-8 rounded-2xl border border-white/10 
                bg-gradient-to-r from-[#05080d] to-[#0b1320]
                hover:border-[#b79660]/40 transition-all duration-500 hover:scale-105 group"
              >
                {/* Large Number */}
                <span className="absolute right-6 top-6 text-6xl font-bold text-white/5">
                  {item.id}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-[#0d1b2a] flex items-center justify-center mb-6 text-[#b79660]">
                  <Icon size={22} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>

                {/* Underline */}
                <div className="w-10 h-[3px] bg-[#b79660] rounded-full group-hover:w-[100%] transition-all duration-300"></div>
              </div>
            );
          })}
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
        <span className="text-[#b79662]">Bhaswar Paul in Media Coverage</span>
      </h2>
      <p className="text-gray-200 text-lg mb-10 leading-relaxed max-w-xl font-light">
        My weekdays start early — usually with a cup of tea and some reading,"
        Paul said. "I find that this quiet time in the morning helps set a
        productive tone for the day. The calmness of the early hours allows me
        to focus without distractions, whether it's diving into a good book or
        reflecting on my goals for the day. It’s become an essential part of my
        routine that fuels my energy and creativity throughout the busy workday.
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
</section>;
