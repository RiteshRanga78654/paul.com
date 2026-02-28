"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { ArrowRight } from "lucide-react";
import TestimonialSlider from "../components/TestimonialSlider";

// --- 1. CountUp Animation Logic (The Missing Part) ---
const CountUp = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHasStarted(true);
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
    const increment = endValue / (duration / 16);

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

// --- 2. Infinite Scrolling Row Component ---
const ScrollingRow = ({ images, direction = "left", duration = 30 }) => {
  const duplicatedImages = [...images, ...images];
  const isLeftToRight = direction === "right";

  return (
    <div className="flex overflow-hidden w-full select-none">
      <motion.div
        className="flex gap-4 md:gap-6 pr-4 md:pr-6"
        animate={{
          x: isLeftToRight ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          duration: duration,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {duplicatedImages.map((src, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-[280px] h-[180px] md:w-[350px] md:h-[200px] overflow-hidden border border-[#4c4949]/20 rounded-xl"
          >
            <img
              src={src}
              alt="Work Gallery"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const Page = () => {
  const serviceBoxes = [
    {
      title: "Event",
      desc: "We create amazing occasion and entertainment events through the extraordinary event design, planning & production. Rated #1 event management company in Mumbai.",
      img: "/assets/paras (6).jpg",
    },
    {
      title: "Brand Activation",
      desc: "We proudly presents its very own BTL segment ONE ON ONE that involves the use of subtle marketing techniques to get the product right to the consumers.",
      img: "/assets/paras (6).jpg",
    },
    {
      title: "Exhibition",
      desc: "Exhibitions are major events for any company & we fully understand the need for a return on investment. Every exhibition stall is designed and constructed by experts.",
      img: "/assets/paras (6).jpg",
    },
  ];

  const partners = [
    { name: "Maruti Suzuki", logo: "/assets/paras (6).jpg" },
    { name: "Lupin", logo: "/assets/paras (6).jpg" },
    { name: "Kanakia", logo: "/assets/paras (6).jpg" },
    { name: "IvyCap", logo: "/assets/paras (6).jpg" },
    { name: "IndianOil", logo: "/assets/paras (6).jpg" },
    { name: "Hyundai", logo: "/assets/paras (6).jpg" },
    { name: "Aditya Birla", logo: "/assets/paras (6).jpg" },
  ];

  const workImages = [
    "/assets/paras (6).jpg",
    "/assets/paras (6).jpg",
    "/assets/paras (6).jpg",
    "/assets/paras (6).jpg",
    "/assets/paras (6).jpg",
    "/assets/paras (6).jpg",
    "/assets/paras (6).jpg",
    "/assets/paras (6).jpg",
    "/assets/paras (6).jpg",
  ];

  const stats = [
    {
      number: "200+",
      label: "CORPORATE CLIENTS",
      desc: "Improving homes with expert craftsmanship for years",
    },
    {
      number: "2000+",
      label: "EVENTS",
      desc: "Over 25+ successful projects delivered with quality and care across India.",
    },
    {
      number: "4000+",
      label: "EXHIBITIONS",
      desc: "In-House team of professionals, Subject matter Experts and Associates",
    },
    {
      number: "1000+",
      label: "ACTIVATIONS",
      desc: "Our Process for Stress-Free Project Delivery",
    },
  ];

  return (
    <>
      <Header />

      {/* 1. Hero Video Section */}
      <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#ffffff]">
        <div className="absolute inset-0">
          <div className="relative w-full h-full overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/assets/video/slider-video.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        </div>
      </section>

      {/* 2. Overlapping Service Boxes */}
      <section className="relative z-10 px-6 md:px-16 -mt-32 md:-mt-28 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceBoxes.map((box, index) => (
              <div
                key={index}
                className="relative h-[400px] overflow-hidden group rounded-2xl shadow-xl"
              >
                <div className="absolute inset-0">
                  <img
                    src={box.img}
                    alt={box.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-all duration-500"></div>
                </div>
                <div className="relative h-full p-8 flex flex-col justify-end">
                  <h3 className="text-3xl font-bold text-[#b79662] mb-4 border-b-2 border-[#b79662] w-fit pb-1">
                    {box.title}
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed mb-6">
                    {box.desc}
                  </p>
                  <button className="text-white font-bold text-sm w-fit border-b border-white hover:text-[#b79662] hover:border-[#b79662] transition-all">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Craftworld Events Content */}
      <section className="bg-[#ffffff] text-[#1e1e1e] py-20 px-6 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-24">
            <div className="space-y-8">
              <div className="space-y-2">
                <span className="text-[#b79662] text-sm font-bold tracking-[0.2em] uppercase">
                  Craftworld Events
                </span>
                <h1 className="text-4xl md:text-4xl font-bold leading-tight">
                  Corporate Event Management Company in{" "}
                  <span className="text-[#b79662]">
                    Mumbai – Trusted by Over 200+ Brands
                  </span>
                </h1>
              </div>
              <p className="text-[#4c4949] text-lg leading-relaxed max-w-2xl">
                We are nationally recognized event planning & organising company
                based in Mumbai. We started with a purpose to provide one stop
                solutions for all your Event-related worries. Craftworld Events
                company specialize in corporate events management, BTL
                activation.
              </p>
              <button className="group flex items-center gap-3 border border-[#4c4949] px-8 py-4 rounded-full text-[#1e1e1e] font-bold hover:bg-[#b79662] hover:border-[#b79662] transition-all duration-300">
                View More
                <ArrowRight
                  className="group-hover:translate-x-2 transition-transform"
                  size={20}
                />
              </button>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="/assets/paras (6).jpg"
                    className="rounded-2xl w-full h-64 object-cover border border-[#4c4949]/20"
                    alt="Event"
                  />
                  <img
                    src="/assets/paras (6).jpg"
                    className="rounded-2xl w-full h-48 object-cover border border-[#4c4949]/20"
                    alt="Event"
                  />
                </div>
                <div className="pt-12 space-y-4">
                  <img
                    src="/assets/paras (6).jpg"
                    className="rounded-2xl w-full h-48 object-cover border border-[#4c4949]/20"
                    alt="Event"
                  />
                  <img
                    src="/assets/paras (6).jpg"
                    className="rounded-2xl w-full h-64 object-cover border border-[#4c4949]/20"
                    alt="Event"
                  />
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1e1e1e] border-4 border-[#b79662] w-32 h-32 rounded-full flex flex-col items-center justify-center shadow-2xl">
                <span className="text-3xl font-black text-white leading-none">
                  21+
                </span>
                <span className="text-[10px] font-bold text-[#b79662] uppercase tracking-tighter">
                  Years
                </span>
                <span className="text-[8px] font-medium text-white/50 uppercase">
                  Experience
                </span>
              </div>
            </div>
          </div>

          <div className="border-t border-[#4c4949]/20 pt-12">
            <h3 className="text-[#b79662] text-xs font-bold tracking-[0.3em] uppercase mb-10">
              Our Partners
            </h3>
            <div className="flex flex-wrap items-center justify-between gap-8 md:gap-4">
              {partners.map((p, i) => (
                <div
                  key={i}
                  className="h-12 md:h-26 flex items-center justify-center transition-all duration-500 cursor-pointer"
                >
                  <img
                    src={p.logo}
                    alt={p.name}
                    className="max-h-full w-auto object-contain "
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Counter Section */}
      <section className="bg-[#1e1e1e] py-16 px-6 sm:px-8 md:px-16 border-b border-[#4c4949]/20">
        <h1 className="text-white text-center text-2xl md:text-3xl font-bold mb-12">
          SUCCESSFULLY COMPLETED 7000+ PROJECTS
        </h1>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col space-y-4 group">
                <div className="text-6xl md:text-5xl font-bold text-[#b79662] tracking-tighter transition-colors duration-300 group-hover:text-[#b79662]">
                  <CountUp end={stat.number} />
                </div>
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

      {/*  */}

      <section className="bg-black py-20 px-6 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto border-b border-white/10 pb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side: Content */}
            <div className="space-y-8 order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Why You Should{" "}
                <span className="text-[#b79662]">Choose Us?</span>
              </h2>

              <div className="space-y-6 text-[#4c4949] text-lg leading-relaxed max-w-xl">
                <p>
                  At Craftworld Events, the ideal customer experience in
                  occasion is a comprehensive, yet flexible framework for
                  achieving customer loyalty.
                </p>
                {/* <p>
                Therefore by learning and understanding your needs, we can tailor the pieces of the framework that are necessary to help you create the bonds of Customer Loyalty with your customers.
              </p> */}
                <p>
                  Here, you'll find a platform that will be unique to you and
                  your brand – a platform that will define your success. Current
                  success stories at{" "}
                  <span className="text-white">"Craftworld Events"</span>{" "}
                  include Indian Kids Fashion Week and Chef's Connect.
                </p>
              </div>

              <button className="group flex items-center gap-3 bg-transparent border border-white/20 px-10 py-4 rounded-md text-white font-bold hover:bg-[#b79662] hover:border-[#b79662] transition-all duration-300">
                View More
                <ArrowRight
                  className="group-hover:translate-x-2 transition-transform"
                  size={20}
                />
              </button>
            </div>

            {/* Right Side: Video Embed with Decorative Frame */}
            <div className="relative order-1 lg:order-2">
              {/* Bhaswar Paul Decorative Border */}
              <div className="absolute -top-4 -right-4 w-1/2 h-1/2 border-t-2 border-r-2 border-[#b79662] z-0 hidden md:block"></div>

              <div className="relative z-10 aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/NYbFAiZgvAM"
                  title="Craftworld Events Reel"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Infinite "Our Work" Slider Section */}
      <section className="bg-[#ffffff] py-24 overflow-hidden border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-2">
            Our <span className="text-[#b79662]">Work</span>
          </h2>
          <div className="w-20 h-1 bg-[#b79662] mx-auto"></div>
        </div>

        <div className="flex flex-col gap-6 md:gap-10 max-w-7xl mx-auto ">
          <ScrollingRow
            images={workImages.slice(0, 4)}
            direction="right"
            duration={35}
          />
          <ScrollingRow
            images={workImages.slice(4, 8)}
            direction="left"
            duration={40}
          />
          <ScrollingRow
            images={workImages.slice(0, 4)}
            direction="right"
            duration={30}
          />
        </div>
      </section>
      <TestimonialSlider />
      <Footer />
    </>
  );
};

export default Page;
