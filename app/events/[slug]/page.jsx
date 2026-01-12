// "use client";

// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import { useParams } from "next/navigation";
// import Footer from "../../layout/Footer"; 
// // import Header from "../../layout/Header"; 

// const EVENTS_API_URL = "https://uat-service.ireedindia.com/v1/events";

// export default function EventDetailPage() {
//   const params = useParams();
//   const slug = params?.slug;

//   const [event, setEvent] = useState(null);
//   const [loading, setLoading] = useState(true);
  
//   // Lightbox State
//   const [lightboxOpen, setLightboxOpen] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Fetch Data
//   useEffect(() => {
//     if (!slug) return;

//     const fetchEvent = async () => {
//       try {
//         setLoading(true);
//         const res = await fetch(`${EVENTS_API_URL}?slug=${slug}`);
        
//         if (!res.ok) {
//             console.error("API Error:", res.status);
//             setLoading(false);
//             return;
//         }

//         const data = await res.json();
        
//         let foundEvent = null;
//         if (Array.isArray(data)) {
//           foundEvent = data.find((e) => e.slug === slug) || data[0];
//         } else if (data.data) {
//           foundEvent = Array.isArray(data.data) 
//             ? data.data.find((e) => e.slug === slug) 
//             : data.data;
//         } else {
//           foundEvent = data;
//         }
        
//         setEvent(foundEvent);
//       } catch (err) {
//         console.error("Failed to fetch event:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEvent();
//   }, [slug]);

//   // Handlers
//   const handleOpen = (i) => { setCurrentIndex(i); setLightboxOpen(true); };
//   const handleClose = () => setLightboxOpen(false);
//   const handleNext = (e) => { e.stopPropagation(); setCurrentIndex((p) => (p + 1) % photos.length); };
//   const handlePrev = (e) => { e.stopPropagation(); setCurrentIndex((p) => (p - 1 + photos.length) % photos.length); };

//   // --- Styles Injection for Responsiveness ---
//   const styles = `
//     .event-container {
//       max-width: 1240px;
//       margin: 0 auto;
//       padding: 40px 20px;
//     }
//     .banner-wrapper {
//       position: relative;
//       height: 450px;
//       border-radius: 16px;
//       overflow: hidden;
//       margin-bottom: 40px;
//       border: 1px solid #4c4949;
//       box-shadow: 0 20px 40px rgba(0,0,0,0.4);
//     }
//     .banner-title {
//       font-size: 2.5rem;
//       font-weight: 800;
//       color: #b79662;
//       margin: 0;
//       text-shadow: 0 2px 4px rgba(0,0,0,0.8);
//     }
//     .content-layout {
//       display: flex;
//       gap: 40px;
//       flex-wrap: wrap;
//     }
//     .left-column {
//       flex: 1 1 60%;
//       min-width: 300px;
//     }
//     .right-column {
//       flex: 0 0 350px;
//       min-width: 300px;
//       max-width: 100%;
//     }
//     .event-card {
//       background-color: #ffffff;
//       border-radius: 16px;
//       padding: 30px;
//       margin-bottom: 30px;
//       box-shadow: 0 10px 30px rgba(0,0,0,0.3);
//       border: 1px solid #606060;
//     }
//     .event-description img {
//       max-width: 100%;
//       height: auto;
//     }
//     .gallery-grid {
//       display: grid;
//       grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
//       gap: 16px;
//     }
    
//     /* Mobile Media Queries */
//     @media (max-width: 768px) {
//       .event-container {
//         padding: 20px 15px;
//       }
//       .banner-wrapper {
//         height: 250px; /* Smaller banner on mobile */
//         margin-bottom: 25px;
//       }
//       .banner-title {
//         font-size: 1.5rem; /* Smaller text on mobile */
//       }
//       .content-layout {
//         flex-direction: column; /* Stack columns vertically */
//         gap: 20px;
//       }
//       .left-column, .right-column {
//         flex: 1 1 100%;
//         width: 100%;
//         min-width: 0;
//       }
//       .right-column {
//         order: 2; /* Ensure sidebar is at bottom on mobile if desired */
//       }
//       .event-card {
//         padding: 20px; /* Less padding on mobile cards */
//       }
//       .sticky-sidebar {
//         position: static !important; /* Disable sticky on mobile */
//       }
//     }
//   `;

//   if (loading) {
//     return (
//       <div style={{ backgroundColor: "#1e1e1e", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
//         <p style={{ color: "#b79662", fontSize: "1.2rem" }}>Loading Event Details...</p>
//       </div>
//     );
//   }

//   if (!event) {
//     return (
//       <div style={{ backgroundColor: "#1e1e1e", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "white" }}>
//         <h2 style={{ fontSize: "2rem", marginBottom: "20px", textAlign: "center" }}>Event not found</h2>
//         <Link href="/events" style={{ textDecoration: "none" }}>
//           <button style={{ padding: "10px 24px", backgroundColor: "#b79662", color: "white", border: "none", borderRadius: "6px", cursor: "pointer", fontWeight: "bold" }}>
//             Back to Events
//           </button>
//         </Link>
//       </div>
//     );
//   }

//   // Data Preparation
//   const rawBanner = event.banner || event.Banner || "";
//   const bannerUrl = rawBanner.startsWith("http")
//     ? rawBanner
//     : `https://uat-service.ireedindia.com/image/${rawBanner.replace(/^\/+|^image\//, "")}`;

//   const photos = (event.gallery || event.Gallery || [])
//     .map((p) => {
//       let filename = String(p).replace(/^\/+/, "").replace(/^image\//, "");
//       return `https://uat-service.ireedindia.com/image/${filename}`;
//     })
//     .filter(Boolean);

//   const youtubeEntries = event.Youtube || event.youtube || [];
//   const mapEmbed = event.map || event.Map || "";

//   return (
//     <div style={{ backgroundColor: "#ffffff", minHeight: "100vh", color: "#e5e7eb", fontFamily: "sans-serif" }}>
//       <style>{styles}</style>
//       {/* <Header /> */}

//       {/* Main Container */}
//       <div className="event-container">
        
//         {/* Banner Section */}
//         <div className="banner-wrapper">
//           <img 
//             src={bannerUrl} 
//             alt={event.title} 
//             style={{ width: "100%", height: "100%", objectFit: "cover" }}
//             onError={(e) => e.target.src = "https://via.placeholder.com/1200x450?text=Event+Banner"}
//           />
//           <div style={{ 
//             position: "absolute", 
//             bottom: 0, 
//             left: 0, 
//             width: "100%", 
//             background: "linear-gradient(to top, #1e1e1e 10%, transparent 100%)", 
//             padding: "40px 30px",
//             display: "flex",
//             alignItems: "flex-end"
//           }}>
//             <h1 className="banner-title">
//               {event.title}
//             </h1>
//           </div>
//         </div>

//         {/* Content Layout */}
//         <div className="content-layout">
          
//           {/* LEFT COLUMN */}
//           <div className="left-column">
            
//             {/* About Card */}
//             <div className="event-card">
//               <h2 style={sectionTitleStyle}>About the Event</h2>
//               <div 
//                 className="event-description"
//                 dangerouslySetInnerHTML={{ __html: event.description || event.content || "No description available." }} 
//                 style={{ lineHeight: "1.8", color: "#6b7280", fontSize: "16px" }}
//               />
//               {event.date && (
//                 <div style={{ marginTop: "20px", color: "#b79662", fontWeight: "bold", fontSize: "1.1rem" }}>
//                    Date: <span style={{ color: "#000", fontWeight: "400" }}>{event.date}</span>
//                 </div>
//               )}
//             </div>

//             {/* Gallery Card */}
//             {photos.length > 0 && (
//               <div className="event-card">
//                 <h2 style={sectionTitleStyle}>Event Gallery</h2>
//                 <div className="gallery-grid">
//                   {photos.map((src, idx) => (
//                     <div 
//                       key={idx} 
//                       onClick={() => handleOpen(idx)}
//                       style={{ 
//                         aspectRatio: "1/1", 
//                         overflow: "hidden", 
//                         borderRadius: "8px", 
//                         cursor: "pointer", 
//                         border: "1px solid #606060",
//                         position: "relative",
//                         transition: "transform 0.2s"
//                       }}
//                       onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.02)"}
//                       onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
//                     >
//                       <img 
//                         src={src} 
//                         alt="Gallery" 
//                         style={{ width: "100%", height: "100%", objectFit: "cover" }}
//                       />
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Location / Map Card */}
//             <div className="event-card">
//               <h2 style={sectionTitleStyle}>Location</h2>
//               {event.venue && <p style={{ marginBottom: "15px", color: "#333", fontSize: "1.1rem" }}> {event.venue}</p>}
              
//               <div style={{ width: "100%", height: "350px", borderRadius: "8px", overflow: "hidden", border: "1px solid #606060", background: "#2d2d2d" }}>
//                 {mapEmbed ? (
//                   <iframe src={mapEmbed} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" />
//                 ) : (
//                   <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: "#888" }}>
//                     Map not available
//                   </div>
//                 )}
//               </div>
//             </div>

//           </div>

//           {/* RIGHT COLUMN (Sidebar) */}
//           <div className="right-column">
//             <div className="event-card sticky-sidebar" style={{ position: "sticky", top: "20px" }}>
//               <h3 style={{ ...sectionTitleStyle, textAlign: "center", marginBottom: "25px" }}>Event Glimpses</h3>
              
//               {youtubeEntries.length > 0 ? (
//                 youtubeEntries.map((item, idx) => {
//                   let src = item?.Youtubelink || item?.url || item;
//                   let videoId = "";
//                   if (typeof src === "string") {
//                     if (src.includes("watch?v=")) videoId = src.split("watch?v=")[1].split("&")[0];
//                     else if (src.includes("youtu.be/")) videoId = src.split("youtu.be/")[1].split("?")[0];
//                   }

//                   return (
//                     <div key={idx} style={{ marginBottom: "25px" }}>
//                       {item.YoutubeHeading && <p style={{ marginBottom: "8px", fontSize: "14px", color: "#b79662", fontWeight: "bold" }}>{item.YoutubeHeading}</p>}
//                       <div style={{ borderRadius: "8px", overflow: "hidden", border: "1px solid #606060" }}>
//                         <iframe 
//                           width="100%" 
//                           height="200" 
//                           src={`https://www.youtube.com/embed/${videoId}`} 
//                           frameBorder="0" 
//                           allowFullScreen
//                         />
//                       </div>
//                     </div>
//                   );
//                 })
//               ) : (
//                 <p style={{ textAlign: "center", color: "#888", fontStyle: "italic" }}>No highlights available.</p>
//               )}

//               <Link href="/events" style={{ textDecoration: "none" }}>
//                 <button
                  
//                   style={{
//                     padding: "14px 40px",
//                     backgroundColor: "#b79662", // Default Gold
//                     borderRadius: "8px",
//                     color: "#fff",
//                     fontSize: "1.1rem",
//                     fontWeight: "700", // Bolder text
//                     cursor: "pointer",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     gap: "10px",
//                     position: "relative",
//                     overflow: "hidden",
//                     zIndex: 1,
//                     border: "none",
//                     margin: "0 auto",
                  
//                     letterSpacing: "1px",
//                     boxShadow: "0 4px 14px 0 rgba(183,150,98,0.39)", // Gold shadow
//                     transition: "all 0.3s ease",
//                   }}
//                   onMouseEnter={(e) => {
//                     const fill = e.currentTarget.querySelector(".hover-fill");
//                     if (fill) fill.style.width = "100%";
//                   }}
//                   onMouseLeave={(e) => {
//                     const fill = e.currentTarget.querySelector(".hover-fill");
//                     if (fill) fill.style.width = "0%";
//                   }}
//                 >
//                   {/* Hover Fill Effect: Darker Gold */}
//                   <div
//                     className="hover-fill"
//                     style={{
//                       position: "absolute",
//                       top: 0,
//                       left: 0,
//                       width: "0%",
//                       height: "100%",
//                       background: "#4c4949", // Darker Gold on Hover
//                       transition: "width 0.4s ease",
//                       zIndex: -1,
//                     }}
//                   />
//                   <span
//                     style={{ position: "relative", zIndex: 1, color: "#fff" }}
//                   >
//                     View All Events
//                   </span>
//                 </button>
//               </Link>
//             </div>
//           </div>

//         </div>
//       </div>

//       {/* Lightbox Modal */}
//       {lightboxOpen && (
//         <div style={{ 
//           position: "fixed", inset: 0, background: "rgba(0,0,0,0.95)", zIndex: 9999, 
//           display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"
//         }} onClick={handleClose}>
          
//           {/* Close Button */}
//           <button onClick={handleClose} style={{ position: "absolute", top: "20px", right: "20px", color: "#fff", fontSize: "30px", background: "rgba(0,0,0,0.3)", width: "40px", height: "40px", borderRadius: "50%", border: "none", cursor: "pointer", zIndex: 10 }}>✕</button>
          
//           <div style={{ position: "relative", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }} onClick={(e) => e.stopPropagation()}>
//             <button onClick={handlePrev} style={{ position: "absolute", left: "10px", color: "#b79662", fontSize: "40px", background: "rgba(255,255,255,0.1)", width: "50px", height: "50px", borderRadius: "50%", border: "none", cursor: "pointer", zIndex: 5, display: "flex", alignItems: "center", justifyContent: "center" }}>‹</button>
            
//             <img src={photos[currentIndex]} style={{ maxWidth: "95%", maxHeight: "80vh", borderRadius: "8px", border: "2px solid #b79662", boxShadow: "0 0 50px rgba(183, 150, 98, 0.2)" }} />
            
//             <button onClick={handleNext} style={{ position: "absolute", right: "10px", color: "#b79662", fontSize: "40px", background: "rgba(255,255,255,0.1)", width: "50px", height: "50px", borderRadius: "50%", border: "none", cursor: "pointer", zIndex: 5, display: "flex", alignItems: "center", justifyContent: "center" }}>›</button>
//           </div>
          
//           <div style={{ marginTop: "20px", color: "#fff", fontSize: "16px", background: "rgba(0,0,0,0.5)", padding: "5px 15px", borderRadius: "20px" }}>
//             {currentIndex + 1} / {photos.length}
//           </div>
//         </div>
//       )}

//       <Footer />
//     </div>
//   );
// }

// // --- Common Static Styles ---
// const sectionTitleStyle = {
//   fontSize: "24px",
//   fontWeight: "bold",
//   color: "#b79662", 
//   marginBottom: "20px",
//   borderBottom: "1px solid #606060",
//   paddingBottom: "12px"
// };


"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams ,useRouter } from "next/navigation";
import { ArrowLeft } from 'lucide-react'; 
import { Col } from "antd";
// import Header from "../../layout/Header"; 
// import Footer from "../../layout/Footer"; 

const EVENTS_API_URL = "https://uat-service.ireedindia.com/v1/events";

// --- Helper Functions for Date Formatting ---
const getOrdinalDay = (n) => {
  if (n > 3 && n < 21) return n + "th";
  switch (n % 10) {
    case 1: return n + "st";
    case 2: return n + "nd";
    case 3: return n + "rd";
    default: return n + "th";
  }
};

const formatEventDate = (dateStr) => {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  // Fallback if invalid date
  if (isNaN(date.getTime())) return dateStr;

  const day = getOrdinalDay(date.getDate());
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  // Returns format: "20th March 2025"
  return `${day} ${month} ${year}`;
};

export default function EventDetailPage() {
  const params = useParams();
   const router = useRouter();
  const slug = params?.slug;

  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!slug) return;

    const fetchEvent = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${EVENTS_API_URL}?slug=${slug}`);
        
        if (!res.ok) {
            console.error("API Error:", res.status);
            setLoading(false);
            return;
        }

        const data = await res.json();
        
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
      <div style={{ backgroundColor: "#ffffff", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p style={{ color: "#b79662", fontSize: "1.2rem" }}>Loading Event Details...</p>
      </div>
    );
  }

  // --- 404 / Not Found State ---
  if (!event) {
    return (
      <div style={{ backgroundColor: "#ffffff", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "#333" }}>
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
    // Changed backgroundColor to #ffffff (White) and text to dark gray
    <div style={{ backgroundColor: "#ffffff", minHeight: "100vh", color: "#374151", fontFamily: "sans-serif" }}>
      {/* <Header /> */}
      

      {/* Main Container */}
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "40px 20px" }}>
         <button onClick={() => router.back()} className="group flex items-center gap-2 cursor-pointer text-xs text-gray-500 hover:text-[#b79662] transition-colors mb-6 uppercase tracking-widest font-bold">
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back
        </button>
        
        {/* Banner Section */}
        <div style={{ 
          position: "relative", 
          height: "450px", 
          borderRadius: "16px", 
          overflow: "hidden", 
          marginBottom: "40px",
          border: "1px solid #e5e7eb",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
        }}>
          <img 
            src={bannerUrl} 
            alt={event.title} 
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            onError={(e) => e.target.src = "https://via.placeholder.com/1200x450?text=Event+Banner"}
          />
          {/* Gradient Overlay - Kept dark so white text remains readable over image */}
          <div style={{ 
            position: "absolute", 
            bottom: 0, 
            left: 0, 
            width: "100%", 
            background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)", 
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
                dangerouslySetInnerHTML={{ __html:  event.content || "No description available." }} 
                // Changed text color to #4b5563 (Dark Gray)
                style={{ lineHeight: "1.8", color: "#4b5563", fontSize: "16px" }}
              />
              
              {/* UPDATED DATE FORMAT */}
              {event.date && (
                <div style={{ marginTop: "20px", color: "#b79662", fontWeight: "bold", fontSize: "1.1rem" }}>
                   Date: <span style={{ color: "#111827", fontWeight: "600", marginLeft: "8px" }}>
                     {formatEventDate(event.date)}
                   </span>
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
                        border: "1px solid #e5e7eb",
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
              {event.venue && <p style={{ marginBottom: "15px", color: "#374151", fontSize: "1.1rem" }}> {event.venue}</p>}
              
              <div style={{ width: "100%", height: "350px", borderRadius: "8px", overflow: "hidden", border: "1px solid #e5e7eb", background: "#f3f4f6" }}>
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
                      <div style={{ borderRadius: "8px", overflow: "hidden", border: "1px solid #e5e7eb" }}>
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
                <p style={{ textAlign: "center", color: "#6b7280", fontStyle: "italic" }}>No highlights available.</p>
              )}

              <Link href="/events" style={{ textDecoration: "none" }}>
                {/* <button style={{ 
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
           View All Events
          </span>
        </button>
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Lightbox Modal (Keep dark background for focus) */}
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
// Changed to WHITE background for Light Mode
const cardStyle = {
  backgroundColor: "#ffffff", 
  borderRadius: "16px",
  padding: "30px",
  marginBottom: "30px",
  // Lighter shadow for white background
  boxShadow: "0 10px 25px rgba(0,0,0,0.08)", 
  border: "1px solid #f3f4f6" // Very light gray border
};

const sectionTitleStyle = {
  fontSize: "24px",
  fontWeight: "bold",
  color: "#b79662", 
  marginBottom: "20px",
  borderBottom: "1px solid #e5e7eb", // Light divider
  paddingBottom: "12px"
};