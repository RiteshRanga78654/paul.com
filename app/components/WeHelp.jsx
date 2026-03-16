"use client";
import { useState } from "react";
import Image from "next/image";

const services = [
  {
    title: "Business Transformation",
    description:
      "IREED India can drive business transformation for real estate stakeholders by leveraging its expertise in education, technology platforms, and industry networking. This aligns with its mission to upskill professionals and bridge gaps in the Indian real estate sector.",
    image: "/assets/blog/1.webp",
    alt: "Head icon",
  },
  {
    title: "Organizational Change",
    description:
      "IREED India offers tailored corporate training programs focusing on leadership skills, change management, and communication to equip executives and teams for evolving market demands.",
    image: "/assets/blog/2.webp",
    alt: "Gear icon",
  },
  {
    title: "Culture Development",
    description:
      "IREED India offers specialized programs such as the MBA in Real Estate with Business Analytics, which equips professionals with practical skills and strategic thinking to shift mindsets from traditional models to data-driven, compliant practices.",
    image: "/assets/blog/3.webp",
    alt: "Smile icon",
  },
  {
    title: "Innovation & Disruption",
    description: `IREED India offers specialized and pioneering programs in Real Estate, which equips professionals with practical skills in analytics, marketing, and sector-specific strategies. This addresses skill gaps in a rapidly growing industry, fostering a workforce ready for PropTech disruptions such as AI, IoT, and blockchain. `,
    image: "/assets/blog/4.webp",
    alt: "Chart icon",
  },
];

export default function ServiceGrid() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="bg-white py-16 px-6">
      <h2 className="text-3xl text-center md:text-4xl font-bold text-[#000]">
        How <span className="text-[#b79662]">We Help</span>
      </h2>
      <div className="w-24 h-1 bg-[#b79662] mx-auto mt-4 mb-10 rounded-full"></div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {services.map((service, index) => (
          <div
            key={index}
            onClick={() => setIsExpanded(!isExpanded)}
            className="group flex flex-col border border-gray-200 rounded-lg p-8 transition-all duration-300 hover:shadow-xl h-full bg-white cursor-pointer"
          >
            {/* 1. Icon Image */}
            <div className="relative w-24 h-24 mb-8">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-contain object-left"
              />
            </div>

            {/* 2. Title */}
            <h3 className="text-[24px] font-extrabold text-[#0a0a0a] leading-tight mb-4 min-h-[60px]">
              {service.title}
            </h3>

            {/* 3. Hover Divider Line */}
            <div className="relative w-full h-[3px] bg-[#e5e7eb] mb-8">
              <div className="absolute top-0 left-0 h-full w-[45px] bg-[#b79662] group-hover:w-full transition-all duration-500 ease-in-out"></div>
            </div>

            {/* 4. Description - flex-grow pushes the button down */}
            <p
              className={`text-[#4b5563] text-[15px] leading-relaxed mb-10 flex-grow transition-all duration-500 overflow-hidden ${
                isExpanded ? "line-clamp-none" : "line-clamp-2"
              }`}
            >
              {service.description}
            </p>

            {/* 5. Static Learn More Button */}
            <div className="relative w-full py-[14px] bg-[#b79662] border-2 border-[#b79662] rounded-[8px] text-white font-bold text-[1rem] tracking-wider  overflow-hidden group/btn flex justify-center items-center shrink-0">
              {/* Button Hover Fill */}
              <div className="absolute inset-0 w-0 bg-white transition-all duration-400 ease-out group-hover/btn:w-full" />
              <span className="relative z-10 group-hover/btn:text-[#b79662] transition-colors duration-300">
                Learn More
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
