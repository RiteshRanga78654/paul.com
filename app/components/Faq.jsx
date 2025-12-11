"use client";
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const challenges = [
  {
    title: "Stagnant Sales And Profits",
    content: "Is your business struggling to grow year after year, despite your best efforts? This stagnation can be frustrating and demotivating, hindering your ability to achieve your goals."
  },
  {
    title: "Negative Cash Flows",
    content: "Struggling to manage daily expenses due to delayed payments or poor cash flow management? We help you optimize your working capital and ensure financial stability."
  },
  {
    title: "Rising Debts And Interest Costs",
    content: "Are mounting debts eating into your profits? Learn strategies to restructure debt, reduce interest burdens, and regain financial freedom."
  },
  {
    title: "Ineffective Marketing And Sales",
    content: "Spending money on ads without getting results? We help you build a high-converting sales funnel and marketing strategy that delivers ROI."
  },
  {
    title: "Disengaged Team And Lack Of Accountability",
    content: "Do you feel like you're the only one working hard? We implement OKR systems to align your team, boost productivity, and build a culture of ownership."
  },
  
];

const BusinessChallenges = () => {
  // State to track which accordion item is open (defaulting to the first one, index 0)
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="bg-[#1e1e1e] py-20 max-w-7xl mx-auto rounded-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          
          {/* LEFT SIDE: Image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#b79662]/20 shadow-[0_0_40px_rgba(183,150,98,0.1)] h-[600px]">
              <img 
                src="/assets/TEDx TAPMI/Congratulations! Girish  Varma (3).png" // Replace with your actual image path
                alt="Identifying Business Challenges" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              {/* Gold Overlay Effect */}
              <div className="absolute inset-0 bg-[#b79662]/10 mix-blend-overlay pointer-events-none"></div>
            </div>
          </div>

          {/* RIGHT SIDE: FAQ / Accordion */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center h-full">
            
            {/* Header */}
            <div className="mb-8">
              <span className="text-[#b79662] font-bold text-sm uppercase tracking-widest block mb-2">
                Identifying
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                Common Business <span className="text-[#b79662]">Challenges</span>
              </h2>
            </div>

            {/* Accordion Container */}
            <div className="space-y-4">
              {challenges.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div 
                    key={index} 
                    className={`border-b border-gray-700 transition-all duration-300 ${isOpen ? 'pb-4' : 'pb-0'}`}
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full flex justify-between items-center py-4 text-left focus:outline-none group"
                    >
                      <span className={`text-lg font-medium transition-colors duration-300 ${isOpen ? 'text-[#b79662]' : 'text-gray-200 group-hover:text-[#b79662]'}`}>
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
                      className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
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
              <button className="bg-[#b79662] hover:bg-[#967d51] text-white font-bold py-4 px-8 rounded shadow-lg hover:shadow-[#b79662]/20 transition-all duration-300 uppercase tracking-wide text-sm">
                Want to Become a Market Leader
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessChallenges;