"use client"; // <--- 1. FIX: Marks this as a Client Component

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Header from "../layout/Header"; // Adjust path if needed
import Footer from "../layout/Footer"; // Adjust path if needed

const EVENTS_API_URL = "https://uat-service.ireedindia.com/v1/events?published=true&page=1&limit=10";

// Helper: construct proper image URL
const getImageUrl = (file) => {
  if (!file) return "/placeholder-event.png";
  if (file.startsWith("http://") || file.startsWith("https://")) return file;
  if (file.startsWith("/uploads")) return `https://uat-service.ireedindia.com${file}`;
  if (file.startsWith("uploads")) return `https://uat-service.ireedindia.com/${file}`;
  return `https://uat-service.ireedindia.com/image/${file}`;
};

export default function EventsPage() {
  const [eventList, setEventList] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);
  const [loading, setLoading] = useState(true);

  // Fetch Data Client-Side
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const res = await fetch(EVENTS_API_URL);
        const data = await res.json();
        const list = Array.isArray(data) ? data : data.data || [];
        setEventList(list);
      } catch (err) {
        console.error("Client events fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, eventList.length));
  };

  const visibleEvents = eventList.slice(0, visibleCount);

  function parseDate(dateStr = "") {
    const parts = dateStr.split(" ");
    return {
      month: parts[0] || "",
      day: parts[1] || "",
    };
  }

  // --- STYLES (Dark Gold Theme) ---
  const pageStyle = {
    minHeight: "100vh",
     // Dark Background
    display: "flex",
    flexDirection: "column",
  };

  const mainContentStyle = {
    flex: 1,
    padding: "60px 16px",
    display: "flex",
    justifyContent: "center",
  };

  const containerStyle = {
    width: "100%",
    maxWidth: "1240px",
    margin: "0 auto",
  };

  const headingStyle = {
    fontSize: "42px",
    fontWeight: 700,
    marginBottom: "40px",
    color: "#b79662",
    textAlign: "center",
  };

  const gridStyle = {
    display: "grid",
    gap: "28px",
    // Responsive grid handled in JSX/CSS below
  };

  const cardStyle = {
    position: "relative",
    background: "#4c4949", // Card Background
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
    border: "1px solid #606060",
    transition: "transform 0.3s ease, border-color 0.3s ease",
  };

  const titleStyle = {
    fontSize: "20px",
    fontWeight: 700,
    color: "#b79662", // Gold Title
    marginBottom: "12px",
    marginTop: "20px",
    lineHeight: 1.4,
  };

  const descStyle = {
    fontSize: "14px",
    lineHeight: 1.6,
    color: "#d1d5db", // Light Gray Text
    marginBottom: "18px",
  };

  const locationRowStyle = {
    display: "flex",
    alignItems: "center",
    fontSize: "13px",
    color: "#9ca3af", // Muted Gray
  };

  const pinStyle = {
    width: "18px",
    height: "18px",
    borderRadius: "50%",
    border: "2px solid #b79662", // Gold Pin
    color: "#b79662",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "8px",
    fontSize: "10px",
  };

  const dateBadgeStyle = {
    position: "absolute",
    right: "10px",
    top: "40%",
    transform: "translateY(-50%)",
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    background: "#b79662", // Gold Badge
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
    zIndex: 3,
  };

  const buttonStyle = {
    padding: "12px 30px",
    backgroundColor: "#b79662", // Gold Button
    borderRadius: "6px",
    color: "#fff",
    fontSize: "1rem",
    fontWeight: "600",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    transition: "background-color 0.3s ease",
  };

  return (
    <div style={pageStyle}>
      <Header />
      
      <div style={mainContentStyle}>
        <div style={containerStyle}>
          <h1 style={headingStyle}>
            Upcoming <span style={{ color: "#b79662" }}>Events</span>
          </h1>

          {loading ? (
            <p style={{ color: "#d1d5db", textAlign: "center", fontSize: 18 }}>Loading events...</p>
          ) : eventList.length === 0 ? (
            <p style={{ color: "#d1d5db", textAlign: "center", fontSize: 18 }}>No events found.</p>
          ) : (
            <>
              {/* Event Grid */}
              <div className="event-grid" style={gridStyle}>
                {visibleEvents.map((event) => {
                  const { month, day } = parseDate(event.date);
                  const firstLocation = event.location?.[0];
                  const locationText = firstLocation
                    ? `${firstLocation.city || ""}${firstLocation.state ? ", " + firstLocation.state : ""}`
                    : "";

                  const shortDesc = (event.subDescription || "").length > 150
                      ? event.subDescription.slice(0, 147) + "..."
                      : event.subDescription || "";

                  const imageUrl = getImageUrl(event.thumbNail || event.banner);

                  return (
                    <div className="event-card" style={cardStyle} key={event._id || event.slug}>
                      {/* Image Section */}
                      <div style={{ position: "relative", width: "100%", paddingBottom: "60%", overflow: "hidden", backgroundColor: "#2d2d2d" }}>
                        <img
                          src={imageUrl}
                          alt={event.altTag || event.title}
                          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
                          onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/400x300?text=Event"; }}
                        />
                        {/* Overlay Gradient */}
                        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(30,30,30,0.9) 0%, rgba(0,0,0,0) 60%)" }}></div>
                      </div>

                      {/* Date Badge */}
                      {event.date && (
                        <div style={dateBadgeStyle}>
                          <span style={{ fontSize: "20px", fontWeight: "800", lineHeight: 1 }}>{day}</span>
                          <span style={{ fontSize: "12px", marginTop: "2px", fontWeight: "600", textTransform: "uppercase" }}>{month}</span>
                        </div>
                      )}

                      {/* Content Section */}
                      <div style={{ padding: "20px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                        <h3 style={titleStyle}>{event.title}</h3>
                        
                        <div 
                          style={descStyle}
                          dangerouslySetInnerHTML={{ __html: shortDesc }}
                        />

                        <div style={{ marginTop: "auto" }}>
                          {locationText && (
                            <div style={locationRowStyle}>
                              <span style={pinStyle}>📍</span>
                              {locationText}
                            </div>
                          )}

                          <div className="learn-more-wrap" style={{ marginTop: "20px" }}>
                            <Link href={`/events/${event.slug}`} style={{ textDecoration: "none" }}>
                              <button style={buttonStyle} className="hover:bg-[#967d51]">
                                Learn More
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Load More Button */}
              {visibleCount < eventList.length && (
                <div style={{ marginTop: "50px", display: "flex", justifyContent: "center" }}>
                  <button 
                    onClick={handleLoadMore} 
                    style={{...buttonStyle, padding: "14px 40px", fontSize: "1.1rem"}}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#967d51"}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#b79662"}
                  >
                    Load More Events
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <Footer />

      {/* CSS Styles for Grid & Hover Effects */}
      <style jsx>{`
        .event-grid {
          grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 1024px) {
          .event-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .event-grid { grid-template-columns: 1fr; }
        }
        .event-card:hover {
          transform: translateY(-8px);
          border-color: #b79662 !important;
        }
        .event-card:hover img {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
}