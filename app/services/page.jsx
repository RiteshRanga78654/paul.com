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
  Users,
} from "lucide-react";

import { Search, Microscope, Database, Headphones } from "lucide-react";

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
      image: "/assets/services/ireed56.png",
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
      image: "/assets/services/image.png",
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
      title: "Macro Economic Diagnostics",
      bullets: [
        "GDP growth and economic expansion",
        "Urbanization rate",
        "Disposable income growth",
        "Inflation and interest rates",
        "Employment generation in cities",
      ],
      desc: "This evaluates the economic environment affecting real estate demand. The key indicators are:",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "02",
      title: "Demand Diagnostics",
      bullets :[
        "Housing sales volume",
        "Office leasing demand",
        "Rental growth",
        "Absorption rate",
        "Buyer profile (end-user vs investor)",

      ],
      desc: "This measures buyer demand across residential, commercial, and mixed-use real estate. The key indicators:",
      image:
        "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "03",
      title: "Supply Diagnostics",
      bullets :[
        "New project launches",
        "Inventory levels",
        "Construction pipeline",
        "Land availability",
        "Redevelopment activity",

      ],
      desc: "This evaluates current and future supply in the market. The key indicators are:",
      image:
        "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "04",
      title: "Price Diagnostics",
      bullets :[
        "Price per square foot",
        "Price growth trends",
        "Rental yields",
        "Price-to-income ratio",

      ],
      desc: "Analyzes capital values and rental trends. The key indicators are:",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    },
  ];

  const slides = [
    {
      id: 3,
      title: "Future Ready Consultancy",
      highlight: "With Unmatched Excellence",
      desc: "Expert guidance to navigate the complex landscape of global business operations.",
      bg: "/assets/BPimages/DSC02419.JPG",
    },
  ];

  const steps = [
    {
      title: "Vision",
      goldtitle: "IREED",
      desc: "To build a future-ready Indian real estate ecosystem by empowering developers, professionals, and investors through knowledge, skill development, innovation, and strategic collaboration.",
      icon: <Lightbulb size={32} />,
    },
    {
      title: "Of Training",
      goldtitle: "Purpose",
      desc: "The purpose is to create a skilled, professional, and industry-ready workforce for the rapidly growing Indian real estate sector to bridge the gap between academia and the Indian real estate sector. ",
      icon: <FileText size={32} />,
    },
    {
      title: "Geographic Spread",
      goldtitle: "IREED's",
      desc: "The primary institutional base of IREED India is located in Gurugram, which serves as the national hub for research, curriculum development, and corporate training and positioned itself as a pan-India academic platform.",
      icon: <MapPin size={32} />,
    },
    {
      title: "India SOP",
      goldtitle: "IREED",
      desc: "IREED India SOP refers to a structured operational framework used to maintain quality, consistency, and efficiency in all its activities—such as education, PMC, corporate training, and event management.",
      icon: <Settings size={32} />,
    },
    {
      title: "Plan for Growth",
      goldtitle: "IREED",
      desc: "IREED India plan of growth is designed around building a national ecosystem for real estate education, industry training, and developer support. The  growth strategy focuses on expanding skill development across India.",
      icon: <TrendingUp size={32} />,
    },
    {
      title: "Hire Flexibility",
      goldtitle: "IREED India",
      desc: "Hire Flexibility refers to a strategic workforce approach where real estate companies can hire trained professionals from IREED India in flexible formats based on their project needs, duration, and specialization.",
      icon: <Users size={32} />,
    },
  ];

  const types = [
    {
      id: "01",
      title: `MBA in Business Analytics & Marketing Specialization in Real Estate (24 Months)`,
      desc: "This MBA program focuses on developing future leaders in the real estate industry through business analytics, marketing strategies, and property market understanding.",
      icon: <Search size={24} />,
    },
    {
      id: "02",
      title: "PGDREM – PG Diploma in Real Estate Management (12 Months)",
      desc: "This program is designed specifically for graduates who want guaranteed career entry into the real estate industry with practical training and placement assistance.",
      icon: <Microscope size={24} />,
    },
    {
      id: "03",
      title: `REAP – Real Estate Advanced Program
(8 Weeks)`,
      desc: "REAP is a practical program that teaches advanced knowledge of residential and commercial real estate markets along with project development and marketing strategies.",
      icon: <Database size={24} />,
    },
    {
      id: "04",
      title: "REMAP – Real Estate Management Advancement Program (12 Weeks)",
      desc: "REMAP is designed for those who want to become entrepreneurs or senior managers in real estate development and management.",
      icon: <Lightbulb size={24} />,
    },
    {
      id: "05",
      title: "REACT – Real Estate Advanced Corporate Training",
      desc: "REACT is a structured corporate training module created by IREED India to help real estate companies strengthen their sales, marketing, strategy, and operational efficiency.",
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
                    <h1 className="text-3xl md:text-4xl font-bold text-[#f4f4f4] leading-tight">
                      {slide.title} <br />
                      <span className="text-[#b79662]">{slide.highlight}</span>
                    </h1>

                    <p className="text-[#b3b3b3] text-lg md:text-xl max-w-xl leading-relaxed border-l-4 border-[#b79662] pl-6">
                      {slide.desc}
                    </p>

                    <div className="pt-4"></div>
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
                IREED India’s Centre of Excellence for MBA in
                <span className="text-[#b79662]">
                  {" "}
                  Business Analytics & Real Estate Management
                </span>
              </h2>
              <div className="w-20 h-1 bg-[#b79662]"></div>
              <p className="text-[#b3b3b3] leading-relaxed text-lg">
                IREED India’s Centre of Excellence for MBA in Real Estate is a
                forward-looking initiative designed to transform and empower a
                skilled workforce for the rapidly expanding Indian real estate
                sector. With the real estate industry evolving across metro
                cities as well as emerging Tier-2 and Tier-3 markets, the need
                for professionally trained and industry-ready talent has never
                been greater.
              </p>
              <p className="text-[#b3b3b3] leading-relaxed">
                This Centre of Excellence aims to bridge the gap between
                academic knowledge and real-world industry practice by
                integrating structured management education with practical
                exposure.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-2xl overflow-hidden border border-[#b79662]/20"
            >
              <img
                src="/assets/services/OIP.webp"
                alt="Modern Office"
                className="w-full h-full object-cover  brightness-100 hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            </motion.div>
          </div>

          {/* MIDDLE SECTION: Types of GCC Header */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-[#b79660]  mb-4">
              IREED India Offers Several Career Oriented Courses
            </h3>
            <div className="w-20 h-1 bg-[#b79662] mb-6"></div>
            <p className="text-[#b3b3b3] max-w-2xl">
              IREED India courses are specially designed for graduate students
              who want to build a professional career in the real estate
              industry.
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
                  {/* <div className="text-[#b79662]">{type.icon}</div> */}
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
              <p className="text-xl font-bold  leading-tight">
                REDMI – Real Estate Digital Marketing Intelligence (Upto 9
                Months)
              </p>
              <p>
                This program focuses on digital marketing for the real estate
                sector, helping graduates learn how developers generate leads
                and promote projects online.
              </p>
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
              <span className="text-[#b79662]">
                {" "}
                 IREED Center of Excellence (COE)
              </span>
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
                  ease: "easeOut",
                }}
                className="group p-8 bg-[#141414] border border-white/5 rounded-br-[40px] hover:border-[#b79662]/40 transition-all duration-500 hover:scale-102 shadow-xl"
              >
                {/* Icon Container */}
                <div className="mb-6 inline-flex p-4 bg-white/5 rounded-2xl text-[#b79662] group-hover:bg-[#b79662] group-hover:text-black transition-all duration-300">
                  {step.icon}
                </div>

                <h3 className="text-xl font-bold text-[#f4f4f4] mb-4  transition-colors">
                  <span className="text-[#b79660]">{step.goldtitle}</span>{" "}
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
                IREED India’s{" "}
                <span className="text-[#b79662]">Winning Strategy</span>
              </h2>
              <div className="w-24 h-1 bg-[#b79662] mx-auto mt-4 mb-4 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Skill Development",
                  desc: "IREED focuses on developing a professional workforce for India’s fast-growing real estate sector. Its training programs aim to prepare graduates and professionals with industry-relevant knowledge and practical skills.",
                  image:
                    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600",
                },
                {
                  step: "02",
                  title: "Industry Aligned Education Model",
                  desc: `Unlike conventional academic programs, IREED offers industry-aligned courses such as:`,
                  bullets: [
                    "MBA in Real Estate Management",
                    "PG Diploma in Real Estate Management",
                    "Corporate training programs (REACT)",
                    "Real Estate Advance Program (REAP)",
                    "Real Estate Digital Marketing Intelligence (REDMI)",
                  ],
                  image:
                    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600",
                },
                {
                  step: "03",
                  title: "Practical Learning & Industry Exposure",
                  desc: `IREED emphasizes experiential learning, including:`,
                  bullets: [
                    "Real estate project site visits",
                    "Industry case studies",
                    "Mentorship by real estate professionals",
                    "Practical assignments and workshops",
                    "Graduates become job-ready from day one",
                    "Professionals gain real-world decision-making capability",
                  ],
                  image:
                    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=600",
                },
                {
                  step: "04",
                  title: "Discover IREED India Market Insights",
                  desc: "We analyze market trends and internal performance metrics to discover opportunities which enable businesses to achieve sustainable growth and develop scalable business operations.",
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
                    <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line mb-3">
                      {item.desc}
                    </p>

                    {/* The Fix: Check if bullets exist before mapping */}
                    {item.bullets && (
                      <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600 marker:text-[#b79662]">
                        {item.bullets.map((bullet, index) => (
                          <li key={index}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CHALLENGES SECTION */}
        <h2 className="text-3xl text-center md:text-4xl mt-10 font-bold text-[#000]">
          IREED India’s <span className="text-[#b79662]">Market Diagnostics</span>
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

                  <p className="text-gray-600 leading-relaxed text-sm mb-8">
                    {item.desc}
                  </p>

                  {item.bullets && (
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600 marker:text-[#b79662]">
                      {item.bullets.map((bullet, index) => (
                        <li key={index}>{bullet}</li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-auto"></div>
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
