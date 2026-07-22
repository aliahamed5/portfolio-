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
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-poppins font-bold mb-4">Experience & Certification</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
        </motion.div>

        <div className="relative border-l-2 border-primary/30 ml-4 md:ml-0">
          {experienceData.map((item, idx) => (
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.2, duration: 0.5, type: 'spring' }}
              key={item.id} 
              className="mb-10 ml-8 relative group"
            >
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.2 + 0.3, type: 'spring' }}
                className="absolute -left-[41px] top-1 w-5 h-5 bg-accent rounded-full border-4 border-darkBg group-hover:bg-primary transition shadow-[0_0_15px_#3B82F6] flex items-center justify-center text-[10px]"
              >
                {item.icon}
              </motion.div>
              
              <div className="bg-cardBg p-6 rounded-xl border border-transparent hover:border-primary/30 transition shadow-lg group-hover:shadow-[0_0_20px_rgba(37,99,235,0.15)]">
                <h3 className="text-xl font-bold font-poppins text-textMain group-hover:text-accent transition">{item.title}</h3>
                <h4 className="text-primary font-medium mb-1">{item.organization}</h4>
                <span className="text-xs text-textSec mb-4 block font-mono bg-darkBg w-fit px-2 py-1 rounded">{item.year}</span>
                <p className="text-textSec text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
