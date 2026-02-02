"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

// import Footer from "../layout/Footer"; // Adjust path if needed

const EVENTS_API_URL =
  "https://uat-service.ireedindia.com/v1/events?published=true&page=1&limit=10&website=bhaswarpaul";

// Helper: construct proper image URL
const getImageUrl = (file) => {
  if (!file) return "/placeholder-event.png";
  if (file.startsWith("http://") || file.startsWith("https://")) return file;
  if (file.startsWith("/uploads"))
    return `https://uat-service.ireedindia.com${file}`;
  if (file.startsWith("uploads"))
    return `https://uat-service.ireedindia.com/${file}`;
  return `https://uat-service.ireedindia.com/image/${file}`;
};

// Helper: Calculate ordinal suffix (st, nd, rd, th)
const getOrdinalDay = (n) => {
  if (n > 3 && n < 21) return n + "th"; // 11th - 20th are exceptions
  switch (n % 10) {
    case 1:
      return n + "st";
    case 2:
      return n + "nd";
    case 3:
      return n + "rd";
    default:
      return n + "th";
  }
};

// Helper: Parse Date string into { day: "20th", month: "March" }
function parseDate(dateStr) {
  if (!dateStr) return { month: "", day: "" };

  const date = new Date(dateStr);

  // Check if date is valid
  if (isNaN(date.getTime())) return { month: "", day: "" };

  return {
    month: date.toLocaleString("default", { month: "long" }), // e.g. "March"
    day: getOrdinalDay(date.getDate()), // e.g. "20th"
  };
}

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

  // --- STYLES (Dark Gold Theme) ---
  const pageStyle = {
    minHeight: "100vh",
    // Dark Background
    display: "flex",
    flexDirection: "column",
  };

  const mainContentStyle = {
    flex: 1,
    padding: "40px 16px",
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
    // marginBottom: "40px",
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
    right: "15px",
    top: "15px", // Moved to top-right corner standard position
    width: "75px",
    height: "75px",
    borderRadius: "50%",
    background: "#b79662", // Gold Badge
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.4)",
    zIndex: 3,
    lineHeight: "1.1", // Keep text compact
    border: "2px solid #fff", // Optional: adds a nice pop like the reference
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
 <section className="mobile mx-auto mt-10 mb-15 flex max-w-7xl flex-col overflow-hidden rounded-lg shadow-2xl lg:mt-20 lg:flex-row">
          <div className="flex w-full flex-col justify-center bg-[#4c4949] p-10 md:p-16 lg:w-1/2">
            <span className="mb-4 block text-sm font-bold tracking-widest text-[#b79662]">
              Our Expertise
            </span>

            <h2 className="mb-8 text-3xl font-bold leading-none text-white lg:text-4xl">
              Real Estate Leadership<br />
              <span className="text-[#b79662]">That Shapes Markets</span>
            </h2>

            <p className="mb-10 max-w-xl text-lg font-light leading-relaxed text-gray-200">
Private events connecting senior professionals through insightful discussions and strategic frameworks that drives performance across real estate ventures.            </p>

            {/* Gold Button Style - No style changes, only text */}

            <div className="w-fit">
              <button
                style={{
                  padding: "14px 40px",

                  backgroundColor: "#b79662",

                  borderRadius: "8px",

                  color: "#fff",

                  fontSize: "1.1rem",

                  fontWeight: "700",

                  cursor: "pointer",

                  position: "relative",

                  overflow: "hidden",

                  zIndex: 1,

                  border: "2px solid #b79662",

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
                  View Our Events
                </span>
              </button>
            </div>
          </div>

          <div className="group relative min-h-[400px] w-full bg-[#1e1e1e] lg:w-1/2">
            <img
              src="/assets/TEDx TAPMI/IMG_6622.jpg"
              alt="Testimonial Hero"
              className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
            />

            <div className="absolute inset-0 bg-[#b79662]/60 mix-blend-multiply z-10 group-hover:opacity-0 transition-all duration-500"></div>

            <div
              className="absolute inset-0 z-20 pointer-events-none opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #ffffff 1px, transparent 1px)",

                backgroundSize: "20px 20px",
              }}
            />
          </div>
        </section>

      <div style={mainContentStyle}>
        <div style={containerStyle}>
          <h1 style={headingStyle}>
            Upcoming <span style={{ color: "#b79662" }}>Events</span>
          </h1>
          <div className="w-24 h-1 bg-[#b79662] mx-auto mt-4 mb-10 rounded-full"></div>
          {loading ? (
            <p style={{ color: "#d1d5db", textAlign: "center", fontSize: 18 }}>
              Loading events...
            </p>
          ) : eventList.length === 0 ? (
            <p style={{ color: "#d1d5db", textAlign: "center", fontSize: 18 }}>
              No events found.
            </p>
          ) : (
            <>
              {/* Event Grid */}
              <div className="event-grid" style={gridStyle}>
                {visibleEvents.map((event) => {
                  const { month, day } = parseDate(event.date);
                  const firstLocation = event.location?.[0];
                  const locationText = firstLocation
                    ? `${firstLocation.city || ""}${
                        firstLocation.state ? ", " + firstLocation.state : ""
                      }`
                    : "";

                  const shortDesc =
                    (event.subDescription || "").length > 150
                      ? event.subDescription.slice(0, 147) + "..."
                      : event.subDescription || "";

                  const imageUrl = getImageUrl(event.thumbNail || event.banner);

                  return (
                    <div
                      className="event-card"
                      style={cardStyle}
                      key={event._id || event.slug}
                    >
                      {/* Image Section */}
                      <div
                        style={{
                          position: "relative",
                          width: "100%",
                          paddingBottom: "60%",
                          overflow: "hidden",
                          backgroundColor: "#2d2d2d",
                        }}
                      >
                        <img
                          src={imageUrl}
                          alt={event.altTag || event.title}
                          style={{
                            position: "absolute",
                            inset: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            transition: "transform 0.5s ease",
                          }}
                          onError={(e) => {
                            e.currentTarget.src =
                              "https://via.placeholder.com/400x300?text=Event";
                          }}
                        />
                        {/* Overlay Gradient */}
                        <div
                          style={{
                            position: "absolute",
                            inset: 0,
                            background:
                              "linear-gradient(to top, rgba(30,30,30,0.9) 0%, rgba(0,0,0,0) 60%)",
                          }}
                        ></div>
                      </div>

                      {/* Date Badge */}
                      {event.date && (
                        <div style={dateBadgeStyle}>
                          <span
                            style={{
                              fontSize: "20px",
                              fontWeight: "800",
                              letterSpacing: "-0.5px",
                            }}
                          >
                            {day}
                          </span>
                          <span
                            style={{
                              fontSize: "12px",
                              fontWeight: "500",
                              textTransform: "capitalize",
                            }}
                          >
                            {month}
                          </span>
                        </div>
                      )}

                      {/* Content Section */}
                      <div
                        style={{
                          padding: "20px",
                          display: "flex",
                          flexDirection: "column",
                          flexGrow: 1,
                        }}
                      >
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

                          <div
                            className="learn-more-wrap"
                            style={{ marginTop: "20px" }}
                          >
                            <Link
                              href={`/events/${event.slug}`}
                              style={{ textDecoration: "none" }}
                            >
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
                                  // margin:"auto",

                                  gap: "10px",
                                  position: "relative",
                                  overflow: "hidden",
                                  zIndex: 1,
                                  border: "2px solid #b79662", // Border keeps the button size stable

                                  letterSpacing: "1px",
                                  transition: "all 0.3s ease",
                                }}
                                onMouseEnter={(e) => {
                                  const fill =
                                    e.currentTarget.querySelector(
                                      ".hover-fill"
                                    );
                                  const text =
                                    e.currentTarget.querySelector(".btn-text");

                                  // Slide in the white background
                                  if (fill) fill.style.width = "100%";

                                  // Change text color to Gold
                                  if (text) text.style.color = "#b79662";
                                }}
                                onMouseLeave={(e) => {
                                  const fill =
                                    e.currentTarget.querySelector(
                                      ".hover-fill"
                                    );
                                  const text =
                                    e.currentTarget.querySelector(".btn-text");

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
                                  Learn More
                                </span>
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
                <div
                  style={{
                    marginTop: "50px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <button
                    onClick={handleLoadMore}
                    style={{
                      ...buttonStyle,
                      padding: "14px 40px",
                      fontSize: "1.1rem",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.backgroundColor = "#967d51")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.backgroundColor = "#b79662")
                    }
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
          .event-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .event-grid {
            grid-template-columns: 1fr;
          }
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
