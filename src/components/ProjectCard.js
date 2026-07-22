import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';

export default function ProjectCard({ project, index }) {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group h-full"
    >
      <Tilt tiltEnable={isDesktop} glareEnable={isDesktop} glareMaxOpacity={0.15} glareColor="#3B82F6" glarePosition="all" scale={1.05} transitionSpeed={2000} className="h-full">
        <div className="bg-white dark:bg-cardBg rounded-xl overflow-hidden shadow-lg group-hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] border border-gray-200 dark:border-transparent group-hover:border-primary/50 transition-all duration-500 flex flex-col h-full relative">
          <div className="h-48 overflow-hidden relative">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-in-out" 
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center gap-4">
              {project.github && (
                <motion.a 
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ scale: 1.1 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  href={project.github} target="_blank" rel="noreferrer" 
                  className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-primary transition shadow-lg"
                >
                  <FaGithub size={20} />
                </motion.a>
              )}
              {project.liveDemo && (
                <motion.a 
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ scale: 1.1 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  href={project.liveDemo} target="_blank" rel="noreferrer" 
                  className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-primary transition shadow-lg"
                >
                  <FaExternalLinkAlt size={20} />
                </motion.a>
              )}
            </div>
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-poppins font-semibold mb-2 text-slate-800 dark:text-textMain group-hover:text-accent transition">{project.title}</h3>
            <p className="text-slate-600 dark:text-textSec text-sm mb-4 line-clamp-2 group-hover:text-slate-900 dark:group-hover:text-gray-300 transition">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-2 mt-auto">
              {project.tech.map(t => (
                <span key={t} className="text-xs bg-gray-100 dark:bg-darkBg text-accent px-2 py-1 rounded shadow border border-primary/10">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
}
