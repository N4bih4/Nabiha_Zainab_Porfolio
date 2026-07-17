import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const ROLES = [
  "Software Engineer",
  "Requirement Engineer",
  "QA Enthusiast",
  "Mobile App Developer",
  "Web Developer"
];

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Particles placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-blue-500 font-semibold tracking-wide uppercase text-sm">Welcome to my portfolio</h2>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Nabiha Zainab</span>
            </h1>
            <div className="h-12 flex items-center">
              <span className="text-2xl md:text-3xl text-slate-300 font-medium mr-2">I am a</span>
              <motion.span 
                key={roleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-2xl md:text-3xl font-bold text-cyan-400"
              >
                {ROLES[roleIndex]}
              </motion.span>
            </div>
          </div>

          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            Software Engineering undergraduate passionate about building reliable, scalable, and user-focused software solutions. Interested in Software Engineering, Software Requirement Engineering, Software Quality Assurance, Web Development, and Mobile Application Development.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Button size="lg" href="#resume">
              Download Resume
            </Button>
            <Button variant="outline" size="lg" href="#projects">
              View Projects
            </Button>
            <Button variant="ghost" size="lg" href="#contact">
              Contact Me
            </Button>
          </div>

          <div className="flex items-center gap-6 pt-8 text-slate-400">
            <a href="https://github.com/N4bih4" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors"><FaGithub size={24} /></a>
            <a href="https://www.linkedin.com/in/nabiha-zainab" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors"><FaLinkedin size={24} /></a>
            <a href="mailto:nabihazainabjutt@gmail.com" className="hover:text-blue-500 transition-colors"><FaEnvelope size={24} /></a>
          </div>
        </motion.div>

        {/* Right side floating icons / image placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 relative hidden lg:flex justify-center items-center"
        >
          <div className="relative w-80 h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-10 left-10 p-4 bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-700"
            >
              <span className="text-blue-400 font-mono font-bold">&lt;Code /&gt;</span>
            </motion.div>
            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 right-10 p-4 bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-700"
            >
              <span className="text-purple-400 font-mono font-bold">&#123; UI/UX &#125;</span>
            </motion.div>
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 2 }}
              className="absolute top-40 -right-4 p-4 bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-700"
            >
              <span className="text-cyan-400 font-mono font-bold">QA</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
