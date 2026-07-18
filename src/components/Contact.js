import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:alia.mohamed.h1@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AReply to: ${formData.email}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-poppins font-bold mb-4">Let's Work Together 🚀</h2>
            <p className="text-textSec mb-10 text-lg">
              Have a project in mind or simply want to connect? Feel free to reach out. I'm always open to new opportunities and collaborations.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4 text-textSec hover:text-primary transition">
                <div className="w-12 h-12 bg-cardBg rounded-full flex items-center justify-center text-xl shadow-lg border border-primary/20">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-textMain">Email</h4>
                  <p>alia.mohamed.h1@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-textSec hover:text-primary transition">
                <div className="w-12 h-12 bg-cardBg rounded-full flex items-center justify-center text-xl shadow-lg border border-primary/20">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-textMain">Phone</h4>
                  <p>01150626281</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-textSec hover:text-primary transition">
                <div className="w-12 h-12 bg-cardBg rounded-full flex items-center justify-center text-xl shadow-lg border border-primary/20">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-textMain">Location</h4>
                  <p>Cairo, Egypt</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="https://github.com/aliahamed5" target="_blank" rel="noreferrer" className="w-10 h-10 bg-cardBg rounded-full flex items-center justify-center text-textMain hover:bg-primary hover:text-white transition shadow-lg">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/alia-mohamed-b390a0343" target="_blank" rel="noreferrer" className="w-10 h-10 bg-cardBg rounded-full flex items-center justify-center text-textMain hover:bg-primary hover:text-white transition shadow-lg">
                <FaLinkedin />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-cardBg p-8 rounded-2xl shadow-xl border border-primary/20 relative overflow-hidden"
          >
            {/* Neon accent */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary opacity-20 blur-3xl rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent opacity-20 blur-3xl rounded-full"></div>

            <form className="relative z-10 flex flex-col gap-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-textSec mb-2">Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Your Name" 
                  className="w-full bg-darkBg border border-textSec/30 rounded-lg px-4 py-3 text-textMain focus:outline-none focus:border-primary transition" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-textSec mb-2">Email</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="Your Email" 
                  className="w-full bg-darkBg border border-textSec/30 rounded-lg px-4 py-3 text-textMain focus:outline-none focus:border-primary transition" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-textSec mb-2">Message</label>
                <textarea 
                  rows="4" 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Your Message" 
                  className="w-full bg-darkBg border border-textSec/30 rounded-lg px-4 py-3 text-textMain focus:outline-none focus:border-primary transition resize-none"
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-primary hover:bg-accent text-white font-medium py-3 rounded-lg transition shadow-[0_0_15px_rgba(37,99,235,0.4)] flex justify-center items-center gap-2">
                Send Message <FaEnvelope />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
