"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';

import { 
  Loader2, ArrowLeft, Calendar, User, Tag, Share2, 
  ChevronDown, Linkedin, Twitter, Facebook,
  Instagram
} from 'lucide-react';
import Header from '@/app/layout/Header';

// --- CONFIGURATION ---
const API_BASE = "https://uat-service.ireedindia.com/v1/blog"; 
const IMAGE_BASE_URL = "https://uat-service.ireedindia.com/image/";

const SingleBlogPage = () => {
  const params = useParams();
  const router = useRouter();
  
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // --- FETCH DATA ---
  useEffect(() => {
    if (!params.slug) return;

    const fetchBlog = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // RESET: Clear old blog data immediately so it doesn't show during loading
        setBlog(null);

        const response = await axios.get(`${API_BASE}?slug=${params.slug}&website=bhaswarpaul&published=true`);
        
        let data = response.data;
        if (data.data && Array.isArray(data.data)) data = data.data[0];
        else if (data.blogs && Array.isArray(data.blogs)) data = data.blogs[0];
        else if (Array.isArray(data)) data = data[0];

        if (data) {
          setBlog(data);
          // FIX: Force scroll to top when slug changes
          window.scrollTo(0, 0);
        } else {
          setError("Article not found.");
        }
      } catch (err) {
        console.error("Error fetching blog:", err);
        setError("Could not load the article.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [params.slug]); // Re-run whenever the slug changes

  if (loading) return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center">
        <Loader2 className="w-12 h-12 animate-spin text-[#b79662]" />
      </div>
    </div>
  );

  if (error || !blog) return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Unavailable</h2>
        <p className="text-gray-500 mb-6">{error || "Article not found."}</p>
        <button onClick={() => router.back()} className="px-6 py-2 bg-black text-white rounded hover:bg-[#b79662] transition">Go Back</button>
      </div>
    </div>
  );

  const bannerImage = blog.image 
    ? (blog.image.startsWith('http') ? blog.image : `${IMAGE_BASE_URL}${blog.image}`) 
    : "/assets/images/placeholder.jpg";

  return (
    // Added 'key' here: This tells React to reset the whole div when the slug changes
    <div key={params.slug} className="bg-white min-h-screen font-sans text-gray-900">
      <Header />

      {/* ================= HEADER CONTAINER ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        <button onClick={() => router.back()} className="group flex items-center gap-2 cursor-pointer text-xs text-gray-500 hover:text-[#b79662] transition-colors mb-6 uppercase tracking-widest font-bold">
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back
        </button>

        <h1 
            className="text-3xl md:text-5xl font-bold text-[#b79662] mb-4 tracking-tight" style={{lineHeight:"1.18"}}
            title={blog.title}
        >
          {blog.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8 border-b border-gray-100 pb-4">
             <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-700">Research Associate:</span>
                <span>{blog.researchAssociate || blog.userPostDataInfo?.[0]?.name || "Editor"}</span>
             </div>
             <span className="hidden sm:inline text-gray-300">|</span>
             <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-700">Posted On:</span>
                <span>{new Date(blog.date || blog.createdAt).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}</span>
             </div>
        </div>

        <div className="w-full h-[300px] md:h-[450px] lg:h-[500px] bg-gray-50 rounded-xl overflow-hidden shadow-sm border border-gray-100 relative">
            <img 
                src={bannerImage} 
                alt={blog.altTag || blog.title}
                className="w-full h-full object-cover"
                onError={(e) => e.target.src = "https://via.placeholder.com/1200x600?text=No+Image"}
            />
        </div>
      </div>

      {/* ================= MAIN CONTENT GRID ================= */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-8">
                {blog.description && (
                    <div className="bg-[#fcfcfc] p-6 rounded-lg border-l-4 border-[#b79662] mb-8">
                         <div 
                            className="text-gray-700 leading-relaxed font-serif italic"
                            dangerouslySetInnerHTML={{ __html: blog.description }} 
                        />
                    </div>
                )}

                <article 
                    className="prose prose-lg prose-slate max-w-none 
                    prose-headings:font-bold prose-headings:text-gray-900 
                    prose-p:text-gray-600 prose-p:leading-8 prose-p:mb-6
                    prose-a:text-[#b79662] prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
                    prose-ul:list-disc prose-ul:ml-4
                    prose-img:rounded-lg prose-img:shadow-sm"
                    dangerouslySetInnerHTML={{ __html: blog.content }} 
                />

                {blog.faq && blog.faq.length > 0 && (
                    <div className="mt-12 pt-8 border-t border-gray-100">
                        <h3 className="text-xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
                        <div className="space-y-3">
                            {blog.faq.map((item, index) => (
                                <details key={index} className="group bg-white border border-gray-200 rounded-lg overflow-hidden">
                                    <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-gray-800 hover:bg-gray-50 transition-colors list-none select-none">
                                        <span>{item.question}</span>
                                        <ChevronDown className="h-4 w-4 text-gray-400 transition-transform group-open:rotate-180" />
                                    </summary>
                                    <div className="p-4 pt-2 text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50/50 text-sm">
                                        {item.answer}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <aside className="lg:col-span-4 sticky top-24 space-y-6">
                    <div className="bg-white p-5 rounded-lg border border-gray-200">
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Share Article</h4>
                        <div className="flex gap-2">
                          <a href="https://www.linkedin.com/in/bhaswarpaul" target="_blank" rel="noopener noreferrer" className="flex-1 py-2 bg-gray-50 rounded flex justify-center items-center hover:bg-[#0077b5] hover:text-white transition">
                            <Linkedin size={18} />
                          </a>
                          <a href="https://twitter.com/paulbhaswar" target="_blank" rel="noopener noreferrer" className="flex-1 py-2 bg-gray-50 rounded flex justify-center items-center hover:bg-[#1DA1F2] hover:text-white transition">
                            <Twitter size={18} />
                          </a>
                          <a href="https://www.facebook.com/paulbhaswar/" target="_blank" rel="noopener noreferrer" className="flex-1 py-2 bg-gray-50 rounded flex justify-center items-center hover:bg-[#4267B2] hover:text-white transition">
                            <Facebook size={18} />
                          </a>
                          <a href="https://www.instagram.com/bhaswar.paul" target="_blank" rel="noopener noreferrer" className="flex-1 py-2 bg-gray-50 rounded flex justify-center items-center hover:bg-[red] hover:text-white transition">
                            <Instagram size={18} />
                          </a>
                        </div> 
                    </div>

                    <div className="bg-[#1e1e1e] p-6 rounded-lg text-center relative overflow-hidden">
                        <div className="relative z-10">
                             <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-3 border-2 border-[#b79662] overflow-hidden">
                                <img src="/assets/BPimages/DSC_0421.JPG" alt="Author" className="w-full h-full object-cover" onError={(e) => e.target.style.display='none'}/>
                            </div>
                            <h4 className="text-white font-bold text-base mb-1">{blog.userPostDataInfo?.[0]?.name || "Business Expert"}</h4>
                            <p className="text-[#b79662] text-[10px] uppercase font-bold tracking-widest mb-4">Business Coach</p>
                            
                            <button
                                style={{
                                    padding: "14px 20px", backgroundColor: "#b79662", borderRadius: "8px",
                                    color: "#fff", fontSize: "1.1rem", fontWeight: "700", cursor: "pointer",
                                    display: "block", margin:"auto", width:"100%", position: "relative",
                                    overflow: "hidden", zIndex: 1, border: "2px solid #b79662",
                                    letterSpacing: "1px", transition: "all 0.3s ease",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.querySelector(".hover-fill").style.width = "100%";
                                    e.currentTarget.querySelector(".btn-text").style.color = "#b79662";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.querySelector(".hover-fill").style.width = "0%";
                                    e.currentTarget.querySelector(".btn-text").style.color = "#fff";
                                }}
                            >
                                <div className="hover-fill" style={{ position: "absolute", top: 0, left: 0, width: "0%", height: "100%", background: "#ffffff", transition: "width 0.4s ease", zIndex: -1 }} />
                                <span className="btn-text" style={{ position: "relative", zIndex: 1, color: "#fff", transition: "color 0.3s ease" }}>Join Community</span>
                            </button>
                        </div>
                    </div>

                    {blog.key && (
                        <div className="bg-white p-5 rounded-lg border border-gray-200">
                            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                                <Tag size={12} /> Topics
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {blog.key.split(',').map((tag, i) => (
                                    <span key={i} className="px-3 py-1 bg-gray-50 text-gray-600 text-xs font-medium rounded hover:bg-[#b79662] hover:text-white transition cursor-pointer">
                                        #{tag.trim()}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
            </aside>
        </div>
      </main>
    </div>
  );
};

export default SingleBlogPage;