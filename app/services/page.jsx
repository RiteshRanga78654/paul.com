// import React from 'react'
// import Header from '../layout/Header'
// import Footer from '../layout/Footer'

// const page = () => {
//   return (
//     <>
//    <Header />
//     <div>
//         <h1>Page Service</h1>
//     </div>
//     <Footer />
//      </>
//   )
// }

// export default page

"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  ArrowUpRight,
  Target,
  Coins,
  LineChart,
} from "lucide-react";

// Layout Components
import Header from "../layout/Header";
import Footer from "../layout/Footer";

// --- DATA ---
const services = [
  {
    title: "Executive Training & Workshops",
    subtitle: "Strategic leadership development",
    desc: "CEO Bhaswar Paul transforms traditional sales teams into high-performing units through strategic mindset shifts and advanced techniques tailored for the real estate market.",
    icon: <GraduationCap size={40} className="text-[#b79662]" />,
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Hiring and Placement",
    subtitle: "World-class talent acquisition",
    desc: "Leveraging an elite industry network to connect real estate developers with high-skilled professionals who align with long-term corporate visions.",
    icon: <Briefcase size={40} className="text-[#b79662]" />,
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Fund Raising",
    subtitle: "Capital infusion & Investor relations",
    desc: "Utilizing a colossal network of industry giants built over 20 years to raise substantial capital for startups and high-impact causes within days.",
    icon: <Coins size={40} className="text-[#b79662]" />,
    image:
      "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=800",
    email: "services@bhaswarpaul.com",
  },
  {
    title: "Project Consultation",
    subtitle: "Expert Planning & Management",
    desc: "Expert consultation to increase profit numbers by leaps and bounds. We handle project complications through specialized advice and insider industry tricks.",
    icon: <LineChart size={40} className="text-[#b79662]" />,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    email: "services@bhaswarpaul.com",
    features: [
      "Strategic planning & management",
      "Market research & analysis",
      "Price negotiation & Taxation advice",
      // "Luxury & Commercial development"
    ],
  },
];

const challenges = [
  {
    id: "01",
    title: "Stagnant Sales",
    desc: "Breaking growth plateaus with proven real estate scaling strategies and mindset shifts.",
    // Visual: A lone businessman overlooking a vast, quiet construction site at dusk
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "02",
    title: "Negative Cash Flows",
    desc: "Optimizing working capital and financial structures for long-term operational stability.",
    // Visual: Close up of a luxury watch and professional hands signing complex financial documents
    image: "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "03",
    title: "Rising Debts",
    desc: "Executive strategies to restructure debt and regain financial freedom in complex markets.",
    // Visual: Dramatic low-angle shot of dark corporate skyscrapers reflecting a cloudy sky
    image: "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "04",
    title: "Ineffective Marketing",
    desc: "Building high-converting sales funnels that deliver consistent ROI and brand authority.",
    // Visual: A modern glass meeting room with data projections blurring in the background
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
  },
];


const communityBenefits = [
  "Connect with like-minded professionals",
  "Access to exclusive resources",
  "Forge strategic partnerships",
  "Promote your personal brand",
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="bg-[#fdfdfd] font-sans selection:bg-[#b79662] selection:text-white pb-20 overflow-x-hidden">
        {/* 1. HERO SECTION (Mirroring Reference Code) */}
        <section className="mobile mx-auto mt-10 mb-15 flex max-w-7xl flex-col overflow-hidden rounded-lg shadow-2xl lg:mt-20 lg:flex-row">
          <div className="flex w-full flex-col justify-center bg-[#4c4949] p-10 md:p-16 lg:w-1/2">
            <span className="mb-4 block text-sm font-bold tracking-widest text-[#b79662]">
              Our Expertise
            </span>
            <h2 className="mb-8 text-3xl font-bold leading-none text-white lg:text-4xl">
              Strategic Solutions for <br />
              <span className="text-[#b79662]">Real Estate Growth</span>
            </h2>
            <p className="mb-10 max-w-xl text-lg font-light leading-relaxed text-gray-200">
              Transforming business potential into market leadership through
              executive training, capital infusion, and elite talent
              acquisition. We provide the strategic framework for high-impact
              results.
            </p>

            {/* Gold Button Style - No style changes, only text */}
            <div className="w-fit">
              <button
                style={{
                  padding: "14px 40px",
                  backgroundColor: "#b79662",
                  borderRadius: "8px",
                  color: "#fff",
                  fontSize: "1.1rem",
                  fontWeight: "700",
                  cursor: "pointer",
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
                  View Our Services
                </span>
              </button>
            </div>
          </div>

          <div className="group relative min-h-[400px] w-full bg-[#1e1e1e] lg:w-1/2">
            <img
              src="/assets/TEDx TAPMI/IMG_6622.jpg"
              alt="Testimonial Hero"
              className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-[#b79662]/60 mix-blend-multiply z-10 group-hover:opacity-0 transition-all duration-500"></div>
            <div
              className="absolute inset-0 z-20 pointer-events-none opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
          </div>
        </section>

        {/* 2. SERVICES GRID */}
        <h2 className="text-3xl text-center md:text-4xl mt-10 md:mt-10 font-bold text-[#b79662]">
          Our <span className="text-[#b79662]">Services</span>
        </h2>

        <div className="w-24 h-1 bg-[#b79662] mx-auto mt-4 mb-4 rounded-full"></div>

        <section className="mobile-margin max-w-7xl rounded-lg mx-auto md:py-8  px-6 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                // SYNCED ANIMATION: Identical to Challenges
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                // Removed the -50px margin to eliminate the scroll "pause"
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.15,
                  ease: "easeOut", // Matches the smooth finish of the challenges
                }}
                className="group relative bg-[#4c4949] rounded-3xl overflow-hidden border border-white/5 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col"
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={service.image}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                    alt={service.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e1e] via-transparent to-transparent opacity-80"></div>
                </div>

                <div className="p-8 -mt-12 relative bg-white mx-4 lg:mx-6 rounded-2xl shadow-lg mb-6 flex-grow transition-all duration-500 group-hover:-translate-y-2 border border-white/10 group-hover:border-[#b79662]/40">
                  <div className="mb-6 inline-block p-3 bg-white/5 rounded-xl text-[#b79662]">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      {service.icon}
                    </motion.div>
                  </div>

                  <h3 className="text-2xl font-bold text-[#b79662] mb-2 group-hover:text-[#b79662] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#b79662] text-xs font-bold tracking-widest mb-4">
                    {service.subtitle}
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.desc}
                  </p>

                  {service.features && (
                    <div className="grid grid-cols-1 gap-2 mb-4">
                      {service.features.map((feat, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text text-gray-600"
                        >
                          <div className="w-1 h-1 bg-[#b79662] rounded-full"></div>
                          {feat}
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-auto">
                    <button className="flex items-center gap-2 text-white font-bold text-sm group-hover:text-[#b79662] transition-colors group/btn">
                      Inquire Now{" "}
                      <ArrowUpRight
                        size={18}
                        className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                      />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>


        {/* PROCESS SECTION with Images & Background */}
<section 
  className="relative bg-cover bg-center py-20 px-6 overflow-hidden" 
  style={{ 
    backgroundImage: `url(https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&q=80&w=1974)`, // Subtle background for the whole section
    backgroundAttachment: 'fixed' // Optional: Parallax effect
  }}
>
  {/* Dark overlay for readability */}
  <div className="absolute inset-0 bg-[#262626] opacity-90"></div>

  <div className="max-w-7xl mx-auto relative z-10">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-white">Our Strategic <span className="text-[#b79662]">Process</span></h2>
      <div className="w-24 h-1 bg-[#b79662] mx-auto mt-4 rounded-full"></div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { 
          step: "01", 
          title: "Discovery & Diagnostic", 
          desc: "We deep-dive into your current sales and financial structures, identifying friction points and hidden opportunities through expert analysis.", 
          image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600" 
        },
        { 
          step: "02", 
          title: "Strategic Roadmap", 
          desc: "A bespoke, actionable plan is designed, leveraging industry insights to eliminate growth barriers and optimize your operational flow.", 
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600" 
        },
        { 
          step: "03", 
          title: "Execution & Infusion", 
          desc: "We deploy the agreed-upon strategies, injecting capital, talent, and tailored training directly into your real estate ecosystem.", 
          image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=600" 
        },
        { 
          step: "04", 
          title: "Market Leadership", 
          desc: "Witness measurable results as we work together to achieve sustainable market leadership, increased ROI, and amplified brand authority.", 
          image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600" 
        }
      ].map((item, idx) => (
        <motion.div 
          key={idx} 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: idx * 0.2 }}
          className="relative group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
        >
          <div className="h-48 overflow-hidden relative">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500" 
            />
            {/* Inner gradient overlay for text readability on image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          </div>

          <div className="p-6 flex-grow">
            <div className="text-4xl font-bold text-[#b79662] mb-3 opacity-0">
              {item.step}
            </div>
            <h3 className="text-xl font-bold text-[#b79662] mb-3">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

        {/* 3. CHALLENGES SECTION WITH ALL 4 IMAGES & ANIMATIONS */}

        <h2 className="text-3xl text-center md:text-4xl mt-10 md:mt-6 font-bold text-[#b79662]">
          Market <span className="text-[#b79662]">Diagnostics</span>
        </h2>
        <div className="w-24 h-1 bg-[#b79662] mx-auto mt-4 mb-4 rounded-full"></div>

        <section className="mobile-margin max-w-7xl mx-auto py-8 md:py-8 px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {challenges.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.15,
                  ease: "easeOut",
                }}
                className="group relative bg-[#4c4949] rounded-3xl overflow-hidden border border-white/5 flex flex-col shadow-2xl"
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={item.image}
                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                    alt={item.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#262626] via-transparent to-transparent opacity-90"></div>
                </div>

                <div className="p-8 lg:p-10 -mt-12 relative bg-white mx-4 lg:mx-6 rounded-2xl shadow-2xl mb-6 flex-grow transition-all duration-500 group-hover:-translate-y-2 border border-white/10 group-hover:border-[#b79662]/40">
                  <div className="mb-6 flex justify-between items-center">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                      className="p-3 bg-[#b79662]/10 rounded-xl"
                    >
                      <Target size={24} className="text-[#b79662]" />
                    </motion.div>
                    {/* <span className="text-2xl font-serif italic text-[#b79662] opacity-30 group-hover:opacity-100 transition-opacity">
                      {item.id}
                    </span> */}
                  </div>

                  <h3 className="text-2xl font-bold mb-2 text-[#b79662] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#b79662] text-xs font-bold tracking-widest mb-4">
                    Obstacle Analysis
                  </p>
                  <p className="text-gray-600 leading-relaxed text-sm mb-8">
                    {item.desc}
                  </p>
                  <div className="mt-auto">
                    <button className="flex items-center gap-2 text-white font-bold text-sm group-hover:text-[#b79662] transition-colors group/btn">
                      View Resolution Strategy
                      <ArrowUpRight
                        size={18}
                        className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                      />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        {/* 4. COMMUNITY: THE INVITATION */}
        {/* <section className="mobile-margin max-w-7xl mx-auto py-24 px-4">
          <div className="bg-[#fcfaf7] rounded-[4rem] p-10 md:p-20 border border-[#b79662]/10 flex flex-col items-center text-center shadow-sm">
            <span className="text-[#b79662] font-bold tracking-[0.4em] uppercase text-xs mb-8">Exclusive Access</span>
            <h2 className="text-4xl md:text-6xl font-light text-gray-900 mb-10 leading-[1.1]">
              Elevate your <span className="italic font-serif">professional</span> <br /> 
              standing within our <span className="text-[#b79662] font-medium">network.</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14 max-w-2xl">
              {communityBenefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                  <div className="w-8 h-8 rounded-full bg-[#f9f7f2] flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={16} className="text-[#b79662]" />
                  </div>
                  <span className="text-sm text-gray-700 font-medium text-left">{benefit}</span>
                </div>
              ))}
            </div>

            <button className="bg-black text-white px-12 py-6 rounded-full font-bold text-lg hover:bg-[#b79662] transition-all transform hover:scale-105 shadow-2xl">
              Request Community Access
            </button>
          </div>
        </section>  */}
      </main>
      <Footer />

      {/* CONSOLIDATED STYLE TAG */}
      <style jsx>{`
        /* Styles for the Hero Section (.mobile) */
        @media (max-width: 1024px) {
          .mobile {
            margin: 35px 35px;
          }
        }
        @media (max-width: 768px) {
          .mobile {
            margin: 15px 15px;
          }
        }
        @media (max-width: 480px) {
          .mobile {
            margin: 15px 15px;
          }
        }

        /* Styles for the Grid Margin (.mobile-margin) */
        @media (max-width: 1280px) {
          .mobile-margin {
            margin-left: 35px !important;
            margin-right: 35px !important;
          }
        }
        @media (max-width: 768px) {
          .mobile-margin {
            margin-left: 15px !important;
            margin-right: 15px !important;
          }
        }
      `}</style>
    </>
  );
}
