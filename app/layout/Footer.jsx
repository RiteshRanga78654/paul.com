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
      {/* Side Widget "CALL ME BACK" */}
      {/* <div className="fixed top-1/2 left-0 z-50 -translate-y-1/2 origin-left -rotate-90">
         <button className="bg-[#228B22] text-white font-bold py-2 px-6 rounded-t-md flex items-center gap-2 shadow-lg hover:bg-green-700 transition-colors uppercase tracking-wider text-sm">
           <FaPhoneAlt className="rotate-90 text-xs" /> Call Me Back
         </button>
      </div> */}

      <footer className="bg-[#262626] text-gray-300 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 ">
          {/* Main Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Column 1: Bio & Logo */}
            <div className="space-y-6">
              {/* Logo Section */}
              <div className="flex flex-col items-start">
                <img
                  src="/assets/images/logo.png" // <-- put your logo image here
                  alt="Logo"
                  width={120}
                  height={50}
                  className="object-contain"
                />
              </div>

              <p className="text-sm leading-7  text-gray-200">
                Born in Port Blair, Andaman Nicobar Islands and brought up in
                New Delhi, Bhaswar Paul is a seasoned Sales, Marketing and
                Training professional with almost two decades of work
                experience. He has earned valuable exposure in India and
                overseas market in Education, IT/ITES Services and Real Estate
                Industry.
              </p>
            </div>

            {/* Column 2: Extra Links */}
            <div className="lg:pl-8">
              <h3 className="text-[#cba36f] text-xl font-extrabold mb-6 uppercase">
                Extra Links
              </h3>
              <ul className="space-y-3 text-[15px]">
                {[
                  "About Us",
                  "Services",
                  "Contact Us",
                  "Apply Jobs",
                  "E-Book",
                  "Blogs",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-[#cba36f] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact Information */}
            <div>
              <h3 className="text-[#cba36f] text-xl font-extrabold mb-6 uppercase">
                Contact Information
              </h3>
              <div className="space-y-5 text-[15px]">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="mt-1 text-white shrink-0" />
                  <p>
                    IRIS Tech Park
                    <br />
                    Inhwa Business Center,
                    <br />
                    Sohna Road Sector-48,
                    <br />
                    Gurugram - 122018 Haryana, India
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-white shrink-0" />
                  <a
                    href="mailto:info@bhaswarpaul.com"
                    className="hover:text-[#cba36f]"
                  >
                    info@bhaswarpaul.com
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <FaPhoneAlt className="mt-1 text-white shrink-0" />
                  <div className="flex flex-col">
                    <a
                      href="tel:+919818837873"
                      className="hover:text-[#cba36f]"
                    >
                      +91 981 883 7873
                    </a>
                    <a
                      href="tel:+919417631294"
                      className="hover:text-[#cba36f]"
                    >
                      +91 941 763 1294
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 4: Follow Me */}
            <div>
              <h3 className="text-[#cba36f] text-xl font-extrabold mb-6 uppercase">
                Follow Me
              </h3>

              <button className="bg-[#cba36f] hover:bg-[#b08b5a] text-white px-6 py-2 rounded-sm mb-6 transition-colors border border-[#cba36f] text-sm">
                Join Our Newsletter
              </button>

              <div className="flex flex-wrap gap-2">
                <SocialIcon Icon={FaFacebookF} color="bg-[#3b5998]" />
                <SocialIcon Icon={FaTwitter} color="bg-[#1da1f2]" />
                <SocialIcon Icon={FaLinkedinIn} color="bg-[#0077b5]" />
                <SocialIcon Icon={FaYoutube} color="bg-[#cd201f]" />
                <SocialIcon Icon={FaInstagram} color="bg-[#444444]" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="bg-black py-6 mt-8 border-t border-gray-800">
          <div className="container mx-auto px-4 lg:px-12 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p className="mb-4 md:mb-0 text-center md:text-left">
              Copyright © 2018 Bhaswar Paul | Powered by{" "}
              <span className="text-[#cba36f]">MaitKon</span>
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

// Helper Component for Social Icons
const SocialIcon = ({ Icon, color }) => (
  <a
    href="#"
    className={`${color} w-10 h-10 flex items-center justify-center text-white rounded-sm hover:opacity-80 transition-opacity`}
  >
    <Icon size={18} />
  </a>
);

export default Footer;
