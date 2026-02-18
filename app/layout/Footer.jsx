// import React from "react";
// import {
//   FaMapMarkerAlt,
//   FaEnvelope,
//   FaPhoneAlt,
//   FaFacebookF,
//   FaTwitter,
//   FaLinkedinIn,
//   FaYoutube,
//   FaInstagram,
// } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <div className="relative font-sans">
//       {/* Side Widget "CALL ME BACK" */}
//       {/* <div className="fixed top-1/2 left-0 z-50 -translate-y-1/2 origin-left -rotate-90">
//          <button className="bg-[#228B22] text-white font-bold py-2 px-6 rounded-t-md flex items-center gap-2 shadow-lg hover:bg-green-700 transition-colors uppercase tracking-wider text-sm">
//            <FaPhoneAlt className="rotate-90 text-xs" /> Call Me Back
//          </button>
//       </div> */}

//       <footer className="bg-[#262626] text-gray-300 pt-16 ">
//         <div className="max-w-7xl mx-auto px-4 ">
//           {/* Main Grid Section */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
//             {/* Column 1: Bio & Logo */}
//             <div className="space-y-6">
//               {/* Logo Section */}
//               <div className="flex flex-col items-start">
//                 <img
//                   src="/assets/images/logo.png" // <-- put your logo image here
//                   alt="Logo"
//                   width={120}
//                   height={50}
//                   className="object-contain"
//                 />
//               </div>

//               <p className="text-sm leading-7  text-gray-200">
//                 Born in Port Blair, Andaman Nicobar Islands and brought up in
//                 New Delhi, Bhaswar Paul is a seasoned Sales, Marketing and
//                 Training professional with almost two decades of work
//                 experience.
//               </p>
//             </div>

//             {/* Column 2: Extra Links */}
//             <div className="lg:pl-10">
//               <h3 className="text-[#cba36f] text-xl font-extrabold mb-6 uppercase">
//                 Extra Links
//               </h3>
//               <ul className="space-y-3 text-[15px]">
//                 {[
//                   "About Us",
//                   "Services",
//                   "Contact Us",
//                   "Media",
//                   "Books",
//                   "Blogs",
//                 ].map((item) => (
//                   <li key={item}>
//                     <a
//                       href="#"
//                       className="hover:text-[#cba36f] transition-colors"
//                     >
//                       {item}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//              {/* Column 3: Get in Touch */}
//             <div className="lg:pl-2">
//               <h3 className="text-[#cba36f] text-xl font-extrabold mb-6 uppercase">
//                 Get In Touch
//               </h3>
//               <div className="flex items-center gap-3">
//                   <FaEnvelope className="text-white shrink-0" />
//                   <a
//                     href="mailto:info@bhaswarpaul.com"
//                     className="hover:text-[#cba36f]"
//                   >
//                     info@bhaswarpaul.com
//                   </a>
//                 </div>

//                 <div className="flex items-start gap-3">
//                   <FaPhoneAlt className="mt-1 text-white shrink-0" />
//                   <div className="flex flex-col">
//                     <a
//                       href="tel:+919818837873"
//                       className="hover:text-[#cba36f]"
//                     >
//                       +91 981 883 7873
//                     </a>
//                   </div>
//                 </div>
//             </div>

//             {/* Column 3: Contact Information */}
//             <div>
//               <h3 className="text-[#cba36f] text-xl font-extrabold mb-6 uppercase">
//                 Address
//               </h3>
//               <div className="space-y-5 text-[15px]">
//                 <div className="flex items-start gap-3">
//                   <FaMapMarkerAlt className="mt-1 text-white shrink-0" />
//                   <p>
//                     Office Suite 8 & 9, 3rd Floor,
//                     <br />
//                     Ninex City Mart, Sohna Road, Near Radisson Hotel, Sector 49,
//                     <br /> Gurugram - 122018 Haryana, India
//                   </p>
//                 </div>

                
//               </div>
//             </div>

//             {/* Column 4: Follow Me */}
//             <div>
//               <h3 className="text-[#cba36f] text-xl font-extrabold mb-6 uppercase">
//                 Follow Me
//               </h3>

//               <button
//                 style={{
//                   padding: "6px 10px",
//                   backgroundColor: "#b79662", // Default Gold Background
//                   borderRadius: "8px",
//                   color: "#fff", // Default White Text
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   cursor: "pointer",
//                   display: "flex",
//                   marginBottom: "15px",
//                   gap: "10px",
//                   position: "relative",
//                   overflow: "hidden",
//                   zIndex: 1,
//                   border: "2px solid #b79662", // Border keeps the button size stable

//                   letterSpacing: "1px",
//                   transition: "all 0.3s ease",
//                 }}
//                 onMouseEnter={(e) => {
//                   const fill = e.currentTarget.querySelector(".hover-fill");
//                   const text = e.currentTarget.querySelector(".btn-text");

//                   // Slide in the white background
//                   if (fill) fill.style.width = "100%";

//                   // Change text color to Gold
//                   if (text) text.style.color = "#b79662";
//                 }}
//                 onMouseLeave={(e) => {
//                   const fill = e.currentTarget.querySelector(".hover-fill");
//                   const text = e.currentTarget.querySelector(".btn-text");

//                   // Slide out the white background
//                   if (fill) fill.style.width = "0%";

//                   // Reset text color to White
//                   if (text) text.style.color = "#fff";
//                 }}
//               >
//                 {/* Hover Fill Layer: White */}
//                 <div
//                   className="hover-fill"
//                   style={{
//                     position: "absolute",
//                     top: 0,
//                     left: 0,
//                     width: "0%",
//                     height: "100%",
//                     background: "#ffffff", // White background on hover
//                     transition: "width 0.4s ease",
//                     zIndex: -1,
//                   }}
//                 />

//                 {/* Text Span with Transition */}
//                 <span
//                   className="btn-text"
//                   style={{
//                     position: "relative",
//                     zIndex: 1,
//                     color: "#fff", // Initial color
//                     transition: "color 0.3s ease",
//                   }}
//                 >
//                   Join Our Newsletters
//                 </span>
//               </button>
//               {/* <div className="flex flex-wrap gap-2">
//                 <SocialIcon Icon={FaFacebookF} color="bg-[#3b5998]" />
//                 <SocialIcon Icon={FaTwitter} color="bg-[#1da1f2]" />
//                 <SocialIcon Icon={FaLinkedinIn} color="bg-[#0077b5]" />
//                 <SocialIcon Icon={FaYoutube} color="bg-[#cd201f]" />
//                 <SocialIcon Icon={FaInstagram} color="bg-[#444444]" />
//               </div> */}
//               <div className="flex flex-wrap gap-2 mt-6 relative z-30">
//                 <SocialIcon
//                   Icon={FaFacebookF}
//                   color="bg-[#3b5998]"
//                   href="https://www.facebook.com/paulbhaswar/"
//                 />
//                 <SocialIcon
//                   Icon={FaTwitter}
//                   color="bg-[#1da1f2]"
//                   href="https://twitter.com/paulbhaswar"
//                 />
//                 <SocialIcon
//                   Icon={FaLinkedinIn}
//                   color="bg-[#0077b5]"
//                   href="https://www.linkedin.com/in/bhaswarpaul?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
//                 />
//                 <SocialIcon
//                   Icon={FaYoutube}
//                   color="bg-[#cd201f]"
//                   href="https://www.youtube.com/channel/UCFtJsRpIY-YJE0GObkTV2wQ"
//                 />
//                 <SocialIcon
//                   Icon={FaInstagram}
//                   color="bg-[#444444]"
//                   href="https://www.instagram.com/bhaswar.paul?igsh=YzNqNW53ajVhazZ5"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Copyright Bar */}
//         <div className="bg-black py-6 mt-8 border-t border-gray-800">
//   <div className="container mx-auto px-4 lg:px-12 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
//     <p className="mb-4 md:mb-0 text-center md:text-left">
//       Copyright © 2018 Bhaswar Paul | Powered by{" "}
//       {/* Added Link Here */}
//       <a 
//         href="https://ireedindia.com" 
//         target="_blank" 
//         rel="noopener noreferrer" 
//         className="text-[#cba36f] hover:brightness-125 transition-all duration-300"
//       >
//         IREED
//       </a>
//     </p>
    
//     <div className="flex gap-6">
//       <a href="#" className="hover:text-white transition-colors">
//         Disclaimers
//       </a>
//       <span className="text-gray-700">|</span>
//       <a href="#" className="hover:text-white transition-colors">
//         Privacy Policy
//       </a>
//       <span className="text-gray-700">|</span>
//       <a href="#" className="hover:text-white transition-colors">
//         Terms of Use
//       </a>
//     </div>
//   </div>
// </div>
//       </footer>
//     </div>
//   );
// };

// // Helper Component for Social Icons
// // const SocialIcon = ({ Icon, color }) => (
// //   <a
// //     href="#"
// //     className={`${color} w-10 h-10 flex items-center justify-center text-white rounded-sm hover:opacity-80 transition-opacity`}
// //   >
// //     <Icon size={18} />
// //   </a>
// // );
// const SocialIcon = ({ Icon, color, href }) => (
//   <a
//     href={href}
//     target="_blank"
//     rel="noopener noreferrer"
//     // We keep YOUR exact classes: w-8 h-8, rounded-full, etc.
//     // We only add 'relative z-50' to make it clickable.
//     className={`w-8 h-8 ${color} rounded flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 cursor-pointer relative z-50`}
//     onClick={(e) => e.stopPropagation()} 
//   >
//     <Icon size={14} />
//   </a>
// );

// export default Footer;

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
                  <li key={item}>
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
                  <a
                    href="tel:+919818837873"
                    className="hover:text-[#cba36f]"
                  >
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
              <button
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
              </button>

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
                  color="bg-[#444444]"
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
              <a href="#" className="hover:text-white transition-colors">Disclaimers</a>
              <span className="text-gray-700">|</span>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <span className="text-gray-700">|</span>
              <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
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