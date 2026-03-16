"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import { Loader2 } from "lucide-react";
import CaseStudy from "../components/CaseStudy";
import WeHelp from "../components/WeHelp";

// --- CONFIGURATION ---
const API_URL =
  "https://uat-service.ireedindia.com/v1/blog?website=bhaswarpaul&pageNumber=0&size=1000&published=true";
const IMAGE_BASE_URL = "https://uat-service.ireedindia.com/image/";

const MediaSection = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(3);

  // --- DATA FETCHING ---
  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await axios.get(API_URL, {
          headers: { "Cache-Control": "no-cache" },
        });
        const data = response.data?.data || response.data?.blogs || [];
        setArticles(data);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  // --- SUB-COMPONENTS ---

  const TestimonialHero = () => (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/assets/The-Persimmon-Group-Consulting-and-Project-Management.webp')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 text-center text-[#b79662] px-4 max-w-5xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight ">
          IREED India A New Way Forward
        </h1>
        <p className="text-xl md:text-2xl text-white font-semibold mb-6 max-w-3xl mx-auto leading-relaxed">
          A forward thinking, unique initiative in real estate education and
          entrepreneurship development.
        </p>
        <p className="text-lg md:text-xl italic text-white font-light opacity-90">
          Standing still is losing ground to those who are continuously
          improving.
        </p>
      </div>
    </section>
  );

  const HelpCard = ({ image, eyebrow, title, description }) => (
    <div className="flex flex-col bg-white shadow-lg rounded-sm overflow-hidden h-full border border-gray-100">
      <div className="h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-10 flex-grow flex flex-col text-center">
        <span className="text-[#111111] font-bold  tracking-[0.1em] text-[13px] mb-2">
          {eyebrow}
        </span>
        <h3 className="text-4xl font-bold text-[#b79662] mb-5">{title}</h3>
        <p className="text-slate-600 leading-relaxed mb-10 flex-grow text-[16px] font-light">
          {description}
        </p>
        <div className="max-w-[220px] mx-auto w-full">
          <button
            style={{
              padding: "14px 40px",
              backgroundColor: "#b79662",
              borderRadius: "8px",
              color: "#fff",
              fontSize: "1.1rem",
              fontWeight: "700",
              cursor: "pointer",
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              position: "relative",
              overflow: "hidden",
              zIndex: 1,
              border: "2px solid #b79662",
              margin: "0 auto",
              letterSpacing: "1px",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              const fill = e.currentTarget.querySelector(".hover-fill");
              const text = e.currentTarget.querySelector(".btn-text");
              if (fill) fill.style.width = "100%";
              if (text) text.style.color = "#b79662";
            }}
            onMouseLeave={(e) => {
              const fill = e.currentTarget.querySelector(".hover-fill");
              const text = e.currentTarget.querySelector(".btn-text");
              if (fill) fill.style.width = "0%";
              if (text) text.style.color = "#fff";
            }}
          >
            <div
              className="hover-fill"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "0%",
                height: "100%",
                background: "#ffffff",
                transition: "width 0.4s ease",
                zIndex: -1,
              }}
            />
            <span
              className="btn-text"
              style={{
                position: "relative",
                zIndex: 1,
                color: "#fff",
                transition: "color 0.3s ease",
              }}
            >
              Learn More
            </span>
          </button>
        </div>
      </div>
    </div>
  );

  const NewsCard = ({ article }) => {
    const imageUrl = article.image
      ? article.image.startsWith("http")
        ? article.image
        : `${IMAGE_BASE_URL}${article.image}`
      : "https://via.placeholder.com/400x300?text=No+Image";

    // Open by slug, fallback to _id if slug is missing
    const identifier = article.slug || article._id;

    return (
      <Link href={`/blog/${identifier}`} className="block h-full group">
        <div className="flex flex-col bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] rounded-sm overflow-hidden transition-transform duration-300 group-hover:-translate-y-2 h-full">
          <div className="relative h-60 overflow-hidden">
            <img
              src={imageUrl}
              alt={article.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#b79662]"></div>
          </div>
          <div className="p-10 flex flex-col flex-grow text-center">
            <span className="text-[#b79662] font-bold  tracking-[0.2em] text-[10px] mb-4">
              {article.websites?.[0] || "LEADERSHIP"}
            </span>
            <h3 className="text-[22px] font-bold text-slate-900 mb-4 leading-snug line-clamp-3">
              {article.title}
            </h3>
            <div className="mt-auto pt-4 flex flex-col items-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border border-gray-100">
                <img
                  src="/assets/BPimages/DSC_0421.JPG"
                  alt="Author"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-gray-400 font-bold  tracking-[0.2em] text-[11px]">
                SARA GALLAGHER
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  };

  const NewsletterSection = () => (
    <section
      className="relative py-35 px-4 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/unnamed.jpg')" }}
    >
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight ">
          Sign Up For Our Newsletter
        </h2>

        <p className="mb-8 text-xl font-light  max-w-7xl blod mx-auto leading-relaxed">
          Practical strategies to help you thrive in Leadership, Project
          Management, and more.
        </p>
        <button
          style={{
            padding: "14px 40px",
            backgroundColor: "#b79662",
            borderRadius: "8px",
            color: "#fff",
            fontSize: "1.1rem",
            fontWeight: "700",
            cursor: "pointer",
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            position: "relative",
            overflow: "hidden",
            zIndex: 1,
            border: "2px solid #b79662",
            margin: "0 auto",
            letterSpacing: "1px",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            const fill = e.currentTarget.querySelector(".hover-fill");
            const text = e.currentTarget.querySelector(".btn-text");
            if (fill) fill.style.width = "100%";
            if (text) text.style.color = "#b79662";
          }}
          onMouseLeave={(e) => {
            const fill = e.currentTarget.querySelector(".hover-fill");
            const text = e.currentTarget.querySelector(".btn-text");
            if (fill) fill.style.width = "0%";
            if (text) text.style.color = "#fff";
          }}
        >
          <div
            className="hover-fill"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "0%",
              height: "100%",
              background: "#ffffff",
              transition: "width 0.4s ease",
              zIndex: -1,
            }}
          />
          <span
            className="btn-text"
            style={{
              position: "relative",
              zIndex: 1,
              color: "#fff",
              transition: "color 0.3s ease",
            }}
          >
            Subscribe
          </span>
        </button>
      </div>
    </section>
  );

  const services = [
    {
      image:
        "/assets/The-Persimmon-Group-Consulting-and-Project-Management.webp",
      eyebrow: "Elevate Your",
      title: "Leadership",
      description:
        "Drive your organization forward at the leadership level, through strategy development, executive coaching, and organizational transformation consulting.",
    },
    {
      image:
        "/assets/The-Persimmon-Group-Consulting-and-Project-Management.webp",
      eyebrow: "Accelerate Your",
      title: "Projects",
      description:
        "Work with us to build a culture of rapid execution, replacing slow cookie-cutter approaches with project management that works for your organization.",
    },
    {
      image:
        "/assets/The-Persimmon-Group-Consulting-and-Project-Management.webp",
      eyebrow: "Strengthen Your",
      title: "People",
      description:
        "Amplify high-performing leaders and teams, replacing one-size-fits-all training with engaging learning experiences that inspire action and lasting change.",
    },
  ];

  return (
    <>
      <Header />
      <div className="bg-[#fcfcfc] flex flex-col min-h-screen">
        <TestimonialHero />

        {/* HOW WE HELP */}
        <section className="py-16 px-4 md:px-8 lg:px-20 bg-white">
          <div className="max-w-7xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#000] mb-4">
              Leadership
              <span className="text-[#b79662]"> Insights</span>
            </h2>
            <p className="text-m text-[#b79662] font-medium leading-relaxed max-w-4xl mx-auto">
              IREED India is an EdTech business consulting firm that guides organizations to build competitive strategy, execute strategic projects with purpose and precision, and develop the top talent needed to support growth. Its core mission centers on upskilling professionals for India's dynamic real estate sector through specialized programs.

            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
              {services.map((s, i) => (
                <HelpCard key={i} {...s} />
              ))}
            </div>
          </div>
        </section>

        {/* BLOGS SECTION */}
        <section className="py-24 px-4 md:px-8 lg:px-20 bg-[#f8f9fa]">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#000] mb-4 tracking-tight ">
              What We're<span className="text-[#b79662]">Thinking About</span>
            </h2>
            <p className="text-m text-[#b79662] font-semibold ">
              Featured Insights From Our Team
            </p>
            <div className="w-24 h-1 bg-[#b79662] mx-auto mt-4 mb-10 rounded-full"></div>
            {loading ? (
              <div className="flex justify-center h-64">
                <Loader2 className="animate-spin text-[#b79662] w-14 h-14" />
              </div>
            ) : articles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {articles.slice(0, visibleCount).map((article) => (
                  <NewsCard key={article._id || article.id} article={article} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 text-gray-500 italic">
                No blog posts found.
              </div>
            )}

            <div className="flex justify-center mt-20">
              <button
                onClick={() => setVisibleCount((v) => v + 3)}
                style={{
                  padding: "14px 40px",
                  backgroundColor: "#b79662",
                  borderRadius: "8px",
                  color: "#fff",
                  fontSize: "1.1rem",
                  fontWeight: "700",
                  cursor: "pointer",
                  display: "flex",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  position: "relative",
                  overflow: "hidden",
                  zIndex: 1,
                  border: "2px solid #b79662",
                  margin: "0 auto",
                  letterSpacing: "1px",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  const fill = e.currentTarget.querySelector(".hover-fill");
                  const text = e.currentTarget.querySelector(".btn-text");
                  if (fill) fill.style.width = "100%";
                  if (text) text.style.color = "#b79662";
                }}
                onMouseLeave={(e) => {
                  const fill = e.currentTarget.querySelector(".hover-fill");
                  const text = e.currentTarget.querySelector(".btn-text");
                  if (fill) fill.style.width = "0%";
                  if (text) text.style.color = "#fff";
                }}
              >
                <div
                  className="hover-fill"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "0%",
                    height: "100%",
                    background: "#ffffff",
                    transition: "width 0.4s ease",
                    zIndex: -1,
                  }}
                />
                <span
                  className="btn-text"
                  style={{
                    position: "relative",
                    zIndex: 1,
                    color: "#fff",
                    transition: "color 0.3s ease",
                  }}
                >
                  View All Insights
                </span>
              </button>
            </div>
          </div>
        </section>
        <CaseStudy />
        <WeHelp />
        <NewsletterSection />
      </div>
      <Footer />
    </>
  );
};

export default MediaSection;
