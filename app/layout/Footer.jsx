import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="relative font-sans">
      <footer
        className="relative text-gray-300 pt-16 bg-cover bg-center bg-no-repeat"
        style={{
          // Applying the background image with a color overlay
          backgroundImage: `linear-gradient(rgba(38, 38, 38, 0.92), rgba(38, 38, 38, 0.72)), url('/assets/images/goldenmap.png')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Main Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
            {/* Column 1: Bio & Logo */}
            <div className="space-y-6">
              <div className="flex flex-col items-start">
                <img
                  src="/assets/images/logo.png"
                  alt="Logo"
                  width={120}
                  height={50}
                  className="object-contain"
                />
              </div>
              <p className="text-sm leading-7 text-gray-200">
                Born in Port Blair, Andaman Nicobar Islands and brought up in
                New Delhi, Bhaswar Paul is a seasoned Sales, Marketing and
                Training professional with almost two decades of work
                experience.
              </p>
            </div>

            {/* Column 2: Extra Links */}
            <div className="lg:pl-10">
              <h3 className="text-[#cba36f] text-xl font-extrabold mb-6 uppercase">
                Extra Links
              </h3>
              <ul className="space-y-3 text-[15px]">
               
                {[
                  { name: "About Us", link: "/about" },
                  { name: "Events", link: "/events" },
                  { name: "Services", link: "/services" },
                  { name: "Testimonials", link: "/testimonial" },
                  { name: "Network", link: "/network" },
                  { name: "Blogs", link: "/blog" },
                  { name: "Media", link: "/media" },
                ].map((item) => (
                  // CHANGE THIS LINE:
                  <li key={item.name}>
                    <a
                      href={item.link}
                      className="hover:text-[#cba36f] transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Get in Touch */}
            <div className="lg:pl-2">
              <h3 className="text-[#cba36f] text-xl font-extrabold mb-6 uppercase">
                Get In Touch
              </h3>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-white shrink-0" />
                <a
                  href="mailto:info@bhaswarpaul.com"
                  className="hover:text-[#cba36f]"
                >
                  info@bhaswarpaul.com
                </a>
              </div>

              <div className="flex items-start gap-3 mt-4">
                <FaPhoneAlt className="mt-1 text-white shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+919818837873" className="hover:text-[#cba36f]">
                    +91 981 883 7873
                  </a>
                </div>
              </div>
            </div>

            {/* Column 4: Address */}
            <div>
              <h3 className="text-[#cba36f] text-xl font-extrabold mb-6 uppercase">
                Address
              </h3>
              <div className="space-y-5 text-[15px]">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="mt-1 text-white shrink-0" />
                  <p>
                    Office Suite 8 & 9, 3rd Floor,
                    <br />
                    Ninex City Mart, Sohna Road, Near Radisson Hotel, Sector 49,
                    <br /> Gurugram - 122018 Haryana, India
                  </p>
                </div>
              </div>
            </div>

            {/* Column 5: Follow Me */}
            <div>
              <h3 className="text-[#cba36f] text-xl font-extrabold mb-6 uppercase">
                Follow Me
              </h3>

              {/* RESTORED: Your exact button logic */}
              {/* <button
                style={{
                  padding: "6px 10px",
                  backgroundColor: "#b79662",
                  borderRadius: "8px",
                  color: "#fff",
                  fontSize: "12px",
                  fontWeight: "700",
                  cursor: "pointer",
                  display: "flex",
                  marginBottom: "15px",
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
                  Join Our Newsletters
                </span>
              </button> */}

              <div className="flex flex-wrap gap-2 mt-6 relative z-30">
                <SocialIcon
                  Icon={FaFacebookF}
                  color="bg-[#3b5998]"
                  href="https://www.facebook.com/paulbhaswar/"
                />
                <SocialIcon
                  Icon={FaTwitter}
                  color="bg-[#1da1f2]"
                  href="https://twitter.com/paulbhaswar"
                />
                <SocialIcon
                  Icon={FaLinkedinIn}
                  color="bg-[#0077b5]"
                  href="https://www.linkedin.com/in/bhaswarpaul"
                />
                <SocialIcon
                  Icon={FaYoutube}
                  color="bg-[#cd201f]"
                  href="https://www.youtube.com/channel/UCFtJsRpIY-YJE0GObkTV2wQ"
                />
                <SocialIcon
                  Icon={FaInstagram}
                  color="bg-[#e4405f]"
                  href="https://www.instagram.com/bhaswar.paul"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="bg-black py-6 mt-8 border-t border-gray-800 relative z-10">
          <div className="container mx-auto px-4 lg:px-12 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p className="mb-4 md:mb-0 text-center md:text-left">
              Copyright © 2018 Bhaswar Paul | Powered by{" "}
              <a
                href="https://ireedindia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#cba36f] hover:brightness-125 transition-all duration-300"
              >
                IREED
              </a>
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Disclaimers
              </a>
              <span className="text-gray-700">|</span>
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <span className="text-gray-700">|</span>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const SocialIcon = ({ Icon, color, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`w-8 h-8 ${color} rounded flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 cursor-pointer relative z-50`}
    onClick={(e) => e.stopPropagation()}
  >
    <Icon size={14} />
  </a>
);

export default Footer;
