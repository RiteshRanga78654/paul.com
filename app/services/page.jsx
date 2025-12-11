// import React from 'react'
// import Header from '../layout/Header'
// import Footer from '../layout/Footer'

// const page = () => {
//   return (
//     <>
//    <Header />
//     <div>
//         <h1>Page Service</h1>
//     </div>
//     <Footer />
//      </>
//   )
// }

// export default page

"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Play, 
  ChevronDown, 
  ChevronUp, 
  Users, 
  BookOpen, 
  Target, 
  Award, 
  Briefcase, 
  GraduationCap 
} from 'lucide-react';
import Head from 'next/head';
import Header from '../layout/Header';
// import Footer from '../footer';

// --- THEME CONSTANTS ---
const THEME = {
  bg: "bg-[#1e1e1e]",
  card: "bg-[#4c4949]",
  gold: "text-[#b79662]",
  goldBg: "bg-[#b79662]",
  goldBorder: "border-[#b79662]",
  textMain: "text-white",
  textMuted: "text-gray-300",
};

// --- DATA ---

const services = [
  {
    title: "Training & Workshops",
    desc: "We have been working with various companies involved essentially in Real Estate Business both in India and abroad, effectively rendering our professional services in recruitment of high skilled and trained people.",
    email: "services@bhaswarpaul.com",
    icon: <GraduationCap className="w-12 h-12 text-[#b79662] mb-4" />,
    image: "https://placehold.co/600x400/2a2a2a/b79662?text=Training+Illustration" 
  },
  {
    title: "Hiring & Placement",
    desc: "We have been working with various companies involved essentially in Real Estate Business both in India and abroad, effectively rendering our professional services in recruitment of high skilled and trained people.",
    email: "services@bhaswarpaul.com",
    icon: <Briefcase className="w-12 h-12 text-[#b79662] mb-4" />,
    image: "https://placehold.co/600x400/2a2a2a/b79662?text=Hiring+Illustration"
  }
];

const communityReasons = [
  { id: 1, title: "Connect With Like-Minded Professionals", desc: "Surround yourself with a diverse community of driven individuals who share your entrepreneurial spirit." },
  { id: 2, title: "Access To Exclusive Resources", desc: "Gain access to a wealth of resources, including industry insights, market trends, and business tools." },
  { id: 3, title: "Forge Strategic Partnerships", desc: "Cultivate strategic partnerships with fellow members to leverage each other's strengths." },
  { id: 4, title: "Promote Your Personal Brand", desc: "Showcase your expertise, products, and services to a captive audience within our network." },
];

const challenges = [
  { title: "Stagnant Sales And Profits", content: "Is your business struggling to grow year after year? We help you break the plateau." },
  { title: "Negative Cash Flows", content: "Struggling to manage daily expenses due to delayed payments? Optimize your working capital now." },
  { title: "Rising Debts And Interest Costs", content: "Learn strategies to restructure debt and regain financial freedom." },
  { title: "Ineffective Marketing And Sales", content: "Build a high-converting sales funnel that delivers ROI." },
  { title: "Disengaged Team", content: "Implement OKR systems to align your team and boost productivity." },
];

const newsData = [
  { id: 1, source: "siliconindia.com", title: "India's Best Business Coach, Mr. Suresh Mansharamani, shares proven methods...", image: "https://placehold.co/400x250/4c4949/b79662?text=News+1" },
  { id: 2, source: "tribuneindia.com", title: "Facing Business Scalability Challenges? Insights from India's Most Experienced...", image: "https://placehold.co/400x250/4c4949/b79662?text=News+2" },
  { id: 3, source: "prabhatkhabar.com", title: "Success Story: ₹300 से शुरू हुआ सफर, 300 गुना ओवरसब्सक्राइब्ड IPO तक...", image: "https://placehold.co/400x250/4c4949/b79662?text=News+3" },
];

const videos = [1, 2, 3, 4]; // Placeholders

// --- COMPONENTS ---

export default function LandingPage() {
  const [openAccordion, setOpenAccordion] = useState(0);

  return (
    <>
    <Header />
    <main className={`min-h-screen ${THEME.bg} font-sans selection:bg-[#b79662] selection:text-white max-w-7xl mx-auto`}>
      
     

      {/* 2. CHECKERBOARD SERVICES (Training & Hiring) */}
      <section className="w-full">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row h-auto md:h-[500px]">
          {/* Image Block */}
          <div className="w-full md:w-1/2 bg-[#262626] relative flex items-center justify-center p-8 overflow-hidden group">
             <img src={services[0].image} className="max-w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105" alt="Training" />
          </div>
          {/* Text Block */}
          <div className={`w-full md:w-1/2 ${THEME.card} p-12 lg:p-20 flex flex-col justify-center`}>
            {services[0].icon}
            <h3 className={`text-3xl font-bold ${THEME.textMain} mb-4`}>{services[0].title}</h3>
            <p className={`${THEME.textMuted} leading-relaxed mb-6`}>{services[0].desc}</p>
            <p className={`text-sm ${THEME.gold} font-medium`}>Contact: {services[0].email}</p>
          </div>
        </div>

        {/* Row 2 (Reversed Order on Desktop) */}
        <div className="flex flex-col md:flex-row h-auto md:h-[500px]">
          {/* Text Block */}
          <div className={`w-full md:w-1/2 ${THEME.card} p-12 lg:p-20 flex flex-col justify-center order-2 md:order-1`}>
            {services[1].icon}
            <h3 className={`text-3xl font-bold ${THEME.textMain} mb-4`}>{services[1].title}</h3>
            <p className={`${THEME.textMuted} leading-relaxed mb-6`}>{services[1].desc}</p>
            <p className={`text-sm ${THEME.gold} font-medium`}>Contact: {services[1].email}</p>
          </div>
          {/* Image Block */}
          <div className="w-full md:w-1/2 bg-[#262626] relative flex items-center justify-center p-8 overflow-hidden group order-1 md:order-2">
             <img src={services[1].image} className="max-w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105" alt="Hiring" />
          </div>
        </div>
      </section>

  
   <section className="w-full">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row h-auto md:h-[500px]">
          {/* Image Block */}
          <div className="w-full md:w-1/2 bg-[#262626] relative flex items-center justify-center p-8 overflow-hidden group">
             <img src={services[0].image} className="max-w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105" alt="Training" />
          </div>
          {/* Text Block */}
          <div className={`w-full md:w-1/2 ${THEME.card} p-12 lg:p-20 flex flex-col justify-center`}>
            {services[0].icon}
            <h3 className={`text-3xl font-bold ${THEME.textMain} mb-4`}>{services[0].title}</h3>
            <p className={`${THEME.textMuted} leading-relaxed mb-6`}>{services[0].desc}</p>
            <p className={`text-sm ${THEME.gold} font-medium`}>Contact: {services[0].email}</p>
          </div>
        </div>

        {/* Row 2 (Reversed Order on Desktop) */}
        <div className="flex flex-col md:flex-row h-auto md:h-[500px]">
          {/* Text Block */}
          <div className={`w-full md:w-1/2 ${THEME.card} p-12 lg:p-20 flex flex-col justify-center order-2 md:order-1`}>
            {services[1].icon}
            <h3 className={`text-3xl font-bold ${THEME.textMain} mb-4`}>{services[1].title}</h3>
            <p className={`${THEME.textMuted} leading-relaxed mb-6`}>{services[1].desc}</p>
            <p className={`text-sm ${THEME.gold} font-medium`}>Contact: {services[1].email}</p>
          </div>
          {/* Image Block */}
          <div className="w-full md:w-1/2 bg-[#262626] relative flex items-center justify-center p-8 overflow-hidden group order-1 md:order-2">
             <img src={services[1].image} className="max-w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105" alt="Hiring" />
          </div>
        </div>
      </section>
    


    </main>
    {/* <Footer /> */}
    </>
  );
}

// --- SUB COMPONENTS ---

const BenefitItem = ({ icon, title, desc }) => (
  <div className="flex gap-5">
    <div className={`flex-shrink-0 mt-1 text-[#b79662]`}>
      {React.cloneElement(icon, { size: 40 })}
    </div>
    <div>
      <h3 className="text-lg font-bold text-white uppercase mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed font-light">{desc}</p>
    </div>
  </div>
);


