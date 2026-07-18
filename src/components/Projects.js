import React, { useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'React Dashboard', 'JavaScript', 'HTML/CSS'];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category.includes(filter) || p.tech.includes(filter));

  return (
    <section id="projects" className="py-20 px-6 md:px-24">
      <h2 className="text-3xl font-poppins font-bold mb-10">Featured Projects</h2>
      
      <div className="flex flex-wrap gap-4 mb-10">
        {categories.map(cat => (
          <button 
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${filter === cat ? 'bg-primary text-white' : 'bg-cardBg text-textSec hover:text-white'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
}
