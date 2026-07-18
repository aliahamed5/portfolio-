import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function ProjectCard({ project, index }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-cardBg rounded-xl overflow-hidden hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] transition duration-300 flex flex-col"
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover hover:scale-110 transition duration-500" 
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-poppins font-semibold mb-2">{project.title}</h3>
        <p className="text-textSec text-sm mb-4 line-clamp-2">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {project.tech.map(t => (
            <span key={t} className="text-xs bg-darkBg text-accent px-2 py-1 rounded">
              {t}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm hover:text-primary transition">
              <FaGithub /> GitHub
            </a>
          )}
          {project.liveDemo && (
            <a href={project.liveDemo} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm hover:text-primary transition">
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
