"use client";

import {
  Instagram,
  Facebook,
  Youtube,
  Twitter,
  Book,
  Users,
  Presentation,
  TrendingUp,
  Briefcase,
  Map,
  Target,
  ChevronDown,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import TestimonialSlider from "./components/TestimonialSlider";
import BookStore from "./components/BookStore";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import SelectedWork from "./components/SelectedWork";

import Googlereview from "./components/Googlereview";

import Slider from "./components/Slider";
// import Exp from "./components/Exp";

// --- NEW SUB-COMPONENT FOR THE UPDATED SERVICES SECTION ---
const ServiceCardItem = ({
  title,
  description,
  image,
  isExpanded,
  onToggle,
}) => {
  return (
    <div className="group bg-[#4c4949] rounded-2xl flex flex-col items-start text-left shadow-md hover:shadow-xl hover:shadow-[#b79662]/20 transition-all duration-500 border border-gray-700 hover:scale-[1.02] cursor-default relative overflow-hidden">
      {/* 1. Image Section */}
      <div className="relative w-full h-70 overflow-hidden">
        <img
          src={
            image ||
            "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop"
          }
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          alt={title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#4c4949] to-transparent opacity-60" />
      </div>

      {/* 2. Content Section */}
      <div className="p-8 pt-6 w-full">
        <h3 className="text-xl font-bold text-[#ffffff] mb-4 leading-snug transition-colors duration-300 group-hover:text-[#b79662]">
          {title}
        </h3>

        <div className="relative">
          <p
            className={`text-sm text-gray-200 leading-relaxed transition-all duration-300 ${!isExpanded ? "line-clamp-3" : ""}`}
          >
            {description}
          </p>

          <button
            onClick={onToggle} // Use the prop function here
            className="mt-4 text-[#b79662] font-black text-xs uppercase tracking-widest hover:text-white transition-colors flex items-center gap-1"
          >
            {isExpanded ? "Show Less" : "Read More"}
            <ChevronDown
              size={14}
              className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#b79662] transition-all duration-500 group-hover:w-full" />
    </div>
  );
};

// --- Updated Service Card for Dark Theme (Original Horizontal Slider Version) ---
const ServiceCard = ({ icon, title, description, isActive }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`flex-shrink-0 w-[320px] bg-[#4c4949] border border-gray-600 overflow-visible relative transition-all duration-500 ease-out ${
        isHovered ? "scale-105 z-10" : "scale-100"
      }`}
    >
      <div
        className={`${
          isActive ? "bg-[#b79662]" : "bg-[#3d3a3a]"
        } p-10 flex flex-col items-start relative transition-all duration-300 h-[280px]`}
      >
        <div
          className={`mb-8 transition-transform duration-700 ease-in-out ${
            isHovered ? "rotate-[360deg]" : "rotate-0"
          }`}
        >
          {isActive ? (
            <StarIcon color="#ffffff" />
          ) : (
            <StarIcon color="#b79662" />
          )}
        </div>
        <h3
          className={`text-xl font-normal ${
            isActive ? "text-white" : "text-[#b79662]"
          } transition-colors duration-300`}
        >
          {title}
        </h3>
      </div>
      <div className="p-8 bg-[#4c4949]">
        <p className="text-gray-200 leading-relaxed text-sm">{description}</p>
      </div>

      <div
        className={`absolute bottom-0 left-0 w-8 h-8 bg-[#b79662] transition-all duration-300 ${
          isHovered ? "opacity-100 translate-y-4" : "opacity-0 translate-y-0"
        }`}
      />
    </div>
  );
};

const StarIcon = ({ color = "#b79662" }) => (
  <svg
    width="56"
    height="56"
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="28" y1="2" x2="28" y2="54" stroke={color} strokeWidth="2" />
    <line x1="2" y1="28" x2="54" y2="28" stroke={color} strokeWidth="2" />
    <line x1="10" y1="10" x2="46" y2="46" stroke={color} strokeWidth="2" />
    <line x1="46" y1="10" x2="10" y2="46" stroke={color} strokeWidth="2" />
  </svg>
);

export default function HeroSection() {
  const [allServicesExpanded, setAllServicesExpanded] = useState(false);

  // 2. Function to toggle the state
  const toggleAllServices = () => setAllServicesExpanded(!allServicesExpanded);
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const scroller = scrollerRef.current;
    if (!container || !scroller) return;

    const handleWheel = (e) => {
      const containerRect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const isInView =
        containerRect.top < windowHeight * 0.8 &&
        containerRect.bottom > windowHeight * 0.2;

      if (isInView) {
        const maxScroll = scroller.scrollWidth - scroller.clientWidth;
        const currentScroll = scroller.scrollLeft;

        if (
          (e.deltaY > 0 && currentScroll >= maxScroll - 1) ||
          (e.deltaY < 0 && currentScroll <= 1)
        ) {
          return;
        }

        e.preventDefault();

        const scrollAmount = e.deltaY * 1.5;
        scroller.scrollTo({
          left: scroller.scrollLeft + scrollAmount,
          behavior: "auto",
        });
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const content = {
    title:
      "Helping professionals buy, sell, and understand real estate with clarity, strategy, and long-term value.",
    name: "Bhaswar Paul",
    description: `With a career spanning over 30 years in sales and more than 20 years in Indian real estate, Bhaswar Paul —also known as Paul among colleagues and industry peers—is widely recognised as an ace salesman whose success has been built on consistency, credibility, and deep market understanding.

Over the course of his career, he has closed 100+ real estate transactions, collectively valued at over XXX crores, working across residential and commercial segments. More importantly, these outcomes have been driven by repeat clients, long-standing relationships, and referrals—a testament to trust earned over time rather than short-term gains.

This extensive frontline exposure has given Paul a sharp sense of market intelligence—pricing dynamics, buyer psychology, regulatory impact, and market feasibility—paired with a strong commitment to ethical sales practices. These principles now form the foundation of the education and training delivered through IREED India, empowering both professionals and clients to make informed, responsible decisions.
`,
    buttonText: "Read More",
    imageUrl: "/assets/images/new-bhaswal-paul.jpg.jpeg",
    imageAlt: "Bhaswar Paul speaking into a microphone",
  };

  const servicesData = [
    {
      title: "Corporate Training",
      image: "/assets/images/P_K00313.JPG",
      description: `Structured, outcome-driven real estate training for organisations. Our programs combine industry experience with practical frameworks that help participants develop market-ready skills and strategic competence. Who this is for: Real estate professionals, sales leaders, channel partners, corporate teams, and career entrants seeking credible real estate education and certification.`,
    },
    {
      title: "Hire Train Deployment",
      image:
        "/assets/images/paras (1).jpg",
      description: `We work with organisations to identify, assess, and onboard high-potential real estate talent, ensuring strong alignment between role requirements and candidate capability. We Support: Candidate shortlisting and screening, Role alignment and capability evaluation, Onboarding readiness. Who this is for: Real estate firms seeking trained professionals who can contribute from day one.`,
    },
    {
      title: "Project Consulting",
      image:
        "/assets/images/DSC02421.JPG",
      description: `Our campus workshops are designed to provide students with industry-ready real estate skills and practical exposure. Through these workshops, students gain a fundamental understanding of the real estate sector, its current market status, and potential career opportunities. We offer hands-on industry exposure and prepare students for real-world exposure. `,
    },
  ];

  const [isExpanded, setIsExpanded] = useState(false);
  const words = content.description?.split(" ") || [];
  const isLongText = words.length > 120;
  const displayText =
    isExpanded || !isLongText
      ? content.description
      : words.slice(0, 90).join(" ") + "...";

  return (
    <>
      <div
        className="min-h-[90vh] relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>

        <div className="absolute inset-0 opacity-50">
          <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-[#b79662] rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-[#b79662] rounded-full animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 py-2 lg:py-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center lg:justify-evenly justify-between gap-8 lg:gap-5 lg:-mb-70 lg:-mt-2">
            <div className="w-full lg:w-[600px] flex justify-center lg:justify-center order-1 lg:order-1">
              <div className="qwe relative w-64 sm:w-80 lg:w-[600px] xl:w-[500px]">
                <div className="absolute inset-0 rounded-full blur-3xl"></div>
                <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl">
                  <img
                    src="/assets/images/corporate-trainings.png"
                    alt="Bhaswar Paul"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 text-center lg:text-center order-2 lg:order-2 space-y-6">
              <div>
                <h2 className="text-[#b79662] text-3xl sm:text-5xl md:text-4xl lg:text-6xl font-bold lg:-ml-12">
                  Bhaswar Paul
                </h2>
              </div>
              <p
                className="text-white text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0"
                style={{ fontWeight: 300 }}
              >
                Founder & CEO - IREED India
              </p>
              <div className="space-y-2">
                <p className="text-white text-base sm:text-lg md:text-xl">
                  Business Visionary | Growth Strategist | Industry Voice |
                  <br />
                  Author & Mentor for Industry Leaders
                </p>
                <h3 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                  Build. Scale. Lead.
                </h3>
              </div>
              <div className="flex gap-8 justify-center">
                <div className="pt-4">
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
                      textAlign: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                      position: "relative",
                      overflow: "hidden",
                      zIndex: 1,
                      border: "2px solid #b79662",
                      margin: "0 auto",
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
                      Work With Me
                    </span>
                  </button>
                </div>
                <div className="pt-4">
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
                      textAlign: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                      position: "relative",
                      overflow: "hidden",
                      zIndex: 1,
                      border: "2px solid #b79662",
                      margin: "0 auto",
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
                      Watch Intro Video
                    </span>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
                <div className="flex flex-col items-center lg:items-start space-y-2 p-4 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <Instagram className="w-8 h-8 text-white" />
                  <div className="text-[#b79662] text-xl sm:text-2xl font-bold">
                    1.1K
                  </div>
                  <div className="text-white text-xs sm:text-sm">Followers</div>
                </div>
                <div className="flex flex-col items-center lg:items-start space-y-2 p-4 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <Facebook className="w-8 h-8 text-white" />
                  <div className="text-[#b79662] text-xl sm:text-2xl font-bold">
                    800+
                  </div>
                  <div className="text-white text-xs sm:text-sm">Followers</div>
                </div>
                <div className="flex flex-col items-center lg:items-start space-y-2 p-4 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <Youtube className="w-8 h-8 text-white" />
                  <div className="text-[#b79662] text-xl sm:text-2xl font-bold">
                    200+
                  </div>
                  <div className="text-white text-xs sm:text-sm">
                    Subscribers
                  </div>
                </div>
                <div className="flex flex-col items-center lg:items-start space-y-2 p-4 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <Twitter className="w-8 h-8 text-white" />
                  <div className="text-[#b79662] text-xl sm:text-2xl font-bold">
                    100+
                  </div>
                  <div className="text-white text-xs sm:text-sm">Followers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Header />

      {/* About Section */}
      <div className="min-h-[85vh] flex items-center justify-center px-4 my-10 sm:p-8 bg-white">
        <div className="mobile max-w-7xl w-auto bg-[#4c4949] rounded-xl overflow-hidden transition-all duration-300 shadow-2xl border border-gray-700">
          <div className="flex flex-col md:flex-row">
            <div className="p-6 sm:p-12 flex flex-col justify-center w-full md:flex-1">
              <p className="text-lg font-medium text-gray-300 leading-snug mb-2">
                {content.title}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-4xl font-bold text-[#b79662] leading-tight mb-6">
                {content.name}
              </h1>
              <div className="text-lg text-gray-200 text-justify leading-relaxed mb-8">
                <p>{displayText}</p>
              </div>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                style={{
                  padding: "14px 40px",
                  backgroundColor: "#b79662",
                  borderRadius: "8px",
                  color: "#fff",
                  fontSize: "1.1rem",
                  fontWeight: "700",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  position: "relative",
                  overflow: "hidden",
                  zIndex: 1,
                  border: "2px solid #b79662",
                  letterSpacing: "1px",
                  transition: "all 0.3s ease",
                  width: "fit-content",
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
                    transition: "color 0.3s ease",
                  }}
                >
                  {isExpanded ? "Show Less" : content.buttonText || "Read More"}
                </span>
              </button>
            </div>
            <div className="relative overflow-hidden md:h-full min-h-[600px] w-full md:flex-1">
              <img
                src={content.imageUrl}
                alt={content.imageAlt}
                className="absolute inset-0 w-full h-full object-cover rounded-none md:rounded-r-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid Section - REPLACED WITH YOUR REQUESTED UPDATES */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 mt-[20px] mb-[20px] lg:mt-[-28px]">
        <h2 className="text-3xl text-center md:text-4xl font-bold text-[#b79662]">
          Our <span className="text-[#b79662]">Services</span>
        </h2>
        <div className="w-24 h-1 bg-[#b79662] mx-auto mt-4 mb-10 rounded-full"></div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <ServiceCardItem
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
                // 3. Pass the shared state and toggle function
                isExpanded={allServicesExpanded}
                onToggle={toggleAllServices}
              />
            ))}
          </div>
        </div>
      </section>

      {/* google review */}

      <Googlereview />

      {/* <Exp /> */}
      <Slider />

      {/* Video Section */}
      <section className="w-full py-16 px-5 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 space-y-2">
            <h2 className="text-3xl text-center md:text-4xl font-bold text-[#b79662]">
              Insight <span className="text-[#b79662]">Gallery</span>
            </h2>
            <div className="w-24 h-1.5 bg-[#b79662] mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Video Grid Container */}
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
            {/* 1. Main Video Section (70% on desktop) */}
            <div className="lg:col-span-7 w-full">
              <div className="relative w-full aspect-video rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-2 md:border-4 border-gray-50">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/NYbFAiZgvAM"
                  title="Bhaswar Paul Main Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* 2. Side Videos Section (30% on desktop) */}
            <div className="lg:col-span-3 flex flex-col gap-8">
              {/* Small Video 1 */}
              <div className="relative aspect-video lg:h-58 rounded-2xl overflow-hidden shadow-lg border-4 border-white group">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/gc9ZAfi2C_w"
                  title="Related Video 1"
                  allowFullScreen
                ></iframe>
                {/* Subtle hover effect overlay */}
                <div className="absolute inset-0 bg-[#b79662]/10 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300" />
              </div>

              {/* Small Video 2 */}
              <div className="relative aspect-video lg:h-58 rounded-2xl overflow-hidden shadow-lg border-4 border-white group">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/G5P7hUiiZfc"
                  title="Related Video 2"
                  allowFullScreen
                ></iframe>
                <div className="absolute inset-0 bg-[#b79662]/10 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookStore />
      <SelectedWork />
      <TestimonialSlider />
      <Footer />
    </>
  );
}
