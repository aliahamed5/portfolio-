import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 md:px-24 bg-cardBg/30">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-poppins font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-cardBg p-8 rounded-2xl border border-primary/10 hover:border-primary/40 transition shadow-xl"
            >
              <h3 className="text-xl font-poppins font-bold mb-6 capitalize text-accent">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {items.map(skill => (
                  <div key={skill.name} className="flex items-center gap-2 bg-darkBg px-4 py-2 rounded-lg border border-textSec/20 hover:border-primary/50 hover:text-primary transition">
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
