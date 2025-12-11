"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation"; // Correct hook for App Router
// import Header from "../../layout/Header"; 

// import Footer from "../../layout/Footer"; 
 
const EVENTS_API_URL = "https://uat-service.ireedindia.com/v1/events";

export default function EventDetailPage() {
  // 1. Get the slug from the URL
  const params = useParams();
  const slug = params?.slug;

  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // 2. Fetch Data using useEffect (Replaces getServerSideProps)
  useEffect(() => {
    if (!slug) return;

    const fetchEvent = async () => {
      try {
        setLoading(true);
        // API Call
        const res = await fetch(`${EVENTS_API_URL}?slug=${slug}`);
        
        if (!res.ok) {
            console.error("API Error:", res.status);
            setLoading(false);
            return;
        }

        const data = await res.json();
        
        // Handle different API response structures
        let foundEvent = null;
        if (Array.isArray(data)) {
          foundEvent = data.find((e) => e.slug === slug) || data[0];
        } else if (data.data) {
          foundEvent = Array.isArray(data.data) 
            ? data.data.find((e) => e.slug === slug) 
            : data.data;
        } else {
          foundEvent = data;
        }
        
        setEvent(foundEvent);
      } catch (err) {
        console.error("Failed to fetch event:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [slug]);

  // --- Handlers ---
  const handleOpen = (i) => { setCurrentIndex(i); setLightboxOpen(true); };
  const handleClose = () => setLightboxOpen(false);
  const handleNext = () => setCurrentIndex((p) => (p + 1) % photos.length);
  const handlePrev = () => setCurrentIndex((p) => (p - 1 + photos.length) % photos.length);

  // --- Loading State ---
  if (loading) {
    return (
      <div style={{ backgroundColor: "#1e1e1e", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p style={{ color: "#b79662", fontSize: "1.2rem" }}>Loading Event Details...</p>
      </div>
    );
  }

  // --- 404 / Not Found State ---
  if (!event) {
    return (
      <div style={{ backgroundColor: "#1e1e1e", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "white" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>Event not found</h2>
        <Link href="/events" style={{ textDecoration: "none" }}>
          <button style={{ padding: "10px 24px", backgroundColor: "#b79662", color: "white", border: "none", borderRadius: "6px", cursor: "pointer", fontWeight: "bold" }}>
            Back to Events
          </button>
        </Link>
      </div>
    );
  }

  // --- Data Preparation ---
  const rawBanner = event.banner || event.Banner || "";
  const bannerUrl = rawBanner.startsWith("http")
    ? rawBanner
    : `https://uat-service.ireedindia.com/image/${rawBanner.replace(/^\/+|^image\//, "")}`;

  const photos = (event.gallery || event.Gallery || [])
    .map((p) => {
      let filename = String(p).replace(/^\/+/, "").replace(/^image\//, "");
      return `https://uat-service.ireedindia.com/image/${filename}`;
    })
    .filter(Boolean);

  const youtubeEntries = event.Youtube || event.youtube || [];
  const mapEmbed = event.map || event.Map || "";

  return (
    <div style={{ backgroundColor: "#ffffff", minHeight: "100vh", color: "#e5e7eb", fontFamily: "sans-serif" }}>
      {/* <Header /> */}

      {/* Main Container */}
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "40px 20px" }}>
        
        {/* Banner Section */}
        <div style={{ 
          position: "relative", 
          height: "450px", 
          borderRadius: "16px", 
          overflow: "hidden", 
          marginBottom: "40px",
          border: "1px solid #4c4949",
          boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
        }}>
          <img 
            src={bannerUrl} 
            alt={event.title} 
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            onError={(e) => e.target.src = "https://via.placeholder.com/1200x450?text=Event+Banner"}
          />
          {/* Gradient Overlay for Text Readability */}
          <div style={{ 
            position: "absolute", 
            bottom: 0, 
            left: 0, 
            width: "100%", 
            background: "linear-gradient(to top, #1e1e1e 10%, transparent 100%)", 
            padding: "40px 30px",
            display: "flex",
            alignItems: "flex-end"
          }}>
            <h1 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#b79662", margin: 0, textShadow: "0 2px 4px rgba(0,0,0,0.8)" }}>
              {event.title}
            </h1>
          </div>
        </div>

        {/* Content Layout */}
        <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
          
          {/* LEFT COLUMN */}
          <div style={{ flex: "1 1 65%", minWidth: "300px" }}>
            
            {/* About Card */}
            <div style={cardStyle}>
              <h2 style={sectionTitleStyle}>About the Event</h2>
              <div 
                dangerouslySetInnerHTML={{ __html: event.description || event.content || "No description available." }} 
                style={{ lineHeight: "1.8", color: "#d1d5db", fontSize: "16px" }}
              />
              {event.date && (
                <div style={{ marginTop: "20px", color: "#b79662", fontWeight: "bold", fontSize: "1.1rem" }}>
                   Date: <span style={{ color: "#000", fontWeight: "400" }}>{event.date}</span>
                </div>
              )}
            </div>

            {/* Gallery Card */}
            {photos.length > 0 && (
              <div style={cardStyle}>
                <h2 style={sectionTitleStyle}>Event Gallery</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: "16px" }}>
                  {photos.map((src, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => handleOpen(idx)}
                      style={{ 
                        aspectRatio: "1/1", 
                        overflow: "hidden", 
                        borderRadius: "8px", 
                        cursor: "pointer", 
                        border: "1px solid #606060",
                        position: "relative",
                        transition: "transform 0.2s"
                      }}
                      onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.02)"}
                      onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
                    >
                      <img 
                        src={src} 
                        alt="Gallery" 
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Location / Map Card */}
            <div style={cardStyle}>
              <h2 style={sectionTitleStyle}>Location</h2>
              {event.venue && <p style={{ marginBottom: "15px", color: "#fff", fontSize: "1.1rem" }}> {event.venue}</p>}
              
              <div style={{ width: "100%", height: "350px", borderRadius: "8px", overflow: "hidden", border: "1px solid #606060", background: "#2d2d2d" }}>
                {mapEmbed ? (
                  <iframe src={mapEmbed} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" />
                ) : (
                  <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: "#888" }}>
                    Map not available
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN (Sidebar) */}
          <div style={{ flex: "0 0 350px", minWidth: "300px" }}>
            <div style={{ ...cardStyle, position: "sticky", top: "100px" }}>
              <h3 style={{ ...sectionTitleStyle, textAlign: "center", marginBottom: "25px" }}>Event Glimpses</h3>
              
              {youtubeEntries.length > 0 ? (
                youtubeEntries.map((item, idx) => {
                  let src = item?.Youtubelink || item?.url || item;
                  let videoId = "";
                  if (typeof src === "string") {
                    if (src.includes("watch?v=")) videoId = src.split("watch?v=")[1].split("&")[0];
                    else if (src.includes("youtu.be/")) videoId = src.split("youtu.be/")[1].split("?")[0];
                  }

                  return (
                    <div key={idx} style={{ marginBottom: "25px" }}>
                      {item.YoutubeHeading && <p style={{ marginBottom: "8px", fontSize: "14px", color: "#b79662", fontWeight: "bold" }}>{item.YoutubeHeading}</p>}
                      <div style={{ borderRadius: "8px", overflow: "hidden", border: "1px solid #606060" }}>
                        <iframe 
                          width="100%" 
                          height="200" 
                          src={`https://www.youtube.com/embed/${videoId}`} 
                          frameBorder="0" 
                          allowFullScreen
                        />
                      </div>
                    </div>
                  );
                })
              ) : (
                <p style={{ textAlign: "center", color: "#888", fontStyle: "italic" }}>No highlights available.</p>
              )}

              <Link href="/events" style={{ textDecoration: "none" }}>
                <button style={{ 
                  width: "100%", 
                  padding: "14px", 
                  background: "#b79662", 
                  color: "#fff", 
                  border: "none", 
                  borderRadius: "8px", 
                  fontWeight: "bold", 
                  marginTop: "10px", 
                  cursor: "pointer",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  transition: "background 0.3s"
                }}
                onMouseOver={(e) => e.target.style.background = "#967d51"}
                onMouseOut={(e) => e.target.style.background = "#b79662"}
                >
                  View All Events
                </button>
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div style={{ 
          position: "fixed", inset: 0, background: "rgba(0,0,0,0.95)", zIndex: 9999, 
          display: "flex", alignItems: "center", justifyContent: "center" 
        }}>
          <button onClick={handleClose} style={{ position: "absolute", top: "30px", right: "30px", color: "#fff", fontSize: "40px", background: "none", border: "none", cursor: "pointer" }}>✕</button>
          
          <button onClick={handlePrev} style={{ position: "absolute", left: "20px", color: "#b79662", fontSize: "60px", background: "none", border: "none", cursor: "pointer" }}>‹</button>
          
          <img src={photos[currentIndex]} style={{ maxWidth: "90%", maxHeight: "85vh", borderRadius: "8px", border: "2px solid #b79662", boxShadow: "0 0 50px rgba(183, 150, 98, 0.2)" }} />
          
          <button onClick={handleNext} style={{ position: "absolute", right: "20px", color: "#b79662", fontSize: "60px", background: "none", border: "none", cursor: "pointer" }}>›</button>
          
          <div style={{ position: "absolute", bottom: "20px", color: "#fff", fontSize: "16px", background: "rgba(0,0,0,0.5)", padding: "5px 10px", borderRadius: "4px" }}>
            {currentIndex + 1} / {photos.length}
          </div>
        </div>
      )}

      {/* <Footer /> */}
    </div>
  );
}

// --- Styles ---
const cardStyle = {
  backgroundColor: "#ffffff",
  borderRadius: "16px",
  padding: "30px",
  marginBottom: "30px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
  border: "1px solid #606060"
};

const sectionTitleStyle = {
  fontSize: "24px",
  fontWeight: "bold",
  color: "#b79662", 
  marginBottom: "20px",
  borderBottom: "1px solid #606060",
  paddingBottom: "12px"
};