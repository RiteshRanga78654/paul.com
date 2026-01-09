"use client";

import React, { useState, useEffect } from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

const IMAGE_BASE_URL = "https://uat-service.ireedindia.com/image/";

// --- Reusable Gold Button Component ---
const GoldButton = ({ text, onClick, href }) => {
  const content = (
    <div className="group relative z-10 overflow-hidden rounded-lg border-2 border-[#b79662] bg-[#b79662] px-10 py-3.5 text-center text-lg font-bold tracking-wider transition-all duration-300">
      <div className="absolute inset-0 left-0 top-0 -z-10 h-full w-0 bg-white transition-all duration-400 ease-in-out group-hover:w-full" />
      <span className="relative text-white transition-colors duration-300 group-hover:text-[#b79662]">
        {text}
      </span>
    </div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block w-full"> {content} </a>
  ) : (
    <button onClick={onClick} className="inline-block w-full"> {content} </button>
  );
};

// --- News Card Component ---
const NewsCard = ({ article }) => {
  // Construct the full image URL
  const fullImageUrl = article.image 
    ? (article.image.startsWith('http') ? article.image : `${IMAGE_BASE_URL}${article.image}`)
    : "/assets/placeholder.jpg";

  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-gray-600 bg-[#4c4949] shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#b79662]/20">
      <div className="relative h-52 overflow-hidden bg-gray-700">
        <img
          src={fullImageUrl}
          alt={article.title || "News Article"}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => { e.target.src = "/assets/placeholder.jpg"; }} // Fallback if image fails to load
        />
        {article.badge && (
          <span className="absolute bottom-3 right-3 rounded-sm bg-[#b79662] px-3 py-1 text-xs font-bold text-white shadow-sm">
            {article.badge}
          </span>
        )}
      </div>
      <div className="flex flex-grow flex-col p-6">
        <h3 className="mb-3 line-clamp-2 text-lg font-bold leading-tight text-[#b79662]">
          {article.title}
        </h3>
        <p className="mb-6 flex-grow text-sm font-light text-gray-200 line-clamp-3">
          {/* Cleans up any HTML tags coming from the API description */}
          {article.description?.replace(/<[^>]*>?/gm, '')}
        </p>
        <div className="mx-auto w-full">
          <GoldButton text="Read More" href={`/media/${article.slug}`} />
        </div>
      </div>
    </div>
  );
};

// --- Hero Component ---
const TestimonialHero = () => (
  <section className="mx-auto mt-10 mb-10 flex max-w-7xl flex-col overflow-hidden rounded-lg shadow-2xl lg:mt-20 lg:flex-row">
    <div className="flex w-full flex-col justify-center bg-[#4c4949] p-10 md:p-16 lg:w-1/2">
      <span className="mb-4 block text-sm font-bold tracking-widest text-[#b79662]">Media</span>
      <h2 className="mb-8 text-3xl font-bold leading-none text-white lg:text-4xl">
        After hours with Tajurba <br />
        <span className="text-[#b79662]">Bhaswar Paul in Media Coverage</span>
      </h2>
      <p className="mb-10 max-w-xl text-lg font-light leading-relaxed text-gray-200">
        "The calmness of the early hours allows me to focus without distractions, 
        whether it's reading or reflecting on goals. It fuels my energy and creativity 
        throughout the busy workday."
      </p>
      <div className="w-fit">
        <GoldButton text="Explore Stories" onClick={() => {}} />
      </div>
    </div>
    <div className="group relative min-h-[400px] w-full bg-[#1e1e1e] lg:w-1/2">
      <img 
        src="/assets/TEDx TAPMI/IMG_6622.jpg" 
        alt="Bhaswar Paul" 
        className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0" 
      />
      <div className="absolute inset-0 z-10 bg-[#b79662]/60 mix-blend-multiply transition-all duration-500 group-hover:opacity-0" />
    </div>
  </section>
);

// --- Main Page Component ---
const MediaSection = () => {
  const [articles, setArticles] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          "https://uat-service.ireedindia.com/v1/articles?website=bhaswarpaul&pageNumber=0&size=1000"
        );
        const result = await response.json();
        
        // Target 'blogs' as seen in your API screenshot
        const fetchedData = result.blogs || []; 
        setArticles(fetchedData);
      } catch (error) {
        console.error("Error fetching articles:", error);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  return (
    <>
      <Header />
      <main className="flex flex-col bg-white min-h-screen">
        <TestimonialHero />

        <section className="py-10 px-4 md:px-8 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <span className="mb-2 block font-bold tracking-wider text-[#b79662]">In The News</span>
              <h2 className="text-3xl font-bold text-[#b79662] md:text-4xl">
                Media <span className="text-[#b79662]">Coverage</span>
              </h2>
              <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-[#b79662]" />
            </div>

            {loading ? (
              <div className="flex justify-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#b79662]"></div>
              </div>
            ) : (
              <>
                <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {articles.length > 0 ? (
                    articles.slice(0, visibleCount).map((article) => (
                      <NewsCard key={article._id} article={article} />
                    ))
                  ) : (
                    <div className="col-span-full text-center py-20 text-gray-400">
                      No media coverage found at this time.
                    </div>
                  )}
                </div>

                {visibleCount < articles.length && (
                  <div className="flex justify-center">
                    <GoldButton 
                      text="Load More" 
                      onClick={() => setVisibleCount(prev => prev + 6)} 
                    />
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default MediaSection;