import React, { useState, useEffect } from 'react';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import CVModal from './components/CVModal';
import LoadingScreen from './components/LoadingScreen';
import BackgroundOrbs from './components/BackgroundOrbs';
import CustomCursor from './components/CustomCursor';
import Stats from './components/Stats';
import { FaMoon, FaSun } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
  const [theme, setTheme] = useState('dark');
  const [isCVOpen, setIsCVOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <CustomCursor />
      <LoadingScreen onComplete={() => setIsLoading(false)} />
      
      {!isLoading && (
        <div className="min-h-screen bg-white dark:bg-darkBg text-slate-800 dark:text-textMain font-inter transition-colors duration-300 relative z-0">
          <BackgroundOrbs />
          <CVModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
          
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent origin-left z-50 shadow-[0_0_10px_#2563EB]"
            style={{ scaleX }}
          />

          <nav className="fixed w-full p-4 md:p-6 flex justify-between items-center z-40 backdrop-blur-md bg-white/80 dark:bg-darkBg/80 border-b border-gray-200 dark:border-cardBg">
            <h1 className="text-2xl font-poppins font-bold text-primary dark:text-accent">&lt;Alia /&gt;</h1>
            <ul className="hidden md:flex space-x-6 text-sm font-medium">
              {['home', 'about', 'skills', 'projects', 'certification', 'contact'].map((item) => (
                <li key={item} 
                    onClick={() => scrollToSection(item)}
                    className="cursor-pointer hover:text-primary dark:hover:text-accent transition capitalize">
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4">
              <button onClick={toggleTheme} className="text-xl p-2 rounded-full hover:bg-gray-100 dark:hover:bg-cardBg transition">
                {theme === 'dark' ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-slate-700" />}
              </button>
              <button onClick={() => setIsCVOpen(true)} className="hidden sm:block px-4 py-2 bg-primary hover:bg-accent rounded text-white text-sm transition shadow-lg shadow-primary/20 hover:scale-105">
                Download CV
              </button>
            </div>
          </nav>

          <main id="home" className="pt-32">
            <section className="px-6 md:px-24 mb-32 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-xl text-center md:text-left"
              >
                <p className="text-primary font-medium mb-2 tracking-widest text-sm uppercase">Frontend Developer</p>
                <h1 className="text-5xl md:text-6xl font-poppins font-bold mb-4 leading-tight">
                  Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Alia Mohamed</span> 👋
                </h1>
                <h2 className="text-2xl text-slate-600 dark:text-textSec mb-6 h-10">
                  <TypeAnimation
                    sequence={[
                      'Junior Frontend Developer',
                      2000,
                      'React Developer',
                      2000,
                      'Frontend Engineer',
                      2000,
                      'UI Lover',
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </h2>
                <p className="text-slate-600 dark:text-textSec mb-8 leading-relaxed text-lg">
                  I'm passionate about creating responsive, modern, and user-friendly web applications using React. I'm continuously learning new technologies and always looking for opportunities to grow as a Frontend Developer.
                </p>
                <div className="flex justify-center md:justify-start gap-4">
                  <button onClick={() => scrollToSection('projects')} className="px-6 py-3 bg-primary hover:bg-accent rounded-lg text-white font-medium transition flex items-center gap-2 shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:scale-105">
                    View Projects
                  </button>
                  <button onClick={() => setIsCVOpen(true)} className="px-6 py-3 border border-slate-300 dark:border-textSec hover:border-slate-800 dark:hover:border-textMain rounded-lg font-medium transition flex items-center gap-2 hover:scale-105 hover:shadow-lg">
                    Download CV
                  </button>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative mb-10 md:mb-0"
              >
                <div className="w-64 h-64 md:w-96 md:h-96 rounded-full relative flex justify-center items-center">
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/50 animate-spin-slow"></div>
                  <div className="absolute inset-0 rounded-full shadow-[0_0_80px_#2563EB] opacity-60 blur-3xl"></div>
                  <motion.div 
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-[90%] h-[90%] rounded-full overflow-hidden border-2 border-primary relative z-10 bg-gray-100 dark:bg-cardBg flex items-center justify-center shadow-2xl"
                  >
                    <img src={process.env.PUBLIC_URL + '/profile.jpg'} alt="Alia Mohamed" className="w-full h-full object-cover" />
                  </motion.div>
                </div>
              </motion.div>
            </section>
            
            <Stats />

            <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent my-10"></div>
            <About />
            
            <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent my-10"></div>
            <Skills />
            
            <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent my-10"></div>
            <Projects />
            
            <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent my-10"></div>
            <Experience />
            
            <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent my-10"></div>
            <Contact />
          </main>
          
          <footer className="py-8 text-center text-slate-500 dark:text-textSec text-sm border-t border-gray-200 dark:border-cardBg mt-20">
            <p>Made with ❤️ using React | © 2026 Alia Mohamed.</p>
          </footer>
        </div>
      )}
    </>
  );
}

export default App;
