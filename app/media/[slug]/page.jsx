"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";

const ArticleDetail = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setReadingProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    fetch("https://uat-service.ireedindia.com/v1/articles?website=bhaswarpaul&pageNumber=0&size=1000")
      .then((res) => res.json())
      .then((data) => {
        if (data?.blogs) {
          const found = data.blogs.find((item) => item.slug === slug);
          setArticle(found);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="h-1 w-32 bg-gray-100 rounded-full overflow-hidden">
        <div className="h-full bg-[#b79662] animate-pulse"></div>
      </div>
    </div>
  );

  if (!article) return <div className="p-20 text-center">Article not found.</div>;

  const baseImgPath = "https://uat-service.ireedindia.com/image/";

  return (
    <>
      <Header />
      
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 h-1 bg-[#b79662] z-50 transition-all duration-75" style={{ width: `${readingProgress}%` }} />

      <main className="bg-[#fafafa] min-h-screen pb-20">
        
        {/* --- ARTICLE HEADER --- */}
        <header className="pt-14 pb-12 px-4 max-w-6xl mx-auto text-left">
          {/* <div className="flex justify-center mb-6">
            <span className="px-4 py-1 rounded-full border border-[#b79662] text-[#b79662] text-[10px] uppercase font-black tracking-widest">
              {article.badge || "Featured"}
            </span>
          </div> */}
          
          <h1 className="text-4xl md:text-6xl font-serif font-medium text-[#1a1a1a] leading-tight mb-8">
            {article.title}
          </h1>

          <div className="flex items-left gap-4 justify-left text-sm text-gray-500 font-medium">
            <span className="text-[#1a1a1a]">Author: {article.author}</span>
            <span className="w-1 h-5 bg-gray-300 rounded-full"></span>
            <span>Posted On: {new Date(article.publishedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
          </div>
        </header>

        {/* --- MAIN FEATURE IMAGE --- */}
        <div className="max-w-6xl mx-auto px-4 mb-16">
          <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[21/9]">
            <img 
              src={`${baseImgPath}${article.image}`} 
              className="w-full h-full object-cover" 
              alt="cover"
            />
          </div>
        </div>

        {/* --- CONTENT GRID --- */}
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Sidebar: Socials & Author Info (Fixed on Desktop) */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 h-fit space-y-10 order-2 lg:order-1">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#4c4949] rounded-xl flex items-center justify-center text-[#b79662] font-bold text-xl mb-4">
                {article.author?.charAt(0)}
              </div>
              <p className="text-xs text-gray-400 uppercase tracking-tighter font-bold mb-1">Author</p>
              <h3 className="text-gray-900 font-bold mb-1">{article.author}</h3>
              <p className="text-xs text-[#b79662] mb-4">{article.designation}</p>
              <p className="text-[13px] text-gray-500 leading-relaxed">
                Expert contributor at {article.companyName}. Specializing in real estate insights.
              </p>
            </div>

            <div className="flex lg:flex-col gap-4 px-2">
              <button className="flex-1 lg:w-full py-2 border border-gray-200 rounded-lg text-xs hover:bg-black hover:text-white transition-all">Share on X</button>
              <button className="flex-1 lg:w-full py-2 border border-gray-200 rounded-lg text-xs hover:bg-[#0077b5] hover:text-white transition-all">LinkedIn</button>
            </div>
          </aside>

          {/* Center: The actual article content */}
          <article className="lg:col-span-8 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 order-1 lg:order-2">
            <div className="premium-content">
              <div 
                dangerouslySetInnerHTML={{ __html: article.content }} 
              />
            </div>
          </article>
          
          {/* Right Sidebar: Empty/Spacer or Newsletter */}
          <aside className="lg:col-span-2 hidden xl:block order-3" />
        </div>
      </main>

      <style jsx global>{`
        /* Minimalist Typography overrides */
        .premium-content {
          font-family: 'Inter', sans-serif;
          font-size: 1.15rem;
          line-height: 1.85;
          color: #333;
        }
        .premium-content h2 {
          font-family: serif;
          font-size: 2.25rem;
          margin-top: 3rem;
          margin-bottom: 1.5rem;
          color: #1a1a1a;
          line-height: 1.2;
        }
        .premium-content p {
          margin-bottom: 1.75rem;
        }
        .premium-content ul {
          margin: 2rem 0;
          padding-left: 1.2rem;
        }
        .premium-content li {
          margin-bottom: 0.8rem;
          list-style: none;
          position: relative;
        }
        .premium-content li::before {
          content: "•";
          color: #b79662;
          font-weight: bold;
          position: absolute;
          left: -1.2rem;
        }
        .premium-content strong {
          color: #1a1a1a;
          font-weight: 700;
        }
        /* Style the actual HTML from the API */
        .premium-content div > * {
          max-width: 100%;
        }
      `}</style>
      <Footer />
    </>
  );
};

export default ArticleDetail;