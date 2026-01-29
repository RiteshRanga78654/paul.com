import React from "react";

const Partners = () => {
  // Array to manage your logos easily
  const partners = [
    { name: "IREED", src: "/assets/images/Ireed-Logo (1).png" },
    { name: "Urban style", src: "/assets/images/urban-style-new.png" },
     { name: "Central park", src: "/assets/images/central-park.png" },
    { name: "Ireo", src: "/assets/images/ireo.png" },
   { name: "M3M", src: "/assets/images/m3m.png" },
    
  ];

  return (
    <>
      {/* Section Heading */}
      <h2 className="text-3xl text-center md:text-4xl font-bold text-[#b79662]">
        Leadership{" "}
        <span className="text-[#b79662]">& Professional Experiences</span>
      </h2>
      <div className="w-24 h-1 bg-[#b79662] mx-auto mt-5 mb-12 rounded-full"></div>

      <section className="py-6 bg-[#4c4949] max-w-7xl rounded-[10px] mx-auto">
        <div className="container mx-auto px-4">
          {/* Logo Flex Container */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="group relative flex items-center justify-center 
                         w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 
                         rounded-full border border-gray-100 shadow-sm 
                         bg-white transition-all duration-300 ease-in-out 
                         hover:shadow-xl hover:-translate-y-2 hover:border-blue-100"
              >
                {/* Logo Wrapper for Padding */}
                <div className="w-3/4 h-3/4 flex items-center justify-center ">
                  <img
                    src={partner.src}
                    alt={partner.name}
                    style={{ borderRadius: "50%" }}
                    className="max-w-full max-h-full  object-contain filter  group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners;
