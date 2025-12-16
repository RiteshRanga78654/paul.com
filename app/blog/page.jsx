"use client"; // Required for interactivity

import React, { useState } from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

// --- Sample Data ---
const newsArticles = [
  {
    id: 1,
    image: "/assets/TEDx TAPMI/IMG_9698.jpg",
    source: "siliconindia.com",
    title:
      "India's Best Business Coach, Mr. Suresh Mansharamani, shares proven methods to enhance profitability",
    description:
      "In the challenging world of modern Indian business, profitability is not just a financial goal. It is a survival metric. Indian entrepreneurs and business owners are constantly searching...",
    link: "#",
  },
  {
    id: 2,
    image: "/assets/images/book-1.jpeg",
    source: "tribuneindia.com",
    title:
      "Facing Business Scalability Challenges? Insights from India's Most Experienced Business Coach...",
    description:
      "Scaling a business isn't just about growing bigger. It's about growing smarter. While growth usually means adding more—more clients, more revenue, more team members...",
    link: "#",
  },
  {
    id: 3,
    image: "/assets/images/book-3.jpeg",
    source: "prabhatkhabar.com",
    title:
      "Success Story: ₹300 से शुरू हुआ सफर, 300 गुना ओवरसब्सक्राइब्ड IPO तक, जानिए सुरेश मंشارामानी का जुनून",
    description:
      "सुरेश मंشارामानी ने ₹300 प्रति माह की नौकरी से शुरुआत की और 1995 में 300 गुना ओवरसब्सक्राइब्ड IPO के साथ अपनी कंपनी लिस्ट कराई...",
    link: "#",
  },
  {
    id: 4,
    image: "/assets/TEDx TAPMI/IMG_9698.jpg",
    source: "adgully.com",
    title: "How AI & Automation are revolutionizing entrepreneurship",
    description:
      "The entire world seems to be bowing down to the term called AI. The emergence of Artificial Intelligence (AI) and automation is transforming the entrepreneurial scene...",
    link: "#",
  },
  {
    id: 5,
    image: "/assets/TEDx TAPMI/IMG_9698.jpg",
    source: "pulsexpertech.com",
    title:
      "Tajurba Builds a Bridge to the SME Exchange: Empowering 500 Indian SMEs to Scale, Raise Funds...",
    description:
      "Tajurba, India's fastest-growing community of Small and Medium Enterprises (SMEs), has launched a transformative initiative aimed at helping over 500 promising Indian SMEs...",
    link: "#",
  },
  {
    id: 6,
    image: "/assets/TEDx TAPMI/IMG_9698.jpg",
    source: "couturefashion.net",
    title:
      "Tajurba Builds a Bridge to the SME Exchange: Empowering 500 Indian SMEs to Scale, Raise Funds...",
    description:
      "Tajurba, India's fastest-growing community of Small and Medium Enterprises (SMEs), has launched a transformative initiative aimed at helping over 500 promising Indian SMEs...",
    link: "#",
  },
  {
    id: 1,
    image: "/assets/images/Bhaswar-Paul.jpg",
    source: "siliconindia.com",
    title:
      "India's Best Business Coach, Mr. Suresh Mansharamani, shares proven methods to enhance profitability",
    description:
      "In the challenging world of modern Indian business, profitability is not just a financial goal. It is a survival metric. Indian entrepreneurs and business owners are constantly searching...",
    link: "#",
  },
  {
    id: 2,
    image: "/assets/images/book-1.jpeg",
    source: "tribuneindia.com",
    title:
      "Facing Business Scalability Challenges? Insights from India's Most Experienced Business Coach...",
    description:
      "Scaling a business isn't just about growing bigger. It's about growing smarter. While growth usually means adding more—more clients, more revenue, more team members...",
    link: "#",
  },
  {
    id: 3,
    image: "/assets/images/book-3.jpeg",
    source: "prabhatkhabar.com",
    title:
      "Success Story: ₹300 से शुरू हुआ सफर, 300 गुना ओवरसब्सक्राइब्ड IPO तक, जानिए सुरेश मंشارामानी का जुनून",
    description:
      "सुरेश मंشارामानी ने ₹300 प्रति माह की नौकरी से शुरुआत की और 1995 में 300 गुना ओवरसब्सक्राइब्ड IPO के साथ अपनी कंपनी लिस्ट कराई...",
    link: "#",
  },
];

const videoTestimonials = [
  // Replace 'dQw4w9WgXcQ' with your actual YouTube Video IDs
  {
    id: "video1",
    title: "Shailendra Chaurasia | Success Story",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "video2",
    title: "Suraj Bode OKR Testimonial",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "video3",
    title: "Dr. Amit Verma Testimonial",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "video4",
    title: "Dr Hitesh Khuran Testimonial",
    youtubeId: "dQw4w9WgXcQ",
  },
];

// --- Sub-Components ---

const NewsCard = ({ article }) => (
  // Card BG: #4c4949
  <div className="bg-[#4c4949] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#b79662]/20 hover:-translate-y-2 transition-all duration-300 border border-gray-600 group">
    <div className="relative h-52 overflow-hidden">
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      {/* Label: Gold Background */}
      <span className="absolute bottom-3 right-3 bg-[#b79662] text-xs font-bold px-3 py-1 rounded-sm text-white shadow-sm">
        {article.source}
      </span>
    </div>
    <div className="p-6 flex flex-col h-[calc(100%-13rem)]">
      {/* Title: Gold */}
      <h3 className="text-lg font-bold mb-3 text-[#b79662] line-clamp-2 leading-tight">
        {article.title}
      </h3>
      {/* Text: Light Gray */}
      <p className="text-gray-200 text-sm mb-6 line-clamp-3 flex-grow font-light">
        {article.description}
      </p>
      {/* Button: Gold */}
      <a href={article.link} target="_blank">
        <button
          style={{
            padding: "14px 40px",
            backgroundColor: "#b79662", // Default Gold Background
            borderRadius: "8px",
            color: "#fff", // Default White Text
            fontSize: "1.1rem",
            fontWeight: "700",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            position: "relative",
            overflow: "hidden",
            zIndex: 1,
            border: "2px solid #b79662", // Border keeps the button size stable
            margin: "0 auto",
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
            Read the Article
          </span>
        </button>
      </a>
    </div>
  </div>
);

const TestimonialHero = () => (
  <section className="flex flex-col lg:flex-row w-full min-h-[600px] max-w-7xl mx-auto mt-10  lg:mt-20 mb-10 shadow-2xl rounded-lg overflow-hidden">
    {/* Left Text Side: Background #4c4949 */}
    <div className="w-full lg:w-1/2 bg-[#4c4949] p-10 md:p-16   flex flex-col justify-center relative overflow-hidden">
      <div className="relative z-10">
        <span className="block text-[#b79662] font-bold tracking-widest uppercase mb-4 text-sm">
          OUR BLOG
        </span>
        <h2 className="text-3xl lg:text-4xl font-extrabold mb-8 leading-none text-white">
          Today’s complex challenges <br />
          <span className="text-[#b79662]">require bold solutions</span>
        </h2>
        <p className="text-gray-200 text-lg mb-10 leading-relaxed max-w-xl font-light">
          Welcome to our blog, where we delve into the realms of business
          coaching, leadership insights, motivational strategies, and more. Join
          us as we explore practical tips, success stories, and expert advice
          curated by Suresh Mansharamani, India's leading business coach.
          Whether you're an entrepreneur, a corporate leader, or someone
          aspiring to achieve more, our blog is your resource for inspiration
          and actionable knowledge.
        </p>
        <button
          style={{
            padding: "14px 40px",
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
            Join Our Communities
          </span>
        </button>
      </div>
    </div>

    {/* Right Image Side with Theme Overlay */}
    {/* Added 'group' class here so children can react to hover */}
    <div className="twx w-full lg:w-1/2 relative min-h-[400px] lg:min-h-auto bg-[#1e1e1e] group">
      <img
        src="/assets/TEDx TAPMI/IMG_9697.jpg" // Replace with actual image
        alt="Suresh Mansharamani"
        // The existing classes here will now work because of the parent 'group' class
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
      />

      {/* Overlay: Gold tint with multiply blend mode */}
      {/* Added group-hover:opacity-0 and transition so the tint fades out on hover, revealing true colors */}
      <div className="absolute inset-0 bg-[#b79662]/60 mix-blend-multiply z-10 group-hover:opacity-0 transition-all duration-500"></div>

      {/* Texture */}
      <div
        className="absolute inset-0 opacity-20 z-20 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      ></div>
    </div>

    <style jsx>{`
      /* ... your existing styles ... */

      @media (max-width: 768px) {
        .twx {
          height: 235px;
          object-fit: cover;
        }
      }
    `}</style>
  </section>
);

const VideoCard = ({ video }) => (
  // Card BG: #4c4949
  <div className="bg-[#4c4949] rounded-lg overflow-hidden shadow-lg border border-gray-600 group hover:border-[#b79662] transition-colors duration-300">
    <div className="relative pb-[56.25%] h-0 bg-black">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${video.youtubeId}`}
        title={video.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    <div className="p-5 text-center">
      <h3 className="text-base font-medium text-white group-hover:text-[#b79662] transition-colors duration-300 line-clamp-2">
        {video.title}
      </h3>
    </div>
  </div>
);

// --- Main Component ---

const MediaSection = () => {
  // State to manage visible articles
  const [visibleCount, setVisibleCount] = useState(9); // Start with 9 items

  // Handler to load more articles
  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3); // Load 3 more
  };

  return (
    <>
      <Header />
      <div className="bg-white flex flex-col">
        {/* Section 2: Testimonial Hero */}
        <TestimonialHero />

        {/* Section 1: News Grid */}
        <section className="py-10 px-4 md:px-8 lg:px-16 relative">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-10">
              <span className="text-[#b79662] font-bold tracking-wider uppercase mb-2 block">
                In The News
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#b79662]">
                Media <span className="text-[#b79662]">Coverage</span>
              </h2>
              <div className="w-24 h-1 bg-[#b79662] mx-auto mt-4 rounded-full"></div>
            </div>

            {/* Grid with Sliced Data */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {newsArticles.slice(0, visibleCount).map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>

            {/* Load More Button - Conditional Rendering */}
            {visibleCount < newsArticles.length && (
              <div className="flex justify-center">
                 <button
                  onClick={handleLoadMore}
                  style={{
                    padding: "14px 40px",
                    backgroundColor: "#b79662", // Default Gold
                    borderRadius: "8px",
                    color: "#fff",
                    fontSize: "1.1rem",
                    fontWeight: "700", // Bolder text
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    position: "relative",
                    overflow: "hidden",
                    zIndex: 1,
                    border: "none",
                    margin: "0 auto",
                  
                    letterSpacing: "1px",
                    boxShadow: "0 4px 14px 0 rgba(183,150,98,0.39)", // Gold shadow
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    const fill = e.currentTarget.querySelector(".hover-fill");
                    if (fill) fill.style.width = "100%";
                  }}
                  onMouseLeave={(e) => {
                    const fill = e.currentTarget.querySelector(".hover-fill");
                    if (fill) fill.style.width = "0%";
                  }}
                >
                  {/* Hover Fill Effect: Darker Gold */}
                  <div
                    className="hover-fill"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "0%",
                      height: "100%",
                      background: "#4c4949", // Darker Gold on Hover
                      transition: "width 0.4s ease",
                      zIndex: -1,
                    }}
                  />
                  <span
                    style={{ position: "relative", zIndex: 1, color: "#fff" }}
                  >
                    Load More
                  </span>
                </button>
              </div>
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
