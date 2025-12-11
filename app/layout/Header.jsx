"use client";

import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Configuration for links
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Events', href: '/events',  hasDropdown: false },
    { name: 'Services', href: '/services ', hasDropdown: false },
    { name: 'Testimonials', href: '/testimonial' },
    { name: 'Network', href: '/network' },
    { name: 'Blogs', href: '/blog' },
    { name: 'Media', href: '/media' },
  ];

  return (
    // Changed to 'sticky' so it pushes content down (doesn't hide it)
    <nav className="sticky top-0 z-50 w-full font-sans bg-[#1e1e1e] border-b border-white/10 shadow-lg">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* 1. LOGO SECTION */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <img 
              src="/assets/images/logo.png" 
              alt="SMR Logo" 
              className="h-15 w-auto object-contain"
              // Added error handler: shows text if image is missing
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            {/* Fallback Text (Hidden unless image fails) */}
            <span className="hidden text-3xl font-black text-white tracking-tighter ml-2">
              SMR<span className="text-[#b79662]">.</span>
            </span>
          </div>

          {/* 2. DESKTOP MENU */}
          <div className="hidden xl:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group h-full flex items-center">
                <a
                  href={link.href}
                  className="flex items-center text-gray-300 hover:text-[#b79662] text-[15px] font-medium transition-colors duration-300 tracking-wide"
                >
                  {link.name}
                  {/* Inline SVG Chevron Down */}
                  {link.hasDropdown && (
                    <svg className="ml-1 w-4 h-4 text-[#b79662] group-hover:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </a>

                {/* Dropdown Menu (Dark Theme #4c4949) */}
                {link.hasDropdown && (
                  <div className="absolute left-0 top-full pt-4 w-56 hidden group-hover:block z-50">
                    <div className="bg-[#4c4949] rounded-lg shadow-2xl py-2 border border-gray-600">
                      <a href="#" className="block px-4 py-3 text-sm text-gray-200 hover:bg-[#b79662] hover:text-white transition-colors duration-200">
                        Corporate Events
                      </a>
                      <a href="#" className="block px-4 py-3 text-sm text-gray-200 hover:bg-[#b79662] hover:text-white transition-colors duration-200">
                        Workshops
                      </a>
                      <a href="#" className="block px-4 py-3 text-sm text-gray-200 hover:bg-[#b79662] hover:text-white transition-colors duration-200">
                        Seminars
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 3. CTA BUTTON */}
          <div className="hidden xl:flex items-center">
            <button className="bg-[#b79662] hover:bg-[#967d51] text-white px-8 py-2.5 rounded shadow-[0_4px_14px_0_rgba(183,150,98,0.39)] hover:shadow-[0_6px_20px_rgba(183,150,98,0.23)] hover:-translate-y-0.5 transition-all duration-300 font-medium tracking-wide text-sm uppercase">
              Let's Talk
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-[#b79662] focus:outline-none transition-colors p-2"
            >
              {/* Hamburger / Close Icons (Inline SVG) */}
              {!isOpen ? (
                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              ) : (
                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {/* Background set to Dark #1e1e1e */}
      <div 
        className={`xl:hidden absolute w-full left-0 bg-[#1e1e1e] border-t border-gray-800 shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pt-4 pb-8 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-4 py-3 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-[#4c4949] transition-all duration-200 border-b border-gray-800/50"
            >
              <div className="flex justify-between items-center">
                {link.name}
                {link.hasDropdown && (
                   <svg className="w-4 h-4 text-[#b79662]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                )}
              </div>
            </a>
          ))}
          <div className="pt-6 px-2">
            <button className="w-full bg-[#b79662] hover:bg-[#967d51] text-white px-6 py-4 rounded font-bold uppercase tracking-wider transition-colors">
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;