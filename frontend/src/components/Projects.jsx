import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, ArrowLeft, ArrowRight } from 'lucide-react';

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  const projects = [
    {
      title: 'Project One',
      description: 'This is the description for Project One.',
      images: [
        '/images/project1-1.webp',
        '/images/project1-2.webp',
        '/images/project1-3.webp'
      ],
      link: 'https://example.com/project1'
    },
    {
      title: 'Project Two',
      description: 'This is the description for Project Two.',
      images: [
        '/images/project2-1.webp',
        '/images/project2-2.webp'
      ],
      link: 'https://example.com/project2'
    },
    {
      title: 'Project Three',
      description: 'This is the description for Project Three.',
      images: [
        '/images/project3-1.webp'
      ],
      link: 'https://example.com/project3'
    },
    {
      title: 'Project Four',
      description: 'This is the description for Project Four.',
      images: [],
      link: ''
    },
    {
      title: 'Project Five',
      description: 'This is the description for Project Five.',
      images: [
        '/images/project5-1.webp',
        '/images/project5-2.webp'
      ],
      link: 'https://example.com/project5'
    },
  ];

  const toggleDescription = (index) => {
    setActiveIndex((prev) => {
      if (prev === index) {
        return null;
      } else {
        setImageIndex(0);
        return index;
      }
    });
  };

  const handleNext = () => {
    if (activeIndex !== null) {
      const images = projects[activeIndex].images;
      if (images.length > 1) {
        setImageIndex((prev) => (prev + 1) % images.length);
      }
    }
  };

  const handlePrev = () => {
    if (activeIndex !== null) {
      const images = projects[activeIndex].images;
      if (images.length > 1) {
        setImageIndex((prev) => (prev - 1 + images.length) % images.length);
      }
    }
  };

  const activeProject = activeIndex !== null ? projects[activeIndex] : null;

  return (
    <div className="w-11/12 m-auto mt-6 p-6 rounded-2xl border border-[#00ffc3] 
      backdrop-blur-md backdrop-brightness-75 bg-transparent shadow-[0_0_20px_rgba(255,255,255,0.05)]">
      
      <h2 className="text-[3rem] font-bold text-center mb-6 text-transparent 
        bg-gradient-to-r from-[#ff4ecf] via-[#00ffc3] to-[#4e54ff] bg-clip-text">
        PROJECTS
      </h2>

      <div className='flex flex-col md:flex-row gap-4'>

        {/* Left: Project List */}
        <div className="flex flex-col md:w-2/5 gap-4">
          {projects.map((project, index) => {
            const isActive = activeIndex === index;
            return (
              <motion.div
                layout
                key={index}
                className="border border-[#4e54ff] bg-[#ffffff0a] backdrop-blur-sm 
                rounded-lg p-4 cursor-pointer hover:shadow-md hover:border-[#00ffc3] transition duration-300"
                onClick={() => toggleDescription(index)}
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-[#00ffc3]">{project.title}</h2>
                  {isActive ? (
                    <ChevronUp className="w-6 h-6 text-[#00ffc3]" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-[#00ffc3]" />
                  )}
                </div>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      key="desc"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden mt-2 text-[#cccccc]"
                    >
                      <p>{project.description}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Right: Preview/Snapshots */}
        <div className="md:w-4/5 p-4 border border-[#4e54ff] rounded-lg bg-[#ffffff0a] backdrop-blur-sm">
          <h2 className="text-xl font-semibold text-[#ff4ecf] mb-4">Preview / Snapshots</h2>

          {activeProject ? (
            activeProject.images.length > 0 ? (
              <div className="relative border border-[#00ffc3] rounded-md p-2 bg-black/30">
                <img
                  src={activeProject.images[imageIndex]}
                  alt={`Project ${activeIndex + 1} snapshot`}
                  className="w-full h-64 object-contain rounded shadow"
                />
                {activeProject.images.length > 1 && (
                  <>
                    <button
                      className="absolute top-1/2 left-0 -translate-y-1/2 bg-black/60 text-white p-2 rounded-r hover:bg-[#00ffc3]/40"
                      onClick={handlePrev}
                    >
                      <ArrowLeft />
                    </button>
                    <button
                      className="absolute top-1/2 right-0 -translate-y-1/2 bg-black/60 text-white p-2 rounded-l hover:bg-[#00ffc3]/40"
                      onClick={handleNext}
                    >
                      <ArrowRight />
                    </button>
                  </>
                )}
                {activeProject.link && (
                  <h3 className="mt-4 text-[#00ffc3] underline text-lg">
                    <a href={activeProject.link} target="_blank" rel="noopener noreferrer">
                      Visit Project
                    </a>
                  </h3>
                )}
              </div>
            ) : (
              <p className="text-[#999]">No snapshots available for this project.</p>
            )
          ) : (
            <p className="text-[#999]">Click a project to see snapshots.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
