"use client";
import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const StarIcon = ({ color = "#b79662" }) => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
    <line x1="28" y1="2" x2="28" y2="54" stroke={color} strokeWidth="2" />
    <line x1="2" y1="28" x2="54" y2="28" stroke={color} strokeWidth="2" />
    <line x1="10" y1="10" x2="46" y2="46" stroke={color} strokeWidth="2" />
    <line x1="46" y1="10" x2="10" y2="46" stroke={color} strokeWidth="2" />
  </svg>
);

const ServiceCard = ({ title, description, isActive }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`flex-shrink-0 w-[320px] bg-[#4c4949] border border-gray-600 overflow-visible relative transition-all duration-500 ease-out ${
        isHovered ? "scale-105 z-10" : "scale-100"
      }`}
    >
      <div className={`${isActive ? "bg-[#b79662]" : "bg-[#3d3a3a]"} p-10 flex flex-col items-start relative transition-all duration-300 h-[280px]`}>
        <div className={`mb-8 transition-transform duration-700 ease-in-out ${isHovered ? "rotate-[360deg] scale-110" : "rotate-0"}`}>
          <StarIcon color={isActive ? "#ffffff" : "#b79662"} />
        </div>
        <h3 className={`text-xl font-normal ${isActive ? "text-white" : "text-[#b79662]"} transition-colors duration-300`}>
          {title}
        </h3>
      </div>
      <div className="p-8 bg-[#4c4949]">
        <p className="text-gray-200 leading-relaxed text-sm">{description}</p>
      </div>
      <div className={`absolute bottom-0 left-0 w-8 h-8 bg-[#b79662] transition-all duration-300 ${isHovered ? "opacity-100 translate-y-4" : "opacity-0 translate-y-0"}`} />
    </div>
  );
};

const ServicesSection = () => {
  const component = useRef(null);
  const slider = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (!slider.current || !component.current) return;

      // Calculate total horizontal width minus the screen width
      const getScrollAmount = () => {
        let horizontalWidth = slider.current.scrollWidth;
        return -(horizontalWidth - window.innerWidth);
      };

      const tween = gsap.to(slider.current, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: component.current,
          start: "-80px",
          // The "end" must be exactly the amount of horizontal scroll
          // We add a little extra if you want it to feel "longer"
          end: () => `+=${slider.current.scrollWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true, // Crucial for responsive resizing
        },
      });
    }, component);

    return () => ctx.revert();
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

  return (
    <div ref={component} className="overflow-hidden  ">
      {/* Title section - stays inside the pin */}
      {/* <div className="h-[10vh] flex flex-col items-center justify-center">
        <h2 className="text-3xl text-center md:text-4xl font-bold text-[#b79662]">
          Our <span className="text-[#b79662]">Services</span>
        </h2>
      </div> */}
       <h2 className="text-3xl text-center md:text-4xl font-bold pt-7 text-[#b79662]">
          Our <span className="text-[#b79662]">Services</span>
        </h2>
        <div className="w-24 h-1 bg-[#b79662] mx-auto mt-4 rounded-full"></div>
        {/* <div className="w-24 h-1 bg-[#b79662] mx-auto rounded-2xl" /> */}

      <div className="flex items-center h-[70vh]">
        <div 
          ref={slider} 
          className="flex flex-nowrap gap-5 px-[8vw]"
        >
          {services.map((item, index) => (
            <ServiceCard 
              key={index} 
              title={item.title} 
              description={item.description} 
              isActive={item.active} 
            />
          ))}
        </div>
      </div>
      
      {/* Visual spacer inside the pinned area */}
      {/* <div className="h-[10vh]" /> */}
    </div>
  );
};

export default ServicesSection;



