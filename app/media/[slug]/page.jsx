// "use client";

// import React, { useState, useEffect } from "react";
// import { useParams , } from "next/navigation";
// import Header from "../../layout/Header";
// import Footer from "../../layout/Footer";
// import { ArrowLeft } from 'lucide-react';

// const ArticleDetail = () => {
//   const { slug } = useParams();

//   const [article, setArticle] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [readingProgress, setReadingProgress] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
//       const progress = (window.scrollY / totalHeight) * 100;
//       setReadingProgress(progress);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     fetch("https://uat-service.ireedindia.com/v1/articles?website=bhaswarpaul&pageNumber=0&size=1000")
//       .then((res) => res.json())
//       .then((data) => {
//         if (data?.blogs) {
//           const found = data.blogs.find((item) => item.slug === slug);
//           setArticle(found);
//         }
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error:", err);
//         setLoading(false);
//       });
//   }, [slug]);

//   if (loading) return (
//     <div className="min-h-screen flex items-center justify-center bg-white">
//       <div className="h-1 w-32 bg-gray-100 rounded-full overflow-hidden">
//         <div className="h-full bg-[#b79662] animate-pulse"></div>
//       </div>
//     </div>
//   );

//   if (!article) return <div className="p-20 text-center">Article not found.</div>;

//   const baseImgPath = "https://uat-service.ireedindia.com/image/";

//   return (
//     <>
//       <Header />

//       {/* Scroll Progress Bar */}
//       <div className="fixed top-0 left-0 h-1 bg-[#b79662] z-50 transition-all duration-75" style={{ width: `${readingProgress}%` }} />

//       <main className="bg-[#fafafa] min-h-screen pb-20">

//         {/* --- ARTICLE HEADER --- */}
//         <header className="pt-14 pb-12 px-4 max-w-6xl mx-auto text-left">
//           {/* <div className="flex justify-center mb-6">
//             <span className="px-4 py-1 rounded-full border border-[#b79662] text-[#b79662] text-[10px] uppercase font-black tracking-widest">
//               {article.badge || "Featured"}
//             </span>
//           </div> */}
//           <a href="/media">
//            <button  className="group flex items-center gap-2 cursor-pointer text-xs text-gray-500 hover:text-[#b79662] transition-colors mb-6 uppercase tracking-widest font-bold">
//                   <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back
//                 </button>
//                 </a>
//           <h1 className="text-3xl md:text-5xl font-bold text-[#b79662] mb-4 tracking-tight">
//             {article.title}
//           </h1>

//           <div className="flex items-left gap-4 justify-left text-sm text-gray-500 font-medium">
//             <span className="text-[#1a1a1a]">Author: {article.author}</span>
//             <span className="w-1 h-5 bg-gray-300 rounded-full"></span>
//             <span className="text-[#1a1a1a]" >Posted On: {new Date(article.publishedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
//           </div>
//         </header>

//         {/* --- MAIN FEATURE IMAGE --- */}
//         <div className="max-w-6xl mx-auto px-4 mb-16">
//           <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[21/9]">
//             <img
//               src={`${baseImgPath}${article.image}`}
//               className="w-full h-full object-cover"
//               alt="cover"
//             />
//           </div>
//         </div>

//         {/* --- CONTENT GRID --- */}
//         <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12">

//           {/* Left Sidebar: Socials & Author Info (Fixed on Desktop) */}
//           <aside className="lg:col-span-4 lg:sticky lg:top-24 h-fit space-y-10 order-2 lg:order-1">
//             <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
//               <div className="w-12 h-12 bg-[#4c4949] rounded-xl flex items-center justify-center text-[#b79662] font-bold text-xl mb-4">
//                 {article.author?.charAt(0)}
//               </div>
//               <p className="text-xs text-gray-400 uppercase tracking-tighter font-bold mb-1">Author</p>
//               <h3 className="text-gray-900 font-bold mb-1">{article.author}</h3>
//               <p className="text-xs text-[#b79662] mb-4">{article.designation}</p>
//               <p className="text-[13px] text-gray-500 leading-relaxed">
//                 Expert contributor at {article.companyName}. Specializing in real estate insights.
//               </p>
//             </div>

//             <div className="flex lg:flex-col gap-4 px-2">
//               <button className="flex-1 lg:w-full py-2 border border-gray-200 rounded-lg text-xs hover:bg-black hover:text-white transition-all">Share on X</button>
//               <button className="flex-1 lg:w-full py-2 border border-gray-200 rounded-lg text-xs hover:bg-[#0077b5] hover:text-white transition-all">LinkedIn</button>
//             </div>
//           </aside>

//           {/* Center: The actual article content */}
//           <article className="lg:col-span-8 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 order-1 lg:order-2">
//             <div className="premium-content">
//               <div
//                 dangerouslySetInnerHTML={{ __html: article.content }}
//               />
//             </div>
//           </article>

//           {/* Right Sidebar: Empty/Spacer or Newsletter */}
//           <aside className="lg:col-span-2 hidden xl:block order-3" />
//         </div>
//       </main>

//       <style jsx global>{`
//         /* Minimalist Typography overrides */
//         .premium-content {
//           font-family: 'Inter', sans-serif;
//           font-size: 1.15rem;
//           line-height: 1.85;
//           color: #333;
//         }
//         .premium-content h2 {
//           font-family: serif;
//           font-size: 2.25rem;
//           margin-top: 3rem;
//           margin-bottom: 1.5rem;
//           color: #1a1a1a;
//           line-height: 1.2;
//         }
//         .premium-content p {
//           margin-bottom: 1.75rem;
//         }
//         .premium-content ul {
//           margin: 2rem 0;
//           padding-left: 1.2rem;
//         }
//         .premium-content li {
//           margin-bottom: 0.8rem;
//           list-style: none;
//           position: relative;
//         }
//         .premium-content li::before {
//           content: "•";
//           color: #b79662;
//           font-weight: bold;
//           position: absolute;
//           left: -1.2rem;
//         }
//         .premium-content strong {
//           color: #1a1a1a;
//           font-weight: 700;
//         }
//         /* Style the actual HTML from the API */
//         .premium-content div > * {
//           max-width: 100%;
//         }
//       `}</style>
//       <Footer />
//     </>
//   );
// };

// export default ArticleDetail;
"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import {
  ArrowLeft,
  Share2,
  Linkedin,
  Twitter,
  Facebook,
  Link as LinkIcon,Tag
} from "lucide-react";


const ArticleDetail = () => {
  const { slug } = useParams();
  const router = useRouter();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setReadingProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
  //   fetch(
  //     "https://uat-service.ireedindia.com/v1/articles?website=bhaswarpaul&pageNumber=0&size=1000"
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data?.blogs) {
  //         const found = data.blogs.find((item) => item.slug === slug);
  //         setArticle(found);
  //       }
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.error("Error:", err);
  //       setLoading(false);
  //     });
  // }, [slug]);

  fetch(
    "https://uat-service.ireedindia.com/v1/articles?website=bhaswarpaul&pageNumber=0&size=1000"
  )
    .then((res) => res.json())
    .then((data) => {
      if (data?.blogs) {
        // 1. Decode the slug from the URL to handle %20 and special chars
        const decodedSlug = decodeURIComponent(slug);

        // 2. Find the article (using lowercase comparison to be safe)
        const found = data.blogs.find(
          (item) => item.slug?.trim() === decodedSlug.trim()
        );

        setArticle(found);
      }
      setLoading(false);
    })
    .catch((err) => {
      console.error("Error fetching article:", err);
      setLoading(false);
    });
}, [slug]); // This ensures it re-runs if you navigate from one event to another

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="h-1 w-32 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full bg-[#b79662] animate-pulse"></div>
        </div>
      </div>
    );

  if (!article)
    return <div className="p-20 text-center">Article not found.</div>;

  const baseImgPath = "https://uat-service.ireedindia.com/image/";

  return (
    <>
      <Header />

      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-[#b79662] z-50 transition-all duration-75"
        style={{ width: `${readingProgress}%` }}
      />

      <main className="bg-white min-h-screen pb-20">
        {/* --- ARTICLE HEADER --- */}
        <header className="pt-14 pb-12 px-4 max-w-6xl mx-auto text-left">
          <button
            onClick={() => router.push('/media')} 
// Or whichever path your list page is on, e.g., '/events'
            className="group flex items-center gap-2 cursor-pointer text-xs text-gray-500 hover:text-[#b79662] transition-colors mb-6 uppercase tracking-widest font-bold"
          >
            <ArrowLeft
              size={14}
              className="group-hover:-translate-x-1 transition-transform"
            />{" "}
            Back
          </button>
          <h1 className="text-3xl md:text-5xl font-bold text-[#b79662] mb-4 tracking-tight">
            {article.title}
          </h1>

          <div className="flex items-left gap-4 justify-left text-sm text-gray-500 font-medium">
            <span className="text-[#1a1a1a]">Author: {article.author}</span>
            <span className="w-1 h-5 bg-gray-300 rounded-full"></span>
            <span className="text-[#1a1a1a]">
              Posted On:{" "}
              {new Date(article.publishedDate).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
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
        <div className="max-w-6xl mx-auto mb-8 px-5 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Side: The actual article content */}
          <article className="lg:col-span-8 bg-[#fcfcfc] rounded-lg border-1-4 border-[#b79662] mb-8">
            <div className="premium-content">
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </div>
          </article>

          {/* Right Sidebar: Socials & Author Info (Fixed on Desktop) */}
          <aside className="lg:col-span-4 sticky top-24 h-fit space-y-6">
            {/* Share Article Card */}
            <div className="bg-white p-5 rounded-lg border border-gray-200">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                Share Article
              </h4>
              <div className="flex gap-2">
                <button className="flex-1 py-2 bg-gray-50 rounded flex justify-center items-center hover:bg-[#0077b5] hover:text-white transition">
                  <Linkedin size={18} />
                </button>
                <button className="flex-1 py-2 bg-gray-50 rounded flex justify-center items-center hover:bg-[#1DA1F2] hover:text-white transition">
                  <Twitter size={18} />
                </button>
                <button className="flex-1 py-2 bg-gray-50 rounded flex justify-center items-center hover:bg-[#4267B2] hover:text-white transition">
                  <Facebook size={18}/>
                </button>
                <button className="flex-1 py-2 bg-gray-50 rounded flex justify-center items-center hover:bg-gray-800 hover:text-white transition">
                  <Share2 size={18}/>
                </button>
              </div>
            </div>

            {/* Author Profile Card (Dark Themed as per image) */}
            <div className="bg-[#1a1a1a] p-6 rounded-lg text-center relative overflow-hidden">
              <div className="w-20 h-20 mx-auto bg-[#4c4949] rounded-full flex items-center justify-center text-[#b79662] font-bold text-2xl mb-4 border-2 border-[#b79662]">
                {article.author?.charAt(0)}
              </div>
              <h4 className="text-white font-bold text-base mb-1">
                {article.author}
              </h4>
              <p className="text-[10px] text-[#b79662] uppercase tracking-widest font-bold mb-4">
                {article.designation || "Business Coach"}
              </p>

              {/* <button className="w-full py-2.5 bg-[#b79662] text-white rounded text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                Join Community
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
          Join Community
          </span>
        </button>
            </div>

            {/* Topics Section */}
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center gap-2 mb-4 text-gray-400">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <Tag size={12}/>Topics
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-50 text-gray-600 text-xs rounded-border hover:bg-[#b79662] hover:text-white transition cursor-pointer">
                  #Real Estate Course in India
                </span>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <style jsx global>{`
        /* Minimalist Typography overrides */
        .premium-content {
          font-family: "Inter", sans-serif;
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
// "use client";

// import React, { useState, useEffect } from "react";
// import { useParams, useRouter } from "next/navigation";
// import Header from "../../layout/Header";
// import Footer from "../../layout/Footer";
// import { ArrowLeft } from 'lucide-react';

// const ArticleDetail = () => {
//   const { slug } = useParams();
//   const router = useRouter();
//   const [article, setArticle] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [readingProgress, setReadingProgress] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
//       const progress = (window.scrollY / totalHeight) * 100;
//       setReadingProgress(progress);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     fetch("https://uat-service.ireedindia.com/v1/articles?website=bhaswarpaul&pageNumber=0&size=1000")
//       .then((res) => res.json())
//       .then((data) => {
//         if (data?.blogs) {
//           const found = data.blogs.find((item) => item.slug === slug);
//           setArticle(found);
//         }
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error:", err);
//         setLoading(false);
//       });
//   }, [slug]);

//   if (loading) return (
//     <div className="min-h-screen flex items-center justify-center bg-white">
//       <div className="h-1 w-32 bg-gray-100 rounded-full overflow-hidden">
//         <div className="h-full bg-[#b79662] animate-pulse"></div>
//       </div>
//     </div>
//   );

//   if (!article) return <div className="p-20 text-center">Article not found.</div>;

//   const baseImgPath = "https://uat-service.ireedindia.com/image/";

//   return (
//     <>
//       <Header />

//       {/* Scroll Progress Bar */}
//       <div className="fixed top-0 left-0 h-1 bg-[#b79662] z-50 transition-all duration-75" style={{ width: `${readingProgress}%` }} />

//       <main className="bg-[#fafafa] min-h-screen pb-20">

//         {/* --- ARTICLE HEADER --- */}
//         <header className="pt-14 pb-12 px-4 max-w-6xl mx-auto text-left">
//            <button onClick={() => router.back()} className="group flex items-center gap-2 cursor-pointer text-xs text-gray-500 hover:text-[#b79662] transition-colors mb-6 uppercase tracking-widest font-bold">
//                   <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back
//            </button>
//           <h1 className="text-3xl md:text-5xl font-bold text-[#b79662] mb-4 tracking-tight">
//             {article.title}
//           </h1>

//           <div className="flex items-left gap-4 justify-left text-sm text-gray-500 font-medium">
//             <span className="text-[#1a1a1a]">Author: {article.author}</span>
//             <span className="w-1 h-5 bg-gray-300 rounded-full"></span>
//             <span className="text-[#1a1a1a]" >Posted On: {new Date(article.publishedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
//           </div>
//         </header>

//         {/* --- MAIN FEATURE IMAGE --- */}
//         <div className="max-w-6xl mx-auto px-4 mb-16">
//           <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[21/9]">
//             <img
//               src={`${baseImgPath}${article.image}`}
//               className="w-full h-full object-cover"
//               alt="cover"
//             />
//           </div>
//         </div>

//         {/* --- CONTENT GRID --- */}
//         <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12">

//           {/* Center: The actual article content (NOW ON THE LEFT) */}
//           <article className="lg:col-span-8 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 order-1">
//             <div className="premium-content">
//               <div
//                 dangerouslySetInnerHTML={{ __html: article.content }}
//               />
//             </div>
//           </article>

//           {/* Left Sidebar: Socials & Author Info (NOW ON THE RIGHT) */}
//           <aside className="lg:col-span-4 lg:sticky lg:top-24 h-fit space-y-10 order-2">
//             <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
//               <div className="w-12 h-12 bg-[#4c4949] rounded-xl flex items-center justify-center text-[#b79662] font-bold text-xl mb-4">
//                 {article.author?.charAt(0)}
//               </div>
//               <p className="text-xs text-gray-400 uppercase tracking-tighter font-bold mb-1">Author</p>
//               <h3 className="text-gray-900 font-bold mb-1">{article.author}</h3>
//               <p className="text-xs text-[#b79662] mb-4">{article.designation}</p>
//               <p className="text-[13px] text-gray-500 leading-relaxed">
//                 Expert contributor at {article.companyName}. Specializing in real estate insights.
//               </p>
//             </div>

//             <div className="flex lg:flex-col gap-4 px-2">
//               <button className="flex-1 lg:w-full py-2 border border-gray-200 rounded-lg text-xs hover:bg-black hover:text-white transition-all">Share on X</button>
//               <button className="flex-1 lg:w-full py-2 border border-gray-200 rounded-lg text-xs hover:bg-[#0077b5] hover:text-white transition-all">LinkedIn</button>
//             </div>
//           </aside>

//           {/* Right Sidebar: Empty/Spacer or Newsletter */}
//           <aside className="lg:col-span-2 hidden xl:block order-3" />
//         </div>
//       </main>

//       <style jsx global>{`
//         /* Minimalist Typography overrides */
//         .premium-content {
//           font-family: 'Inter', sans-serif;
//           font-size: 1.15rem;
//           line-height: 1.85;
//           color: #333;
//         }
//         .premium-content h2 {
//           font-family: serif;
//           font-size: 2.25rem;
//           margin-top: 3rem;
//           margin-bottom: 1.5rem;
//           color: #1a1a1a;
//           line-height: 1.2;
//         }
//         .premium-content p {
//           margin-bottom: 1.75rem;
//         }
//         .premium-content ul {
//           margin: 2rem 0;
//           padding-left: 1.2rem;
//         }
//         .premium-content li {
//           margin-bottom: 0.8rem;
//           list-style: none;
//           position: relative;
//         }
//         .premium-content li::before {
//           content: "•";
//           color: #b79662;
//           font-weight: bold;
//           position: absolute;
//           left: -1.2rem;
//         }
//         .premium-content strong {
//           color: #1a1a1a;
//           font-weight: 700;
//         }
//         /* Style the actual HTML from the API */
//         .premium-content div > * {
//           max-width: 100%;
//         }
//       `}</style>
//       <Footer />
//     </>
//   );
// };

// export default ArticleDetail;
