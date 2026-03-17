"use client";
import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Youtube from "../components/Youtube";
import LinkedIn from "../components/LinkedIn"

const TestimonialsPage = () => {
  const goldTheme = "#b79662";
  const navyTheme = "#000";

  const testimonials = [
    {
      quote: `Proud to have initiated this partnership with IREED India as we shape a strong performance culture at Whiteland Corporation for Westin Residences Gurugram. The REACT Corporate Training by IREED India provided our team with powerful insights into modern real estate sales strategies. The program was practical, engaging, and extremely relevant for premium branded residences like The Westin Residences Gurugram. It has helped our team enhance client engagement and project presentation.`,
      author: "Suneet Singh",
      title: "Chief Marketing Officer (CMO)",
      company: "Whiteland Corporation LLC",
    },
    {
      quote:
        "IREED India played a crucial role in helping us refine our customer hospitality team at our newly launched ultra luxury project, The Kingstown Heights. Their expertise and strategic content development ensured our team resonated with target audience, clearly articulating the value that our project provides. Their collaboration and attention to detail made a measurable impact on our sales team’s success.",
      author: "Nipun Panwar",
      title: "Sr. Vice President, Sales & Marketing ",
      company: "Navraj Infratech (P) Limited",
    },
    {
      quote: `IREED India’s collaborative approach, attention to detail, and practical insights created a measurable impact on our sales performance and overall client engagement. Working with IREED India has been a valuable step toward enhancing our team’s effectiveness and project positioning.

IREED India helped in strengthening and refining our customer experience. Their deep real estate industry expertise helped our team connect effectively with the target audience while clearly articulating the unique value proposition of our project.`,
      author: "Jagdish Singh",
      title: "Vice President, Sales & Marketing",
      company: "Paras Buildtech India (P) Limited",
    },
    {
      quote: `Excellent experience at IREED India! The faculties were knowledgeable and supportive, and the curriculum was well-structured and industry-relevant. I highly recommend IREED India to anyone looking to advance their skills and knowledge in real estate.

The overall experience was truly invaluable with very useful insights for improved skill development. The training delivery methodology was impressive and his ability to connect with audience is exceptional.`,
      author: "Sudhansu Sekhar Nayak",
      title: "Senior Executive - Channel Sales",
      company: "Trident Realty (P) Limited",
    },
    {
      quote:
        `IREED Academy’s real estate course in India is well-structured and practical. The trainer explained each concept clearly, and the assignments were helpful.

After taking IREED real estate skill development programs, I have experienced an immediate change in my sales approach which was more knowledge based. My client engagement has improved and my ability to meaningfully engage with customers dramatically improved.`,
      author: "Rajat Miglani",
      title: "Channel Sales Specialist",
      company:"Trident Realty (P) limited"
    },
    {
      quote:
        `IREED India's corporate training programs transformed our team's approach to real estate investments and market strategies. The sessions on REITs, InvITs, and sustainable development were packed with actionable insights from industry experts, delivered through interactive workshops and real-world case studies. 

Our sales performance improved by 25% within months, thanks to the advanced analytics and leadership tools we gained. Highly recommend IREED for any organization aiming to upskill in India's dynamic real estate sector!`,
      author: "Tammana Thakur",
      title: "Channel Sales Specialist",
      company:"Paras Buildtech India (P) Limited"
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-white">
        <Header />

        {/* 1. Hero Section - Optimized for spacing and alignment */}
        <section className="relative w-full min-h-[60vh] md:min-h-[90vh] flex items-center pt-20  overflow-x-hidden">
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
              <h1 className="text-4xl md:text-6xl font-bold text-[#000] mb-6 leading-tight">
                IREED Client{" "}
                <span style={{ color: goldTheme }}>Testimonials</span>
              </h1>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8">
                IREED India has earned strong appreciation from real estate
                developers, corporate teams, and young professionals for
                delivering industry-focused, practical, and career-oriented real
                estate training programs.
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
              <p className="text-[#000] text-xl md:text-2xl font-bold  mb-8 italic max-w-6xl mx-auto">
                "{testimonials[0].quote}"
              </p>
              <div className="space-y-1">
                <h4 className="font-bold text-xl" style={{ color: goldTheme }}>
                  — {testimonials[0].author}
                </h4>
                <p className="text-gray-600">{testimonials[0].title}</p>
                <p className="text-gray-600">{testimonials[0].company}</p>
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
              <h2 className="text-4xl md:text-5xl font-bold text-[#000] mb-6">
                What Our <span style={{ color: goldTheme }}>Clients Say</span>
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed whitespace-pre-line">
                <p className=" leading-relaxed">
                  At IREED India, we are more than just a training service
                  provider—we are a strategic partner trusted by leading
                  enterprises in real estate development and allied industries.
                  <br />
                  <br />
                  Our clients rely on us to deliver measurable business outcomes
                  through advanced sales training, luxury real estate training,
                  and project management consultancy. From streamlining
                  operational processes to accelerating project sales, our
                  programs are designed to create tangible impact on business
                  performance.
                </p>
                <p>
                  Each testimonial we receive reflects the strength of our 250+
                  man-years of collective industry experience, our commitment to
                  excellence, and our ability to translate knowledge into
                  actionable strategies. Through clear communication, industry
                  insights, and result-oriented training frameworks, IREED India
                  continues to empower real estate organizations to achieve
                  higher efficiency, stronger client engagement, and sustained
                  sales growth.
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
                  About Us{" "}
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* 4. Grid Testimonials - Balanced Spacing */}
        <section className="pb-20 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="text-3xl font-bold text-[#000] mb-2">
              Partnerships that deliver
            </h2>
            <p className="text-gray-500 mb-16 max-w-3xl">
              Hear from industry leaders as they share what sets IREED India
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
                  <h4 className="font-bold text-[#000]">{item.author}</h4>
                  <p className="text-sm text-gray-500">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.company}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Contact Form Section - Fully Responsive and Aligned */}
        <section className="bg-white">
          <div className="w-full h-64 md:h-70 overflow-hidden">
            <img
              src="/assets/testimonial/123.JPG"
              alt="Team"
              className="w-full h-full object-cover grayscale hover:grayscale-0  hover:scale-130 transition-transform duration-2000"
            />
          </div>

        <Youtube />
        </section>
        <LinkedIn />
      </div>
      <Footer />
    </>
  );
};

export default TestimonialsPage;
