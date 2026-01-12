"use client"; // Required for interactivity

import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import { Loader2 } from 'lucide-react'; // For loading spinner

// --- CONFIGURATION ---
const API_URL = "https://uat-service.ireedindia.com/v1/blog?website=bhaswarpaul&pageNumber=0&size=1000&published=true";
const IMAGE_BASE_URL = "https://uat-service.ireedindia.com/image/";

// --- HELPER: Strip HTML tags from description ---
const stripHtml = (html) => {
   if (!html) return "";
   return html.replace(/<[^>]*>?/gm, '');
};

// --- Sub-Components ---

const NewsCard = ({ article }) => {
  // Construct Image URL dynamically
  const imageUrl = article.image 
    ? (article.image.startsWith('http') ? article.image : `${IMAGE_BASE_URL}${article.image}`)
    : "/assets/images/placeholder.jpg"; // Use a valid placeholder path if image is missing

  return (
    // Card BG: #4c4949
    <div className="bg-[#4c4949] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#b79662]/20 hover:-translate-y-2 transition-all duration-300 border border-gray-600 group flex flex-col h-full">
      <div className="relative h-52 overflow-hidden shrink-0">
        <img 
          src={imageUrl} 
          alt={article.title} 
          onError={(e) => e.target.src = "https://via.placeholder.com/400x300?text=No+Image"}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        {/* Label: Gold Background */}
        <span className="absolute bottom-3 right-3 bg-[#b79662] text-xs font-bold px-3 py-1 rounded-sm text-white shadow-sm uppercase">
          {article.websites?.[0] || "Blog"}
        </span>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        {/* Title: Gold */}
        <h3 className="text-lg font-bold mb-3 text-[#b79662] line-clamp-2 leading-tight">
          {article.title}
        </h3>
        {/* Text: Light Gray */}
        <p className="text-gray-200 text-sm mb-6 line-clamp-3 flex-grow font-light">
          {stripHtml(article.description)}
        </p>
        {/* Button: Gold */}
        <a 
          href={`/blog/${article.slug}`} // Dynamic Lin
        >
           <button
            style={{
            padding: "14px 20px",
            backgroundColor: "#b79662", // Default Gold Background
            borderRadius: "8px",
            color: "#fff", // Default White Text
            fontSize: "1.1rem",
            fontWeight: "700",
            cursor: "pointer",
            display: "block",
            margin:"auto",
            width:"100%",
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
          Read Blog
          </span>
        </button>
        </a>
      </div>
    </div>
  );
};

const TestimonialHero = () => (
  <section className="flex flex-col lg:flex-row w-full min-h-[600px] max-w-7xl mx-auto mt-20 mb-10 shadow-2xl rounded-lg overflow-hidden">
    {/* Left Text Side: Background #4c4949 */}
    <div className="w-full lg:w-1/2 bg-[#4c4949] p-10 md:p-16 flex flex-col justify-center relative overflow-hidden">
      
      <div className="relative z-10">
        <span className="block text-[#b79662] font-bold tracking-widest uppercase mb-4 text-sm">
          OUR BLOG
        </span>
        <h2 className="text-3xl lg:text-4xl font-extrabold mb-8 leading-none text-white">
          Today’s complex challenges <br />
          <span className="text-[#b79662]">
            require bold solutions
          </span>
        </h2>
        <p className="text-gray-200 text-lg mb-10 leading-relaxed max-w-xl font-light">
          Welcome to our blog, where we delve into the realms of business coaching, leadership insights, motivational strategies, and more. Join us as we explore practical tips, success stories, and expert advice curated by Suresh Mansharamani, India's leading business coach. Whether you're an entrepreneur, a corporate leader, or someone aspiring to achieve more, our blog is your resource for inspiration and actionable knowledge. Stay tuned for regular updates that empower you to thrive in your personal and professional journey.
        </p>
        {/* <button className="bg-[#b79662] hover:bg-[#967d51] text-white font-bold py-4 px-10 rounded shadow-md hover:shadow-lg transition-all duration-300 w-fit text-lg uppercase tracking-wide">
          Join our community now
        </button> */}
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
           Join our community now
          </span>
        </button>
      </div>
    </div>

    {/* Right Image Side with Theme Overlay */}
    <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-auto bg-[#1e1e1e] group">
      <img 
        src="/assets/TEDx TAPMI/IMG_9697.jpg" // Ensure this image exists in your public folder
        alt="bhaswar paul" 
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
      />
      <div className="absolute inset-0 bg-[#b79662]/60 mix-blend-multiply z-10 group-hover:opacity-0 transition-all duration-500"></div>
      <div className="absolute inset-0 opacity-20 z-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
    </div>
  </section>
);

// --- Main Component ---

const MediaSection = () => {
  // State to manage data
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(9); // Start with 9 items

  // Fetch Data from API
  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await axios.get(API_URL);
        
        // Handle API response variations safely
        let data = [];
        if (response.data && Array.isArray(response.data.data)) {
            data = response.data.data;
        } else if (Array.isArray(response.data)) {
            data = response.data;
        } else if (response.data && response.data.blogs) {
            data = response.data.blogs;
        }

        setArticles(data);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  // Handler to load more articles
  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3); // Load 3 more
  };

  return (
    <>
      <Header />
      <div className="bg-white flex flex-col min-h-screen">
        {/* Section 2: Testimonial Hero */}
        <TestimonialHero />

        {/* Section 1: News Grid */}
        <section className="py-10 px-4 md:px-8 lg:px-16 relative">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-10">
              {/* <span className="text-[#b79662] font-bold tracking-wider uppercase mb-2 block">In The News</span> */}
              <h2 className="text-3xl md:text-4xl font-bold text-[#b79662]">Blogs </h2> 
              {/* <span className="text-[#b79662]">Coverage</span></h2> */}
              <div className="w-24 h-1 bg-[#b79662] mx-auto mt-4 rounded-full"></div>
            </div>
            
            {/* Loading State */}
            {loading ? (
                <div className="flex justify-center items-center h-40">
                    <Loader2 className="animate-spin text-[#b79662] w-10 h-10" />
                </div>
            ) : (
                <>
                    {/* Grid with Sliced Data */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                      {articles.slice(0, visibleCount).map(article => (
                        // KEY FIX: Using unique _id from API to prevent duplicate key errors
                        <NewsCard key={article._id} article={article} />
                      ))}
                    </div>

                    {/* Load More Button - Conditional Rendering */}
                    {visibleCount < articles.length && (
                      <div className="flex justify-center">
                        <button
                          onClick={handleLoadMore}
                          className="px-8 py-3 bg-[#b79662] hover:bg-[#967d51] text-white font-bold rounded shadow-lg transform transition-all duration-300 hover:scale-105 active:scale-95 uppercase tracking-wider"
                        >
                          Load More
                        </button>
                      </div>
                    )}
                    
                    {articles.length === 0 && (
                        <p className="text-center text-gray-500 mt-10">No articles found.</p>
                    )}
                </>
            )}
          </div>
        </section>

        {/* Section 3: Video Grid (Commented out in original, kept commented) */}
        {/* <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#1e1e1e] relative">
          ...
        </section> */}
      </div>
      <Footer />
    </>
  );
};

export default MediaSection;