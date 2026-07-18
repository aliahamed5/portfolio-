import React from 'react';
import { motion } from 'framer-motion';

const experienceData = [
  {
    id: 1,
    title: "CIB Summer Program – The Green Leap",
    organization: "Commercial International Bank (CIB)",
    year: "2026",
    description: "Participated in the CIB Summer Program \"The Green Leap\", gaining practical insights into the banking sector, sustainability, digital transformation, and emerging financial technologies through interactive learning and hands-on activities.",
    credentialLink: "https://www.linkedin.com/posts/alia-mohamed-b390a0343_cib-internship-banking-activity-7359593616027049992-BHU1?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFX54F0BprCGRhmC-l-eCEN3A7cjcwy0mR0",
    icon: "🏦"
  },
  {
    id: 2,
    title: "Foundations of Business Data Analytics",
    organization: "IGS & Partners",
    year: "2025",
    description: "Completed a professional training program covering the fundamentals of business data analytics, data-driven decision-making, and analytical thinking using modern business intelligence concepts.",
    credentialLink: "https://www.linkedin.com/posts/alia-mohamed-b390a0343_businessdataanalytics-continuouslearning-activity-7428575346666577920-emD-?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFX54F0BprCGRhmC-l-eCEN3A7cjcwy0mR0",
    icon: "📊"
  },
  {
    id: 3,
    title: "Financial Inclusion & Banking Operations",
    organization: "IGS & Partners",
    year: "2025",
    description: "Completed a specialized training program focused on financial inclusion principles, banking operations, customer services, and the role of financial institutions in economic development.",
    credentialLink: "https://www.linkedin.com/posts/alia-mohamed-b390a0343_banking-financialinclusion-training-activity-7429871688130949121-BiZd?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFX54F0BprCGRhmC-l-eCEN3A7cjcwy0mR0",
    icon: "💳"
  },
  {
    id: 4,
    title: "Programming Using Python (NTI)",
    organization: "National Telecommunication Institute (NTI)",
    year: "2025",
    description: "Successfully completed a summer training program in Python programming, covering programming fundamentals, problem-solving techniques, and practical software development concepts.",
    credentialLink: "https://www.linkedin.com/posts/alia-mohamed-b390a0343_python-programming-freelancing-activity-7379958880564428800-oYAp?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFX54F0BprCGRhmC-l-eCEN3A7cjcwy0mR0",
    icon: "💻"
  },
  {
    id: 5,
    title: "Digital Awareness & Cybersecurity",
    organization: "IGS & Partners",
    year: "2025",
    description: "Completed a training program focused on digital awareness, cybersecurity fundamentals, safe online practices, and protecting personal and organizational information in the digital environment.",
    credentialLink: "https://www.linkedin.com/posts/alia-mohamed-b390a0343_digital-awareness-and-cybersecurity-alia-activity-7350850947062853632-ub6i?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFX54F0BprCGRhmC-l-eCEN3A7cjcwy0mR0",
    icon: "🛡️"
  }
];

export default function Experience() {
  return (
    <section id="certification" className="py-20 px-6 md:px-24">
      <h2 className="text-3xl font-poppins font-bold mb-16 text-center">Experience & Training</h2>
      
      <div className="relative max-w-4xl mx-auto">
        {/* Timeline Line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary/30 h-full rounded"></div>
        
        <div className="space-y-12">
          {experienceData.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Center dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-darkBg border-4 border-primary rounded-full items-center justify-center z-10 shadow-[0_0_15px_rgba(37,99,235,0.6)]">
                  <span className="text-xl">{item.icon}</span>
                </div>
                
                <div className="w-full md:w-1/2 p-4 md:px-8">
                  <div className={`bg-cardBg/80 backdrop-blur-md p-6 rounded-xl border border-primary/20 hover:border-primary/60 transition duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] ${isEven ? 'md:text-right' : 'md:text-left'} text-center`}>
                    <h3 className="text-xl font-poppins font-bold text-accent mb-1">{item.title}</h3>
                    <h4 className="text-md font-medium text-textMain mb-2">{item.organization}</h4>
                    <span className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-semibold mb-4">{item.year}</span>
                    <p className="text-textSec text-sm leading-relaxed mb-4">{item.description}</p>
                    {item.credentialLink && (
                      <a 
                        href={item.credentialLink} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="inline-block px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-white rounded-lg text-sm font-medium transition duration-300"
                      >
                        View Certificate
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
