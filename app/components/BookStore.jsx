import React from 'react';
import { ShoppingCart, Star, ArrowRight } from 'lucide-react';

// --- Mock Data ---
const books = [
  {
    id: 1,
    category: "OWN THE STAGE",
    title: "Real Estate Mastery",
    description: "This book is a powerful guide to understand, navigate, and succeed in the dynamic world of real estate based on over two decades of experience in sales, marketing, and customer hospitality.",
    imageAlt: "Own The Stage Book Cover",
    buttonText: "Buy From Amazon",
    imageSrc: "/assets/images/book-1.jpeg" ,
    link: "https://www.amazon.in/Real-Estate-Mastery-Bhaswar-Paul-ebook/dp/B0DL38F29X/ref=sr_1_2?dib=eyJ2IjoiMSJ9.NKVmjFdx3fA54ndkvoK7XsNzTw1O2Ekhb2bOHuxu-O_GjHj071QN20LucGBJIEps.mlomRHVm6UPB7syFMB_aIqkTJhgI-M95goCfWY5gjkI&dib_tag=se&qid=1758549202&refinements=p_27%3ABhaswar+Paul&s=books&sr=1-2"
  },
  {
    id: 2,
    category: "LOSE 20+ KGS AND REVERSE YOUR DIABETES IN 90 DAYS",
    title: "Foundation Of Real Estate",
    description: "The book is designed and scripted as a practical guide for real estate professionals, entrepreneurs, sales leaders, investors, and aspiring realtors who want to build sustainable and scalable careers in the real estate ecosystem.",
    imageAlt: "Weight Loss Journey Book Cover",
    buttonText: "Buy From Amazon",
    imageSrc: "/assets/images/image.png" ,
    link: "https://www.amazon.in/Foundations-Real-Estate-Bhaswar-Paul/dp/9358476729/ref=sr_1_3?dib=eyJ2IjoiMSJ9.NKVmjFdx3fA54ndkvoK7XsNzTw1O2Ekhb2bOHuxu-O_GjHj071QN20LucGBJIEps.mlomRHVm6UPB7syFMB_aIqkTJhgI-M95goCfWY5gjkI&dib_tag=se&qid=1758549202&refinements=p_27%3ABhaswar+Paul&s=books&sr=1-3"
  },
  {
    id: 3,
    category: "CLOSING YOUR SALES",
title: "Exploring Real Estate Frontiers ",
    description: "This is a forward looking book scripted to offer deep insights into the evolving dynamics of the real estate sector, encouraging professionals to move beyond conventional selling methods and adopt strategic thinking, ethical practices, and sustainable growth models.",
    imageAlt: "Closing Your Sales Book Cover",
    buttonText: "Buy From Amazon",
    imageSrc: "/assets/images/book-3.jpeg",
    link:"https://www.amazon.in/Exploring-Real-Estate-Frontiers-Bhaswar-ebook/dp/B0DL2C9HLN/ref=sr_1_1?dib=eyJ2IjoiMSJ9.NKVmjFdx3fA54ndkvoK7XsNzTw1O2Ekhb2bOHuxu-O_GjHj071QN20LucGBJIEps.mlomRHVm6UPB7syFMB_aIqkTJhgI-M95goCfWY5gjkI&dib_tag=se&qid=1758549202&refinements=p_27%3ABhaswar+Paul&s=books&sr=1-1"
  },
  
];

const BookCard = ({ book }) => {
  return (
    // Outer Container shadow and rounded corners
    <div className="flex flex-col md:flex-row w-full h-full shadow-xl overflow-hidden rounded-lg hover:shadow-2xl hover:shadow-[#b79662]/10 transition-shadow duration-300 bg-[#4c4949]">
      
      {/* Left Side: Content Area (Dark Gray #4c4949) */}
      <div className="w-full md:w-1/2 bg-[#4c4949] p-6 sm:p-8 flex flex-col justify-center text-white relative border-r border-gray-700/50">
        
        {/* Decorative subtle gradient overlay (changed from blue to dark) */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent opacity-30 pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col h-full justify-between">
          <div>
            {/* <span className="text-xs sm:text-sm font-bold tracking-widest uppercase opacity-60 mb-2 block text-gray-300">
              {book.category}
            </span> */}
            {/* Title: Gold Theme #b79662 */}
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold leading-tight mb-4 sm:mb-6 text-[#b79662]">
              {book.title}
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-gray-200 mb-6 sm:mb-8 line-clamp-4 md:line-clamp-none">
              {book.description}
            </p>
          </div>

          <div>
            {/* Button: Gold Background */}
            <a href={book.link} target="_blank" rel="noopener noreferrer" >
               <button
            style={{
            padding: "14px 20px",
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
           {book.buttonText}
          </span>
        </button>
            </a>
          </div>
        </div>
      </div>

      {/* Right Side: Image Area (Slightly Darker Gray #3d3a3a for contrast) */}
      <div className="w-full md:w-1/2 bg-[#3d3a3a] p-6 sm:p-8 flex items-center justify-center relative overflow-hidden min-h-[250px] md:min-h-0 border-l border-gray-600/30">
        {/* Background Pattern effect */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(circle, #b79662 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
        </div>

        {/* Image Container with Shadow */}
        <div className="relative z-10 transform transition-transform duration-500 hover:scale-105">
           {/* Book Shadow simulation */}
          <div className="absolute -bottom-4 -right-4 w-full h-full bg-black opacity-40 blur-lg rounded-sm"></div>
          
          <img 
            src={book.imageSrc} 
            alt={book.imageAlt}
            className="relative w-32 sm:w-40 md:w-full md:max-w-[200px] lg:max-w-[240px] h-auto shadow-[5px_0_15px_rgba(0,0,0,0.5)] rounded-r-sm border-l-4 border-white/10"
            style={{ aspectRatio: '2/3' }}
          />
        </div>
      </div>

    </div>
  );
};

const BookStore = () => {
  return (
    // Main Section Background: Dark Charcoal to contrast with #4c4949 cards
    <div className="min-h-screen bg-white py-2 sm:py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* BookStore Section */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#000] mb-4 tracking-tight">
          Books & Journals <span className="text-[#b79662]">Published</span>
          </h2>
          
          {/* Divider: Gold Theme */}
          <div className="w-24 h-1 bg-[#b79662] mx-auto rounded"></div>
        </div>

        {/* Grid Layout - Responsive adjustments */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

       

      </div>
    </div>
  );
};

export default BookStore;