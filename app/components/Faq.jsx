"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const challenges = [
  {
    title: "Revenue and Profitability Stagnation",
    content:
      "When a strategy lacks focus, market differentiation fades, and execution fails, converting demand into profit becomes difficult. This slows down your revenue growth despite active market engagement.",
  },
  {
    title: "Cash Flow Imbalances and Liquidity Pressure",
    content:
      "The inability of businesses to maintain constant cash flow and timely payment collection leads to working capital problems, which hinder their capacity to adapt to business expansion and market shifts. ",
  },
  {
    title: "Escalating Debt Exposure and Financing Costs",
    content:
      "Rising borrowing levels and increasing interest obligations reduce financial agility. It weakens balance sheets and diverts resources away from strategic investment and expansion. ",
  },
  {
    title: "Misaligned Sales and Marketing Effectiveness",
    content:
      "Disconnected sales and marketing efforts result in decreased conversion rates, which stop revenue growth from achieving its expected outcomes.",
  },
  {
    title: "Low Workforce Engagement and Accountability Gaps",
    content:
      "The lack of ownership and motivation across teams results in decreased productivity, which harms organizational performance during essential phases of development.",
  },
];

const BusinessChallenges = () => {
  // State to track which accordion item is open (defaulting to the first one, index 0)
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="bg-[#1e1e1e] py-18 max-w-7xl mx-auto rounded-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* LEFT SIDE: Image */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#b79662]/20 shadow-[0_0_40px_rgba(183,150,98,0.1)] h-[500px]">
              <img
                src="/assets/TEDx TAPMI/bussiness obstacles paul"
                alt="Identifying Business Challenges"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />

              {/* Gold Overlay Effect */}
              <div className="absolute inset-0 bg-[#b79662]/10 mix-blend-overlay pointer-events-none"></div>

              {/* Gold Tint that disappears on hover */}
              <div className="absolute inset-0 bg-[#b79662]/60 mix-blend-multiply z-10 group-hover:opacity-0 transition-all duration-500"></div>

              {/* Texture */}
              <div
                className="absolute inset-0 opacity-20 z-20 pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                  filter: "grayscale(0%)",
                }}
              ></div>
            </div>
          </div>

          {/* RIGHT SIDE: FAQ / Accordion */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center h-full">
            {/* Header */}
            <div className="mb-8">
              <span className="text-[#b79662] font-bold text-sm  tracking-widest block mb-2">
                Identifying
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                Key Business Obstacles {" "}
                <span className="text-[#b79662]">Impacting Performance</span>
              </h2>
            </div>

            {/* Accordion Container */}
            <div className="space-y-1">
              {challenges.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className={`border-b border-gray-700 transition-all duration-300 ${
                      isOpen ? "pb-2" : "pb-0"
                    }`}
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full flex justify-between items-center py-2 text-left focus:outline-none group"
                    >
                      <span
                        className={`text-lg font-medium transition-colors duration-300 ${
                          isOpen
                            ? "text-[#b79662]"
                            : "text-gray-200 group-hover:text-[#b79662]"
                        }`}
                      >
                        {item.title}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-[#b79662]" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-[#b79662]" />
                      )}
                    </button>

                    {/* Accordion Content */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-gray-400 font-light leading-relaxed text-sm">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="mt-10">
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
                  Want to Become a Leader
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessChallenges;
