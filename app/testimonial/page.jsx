"use client";
import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

const TestimonialsPage = () => {
  const goldTheme = "#b79662";
  const navyTheme = "#1a2b4b";

  const testimonials = [
    {
      quote: `Prowess Consulting played a crucial role in helping us refine and deliver compelling marketing assets for Wind River’s eLxr Pro offering. Their expertise and strategic content development ensured our messaging resonated with enterprise edge audiences, clearly articulating the value that our portfolio provides. Their collaboration and attention to detail made a measurable impact on our campaign’s success.`,
      author: "Jeff Reser",
      title:
        "Sr. Product Marketing Line Manager, Product Marketing, Wind River",
    },
    {
      quote:
        "Prowess Consulting has been a valuable partner to C2FO's marketing organization for the past four years. Their analytics team is highly skilled and consistently delivers high-quality reports and visualizations.",
      author: "Vishnu Sundaram",
      title: "SVP, Growth Marketing, C2FO",
    },
    {
      quote:
        "Prowess Consulting has been a valuable partner to C2FO's marketing organization for the past four years. Their analytics team is highly skilled and consistently delivers high-quality reports and visualizations.",
      author: "Vishnu Sundaram",
      title: "SVP, Growth Marketing, C2FO",
    },
    {
      quote:
        "Prowess Consulting has been a valuable partner to C2FO's marketing organization for the past four years. Their analytics team is highly skilled and consistently delivers high-quality reports and visualizations.",
      author: "Vishnu Sundaram",
      title: "SVP, Growth Marketing, C2FO",
    },
    {
      quote:
        "Prowess Consulting has been a valuable partner to C2FO's marketing organization for the past four years. Their analytics team is highly skilled and consistently delivers high-quality reports and visualizations.",
      author: "Vishnu Sundaram",
      title: "SVP, Growth Marketing, C2FO",
    },
    {
      quote:
        "Prowess Consulting has been a valuable partner to C2FO's marketing organization for the past four years. Their analytics team is highly skilled and consistently delivers high-quality reports and visualizations.",
      author: "Vishnu Sundaram",
      title: "SVP, Growth Marketing, C2FO",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-white overflow-x-hidden">
        <Header />

        {/* 1. Hero Section - Optimized for spacing and alignment */}
        <section className="relative w-full min-h-[60vh] md:min-h-[90vh] flex items-center pt-20">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/assets/Testimonials-Page-Header.png')`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent"></div>
          </div>

          <div className="container mx-auto px-6 md:px-30 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold text-[#1a2b4b] mb-6 leading-tight">
                Client <span style={{ color: goldTheme }}>testimonials</span>
              </h1>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8">
                Discover why leading companies across industries trust Prowess
                Consulting. We are proud to be modernizing businesses through
                innovative technology, excellent program management, and
                successful client outcomes.
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
                      justifyContent: "left",
                      alignItems: "center",
                      gap: "10px",
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
                     Start Your Journey
                    </span>
                  </button>  
            </div>
          </div>
        </section>

        {/* 2. Featured Testimonial Card - Removed extra whitespace */}
        <section className="py-12 md:py-20 bg-gray-50 px-6">
          <div className="max-w-7xl mx-auto relative">
            <div
              className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full flex items-center justify-center shadow-lg border-4 border-white z-20"
              style={{ backgroundColor: goldTheme }}
            >
              <svg
                width="52"
                height="52"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 11C9 8.79086 7.20914 7 5 7C2.79086 7 1 8.79086 1 11C1 13.2091 2.79086 15 5 15C5.41455 15 5.81139 14.9373 6.18374 14.821C5.66986 15.9392 4.41703 17 3 17H2V19H3C6.31371 19 9 16.3137 9 13V11ZM22 11C22 8.79086 20.2091 7 18 7C15.7909 7 14 8.79086 14 11C14 13.2091 15.7909 15 18 15C18.4146 15 18.8114 14.9373 19.1837 14.821C18.6699 15.9392 17.417 17 16 17H15V19H16C19.3137 19 22 16.3137 22 13V11Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            <div
              className="relative px-8 py-16 md:px-8 md:py-24 text-center bg-cover bg-center rounded-xl shadow-xl overflow-hidden"
              style={{
                backgroundImage: `url('/assets/Navigating_Compliance_Challenges_-_Hero_2.jpg')`,
              }}
            >
              <p className="text-[#1a2b4b] text-xl md:text-2xl font-bold  mb-8 italic max-w-6xl mx-auto">
                "{testimonials[0].quote}"
              </p>
              <div className="space-y-1">
                <h4 className="font-bold text-xl" style={{ color: goldTheme }}>
                  — {testimonials[0].author}
                </h4>
                <p className="text-gray-600 italic">{testimonials[0].title}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. About Us / Icon Section - Aligned and Responsive */}
        <section className="py-16 max-w-8xl md:py-24 bg-white container mx-auto px-6 ">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-[490px]">
                <img
                  src="/assets/unnamed (1).jpg"
                  alt="Partnership"
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1a2b4b] mb-6">
                What our <span style={{ color: goldTheme }}>clients say</span>
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  At Prowess Consulting, we’re more than a service
                  provider—we’re a strategic partner trusted by enterprises in
                  tech, finance, and beyond. Our clients rely on us to deliver
                  measurable results through AI, automation, engineering, and
                  content expertise. From streamlining operations to
                  accelerating innovation, each testimonial reflects our 20+
                  year commitment to excellence, clear communication, and
                  data-driven impact
                </p>
                <p>
                  Each testimonial reflects our 20+ year commitment to
                  excellence and data-driven impact.
                </p>
              </div>
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
                      justifyContent: "left",
                      alignItems: "center",
                      gap: "10px",
                      position: "relative",
                      overflow: "hidden",
                      zIndex: 1,
                      border: "2px solid #b79662",
                      marginTop: "20px",
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
                      About Us {" "}
                    </span>
                  </button>  
            </div>
          </div>
        </section>

        {/* 4. Grid Testimonials - Balanced Spacing */}
        <section className="pb-20 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="text-3xl font-bold text-[#1a2b4b] mb-2">
              Partnerships that deliver
            </h2>
            <p className="text-gray-500 mb-16 max-w-3xl">
              Hear from industry leaders as they share what sets Prowess
              apart—and how our partnership has helped them achieve critical
              business outcomes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
              {testimonials.map((item, index) => (
                <div key={index} className="relative pt-8">
                  <span className="text-[#b79662] text-8xl font-serif absolute -top-2 left-0">
                    “
                  </span>
                  <p className="text-gray-700 leading-relaxed mb-6 italic pt-4">
                    "{item.quote}"
                  </p>
                  <h4 className="font-bold text-[#1a2b4b]">{item.author}</h4>
                  <p className="text-sm text-gray-500">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Contact Form Section - Fully Responsive and Aligned */}
        <section className="bg-white">
          <div className="w-full h-64 md:h-70 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070"
              alt="Team"
              className="w-full h-full object-cover grayscale opacity-80 hover:scale-130 transition-transform duration-2000"
            />
          </div>

          <div className="container mx-auto px-6 py-16 max-w-7xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Are you ready to{" "}
              <span style={{ color: goldTheme }}>expand your reach?</span>
            </h2>
            <p className="text-gray-600 mb-12 text-lg">
              Let's modernize your enterprise together. Get in touch to learn
              more.
            </p>

            <form className="text-left grid grid-cols-1 md:grid-cols-3 gap-6">
              {["First name", "Last name", "Business email"].map((label) => (
                <div key={label} className="flex flex-col">
                  <label className="text-sm font-bold text-gray-700 mb-2">
                    {label}*
                  </label>
                  <input
                    type="text"
                    className="bg-gray-50 border border-gray-200 p-3 rounded-sm focus:outline-none focus:ring-2 transition-all"
                    style={{ focusRingColor: goldTheme }}
                  />
                </div>
              ))}

              <div className="md:col-span-3 mt-4 text-gray-600 text-sm">
                <p className="mb-4">
                  By clicking submit, you consent to allow Prowess Consulting to
                  process your information.
                </p>
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="w-4 h-4"
                    style={{ accentColor: goldTheme }}
                    id="consent"
                  />
                  <label htmlFor="consent" className="cursor-pointer">
                    I agree to receive communications.*
                  </label>
                </div>
              </div>

              <div className="md:col-span-3 flex justify-center mt-6">
                <button
                  type="submit"
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
                    Submit
                  </span>
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default TestimonialsPage;
