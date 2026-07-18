import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

export default function CVModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#0f172a] text-slate-900 dark:text-slate-200 rounded-2xl shadow-2xl p-8 md:p-12 border border-slate-200 dark:border-slate-800"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-full transition"
            >
              <FaTimes className="text-xl text-slate-500 dark:text-slate-400" />
            </button>

            <div className="font-inter">
              <div className="text-center mb-10 border-b border-slate-200 dark:border-slate-800 pb-8">
                <h1 className="text-3xl font-poppins font-bold text-slate-900 dark:text-white tracking-widest mb-2">ALIA MOHAMED HAMED</h1>
                <h2 className="text-lg text-primary dark:text-accent font-medium mb-4">Business Information Systems Student | Junior Developer</h2>
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <span>📧 alia.mohamed.h1@gmail.com</span>
                  <span>|</span>
                  <span>📞 01150626281</span>
                  <span>|</span>
                  <span>📍 Cairo, Egypt</span>
                  <span>|</span>
                  <a href="https://www.linkedin.com/in/alia-mohamed-b390a0343" target="_blank" rel="noreferrer" className="hover:text-primary transition">LinkedIn</a>
                  <span>|</span>
                  <a href="https://github.com/aliahamed5" target="_blank" rel="noreferrer" className="hover:text-primary transition">GitHub</a>
                </div>
              </div>

              <section className="mb-8">
                <h3 className="text-xl font-poppins font-bold text-slate-800 dark:text-white uppercase tracking-wider mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">Professional Summary</h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  Motivated Business Information Systems (BIS) student at Canadian International College with hands-on experience in Python development, web design, and database management. Completed two internships at NTI and CIB Egypt, gaining practical exposure to software development and banking operations. Proficient in HTML, CSS, JavaScript, SQL, and ER modeling. Strong communicator and collaborative team player eager to apply technical skills to real-world business and IT challenges.
                </p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-poppins font-bold text-slate-800 dark:text-white uppercase tracking-wider mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">Technical Skills</h3>
                <ul className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 space-y-2">
                  <li><strong className="text-slate-800 dark:text-slate-200">Languages:</strong> HTML, CSS, JavaScript, C++, Python (basics)</li>
                  <li><strong className="text-slate-800 dark:text-slate-200">Frameworks:</strong> React, Bootstrap</li>
                  <li><strong className="text-slate-800 dark:text-slate-200">Database:</strong> SQL, ER Modeling, Database Design</li>
                  <li><strong className="text-slate-800 dark:text-slate-200">Tools:</strong> Excel, Git, GitHub</li>
                  <li><strong className="text-slate-800 dark:text-slate-200">Soft Skills:</strong> Communication, Teamwork, Problem Solving</li>
                </ul>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-poppins font-bold text-slate-800 dark:text-white uppercase tracking-wider mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">Education</h3>
                <div className="mb-4">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm">Bachelor of Business Information Systems (BIS) | Canadian International College (CIC)</h4>
                    <span className="text-sm font-medium text-slate-500 whitespace-nowrap">Sep 2024 – Jun 2028</span>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 italic mb-2">Cairo, Egypt | Expected Graduation: June 2028</p>
                  <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-300 space-y-1">
                    <li>Relevant coursework: Database Systems, Web Development, Business Analysis, Information Systems</li>
                    <li>Member of Enacuts Club – IT Department</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-poppins font-bold text-slate-800 dark:text-white uppercase tracking-wider mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">Professional Experience</h3>
                
                <div className="mb-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm">Python Developer Trainee – Internship | National Telecommunication Institute (NTI)</h4>
                    <span className="text-sm font-medium text-slate-500 whitespace-nowrap">Aug 2025 – Sep 2025</span>
                  </div>
                  <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-300 space-y-1">
                    <li>Developed and tested Python scripts as part of a structured developer training program</li>
                    <li>Gained practical experience in software development workflows and best practices</li>
                    <li>Collaborated with fellow trainees on coding exercises and mini-projects</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm">Summer Intern – "The Green Leap" Program | CIB Egypt (Commercial International Bank)</h4>
                    <span className="text-sm font-medium text-slate-500 whitespace-nowrap">Jul 2025 – Aug 2025</span>
                  </div>
                  <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-300 space-y-1">
                    <li>Participated in CIB Egypt's summer internship program focused on Financial Inclusion & Banking Operations</li>
                    <li>Gained exposure to banking systems, digital finance concepts, and organizational workflows</li>
                    <li>Collaborated with teams across departments to understand end-to-end banking processes</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-poppins font-bold text-slate-800 dark:text-white uppercase tracking-wider mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">Projects</h3>
                <div className="mb-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm">Clinic Database Management System</h4>
                    <span className="text-sm font-medium text-slate-500 whitespace-nowrap">Nov 2025 – Dec 2025</span>
                  </div>
                  <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-300 space-y-1">
                    <li>Designed and implemented a relational database for a medical clinic using ER modeling and SQL</li>
                    <li>Managed entities including patients, appointments, doctors, and staff records</li>
                    <li>Applied normalization techniques to ensure data integrity and query efficiency</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm">Restaurant Website</h4>
                    <span className="text-sm font-medium text-slate-500 whitespace-nowrap">2025</span>
                  </div>
                  <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-300 space-y-1">
                    <li>Designed and developed a fully responsive restaurant website using HTML and CSS</li>
                    <li>Implemented intuitive navigation, menu display, and contact sections</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-poppins font-bold text-slate-800 dark:text-white uppercase tracking-wider mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">Certifications</h3>
                <ul className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 space-y-2">
                  <li><strong>Foundations of Business Data Analytics</strong> – IGS & Partners | Jan 2026</li>
                  <li><strong>Business Data Analytics</strong> – IGS & Partners | Nov 2025</li>
                  <li><strong>Digital Awareness and Cybersecurity</strong> – IGS & Partners | May 2025</li>
                  <li><strong>Getting Started with Deep Learning</strong> – United Latino Students Association | Jan 2025</li>
                  <li><strong>Training Program: Financial Inclusion & Banking Operations</strong> – EBSM, Banque Misr</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-poppins font-bold text-slate-800 dark:text-white uppercase tracking-wider mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">Languages</h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  <strong className="text-slate-800 dark:text-slate-200">Arabic:</strong> Native <span className="mx-2">|</span>
                  <strong className="text-slate-800 dark:text-slate-200">English:</strong> Intermediate <span className="mx-2">|</span>
                  <strong className="text-slate-800 dark:text-slate-200">Italian:</strong> Beginner
                </p>
              </section>
            </div>

            <div className="mt-10 flex justify-center">
              <button 
                onClick={() => window.print()} 
                className="px-6 py-3 bg-primary hover:bg-accent text-white rounded-lg font-medium shadow-lg transition"
              >
                Print / Save as PDF
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
