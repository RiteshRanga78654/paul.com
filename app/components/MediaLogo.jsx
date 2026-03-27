"use client";
import { useState } from "react";

const logos = [
  {
    src: "/assets/Event/media-partner/23.png",
    alt: "tribune",
    href: "https://www.tribuneindia.com/news/business/ireed-dcoil-officially-launched-mba-in-real-estate",
  },
  {
    src: "/assets/media/logo/business-standard.png",
    alt: "business-standard",
    href: "https://www.business-standard.com/content/press-releases-ani/ireed-dcoil-officially-launched-mba-in-real-estate-125032100480_1.html",
  },
   {
    src: "/assets/Event/media-partner/12.png",
    alt: "france",
    href: "https://www.francenetworktimes.com/news/ireed-dcoil-officially-launched-mba-in-real-estate20250321123418/",
  },
  {
    src: "/assets/media/logo/UAE_Times_QCh5soU.png",
    alt: "UAE",
    href: "https://www.uaetimes.news/news/ireed-dcoil-officially-launched-mba-in-real-estate20250321123418/",
  },
  {
    src: "/assets/media/logo/england-news-portal.png",
    alt: "englandnewsportal",
    href: "https://www.englandnewsportal.com/news/ireed-dcoil-officially-launched-mba-in-real-estate20250321123418/",
  },
  {
    src: "/assets/media/logo/brand_logo.jpg",
    alt: "worldnewsnetwork",
    href: "https://www.worldnewsnetwork.net/news/ireed-dcoil-officially-launched-mba-in-real-estate20250321123418/",
  },
   {
    src: "/assets/media/logo/INN_rVm3TwN.png",
    alt: "indiannewsnetwork",
    href: "https://www.indiannewsnetwork.net/news/ireed-dcoil-officially-launched-mba-in-real-estate20250321123418/",
  },
  {
    src: "/assets/media/logo/east_coast_american_news.png",
    alt: "eastcoastamericannews",
    href: "https://www.eastcoastamericannews.com/news/ireed-dcoil-officially-launched-mba-in-real-estate20250321123418/",
  },
  {
    src: "/assets/media/logo/US_World_Today.png",
    alt: "usworldtoday",
    href: "https://www.usworldtoday.com/news/ireed-dcoil-officially-launched-mba-in-real-estate20250321123418/",
  },
  {
    src: "/assets/media/logo/european_sun_star.png",
    alt: "europeansuntimes",
    href: "https://www.europeansuntimes.com/news/ireed-dcoil-officially-launched-mba-in-real-estate20250321123418/",
  },
  {
    src: "/assets/media/logo/WB_samachar.png",
    alt: "westbengalkhabar",
    href: "https://www.westbengalkhabar.in/news/ireed-dcoil-officially-launched-mba-in-real-estate20250321123418/",
  },
  {
    src: "/assets/media/logo/punjab-live.png",
    alt: "punjablive",
    href: "https://www.punjablive.news/news/ireed-dcoil-officially-launched-mba-in-real-estate20250321123418/",
  },
  {
    src: "/assets/media/logo/Haryana_Today.png",
    alt: "haryanatoday",
    href: "https://www.haryanatoday.in/news/ireed-dcoil-officially-launched-mba-in-real-estate20250321123418/",
  },
  {
    src: "/assets/media/logo/Bihar_Times.png",
    alt: "bihartimes",
    href: "https://www.bihartimes.news/news/ireed-dcoil-officially-launched-mba-in-real-estate20250321123418/",
  },
  {
    src: "/assets/media/logo/Kashmir_Breaking_News.png",
    alt: "kashmirbreakingnews",
    href: "https://www.kashmirbreakingnews.com/news/ireed-dcoil-officially-launched-mba-in-real-estate20250321123418/",
  },
  {
    src: "/assets/media/logo/UP-today.png",
    alt: "uptoday",
    href: "https://www.uptoday.news/news/ireed-dcoil-officially-launched-mba-in-real-estate20250321123418/",
  },
  
  {
    src: "/assets/media/logo/Himanchal-Patrika.png",
    alt: "himachalpatrika",
    href:"https://www.himachalpatrika.com/news/ireed-dcoil-officially-launched-mba-in-real-estate20250321123418/"
  },
  {
    src: "/assets/blog/Bihar-24x7.png",
    alt: "bihar24x7",
    href: "https://www.bihar24x7.com/news/ireed-dcoil-officially-launched-mba-in-real-estate20250321123418/",
  },
  {
    src: "/assets/blog/Business-Connect-Magazine-Logo-2-1-1.png",
    alt: "businessconnectindia",
    href: "https://businessconnectindia.in/global-business-achievers-awards-2026-2/",
  },
  {
    src: "/assets/media/logo/47529300.avif",
    alt: "TOI",
    href: "https://timesofindia.indiatimes.com/punjab-based-lamrin-tech-skills-university-brings-new-course-to-train-property-brokers/articleshow/97555948.cms",
  },
  {
    src: "/assets/media/logo/cwo-logo.png",
    alt: "CW",
    href: "https://www.constructionweekonline.in/people/one-way-to-increase-reputation-of-the-real-estate-industry-educate-them",
  },
  {
    src: "/assets/media/logo/ani.png",
    alt: "ANI",
    href: "https://www.aninews.in/news/business/sunrise-of-certified-real-estate-professionals-lamrin-tech-skills-university-awards-certification-to-the-first-batch-of-reseed20241111183700/",
  },
  {
    src: "/assets/media/logo/logo.png",
    alt: "Daily World",
    href: "https://www.dailyworld.in/education/first-real-estate-course-to-be-launched-395532.html",
  },
  {
    src: "/assets/media/logo/Screenshot 2026-03-22 142252.png",
    alt: "Entrepreneur",
    href: "https://india.entrepreneur.com/news-and-trends/lamrin-tech-skills-university-associates-with-real-estate/444449",
  },
  {
    src: "/assets/media/logo/ht_100_logoblack@2x.webp",
    alt: "Hindustan Times",
    href: "https://www.hindustantimes.com/education/news/ltsu-joins-hand-with-ficci-chairman-to-launch-real-estate-course-101675341233272-amp.html",
  },
  {
    src: "/assets/media/logo/logo_400_transp-300x56.avif",
    alt: "The Print",
    href: "https://theprint.in/economy/punjab-based-lamrin-tech-skills-university-brings-new-course-to-train-property-brokers/1350343/",
  },
  {
    src: "/assets/media/logo/logo-webp.webp",
    alt: "news nation",
    href: "https://www.newsnationtv.com/india/news/real-etate-coure-341612.html",
  },
  {
    src: "/assets/media/logo/constro-logo-png.png",
    alt: "constrofacilitator",
    href: "https://constrofacilitator.com/lamrin-tech-skills-university-to-launch-indias-first-real-estate-course/",
  },
  {
    src: "/assets/media/logo/ptcnews-logo.jpg",
    alt: "PTC",
    href: "ptcnews.tv/top-stories/punjab-new-course-introduced-by-lamrin-tech-skills-niversity-to-train-property-brokers-718454",
  },
  {
    src: "/assets/media/logo/Realty.png",
    alt: "Realty",
    href: "https://www.rprealtyplus.com/allied/lamrin-tech-skills-university-launches-indias-first-real-estate-course-109418.html",
  },
  {
    src: "/assets/media/logo/logo1.webp",
    alt: "LTSU",
    href: "https://www.ltsu.ac.in/event/launch-of-steller-school-of-real-estate",
  },
  {
    src: "/assets/media/logo/uni.png",
    alt: "UNI",
    href: "https://www.uniindia.com/bridging-academia-real-estate-innovation-mba-in-real-estate-officially-launched-by-ireed-dcoil/pnn/news/3433779.html",
  },
  {
    src: "/assets/media/logo/newsVior.png",
    alt: "newsvior",
    href: "https://www.newsvoir.com/release/sunrise-of-certified-real-estate-professionals-lamrin-tech-skills-university-awards-certification-to-the-first-batch-of-reseed-30187.html/",
  },
  {
    src: "/assets/media/logo/TheDailyDiscover_Logo_Design-300w.png",
    alt: "TheDailyDiscover",
    href: "https://thedailydiscover.com/mba-in-real-estate-officially-launched-by-ireed-academy-and-dcoil/",
  },
  {
    src: "/assets/media/logo/topicseveryday_logo.png",
    alt: "topicseveryday",
    href: "https://topicseveryday.com/agency-news/mba-in-real-estate-officially-launched-by-ireed-academy-and-dcoil/",
  },
];

export default function Home() {
  // Matches the slice variable below
  const [visibleCount, setVisibleCount] = useState(16);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <main className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="mx-auto max-w-7xl">
        {/* Grid Container - 4 columns on large screens to match your screenshot */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {logos.slice(0, visibleCount).map((logo, index) => (
            <a
              key={index}
              href={logo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-[180px] w-full items-center justify-center rounded-xl border border-[#b79660] bg-white p-6 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl hover:shadow-gray-300"
            >
              {/* Container for the image without overflow-hidden to allow scaling */}
              <div className="flex h-full w-full items-center justify-center">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </a>
          ))}
        </div>

        {/* Load More Button - Only shows if there are more logos to display */}
        {visibleCount < logos.length && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={loadMore}
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
                Load More
              </span>
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
