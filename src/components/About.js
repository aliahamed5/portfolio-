import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-24 bg-darkBg">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-poppins font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-poppins font-bold mb-4 text-accent">Get to know me!</h3>
            <p className="text-textSec mb-4 leading-relaxed">
              I am Alia Mohamed, a Junior Frontend Developer specializing in React. I am currently in my Third Year studying Business Information Systems (BIS) at Canadian International College (CIC) in Giza, Egypt.
            </p>
            <p className="text-textSec mb-6 leading-relaxed">
              I'm passionate about creating responsive, modern, and user-friendly web applications. I love building things from scratch and turning complex problems into elegant, intuitive interfaces. I'm continuously learning new technologies and always looking for opportunities to grow.
            </p>
            <a href="#contact" className="inline-block px-6 py-3 bg-primary hover:bg-accent rounded-lg text-white font-medium transition shadow-[0_0_15px_rgba(37,99,235,0.4)]">
              Let's Talk
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div className="bg-cardBg p-6 rounded-xl border border-primary/20 hover:border-primary/60 transition shadow-lg">
              <div className="text-3xl mb-3">⚛️</div>
              <h4 className="font-poppins font-bold mb-2">React Expert</h4>
              <p className="text-sm text-textSec">Building dynamic and interactive UIs.</p>
            </div>
            <div className="bg-cardBg p-6 rounded-xl border border-primary/20 hover:border-primary/60 transition shadow-lg">
              <div className="text-3xl mb-3">📱</div>
              <h4 className="font-poppins font-bold mb-2">Responsive</h4>
              <p className="text-sm text-textSec">Pixel perfect designs on all devices.</p>
            </div>
            <div className="bg-cardBg p-6 rounded-xl border border-primary/20 hover:border-primary/60 transition shadow-lg sm:col-span-2 text-center">
              <div className="text-3xl mb-3">🧩</div>
              <h4 className="font-poppins font-bold mb-2">Problem Solving</h4>
              <p className="text-sm text-textSec">Turning complex challenges into simple, elegant solutions through code.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
