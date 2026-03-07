"use client";

import React, { useState, useEffect } from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

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
           <div className="relative z-10 px-4 text-center -mt-30">
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
              <p className="text-gray-400 leading-relaxed">
                The MCA Awards have been an important event in the UK consulting
                calendar for over 25 years. Each year, they demonstrate the true
                value of consulting to both the private and public sector and
                the impact consulting has on our society. For 2026, we are
                pleased to announce that there will be 24 categories of awards
                including prizes for firms, projects and individuals. Three of
                these categories are for ‘overall’ winners, with the prestigious
                Project of the Year going to the project that the judges believe
                most powerfully illustrates the positive impact and quality of
                modern consulting.
              </p>
            </div>
          </div>
        </section>

        {/* 3. YOUTUBE VIDEOS SECTION */}
        <section className="py-24 px-4">
          <div className="mx-auto max-w-5xl">
            {/* <div className="mb-12 text-center">
              <span className="text-[#b79662] font-bold tracking-widest uppercase text-xs">Featured Content</span>
              <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">Video <span className="text-[#b79662]">Gallery</span></h2>
              <div className="mx-auto mt-4 h-1 w-20 bg-[#b79662]" />
            </div> */}
            <div className="aspect-video overflow-hidden rounded-2xl bg-black shadow-lg transition-transform hover:scale-[1.01]">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/NYbFAiZgvAM"
                title="Leadership Insight"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        {/* 4. NEW: ICON NAVIGATION SECTION (From Image 2) */}
        <section className="relative bg-[#0d0d0d]   border-[#b79662] border-b">
          <div
            className="relative py-16 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/assets/unnamed.jpg')",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0  bg-black/60"></div>

            <div className="relative grid grid-cols-2 gap-8 md:grid-cols-4">
              {[
                { name: "TIMELINE", icon: "📅" },
                { name: "CATEGORIES", icon: "📁" },
                { name: "FAQS", icon: "💬" },
                { name: "GUIDANCE", icon: "📂" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center cursor-pointer"
                >
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#1a1a1a] text-3xl transition-all duration-300 group-hover:bg-[#b79662]">
                    {item.icon}
                  </div>
                  <span className="text-xs font-bold tracking-widest text-white group-hover:text-[#b79662]">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. NEW: CONTACT SECTION (From Image 2) */}
        <section className="bg-[#0d0d0d] pb-24 px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-10 inline-block h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
            <p className="mb-6 text-gray-400">
              For queries please contact{" "}
              <span className="font-bold text-white">Bhaswar Paul</span>.
            </p>
            <a
              href="mailto:bhaswar.paul@mca.org.uk"
              className="block text-xl font-medium text-[#b79662] hover:underline"
            >
              info@bhaswarpaul.com
            </a>
            <p className="mt-2 text-gray-400">Ph. +91 981-883-7873</p>

            <div className="mt-12 flex justify-center">
              <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-[#b79662] p-1 shadow-xl">
                <img
                  src="/assets/BPimages/DSC_0421.JPG"
                  alt="Natalie Mendez"
                  className="h-full w-full rounded-full object-cover transition-all duration-500 hover:grayscale-0"
                />
              </div>
            </div>
          </div>
        </section>

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
