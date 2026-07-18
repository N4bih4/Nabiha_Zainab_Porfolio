import { motion } from 'framer-motion';
import { FaDownload, FaFileAlt } from 'react-icons/fa';
import { Button } from '../ui/Button';

export const Resume = () => {
  return (
    <section id="resume" className="py-24 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">My <span className="text-blue-500">Resume</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full bg-slate-800/40 backdrop-blur-md rounded-3xl border border-slate-700/50 p-8 flex flex-col items-center justify-center text-center shadow-2xl relative overflow-hidden"
          >
            {/* Background glowing effects */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px]" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px]" />

            <div className="relative z-10 p-6 bg-slate-900/80 rounded-2xl border border-slate-700 mb-8 inline-block shadow-lg">
              <FaFileAlt className="text-blue-500 text-6xl" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Nabiha Zainab</h3>
            <p className="text-slate-400 mb-8 relative z-10">Software Engineering Undergraduate</p>
            
            <div className="flex flex-col items-center gap-4 relative z-10">
              <Button size="lg" variant="primary" href="/resume.pdf?v=2" download="Nabiha_Zainab_Resume.pdf">
                <FaDownload className="mr-2" /> Download Resume
              </Button>
              <p className="mt-2 text-slate-300 text-center">
                <a href="#experience" className="text-blue-400 hover:underline">
                  View my professional experience and projects below.
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
