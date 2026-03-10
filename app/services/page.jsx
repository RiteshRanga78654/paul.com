"use client";
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import {
  GraduationCap,
  Briefcase,
  ArrowUpRight,
  Target,
  Coins,
  LineChart,
} from "lucide-react";
import { 
  Lightbulb, 
  FileText, 
  MapPin, 
  Settings, 
  TrendingUp, 
  Users 
} from 'lucide-react';

import { 

  Search, 
  Microscope, 
  Database, 
  
  Headphones 
} from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

const HeroSlider = () => {
  const services = [
    {
      title: "Executive Training and Workshops",
      subtitle: "Strategic Leadership Development",
      desc: "Advanced leadership growth programs that use practical frameworks and insights made just for the changing real estate sector to improve sales performance and strategic thinking.",
      icon: <GraduationCap size={40} className="text-[#b79662]" />,
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Hiring and Placement",
      subtitle: "World-Class Talent Acquisition",
      desc: "Connecting real estate organizations with high-caliber professionals through a trusted industry network to ensure leadership alignment, skill compatibility, and durable value creation for growing businesses.",
      icon: <Briefcase size={40} className="text-[#b79662]" />,
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Real Estate Certificate Programs",
      subtitle: "Capital infusion & Investor relations",
      desc: "Our industry-specific real estate certification programs range from foundational to master’s-level training, complemented by digital, technology, and postgraduate business programs that support strategic, data-driven career growth.",
      icon: <Coins size={40} className="text-[#b79662]" />,
      image:
        "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Project Consultation",
      subtitle: "Expert Planning & Management",
      desc: "Hands-on advisory support that helps optimize planning and profitability by addressing operational gaps, market challenges, and complex project requirements with proven, results-driven expertise.",
      icon: <LineChart size={40} className="text-[#b79662]" />,
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    },
  ];

  const challenges = [
    {
      id: "01",
      title: "Sales Growth Stagnation",
      subtitle: "Performance Assessment",
      desc: "Identifying the bottlenecks in your growth and turnaround strategies to reignite continued advancement and sustainable profitability.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "02",
      title: "Debt Pressure",
      subtitle: "Financial Restructuring",
      desc: "Rebalancing obligations and improving the debt structure to regain financial flexibility and enhance long-term business resilience.",
      image:
        "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "03",
      title: "Cash Flow Constraints",
      subtitle: "Financial Diagnostics",
      desc: "Strengthening liquidity and capital efficiency through structured financial planning and rigorous cash-flow management.",
      image:
        "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "04",
      title: "Marketing Inefficiency",
      subtitle: "Market Approach Review",
      desc: "Sales and marketing alignment to improve conversion rates and generate measurable returns on investment.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    },
  ];

  const slides = [
    {
      id: 1,
      title: "India's Leading",
      highlight: "GCC Enabler",
      desc: "Your definitive partner for end-to-end GCC excellence—empowering global enterprises with future-ready solutions.",
      bg: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069",
    },
    {
      id: 2,
      title: "Innovative",
      highlight: "Tech Solutions",
      desc: "Scalable infrastructure and digital transformation strategies for modern enterprises.",
      bg: "/assets/full-stack.jpg",
    },
    {
      id: 3,
      title: "Future Ready",
      highlight: "Consultancy",
      desc: "Expert guidance to navigate the complex landscape of global business operations.",
      bg: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070",
    },
    {
      id: 4,
      title: "Global Reach",
      highlight: "Local Impact",
      desc: "Bridging the gap between international standards and local execution excellence.",
      bg: "/assets/BPimages/DSC02419.JPG",
    },
    {
      id: 5,
      title: "Unmatched",
      highlight: "Excellence",
      desc: "Consistently delivering high-value results through dedicated support and mentorship.",
      bg: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070",
    },
  ];

  const steps = [
    {
      title: "Define Your Vision",
      desc: "Ensure your GCC aligns with the parent company's vision and strategy. Over time, maintain cultural consistency across both entities.",
      icon: <Lightbulb size={32} />
    },
    {
      title: "Complete the Paperwork",
      desc: "Handle formalities like the MoA, Articles of Association, and Directors ID to establish a solid legal foundation.",
      icon: <FileText size={32} />
    },
    {
      title: "Choose the Right Location",
      desc: "Select a city and neighborhood that aligns with your business strategy and offers easy access to employees and materials.",
      icon: <MapPin size={32} />
    },
    {
      title: "Standardize SOPs",
      desc: "Streamline operations by standardizing processes for hiring, procurement, and payments to foster transparency.",
      icon: <Settings size={32} />
    },
    {
      title: "Plan for Growth",
      desc: "Initially a process hub, your GCC can evolve into a center for innovation, spotting trends, and developing new business practices.",
      icon: <TrendingUp size={32} />
    },
    {
      title: "Hire Flexibly",
      desc: "Leverage India's talent pool by fostering an inclusive work culture. Offer perks like remote working to retain top talent.",
      icon: <Users size={32} />
    }
  ];

  const types = [
    {
      id: "01",
      title: "Shared Service Centers",
      desc: "Centralize and standardize key functions like finance, HR, and IT to improve efficiency and reduce costs across the parent organization.",
      icon: <Search size={24} />,
    },
    {
      id: "02",
      title: "R & D Centers",
      desc: "Innovation hubs dedicated to creating new products and technologies, keeping the parent organization at the competitive edge.",
      icon: <Microscope size={24} />,
    },
    {
      id: "03",
      title: "Knowledge Centers",
      desc: "Designed to facilitate remote information sharing, gathering, and disseminating expertise across global teams and geographies.",
      icon: <Database size={24} />,
    },
    {
      id: "04",
      title: "Innovation Centers",
      desc: "Dedicated to fostering creativity and collaboration, serving as incubators for new ideas and groundbreaking solutions.",
      icon: <Lightbulb size={24} />,
    },
    {
      id: "05",
      title: "Customer Service Centers",
      desc: "Provide comprehensive support to clients, ensuring high satisfaction and maintaining strong long-term customer relationships.",
      icon: <Headphones size={24} />,
    },
  ];

  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <section className="relative h-[90vh] w-full bg-black overflow-hidden">
        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          effect="fade"
          speed={1000}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className} custom-dot"></span>`;
            },
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="h-full w-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                className="relative h-full w-full flex items-center bg-cover bg-center transition-transform duration-[5000ms] scale-105"
                style={{ backgroundImage: `url(${slide.bg})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-0"></div>

                <div className="container mx-auto px-6 md:px-22 relative z-10">
                  <div className="max-w-3xl space-y-6">
                    <h1 className="text-4xl md:text-7xl font-bold text-[#f4f4f4] leading-tight">
                      {slide.title} <br />
                      <span className="text-[#b79662]">
                        {slide.highlight}
                      </span>
                    </h1>

                    <p className="text-[#b3b3b3] text-lg md:text-xl max-w-xl leading-relaxed border-l-4 border-[#b79662] pl-6">
                      {slide.desc}
                    </p>

                    <div className="pt-4">
                    
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Global Styles for Swiper (Allowed at top level) */}
        <style jsx global>{`
          .swiper-pagination {
            bottom: 40px !important;
            display: flex;
            justify-content: center;
            gap: 12px;
          }
          .custom-dot {
            width: 12px !important;
            height: 12px !important;
            background: transparent !important;
            border: 2px solid #f4f4f4 !important;
            opacity: 0.5 !important;
            border-radius: 50%;
            transition: all 0.4s ease;
            margin: 0 !important;
          }
          .swiper-pagination-bullet-active {
            opacity: 1 !important;
            background: #f4f4f4 !important;
            transform: scale(1.2);
            box-shadow: 0 0 10px rgba(204, 0, 0, 0.5);
          }
          .swiper-slide-active .transition-transform {
            transform: scale(1);
          }
        `}</style>
      </section>

      <section className="bg-[#111111] py-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* TOP SECTION: Advantage India */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white not-[]:  leading-tight">
              Global Capability Centers (GCC): <br />
              <span className="text-[#b79662]">Advantage India</span>
            </h2>
            <div className="w-20 h-1 bg-[#b79662]"></div>
            <p className="text-[#b3b3b3] leading-relaxed text-lg">
              India has solidified its position as a global hub for GCCs, with over 1,800 established centers contributing to a market size exceeding $46 billion. Hosting more than 50% of the world's GCCs, India offers unmatched advantages, including a vast talent pool and world-class infrastructure.
            </p>
            <p className="text-[#b3b3b3] leading-relaxed">
              Strategic R&D and business innovation are driving global firms to India as they seek to tap into this dynamic ecosystem for their next phase of growth.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-2xl overflow-hidden border border-[#b79662]/20"
          >
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
              alt="Modern Office" 
              className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          </motion.div>
        </div>

        {/* MIDDLE SECTION: Types of GCC Header */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-white  mb-4">
            Types of <span className="text-[#b79662]">Global Capability Center</span>
          </h3>
           <div className="w-20 h-1 bg-[#b79662] mb-6"></div>
          <p className="text-[#b3b3b3] max-w-2xl">
            India offers a diverse range of GCCs designed to enhance efficiency, drive innovation, and optimize operations:
          </p>
        </div>

        {/* BOTTOM SECTION: Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {types.map((type, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 bg-[#111111] border-l-2 border-white/5 hover:border-[#b79662] cursor-pointer transition-all duration-500 group"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-sm font-bold text-[#b79662]/40 group-hover:text-[#b79662] transition-colors">
                  {type.id}
                </span>
                <div className="text-[#b79662]">{type.icon}</div>
              </div>
              <h4 className="text-xl font-bold text-white mb-4 group-hover:text-[#b79662] transition-colors  tracking-wide">
                {type.title}
              </h4>
              <p className="text-sm text-[#b3b3b3] leading-relaxed group-hover:text-white/80 transition-colors">
                {type.desc}
              </p>
            </motion.div>
          ))}

          {/* Call to Action Card (Mirroring your quote box) */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="p-8 bg-[#b79662] text-black rounded-tr-[40px] flex flex-col justify-between cursor-pointer"
          >
            <p className="text-xl font-bold italic leading-tight">
              "You need extraordinary resources to deliver an exceptional solution. That's where India comes to the fore."
            </p>
            <button className="mt-8 flex items-center gap-2 font-bold  text-sm border-b-2 border-black w-fit pb-1 hover:gap-4 transition-all">
              Inquire Now <ArrowUpRight size={18} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>

      <section className="bg-[#ffffff] pt-16 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className=" mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#000]  tracking-tight">
            Steps in setting up  
            <span className="text-[#b79662]"> Global Capability Center (GCC)</span>
          </h2>
           <div className="w-24 h-1 bg-[#b79662] mx-auto mt-4 mb-10 rounded-full"></div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: idx * 0.1,
                ease: "easeOut" 
              }}
              className="group p-8 bg-[#141414] border border-white/5 rounded-br-[40px] hover:border-[#b79662]/40 transition-all duration-500 hover:scale-102 shadow-xl"
            >
              {/* Icon Container */}
              <div className="mb-6 inline-flex p-4 bg-white/5 rounded-2xl text-[#b79662] group-hover:bg-[#b79662] group-hover:text-black transition-all duration-300">
                {step.icon}
              </div>
              
              <h3 className="text-xl font-bold text-[#f4f4f4] mb-4 group-hover:text-[#b79662] transition-colors">
                {step.title}
              </h3>
              
              <p className="text-[#b3b3b3] leading-relaxed text-sm group-hover:text-[#f4f4f4] transition-colors">
                {step.desc}
              </p>
              
              {/* Decorative Animated Line */}
              <div className="mt-8 relative h-[1px] w-full bg-white/10 overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-0 bg-[#b79662] group-hover:w-full transition-all duration-700 ease-in-out"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

      <main className="bg-white font-sans selection:bg-[#b79662] selection:text-white pb-8 overflow-x-hidden">
        {/* SERVICES GRID */}
        <h2 className="text-3xl text-center md:text-4xl mt-16 font-bold text-[#000]">
          Our <span className="text-[#b79662]">Services</span>
        </h2>
        <div className="w-24 h-1 bg-[#b79662] mx-auto mt-4 mb-4 rounded-full"></div>

        {/* Replaced .mobile-margin with Tailwind responsive margins */}
        <section className="max-w-7xl rounded-lg mx-auto md:py-8 py-8 px-6 bg-white xl:mx-auto max-xl:mx-[35px] max-md:mx-[15px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.15,
                  ease: "easeOut",
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
                  <h3 className="text-2xl font-bold text-[#b79662] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[#b79662] text-xs font-bold tracking-widest mb-4">
                    {service.subtitle}
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.desc}
                  </p>
                  <div className="mt-auto">
                    <button className="flex items-center gap-2 text-[#b79662] font-bold text-sm group/btn">
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

        {/* PROCESS SECTION */}
        <section
          className="relative bg-cover bg-center py-10 px-6 overflow-hidden bg-fixed"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&q=80&w=1974)`,
          }}
        >
          <div className="absolute inset-0 bg-[#262626] opacity-90"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Our Winning <span className="text-[#b79662]">Strategy</span>
              </h2>
              <div className="w-24 h-1 bg-[#b79662] mx-auto mt-4 mb-4 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discover Insights",
                  desc: "We analyze market trends and internal performance metrics to discover opportunities which enable businesses to achieve sustainable growth and develop scalable business operations.",
                  image:
                    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600",
                },
                {
                  step: "02",
                  title: "Map Strategy",
                  desc: "Concise, data-based strategies are developed to ensure business objectives align with market plans and competitive advantage.",
                  image:
                    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600",
                },
                {
                  step: "03",
                  title: "Execute Efficiently",
                  desc: "Disciplined execution converts strategy into real results through targeted action, accountability, and performance-driven implementation.",
                  image:
                    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=600",
                },
                {
                  step: "04",
                  title: "Lead the Market",
                  desc: "Businesses achieve category leadership by sustaining momentum and consistently delivering measurable value.",
                  image:
                    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600",
                },
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  </div>
                  <div className="p-6 flex-grow">
                    <div className="text-4xl font-bold text-[#b79662] mb-3">
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

        {/* CHALLENGES SECTION */}
        <h2 className="text-3xl text-center md:text-4xl mt-10 font-bold text-[#000]">
          Market <span className="text-[#b79662]">Diagnostics</span>
        </h2>
        <div className="w-24 h-1 bg-[#b79662] mx-auto mt-4 mb-4 rounded-full"></div>

        {/* Replaced .mobile-margin with Tailwind responsive margins */}
        <section className="max-w-7xl mx-auto py-8 px-6 xl:mx-auto max-xl:mx-[35px] max-md:mx-[15px]">
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
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-[#b79662]">
                    {item.title}
                  </h3>
                  <p className="text-[#b79662] text-xs font-bold tracking-widest mb-4 ">
                    {item.subtitle}
                  </p>
                  <p className="text-gray-600 leading-relaxed text-sm mb-8">
                    {item.desc}
                  </p>
                  <div className="mt-auto">
                    <button className="flex items-center gap-2 text-[#b79662] font-bold text-sm group/btn">
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
      </main>
      <Footer />
    </>
  );
};

export default HeroSlider;
