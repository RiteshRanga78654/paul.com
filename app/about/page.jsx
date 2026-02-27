"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Plus,
  Minus,
  ShieldCheck,
  Clock,
  CircleDollarSign,
  Eye,
  Users,
  Lightbulb,
  FileText,
  Building2,
} from "lucide-react"; // npm install lucide-react
import Footer from "../layout/Footer";
import { ArrowUpRight, Check } from "lucide-react";
import Header from "../layout/Header";

// --- Animated Counter Logic Component ---
const CountUp = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 },
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    // Extract numbers from strings like "27+" or "95%"
    const endValue = parseInt(end.replace(/\D/g, ""));
    const increment = endValue / (duration / 16); // 16ms is roughly 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [hasStarted, end, duration]);

  return (
    <span ref={elementRef}>
      {count}
      {end.replace(/[0-9]/g, "")}
    </span>
  );
};

const imagesRow1 = [
  "/assets/about/Farmhouses-Retreat-Villas.jpg", // Replace with your actual paths
  "/assets/about/Industrial-Space.jpg",
  "/assets/about/Premium-Bungalows.jpg",
  "/assets/about/1967.jpg",
];

const imagesRow2 = [
  "/assets/about/1967.jpg",
  "/assets/about/Premium-Bungalows.jpg",
  "/assets/about/Industrial-Space.jpg",
  "/assets/about/Farmhouses-Retreat-Villas.jpg",
];

const logos = [
  { id: 1, src: "/assets/images/Ireed-Logo (1).png", alt: "Essentia" },
  { id: 2, src: "/assets/images/ireo.png", alt: "ZDS" },
  { id: 3, src: "/assets/images/m3m.png", alt: "Hiren Patel Architects" },
  {
    id: 4,
    src: "/assets/images/urban-style-new.png",
    alt: "The Grid Architects",
  },
];

const faqs = [
  {
    question: "What Is Project Management Consultancy (PMC) In Construction?",
    answer:
      "PMC in construction refers to the professional management of a project from planning to handover. A PMC company ensures timelines, budgets, quality, materials, and coordination across contractors and consultants are handled under one structured system.",
  },
  {
    question: "Why Do I Need A PMC For My Construction Project?",
    answer:
      "A PMC ensures that your project stays on track, minimizing delays and cost overruns while maintaining high quality standards through professional oversight.",
  },
  {
    question: "How Does Metamorph Enterprise LLP Manage Project Timelines?",
    answer:
      "We use advanced scheduling tools and daily monitoring to ensure every milestone is met on time, coordinating closely with all stakeholders.",
  },
  {
    question: "What Types Of Projects Do You Manage Under PMC Services?",
    answer:
      "We manage a wide range of projects including residential complexes, commercial buildings, industrial facilities, and high-end interior fit-outs.",
  },
  {
    question: "How Does PMC Help In Controlling Construction Costs?",
    answer:
      "By optimizing resource allocation, vetting vendor quotes, and preventing wastage, we ensure the project remains within the pre-defined budget.",
  },
  {
    question: "Do You Provide Updates During The Project?",
    answer:
      "Yes, we provide structured updates, photos, progress reports, and milestone tracking.",
  },
];

const features = [
  {
    title: "One-Window Control For The Entire Project",
    desc: "No more coordinating with multiple consultants. We align architects, vendors, consultant, and site teams under one structured PMC system.",
    icon: ShieldCheck,
  },
  {
    title: "On-Time Delivery With Zero Delays",
    desc: "Every task is planned, tracked, and monitored through defined project timelines to ensure smooth, timely execution.",
    icon: Clock,
  },
  {
    title: "Transparent Cost Control",
    desc: "Every BOQ, bill, and material entry is verified to avoid overruns. You always know where every rupee goes.",
    icon: CircleDollarSign,
  },
  {
    title: "Daily Supervision & Quality Monitoring",
    desc: "Experienced site managers ensure workmanship meets high construction standards—no compromises.",
    icon: Eye,
  },
  {
    title: "Seamless Coordination Across All Stakeholders",
    desc: "We ensure architects, interior teams, MEP consultants, and contractors work in sync for a hassle-free experience.",
    icon: Users,
  },
  {
    title: "Expert-Led Decision Making",
    desc: "With decades of combined experience, our PMC team brings clarity, technical judgement, and complete accountability.",
    icon: Lightbulb,
  },
  {
    title: "100% Client-Focused Reporting",
    desc: "You receive structured updates, photos, progress reports, and milestone tracking—no surprises.",
    icon: FileText,
  },
  {
    title: "Experience Across Residential & Commercial Projects",
    desc: "From premium bungalows to farmhouses, commercial spaces, and industrial units, our PMC approach adapts to every project scale.",
    icon: Building2,
  },
];

const steps = [
  {
    title: "Planning & Space Optimization",
    desc: "Smart planning that maximizes every square foot without confusion or wastage",
    icon: 1,
  },
  {
    title: "Cost Efficiency",
    desc: "Budgets are monitored closely so you know where every rupee goes.",
    icon: 2,
  },
  {
    title: "Flexible Execution",
    desc: "Adapting to design updates and site realities while staying within deadlines.",
    icon: 3,
  },
  {
    title: "Handover",
    desc: "Before handing over, we check every detail finishes, fittings, and quality. You move in with confidence, not stress.",
    icon: 4,
  },
];

const projects = [
  {
    title: "Premium Bungalows",
    desc: "High-end residential projects where attention to detail and finishing quality are top priorities.",
    img: "/assets/about/Premium-Bungalows.jpg",
  }, // Replace with real image path
  {
    title: "Farmhouses ",
    desc: "Large-scale lifestyle projects with landscaping, utilities, and multiple service integrations.",
    img: "/assets/about/Farmhouses-Retreat-Villas.jpg",
  }, // Replace with real image path
  {
    title: "Commercial Projects",
    desc: "Offices, cafés, showrooms, and retail spaces requiring fast execution and functional planning.",
    img: "/assets/about/1967.jpg",
  }, // Replace with real image path
  {
    title: "Industrial Spaces",
    desc: "Warehouses, manufacturing units, and industrial sheds with technical specifications and strict compliance.",
    img: "/assets/about/Industrial-Space.jpg",
  }, // Replace with real image path
];

const MetamorphServicesPage = () => {
  const duplicatedLogos = [...logos, ...logos, ...logos];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % logos.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      number: "27+",
      label: "Years Experience",
      desc: "Improving homes with expert craftsmanship for years",
    },
    {
      number: "25+",
      label: "Projects Completed",
      desc: "Over 25+ successful projects delivered with quality and care across India.",
    },
    {
      number: "20+",
      label: "Skilled Experts",
      desc: "In-House team of professionals, Subject matter Experts and Associates",
    },
    {
      number: "95%",
      label: "Client Satisfaction",
      desc: "Our Process for Stress-Free Project Delivery",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const containerRef = useRef(null);

  // Track scroll progress of this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Row 1 moves Right to Left
  const x1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  // Row 2 moves Left to Right
  const x2 = useTransform(scrollYProgress, [0, 1], [-200, 0]);

  return (
    <>
      <Header />
      <div className="bg-white text-[#1e1e1e]">
        {/* {hero section} */}

        <section className="relative min-h-[90vh] w-full flex items-center pt-10 pb-12 px-6 sm:px-8 md:px-16 overflow-hidden">
          {/* Background with Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="/assets/about/Farmhouses-Retreat-Villas.jpg" // Replace with your actual hero image path
              alt="Modern Architecture"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"></div>
          </div>

          <div className="max-w-7xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-block px-4 py-1 rounded-full border border-[#b79662] bg-[#b79662]/10">
                <span className="text-[#b79662] text-sm font-semibold tracking-wider uppercase">
                  • 27+ Years of Experience in PMC
                </span>
              </div>

              <h1 className="text-4xl md:text-4xl font-extrabold text-white leading-tight">
                Professional{" "}
                <span className="text-[#b79662]">
                  Project Management Consultancy
                </span>{" "}
                For Construction Projects
              </h1>

              <p className="text-[#4c4949] text-lg md:text-xl max-w-xl leading-relaxed">
                Managing a construction project is more than coordinating labour
                or completing interiors; it's about ensuring every stage, from
                planning to handover, follows a structured, disciplined path.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "End-to-End Project Management",
                  "Vendor & Contractor Coordination",
                  "Budget Control & Quality Audits",
                  "Single-Point Accountability",
                ].map((point, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <div className="bg-[#b79662] rounded-sm p-0.5">
                      <Check size={14} className="text-white" strokeWidth={3} />
                    </div>
                    <span className="text-white font-medium">{point}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <button className="bg-[#b79662] hover:bg-transparent text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all">
                  Get Free PMC Consultation <ArrowUpRight size={20} />
                </button>
                <button className="border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all">
                  Call Us On +91 9925100697{" "}
                  <ArrowUpRight size={20} className="text-[#b79662]" />
                </button>
              </div>
            </div>

            {/* Right Form */}
            <div className="flex justify-center lg:justify-end">
              <div className="bg-white rounded-3xl p-8 md:p-10 w-full max-w-md shadow-2xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    placeholder="Enter Your Full Name"
                    className="w-full bg-[#f5f5f5] border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-[#b79662] outline-none text-black"
                  />
                  <input
                    type="text"
                    placeholder="Enter Mobile Number"
                    className="w-full bg-[#f5f5f5] border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-[#b79662] outline-none text-black"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <input
                    type="email"
                    placeholder="Enter Email Address"
                    className="w-full bg-[#f5f5f5] border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-[#b79662] outline-none text-black"
                  />
                  <input
                    type="text"
                    placeholder="City / Project Location"
                    className="w-full bg-[#f5f5f5] border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-[#b79662] outline-none text-black"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <select className="w-full bg-[#f5f5f5] border-none rounded-xl p-4 text-sm text-gray-500 focus:ring-2 focus:ring-[#b79662] outline-none appearance-none">
                    <option>—Please Choose An Option—</option>
                  </select>
                  <select className="w-full bg-[#f5f5f5] border-none rounded-xl p-4 text-sm text-gray-500 focus:ring-2 focus:ring-[#b79662] outline-none appearance-none">
                    <option>—Please Choose An Option—</option>
                  </select>
                </div>
                <textarea
                  rows="4"
                  placeholder="Example: Independent Villa Construction, Looking For PMC To Manage Contractors, Timelines, And Quality."
                  className="w-full bg-[#f5f5f5] border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-[#b79662] outline-none text-black mb-6"
                ></textarea>

                <button className="w-full bg-[#b79662]  text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-orange-500/20 mb-6">
                  Submit
                </button>

                <div className="space-y-3">
                  {[
                    "Expert PMC Guidance",
                    "Structured Project Evaluation",
                    "Dedicated PMC On Every Project",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <Check
                        size={16}
                        className="text-[#b79662]"
                        strokeWidth={3}
                      />
                      <span className="text-gray-700 text-sm font-semibold">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Counter */}
        <section className="bg-[#1e1e1e] py-10 px-6 sm:px-8 md:px-16 border-b border-[#4c4949]/20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col space-y-4 group">
                  {/* The Count-Up Number */}
                  <div className="text-6xl md:text-5xl font-bold text-white tracking-tighter transition-colors duration-300 group-hover:text-[#b79662]">
                    <CountUp end={stat.number} />
                  </div>

                  {/* Theme Divider Line */}
                  <div className="w-16 h-[2px] bg-[#b79662]"></div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white uppercase tracking-wide">
                      {stat.label}
                    </h3>
                    <p className="text-[#4c4949] text-sm leading-relaxed max-w-[260px]">
                      {stat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* marquee */}

        <section
          ref={containerRef}
          className="bg-white py-20 overflow-hidden flex flex-col gap-6"
        >
          {/* First Row - Moving Left */}
          <motion.div
            style={{ x: x1 }}
            className="flex gap-6 whitespace-nowrap"
          >
            {[...imagesRow1, ...imagesRow1].map((src, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[350px] h-[250px] md:w-[450px] md:h-[300px] overflow-hidden rounded-[10px] shadow-xl"
              >
                <img
                  src={src}
                  alt="Project Showcase"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </motion.div>

          {/* Second Row - Moving Right */}
          <motion.div
            style={{ x: x2 }}
            className="flex gap-6 whitespace-nowrap"
          >
            {[...imagesRow2, ...imagesRow2].map((src, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[350px] h-[250px] md:w-[450px] md:h-[300px] overflow-hidden rounded-[10px] shadow-xl"
              >
                <img
                  src={src}
                  alt="Project Showcase"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </motion.div>
        </section>

        {/* section image */}

        <section className="bg-white py-20 px-6 sm:px-8 md:px-16 overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left Side: Image */}
            <div className="w-full lg:w-1/2">
              <div className="rounded-[8px] overflow-hidden shadow-2xl relative group">
                <img
                  src="/assets/images/new-bhaswal-paul.jpg.jpeg" // Replace with your actual image path
                  alt="Metamorph PMC Team"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
            </div>

            {/* Right Side: Content */}
            <div className="w-full lg:w-1/2 space-y-6 text-[#1e1e1e]">
              {/* Tagline */}
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#ea580c]"></div>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                  About The Service
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-4xl md:text-4xl font-extrabold leading-tight tracking-tight">
                Construction And Residential{" "}
                <span className="text-[#b79662]">Project Management</span>{" "}
                Services
              </h2>

              {/* Lead Paragraph */}
              <p className="text-gray-600 text-lg leading-relaxed">
                Managing a construction project is more than coordinating labour
                or completing interiors—it's about ensuring every stage, from
                planning to handover, follows a structured, disciplined path.
                That's exactly what Project Management Consultancy (PMC)
                delivers.
              </p>

              {/* Detailed Description */}
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  At Metamorph Enterprise LLP, we provide professional project
                  management consultancy services that bring clarity, control,
                  and accountability to your construction project. As a trusted
                  PMC for your project, we coordinate with architects,
                  contractors, consultants, and vendors to ensure smooth
                  execution.
                </p>
                {/* <p>
              Budgets, timelines, materials, and on-site progress are monitored under one system so you never have to chase anyone.
            </p>
            <p className="font-medium italic">
              The result: projects that stay on schedule, within budget, and are delivered exactly as envisioned.
            </p> */}
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <button className="group relative flex items-center gap-3 border-2 border-[#b79662] text-[#b79662] px-8 py-4 rounded-full font-bold transition-all duration-300 hover:bg-[#b79662] hover:text-white">
                  Book Free PMC Consultation
                  <div className="bg-[#b79662] rounded-full p-1 text-white transition-all duration-300 group-hover:bg-white group-hover:text-[#b79662]">
                    <ArrowUpRight size={18} />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* slider */}

        <section className="bg-white py-16 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
                 <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
              Proudly{" "}
              <span className="text-[#b79662]">
                Associated with
              </span>
            </h2>
          </div>

          {/* The Wrapper for the infinite scroll */}
          <div className="relative flex overflow-hidden">
            <motion.div
              className="flex flex-nowrap gap-8"
              animate={{
                x: ["0%", "-33.33%"], // Moves by one full set of logos
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25, // Adjust speed here (higher = slower)
                  ease: "linear",
                },
              }}
              style={{ width: "fit-content" }}
            >
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-40 h-40 md:w-56 md:h-56  rounded-[10px] p-8 flex items-center justify-center border border-gray-100 shadow-sm"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-w-full max-h-full object-contain transition-all duration-300"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dot Indicators (Purely Visual for this infinite version) */}
          <div className="flex justify-center items-center gap-2 mt-12">
            <div className="w-6 h-2 bg-[#1e1e1e] rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          </div>
        </section>

        {/* 1. Our PMC Workflow Section */}
        <section className="py-20 px-6 sm:px-8 md:px-16 border-b border-[#4c4949]/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-[#b79662] tracking-wide">
                Our PMC Focus Areas
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mt-2">
                Our PMC Workflow{" "}
                <span className="text-[#b79662]">(Step-By-Step Process)</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#4c4949] p-8 rounded-[10px] border border-[#4c4949]/20 hover:border-[#b79662]/50 transition-all group"
                >
                  <div className="mb-6 inline-block px-5 py-3 rounded-full bg-[#1e1e1e] text-2xl md:text-4xl font-extrabold text-[#b79662] group-hover:bg-[#b79662]/10 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-4 leading-tight group-hover:text-[#b79662] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#ffffff] text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. What We Manage Section */}
        <section className="py-20 px-6 sm:px-8 md:px-16 border-b border-[#4c4949]/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
              <span className="text-[#b79662]">What We Manage</span> Under Our
              PMC Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {projects.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#4c4949] rounded-[10px] border border-[#4c4949]/20 overflow-hidden hover:border-[#b79662]/50 transition-all group"
                >
                  <div className="h-56 w-full relative">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover p-3 rounded-[10px]"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-white font-bold text-lg mb-4 leading-tight group-hover:text-[#b79662] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-white text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Why Choose Metamorph Section */}
        <section className="py-20 px-6 sm:px-8 md:px-16 border-b border-[#4c4949]/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
              Why Choose Metamorph As Your{" "}
              <span className="text-[#b79662]">PMC Partner?</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#4c4949] p-8 rounded-[10px] border border-[#4c4949]/20 hover:border-[#b79662]/50 transition-all group"
                >
                  <div className="mb-6 inline-block p-3 rounded-lg bg-[#1e1e1e] group-hover:bg-[#b79662]/10 transition-colors">
                    <item.icon
                      className="text-[#b79662]"
                      size={32}
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-4 leading-tight group-hover:text-[#b79662] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. FAQ Section */}
        <section className="py-20 px-6 sm:px-8 md:px-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
              Quick And Clear{" "}
              <span className="text-[#b79662]">
                Answers To Your Key Questions
              </span>
            </h2>
            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-[#4c4949]/30 pb-4">
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="w-full flex justify-between items-center py-6 text-left group"
                  >
                    <span
                      className={`text-lg md:text-xl font-medium transition-colors ${openIndex === index ? "text-[#b79662]" : "text-black group-hover:text-[#b79662]"}`}
                    >
                      {faq.question}
                    </span>
                    {openIndex === index ? (
                      <Minus className="text-[#b79662]" size={20} />
                    ) : (
                      <Plus className="text-[#4c4949]" size={20} />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-56 pb-6" : "max-h-0"}`}
                  >
                    <p className="text-[#4c4949] text-base md:text-lg leading-relaxed max-w-5xl ml-10">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default MetamorphServicesPage;
