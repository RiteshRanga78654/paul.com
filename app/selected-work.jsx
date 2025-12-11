import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react'; // ← comment moved here, safe!

const projects = [
  {
    id: "01",
    title: "Partner with NumberDekho",
    category: "WEB & APP",
    image: "https://images.unsplash.com/photo-1555421689-492a1880562a?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "02",
    title: "Broopi Movers",
    category: "DATA & APP",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
  },
  {
    id: "03",
    title: "StarStell Astrology",
    category: "WEB DEV",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "04",
    title: "Eco Mobile App",
    category: "MOBILE APP",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "05",
    title: "FinTech Dashboard",
    category: "UI/UX DESIGN",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "06",
    title: "Health Tracker",
    category: "MOBILE APP",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
  },
];

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      className="relative w-[80vw] md:w-[290px] h-[350px] md:h-[400px] flex-shrink-0 cursor-pointer mr-5 snap-start overflow-hidden bg-gray-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="w-full h-full relative pointer-events-none">
        <div className={`absolute inset-0 bg-black/0 transition-colors duration-700 z-10 ${isHovered ? 'bg-black/40' : ''}`} />
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover transition-transform duration-1000 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
      </div>

      <motion.div
        className="absolute bottom-0 left-0 z-30 bg-[#D92323] overflow-hidden shadow-2xl"
        animate={{ width: isHovered ? 250 : 70, height: isHovered ? 300 : 70 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        style={{ originX: 0, originY: 1 }}
      >
        <div className="relative w-full h-full">
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ opacity: isHovered ? 0 : 1 }}
          >
            <span className="text-white text-2xl md:text-3xl font-light font-mono tracking-tighter">
              {`{${project.id}}`}
            </span>
          </motion.div>

          <motion.div
            className="absolute inset-0 p-5 flex flex-col justify-between"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <h3 className="text-white text-xs font-bold opacity-90 whitespace-nowrap overflow-hidden text-ellipsis">
              {project.title}
            </h3>
            <h2 className="text-white text-xl font-black uppercase leading-tight font-mono tracking-tight">
              {`{${project.category}}`}
            </h2>
            <p className="text-white text-[10px] md:text-xs font-bold uppercase tracking-widest font-mono">
              {`{VIEW PROJECT}`}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const SelectedWork = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e) => {
      e.preventDefault();
      el.scrollBy({
        left: e.deltaY * 2,     // down → right, up → left
        behavior: "smooth",
      });
    };

    el.addEventListener("wheel", onWheel, { passive: false });

    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <section className="bg-white py-24 border-t border-gray-100">
      <div className="container mx-auto px-6 mb-12">
        <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
          Selected Work
        </h2>
        <div className="w-24 h-2 bg-[#D92323]" />
      </div>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto pb-12 px-6 md:px-12 scrollbar-hide snap-x snap-mandatory"
        style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}

        <div className="min-w-[150px] flex items-center justify-center snap-center">
          <div className="group cursor-pointer flex flex-col items-center gap-4">
            <div className="w-14 h-14 rounded-full border-2 border-gray-300 flex items-center justify-center group-hover:border-[#D92323] group-hover:bg-[#D92323] transition-all duration-300">
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
            </div>
            <span className="text-gray-400 font-bold text-xs tracking-widest uppercase group-hover:text-[#D92323]">
              View All
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default SelectedWork;