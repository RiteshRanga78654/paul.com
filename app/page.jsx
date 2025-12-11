"use client";

import { Instagram, Facebook, Youtube, Twitter, Book } from "lucide-react";
import {
  Users,
  Presentation,
  TrendingUp,
  Briefcase,
  Map,
  Target,
} from "lucide-react";

import { useEffect, useRef, useState } from "react";

import TestimonialSlider from "./components/TestimonialSlider";
import BookStore from "./components/BookStore";
import Header from "./layout/Header";
// import Footer from "./layout/Footer";
import SelectedWork from "./components/SelectedWork";

// --- Updated Service Card for Dark Theme ---
const ServiceCard = ({ icon, title, description, isActive }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      // Changed bg-white to bg-[#4c4949] and border to match dark theme
      className={`flex-shrink-0 w-[320px] bg-[#4c4949] border border-gray-600 overflow-visible relative transition-all duration-500 ease-out ${
        isHovered ? "scale-105 z-10" : "scale-100"
      }`}
    >
      <div
        className={`${
          // Active uses the Gold theme, Inactive uses a slightly darker gray
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
      {/* Content Body Background */}
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
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);

  // Improved horizontal scroll with wheel
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

  const services = [
    {
      title: "App development",
      description:
        "As a proficient App Development Company, we are known for providing high-quality experience with our built apps on different portable devices. We understand the true potential of an app and its benefits to flourish your business.",
    },
    {
      title: "Web Development",
      description:
        "Design your first impression exaltedly! What if you get a beautifully designed website that attracts clients in the first blink? Why go anywhere when Marlox is here? We are an excellent Web development company.",
    },
    {
      title: "Android App Development",
      description:
        "Experience the true potential of an Android app with our Android app development services, where our professionals tailor the app as per your needs, delivering outstanding results.",
    },
    {
      title: "iOS App Development",
      description:
        "At Marlox Software, we understand every business has unique mobile application needs. Our team of experienced developers works closely with you to develop high-quality iOS apps.",
    },
    {
      title: "UI/UX Design",
      description:
        "Create stunning user experiences with our expert UI/UX design services. We focus on user-centered design principles to deliver interfaces that are both beautiful and functional.",
    },
    {
      title: "E-commerce Solutions",
      description:
        "Build powerful online stores with our e-commerce development services. We create scalable platforms that drive sales and enhance customer experiences.",
    },
    {
      title: "Cloud Solutions",
      description:
        "Leverage the power of cloud computing with our comprehensive cloud solutions. We help businesses migrate, deploy, and manage applications in the cloud.",
    },
    {
      title: "Digital Marketing",
      description:
        "Grow your online presence with our digital marketing strategies. We offer SEO, social media marketing, and content marketing services to boost your visibility.",
    },
    {
      title: "Custom Software",
      description:
        "Get tailored software solutions that meet your specific business needs. Our custom development services ensure you get exactly what you need.",
    },
    {
      title: "Quality Assurance",
      description:
        "Ensure your software is bug-free and performs optimally with our quality assurance and testing services. We conduct thorough testing at every stage.",
    },
    {
      title: "Maintenance & Support",
      description:
        "Keep your applications running smoothly with our maintenance and support services. We provide ongoing updates, bug fixes, and technical support.",
    },
    {
      title: "Consulting Services",
      description:
        "Get expert advice on your technology strategy with our consulting services. We help you make informed decisions about your digital transformation.",
    },
  ];

  const content = {
    title:
      "From Refugee Camp To Business Success: The Inspiring Journey Of Business Coach",
    name: "Bhaswar Paul",
    description:
      "In a world where success is often reserved for the privileged, Business Coach Suresh Mansharamani was born in a refugee camp in Maharashtra. He started his journey with a job career of just Rs 300/month to making his company 300 times oversubscribed IPO in 1996 and getting listed at the Bombay Stock Exchange. Followed by a Presidential Award, he is now a Certified Gallup Strengths Coach, Business Coach in India, Best OKR Coach, Best SME Coach, Best Sales Trainer, Best SME IPO Coach, Best Motivational Speakers and Author of seven Books.",
    buttonText: "Read More",
    imageUrl: "/assets/TEDx TAPMI/Tanky You - TEDX & TAPMI.png",
    imageAlt: "Bhaswar Paul speaking into a microphone",
  };

  const servicesData = [
    {
      title: "One-On-One Weekly Business Coaching For Founders And Core Teams",
      description:
        "Designed for leaders of companies with a minimum turnover of Rs 50 crore plus, this exclusive coaching program focuses on unlocking exponential growth every 90 days. With personalized strategies tailored to each business's unique needs, Business Coach works closely with founders and core teams to drive high-impact results.",
      icon: <Users className="w-12 h-12 text-[#b79662]" />,
    },
    {
      title: "3-Day Art Of Disruption Program: Bootcamp For MSME Owners",
      description:
        "Join an intensive three-day boot camp designed for MSME business owners eager to break free from traditional models and seize new market opportunities. In the Art of Disruption program, you'll gain insights to disrupt, drive, and dominate your industry, and learn the strategies to multiply profits by 3x.",
      icon: <Presentation className="w-12 h-12 text-[#b79662]" />,
    },
    {
      title: "Build To Scale: 1-Year Program For SMEs",
      description:
        "This comprehensive year-long program is crafted for ambitious SMEs seeking exponential growth. Through structured modules and actionable insights, the Business Coach provides a roadmap to help your business achieve billion-dollar potential and unlock the keys to long-term, sustainable success.",
      icon: <TrendingUp className="w-12 h-12 text-[#b79662]" />,
    },
    {
      title: "Sales Training For Large Organizations",
      description:
        "Elevate your sales team's effectiveness with a targeted training program that boosts conversions and accelerates performance by 3x. Tailored for large organizations, this sales training focuses on advanced strategies and hands-on tactics to drive real results and foster a high-performing sales culture.",
      icon: <Briefcase className="w-12 h-12 text-[#b79662]" />,
    },
    {
      title: "SMR IPO Roadmap & Handholding",
      description:
        "Navigating an SME IPO requires specialized guidance and a supportive ecosystem. From initial planning to ringing the bell at the SME exchange, we provide end-to-end assistance with a complete roadmap for IPO success. Our expertise ensures you're well-prepared for each stage of this transformative journey.",
      icon: <Map className="w-12 h-12 text-[#b79662]" />,
    },
    {
      title: "OKR Training For Core Teams",
      description:
        "Empower your team to excel and foster a culture of camaraderie through effective OKR implementation. This OKR training aligns your core team's efforts with organizational goals, driving exponential results every 90 days and setting a strong foundation for sustained high performance.",
      icon: <Target className="w-12 h-12 text-[#b79662]" />,
    },
  ];

  return (
    <>
      <div
        className="min-h-screen relative overflow-hidden bg-cover bg-center bg-no-repeat"
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
              <div className="relative w-64 sm:w-80 lg:w-[600px] xl:w-[500px] h-screen">
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
                {/* Changed title to Gold Theme */}
                <h2 className="text-[#b79662] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold lg:-ml-12">
                  Bhaswar Paul
                </h2>
              </div>

              <p
                className="text-white text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0"
                style={{ fontWeight: 300 }}
              >
                Co-Founder & Chief Energy Officer @ Tajurba | Business Coach and
                OKR Expert | Helping SMEs to Scale up, 3X Profits | Dominate and
                Launch SME IPO | Mentor | Investor
              </p>

              <div className="space-y-2">
                <p className="text-white text-base sm:text-lg md:text-xl">
                  Your Business Would Be In DANGER.
                </p>
                <h3 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                  Disrupt, Drive & Dominate
                </h3>
              </div>

              <div className="pt-4">
                {/* Changed Button to Gold Theme */}
                <button className="bg-[#b79662] hover:bg-[#967d51] text-white font-bold text-base sm:text-lg px-8 py-3 sm:px-10 sm:py-4 rounded transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Learn to Disrupt
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
                <div className="flex flex-col items-center lg:items-start space-y-2 p-4 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <Instagram className="w-8 h-8 text-white" />
                  <div className="text-[#b79662] text-xl sm:text-2xl font-bold">
                    2.1M
                  </div>
                  <div className="text-white text-xs sm:text-sm">Followers</div>
                </div>

                <div className="flex flex-col items-center lg:items-start space-y-2 p-4 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <Facebook className="w-8 h-8 text-white" />
                  <div className="text-[#b79662] text-xl sm:text-2xl font-bold">
                    212K
                  </div>
                  <div className="text-white text-xs sm:text-sm">Followers</div>
                </div>

                <div className="flex flex-col items-center lg:items-start space-y-2 p-4 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <Youtube className="w-8 h-8 text-white" />
                  <div className="text-[#b79662] text-xl sm:text-2xl font-bold">
                    1.08M
                  </div>
                  <div className="text-white text-xs sm:text-sm">
                    Subscribers
                  </div>
                </div>

                <div className="flex flex-col items-center lg:items-start space-y-2 p-4 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <Twitter className="w-8 h-8 text-white" />
                  <div className="text-[#b79662] text-xl sm:text-2xl font-bold">
                    1.6K
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
      <div className="min-h-screen flex items-center justify-center p-4 sm:p-8 bg-white">
        {/* Container changed to #4c4949 */}
        <div className="max-w-7xl w-full bg-[#4c4949] rounded-xl overflow-hidden transition-all duration-300 shadow-2xl border border-gray-700">
          <div className="flex flex-col md:flex-row">
            <div className="p-6 sm:p-12 flex flex-col justify-center w-full md:flex-1">
              <p className="text-xl font-medium text-gray-300 leading-snug mb-2">
                {content.title}
              </p>

              {/* Name changed to Gold */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#b79662] leading-tight mb-6">
                {content.name}
              </h1>

              <p className="text-base text-gray-200 leading-relaxed mb-8">
                {content.description}
              </p>

              <button
                className="w-full sm:w-48 bg-[#b79662] text-white font-semibold py-3 px-6 rounded-lg 
                          shadow-md hover:bg-[#967d51] transition-colors duration-300 transform 
                          hover:scale-[1.02] active:scale-95 focus:outline-none focus:ring-4 focus:ring-yellow-700"
              >
                {content.buttonText}
              </button>
            </div>

            <div className="relative overflow-hidden md:h-full min-h-[600px] w-full md:flex-1">
              <img
                src={content.imageUrl}
                alt={content.imageAlt}
                className="absolute inset-0 w-full h-full object-cover rounded-none md:rounded-r-xl"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/800x600/4c4949/b79662?text=Image+Not+Available";
                }}
              />
              <div className="absolute inset-0 opacity-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid Section */}
      {/* Background changed from blue to dark charcoal to contrast with #4c4949 cards */}
      <section className="bg-white py-6 px-4 sm:px-6 lg:px-8">
        <h2 className="text-[#b79662] text-[45px] mt-[-75px] font-extrabold mb-4 text-center">
          Our Services
        </h2>
        <p className="text-center mb-10 text-[#333333] text-4xl sm:text-2xl">
          Experience fulfillment and joy in your career.
        </p>
        <div className="max-w-7xl mx-auto">
          {/* The Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service, index) => (
              <div
                key={index}
                // Card background changed to #4c4949
                className="bg-[#4c4949] rounded-lg p-8 flex flex-col items-center text-center shadow-md hover:shadow-xl hover:shadow-[#b79662]/10 transition-all duration-300 border border-gray-700"
              >
                {/* Icon Container */}
                <div className="mb-6 p-3 bg-[#3d3a3a] rounded-full border border-gray-600">
                  {service.icon}
                </div>

                {/* Title in Gold */}
                <h3 className="text-lg font-bold text-[#b79662] mb-4 leading-snug">
                  {service.title}
                </h3>

                {/* Description in White/Gray for readability on dark bg */}
                <p className="text-sm text-gray-200 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Horizontal Scroll Section */}
      <div className="bg-white">
        <section
          ref={containerRef}
          className="min-h-screen flex items-center py-20"
        >
          <div className="w-full">
            <div className="max-w-[1342px] mx-auto px-8 mb-12">
              <h1 className="text-6xl md:text-7xl font-bold text-[#b79662] relative inline-block">
                OUR SERVICES
                <span className="absolute top-0 -right-6 flex gap-1">
                  <span className="w-3 h-3 bg-[#b79662]"></span>
                  <span className="w-3 h-3 bg-[#b79662]"></span>
                </span>
              </h1>
              <p className="text-[#333333] mt-4 text-lg">
                Scroll horizontally to browse through our services →
              </p>
            </div>

            <div
              ref={scrollerRef}
              className="overflow-x-auto overflow-y-hidden scrollbar-hide px-8"
              style={{
                scrollBehavior: "auto",
                WebkitOverflowScrolling: "touch",
                marginLeft: "90px",
              }}
            >
              <div className="flex gap-6 pb-4" style={{ width: "max-content" }}>
                {services.map((service, index) => (
                  <ServiceCard
                    key={index}
                    icon={<StarIcon />}
                    title={service.title}
                    description={service.description}
                    isActive={index === 0}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </div>




      {/* Video Section */}
      <section className="w-full py-6 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Text Header Section */}
          <div className="text-center mb-10 space-y-2">
            <h2 className="text-gray-400 font-bold text-sm sm:text-lg md:text-xl mb-4 uppercase tracking-wide">
              Adopt These 5 Strategies, You Will Never Face Loss In Business
            </h2>
            <h1 className="text-[#b79662] font-extrabold text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight">
              BHASWAR PAUL
            </h1>
          </div>

          {/* Video Player Container */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-[#4c4949] bg-black">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/NYbFAiZgvAM"
              title="Suresh Mansharamani Business Strategy Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
<br />
<br />
      <SelectedWork  />

      <BookStore />

      <TestimonialSlider />

      {/* <Footer /> */}
    </>
  );
}
