import React from "react";
import Image from "next/image";
import {
  FaPlay,
  FaNetworkWired,
  FaUserFriends,
  FaChalkboardTeacher,
  FaTags,
} from "react-icons/fa";
// import Footer from "../layout/Footer";
import Header from "../layout/Header";

// Replace these with your actual image paths
const manInSuit = "/assets/TEDx TAPMI/Tanky You - TEDX & TAPMI.png";
const manWithMic = "/assets/TEDx TAPMI/IMG_9508.jpg"; // New image for Membership section
const articleImg1 = "/path/to/article-img-1.jpg";
const articleImg2 = "/path/to/article-img-2.jpg";
const articleImg3 = "/path/to/article-img-3.jpg";
const videoThumb1 = "/path/to/video-thumb-1.jpg";
const videoThumb2 = "/path/to/video-thumb-2.jpg";
const videoThumb3 = "/path/to/video-thumb-3.jpg";
const videoThumb4 = "/path/to/video-thumb-4.jpg";

const DesignComponent = () => {
  return (
    
    <>
    <Header />
    <div className="font-sans bg-[#1e1e1e] text-white">
      {/* 1. Testimonials Intro Section */}
      <section className="relative flex flex-col lg:flex-row border-b border-gray-800">
        <div className="w-full lg:w-1/2 p-10 lg:p-24 flex flex-col justify-center z-10 bg-[#4c4949]">
          <h4 className="text-[#b79662] font-bold text-sm uppercase tracking-wider mb-4">
            TESTIMONIALS
          </h4>
          <h1 className="text-4xl font-extrabold text-white mb-6">
            Here's What Our <br />
            <span className="text-[#b79662]">Customers Have To Say</span>
          </h1>
          <p className="text-gray-200 text-lg mb-8 font-light leading-relaxed">
            A vibrant network of entrepreneurs,{" "}
            <span className="font-bold text-white">business owners</span>, and
            professionals united by a shared passion for{" "}
            <span className="font-bold text-white">growth</span> and success.
            Whether you're seeking valuable connections, strategic partnerships,
            or collaborative opportunities, our network offers a dynamic
            platform to foster meaningful relationships.
          </p>
          <button className="bg-[#b79662] hover:bg-[#967d51] text-white font-bold py-3 px-8 rounded transition duration-300 w-fit uppercase tracking-wide">
            Join our community now
          </button>
        </div>
        <div className="w-full lg:w-1/2 relative min-h-[500px] bg-[#1e1e1e]">
          <Image
            src={manInSuit}
            alt="Man in Suit"
            layout="fill"
            objectFit="cover"
            // className="z-0 grayscale opacity-80"
          />
          <div className="absolute inset-0 bg-[#b79662]/40 mix-blend-multiply z-10"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 z-20"></div>
        </div>
      </section>

      {/* Why Join Our Community Section */}
      <section className="py-20 px-4 lg:px-24 bg-[#1e1e1e] text-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Why Join Our <span className="text-[#b79662]">Community?</span>
            </h2>
            <div className="w-24 h-1 bg-[#b79662] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Point 1 */}
            <div className="flex bg-[#4c4949] p-8 rounded-xl border border-gray-600 hover:border-[#b79662] transition-all duration-300 shadow-lg group hover:-translate-y-1">
              <div className="bg-[#b79662] text-white font-bold text-2xl h-14 w-14 flex items-center justify-center rounded-lg mr-6 flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#b79662] transition-colors">
                  Connect With Like-Minded Professionals
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed font-light">
                  Surround yourself with a diverse community of driven
                  individuals who share your entrepreneurial spirit and
                  ambition. Our network provides a supportive environment where
                  you can exchange ideas, seek advice, and collaborate on
                  exciting ventures.
                </p>
              </div>
            </div>

            {/* Point 2 */}
            <div className="flex bg-[#4c4949] p-8 rounded-xl border border-gray-600 hover:border-[#b79662] transition-all duration-300 shadow-lg group hover:-translate-y-1">
              <div className="bg-[#b79662] text-white font-bold text-2xl h-14 w-14 flex items-center justify-center rounded-lg mr-6 flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#b79662] transition-colors">
                  Access To Exclusive Resources And Opportunities
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed font-light">
                  Gain access to a wealth of resources, including industry
                  insights, market trends, and business tools, to stay ahead of
                  the curve. From workshops and seminars to networking events
                  and mastermind groups, our network offers valuable
                  opportunities.
                </p>
              </div>
            </div>

            {/* Point 3 */}
            <div className="flex bg-[#4c4949] p-8 rounded-xl border border-gray-600 hover:border-[#b79662] transition-all duration-300 shadow-lg group hover:-translate-y-1">
              <div className="bg-[#b79662] text-white font-bold text-2xl h-14 w-14 flex items-center justify-center rounded-lg mr-6 flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#b79662] transition-colors">
                  Forge Strategic Partnerships
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed font-light">
                  Cultivate strategic partnerships with fellow members to
                  leverage each other's strengths and accelerate mutual growth.
                  Whether you're seeking new clients, suppliers, or investors,
                  our network serves as a fertile ground for cultivating
                  fruitful collaborations.
                </p>
              </div>
            </div>

            {/* Point 4 */}
            <div className="flex bg-[#4c4949] p-8 rounded-xl border border-gray-600 hover:border-[#b79662] transition-all duration-300 shadow-lg group hover:-translate-y-1">
              <div className="bg-[#b79662] text-white font-bold text-2xl h-14 w-14 flex items-center justify-center rounded-lg mr-6 flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#b79662] transition-colors">
                  Promote Your Business And Personal Brand
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed font-light">
                  Showcase your expertise, products, and services to a captive
                  audience within our network. From featured profiles and guest
                  blog posts to speaking opportunities and sponsored events, we
                  provide various channels to amplify your brand visibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NEW SECTION: Membership Benefits */}
      <section className="flex flex-col lg:flex-row bg-white">
        {/* Left: Image */}
        <div className="w-full lg:w-1/2 relative min-h-[500px] lg:min-h-auto">
          <Image
            src={manWithMic} // Replace with your image of man with microphone
            alt="Bhaswar Paul Speaking"
            layout="fill"
            objectFit="cover"
            
          />
          {/* Dark/Gold Overlay */}
          <div className="absolute inset-0 bg-[#1e1e1e]/20 z-10"></div>
        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-1/2 p-10 lg:p-20 bg-[#1e1e1e] flex flex-col justify-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12">
            Membership <span className="text-[#b79662]">Benefits</span>
          </h2>

          <div className="space-y-10">
            {/* Benefit 1 */}
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 mt-1">
                <FaNetworkWired className="text-4xl text-[#b79662]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white uppercase mb-2">
                  Networking Events
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Attend exclusive networking events, mixers, and conferences to
                  expand your professional circle and foster valuable
                  connections.
                </p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 mt-1">
                <FaUserFriends className="text-4xl text-[#b79662]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white uppercase mb-2">
                  Business Referrals
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Tap into our network's referral network to generate leads,
                  referrals, and new business opportunities.
                </p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 mt-1">
                <FaChalkboardTeacher className="text-4xl text-[#b79662]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white uppercase mb-2">
                  Educational Resources
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Access curated resources, including webinars, e-books, and
                  whitepapers, to enhance your knowledge and skills across
                  various business disciplines.
                </p>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 mt-1">
                <FaTags className="text-4xl text-[#b79662]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white uppercase mb-2">
                  Member Discounts
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Enjoy special discounts and offers on business services,
                  software tools, and training programs from our trusted
                  partners and affiliates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
    </>

  );
};

export default DesignComponent;
