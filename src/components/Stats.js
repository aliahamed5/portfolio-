import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  const stats = [
    { label: 'Projects', value: 8, suffix: '+' },
    { label: 'Certificates', value: 12, suffix: '+' },
    { label: 'Internships', value: 2, suffix: '+' }
  ];

  return (
    <div ref={ref} className="w-full flex justify-center gap-8 md:gap-16 py-8 border-y border-primary/20 my-10 bg-cardBg/10">
      {stats.map((stat, idx) => (
        <motion.div 
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: idx * 0.2, duration: 0.5 }}
          className="text-center"
        >
          <div className="text-4xl md:text-5xl font-poppins font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-2">
            {inView ? (
              <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
            ) : (
              '0'
            )}
          </div>
          <p className="text-sm md:text-base text-textSec font-medium uppercase tracking-wider">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
