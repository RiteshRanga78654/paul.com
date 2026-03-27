"use client";

import React, { useState, useEffect } from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import MediaLogo from "../components/MediaLogo";

const IMAGE_BASE_URL = "https://uat-service.ireedindia.com/image/";

// --- Reusable Gold Button ---
const GoldButton = ({ text, onClick, href, className = "" }) => {
  const content = (
    <div
      className={`group relative z-10 overflow-hidden rounded-full border-2 border-[#b79662] bg-[#b79662] px-8 py-3 text-center text-sm font-bold tracking-wider transition-all duration-300 ${className}`}
    >
      <div className="absolute inset-0 left-0 top-0 -z-10 h-full w-0 bg-white transition-all duration-400 ease-in-out group-hover:w-full" />
      <span className="relative text-white transition-colors duration-300 group-hover:text-[#b79662]">
        {text}
      </span>
    </div>
  );

  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block"
    >
      {" "}
      {content}{" "}
    </a>
  ) : (
    <button onClick={onClick} className="inline-block">
      {" "}
      {content}{" "}
    </button>
  );
};

// --- Modern News Card ---
const NewsCard = ({ article }) => {
  const fullImageUrl = article.image
    ? article.image.startsWith("http")
      ? article.image
      : `${IMAGE_BASE_URL}${article.image}`
    : "/assets/placeholder.jpg";

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative h-64 overflow-hidden">
        <img
          src={fullImageUrl}
          alt={article.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="flex flex-grow flex-col p-6">
        <span className="mb-2 text-xs font-bold uppercase tracking-widest text-[#b79662]">
          {article.badge || "Press"}
        </span>
        <h3 className="mb-3 line-clamp-2 text-xl font-bold leading-tight text-gray-900 transition-colors group-hover:text-[#b79662]">
          {article.title}
        </h3>
        <p className="mb-6 flex-grow text-sm leading-relaxed text-gray-600 line-clamp-3">
          {article.description?.replace(/<[^>]*>?/gm, "")}
        </p>
        <a
          href={`/media/${article.slug}`}
          className="text-sm font-bold text-[#b79662] underline-offset-4 hover:underline"
        >
          Read Full Story →
        </a>
      </div>
    </div>
  );
};

const MediaSection = () => {
  const [articles, setArticles] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          "https://uat-service.ireedindia.com/v1/articles?website=bhaswarpaul&pageNumber=0&size=1000",
        );
        const result = await response.json();
        setArticles(result.blogs || []);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  return (
    <>
      <Header />
      <main className="bg-[#fafafa]">
        {/* 1. HERO SECTION */}
        <section className="relative flex h-[90vh] items-center justify-center overflow-hidden">
          <img
            src="/assets/close-up-recording-video-with-smartphone-concert-toned-picture.jpg"
            className="absolute inset-0 h-full w-full object-cover"
            alt="Hero Background"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
          <div className="relative z-10 px-4 text-center -mt-3`0">
            <span className="mb-4 block text-xs font-bold tracking-[0.4em] text-[#b79662] uppercase">
              Media & Press
            </span>
            <h1 className="mb-6 text-5xl font-bold text-[#b79662] md:text-7xl">
              Leadership <span className="text-[#b79662]">Insights</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg font-light text-gray-300 md:text-xl">
              Strategic perspectives and media coverage featuring the leadership
              principles of Bhaswar Paul.
            </p>
          </div>
        </section>

        {/* 2. PURCHASE ENTRIES SECTION */}
        <section className="relative z-20 -mt-16 px-4">
          <div className="mx-auto flex max-w-7xl flex-col overflow-hidden rounded-2xl bg-[#1a1a1a] shadow-2xl lg:flex-row">
            <div className="flex flex-1 items-center justify-center bg-[#b79662] p-12">
              <GoldButton
                text="Purchase Entries"
                className="!bg-[#b79662] !border-[#ffffff] !text-white  
               hover:!bg-[#b79662] hover:!border-[#b79662] 
               py-5 px-12 text-xl"
              />
            </div>
            <div className="flex-[1.5] p-10 md:p-16">
              <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
                The MCA Awards 2026
              </h2>
              <p className="text-gray-400 leading-relaxed whitespace-pre-line">
  {`Bhaswar Paul has established a strong presence in national media, emerging as a recognized voice in India’s evolving real estate ecosystem. Through his leadership at IREED India, he has been instrumental in introducing innovative, industry-aligned initiatives that bridge the gap between academic learning and real-world application. 

  IREED India is widely acknowledged for its pioneering approach to real estate education and skill development, with a clear focus on creating industry-ready professionals. The organization’s distinctive offerings include:
  
  Hire–Train–Deploy (HTD) Model: 
  Sales Assessment Solutions: 
  Project Management Consultancy:`}
</p>
            </div>
          </div>
        </section>

        {/* Media Logo */}
        <MediaLogo />

        {/* 6. NEWS GRID SECTION */}
        <section className="bg-white py-24 px-4 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 flex flex-col items-center justify-between gap-4 border-b border-gray-100 pb-8 md:flex-row">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                  Latest Press <span className="text-[#b79662]">Coverage</span>
                </h2>
                <p className="text-gray-500 mt-2">
                  Articles and interviews from across the web
                </p>
              </div>
              <GoldButton
                text="Refresh Feed"
                onClick={() => window.location.reload()}
                className="text-xs py-2"
              />
            </div>

            {loading ? (
              <div className="flex justify-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-[#b79662]"></div>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                {articles.slice(0, visibleCount).map((article) => (
                  <NewsCard key={article._id} article={article} />
                ))}
              </div>
            )}

            {visibleCount < articles.length && (
              <div className="mt-16 text-center">
                <GoldButton
                  text="Load More Stories"
                  onClick={() => setVisibleCount((prev) => prev + 6)}
                />
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default MediaSection;
