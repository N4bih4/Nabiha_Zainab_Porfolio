import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">My <span className="text-blue-500">Experience</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-12">
          {/* Item 1: CodeAlpha Internship */}
          <div className="relative border-l-2 border-blue-500/30 pl-8 pb-4">
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="absolute -left-[17px] top-0 bg-slate-900 border-4 border-blue-500 rounded-full p-2"
            >
              <FaBriefcase className="text-blue-500" size={16} />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-blue-500/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">App Development Intern</h3>
                  <h4 className="text-lg text-blue-400 font-medium">CodeAlpha</h4>
                </div>
                <div className="mt-2 md:mt-0 px-4 py-1 bg-slate-900/80 border border-slate-700 rounded-full text-sm text-slate-300 whitespace-nowrap">
                  July 2026
                </div>
              </div>
              
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Selected for the App Development Internship Program at CodeAlpha. Responsibilities include building innovative application features, creating optimized frontend interfaces, and implementing clean code patterns.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-medium bg-slate-900/85 text-cyan-400 px-2 py-1 rounded border border-slate-700/50">React.js</span>
                <span className="text-xs font-medium bg-slate-900/85 text-cyan-400 px-2 py-1 rounded border border-slate-700/50">Mobile UI Design</span>
                <span className="text-xs font-medium bg-slate-900/85 text-cyan-400 px-2 py-1 rounded border border-slate-700/50">Application Logic</span>
              </div>
            </motion.div>
          </div>

          {/* Item 2: Entrepreneurship Projects */}
          <div className="relative border-l-2 border-purple-500/30 pl-8 pb-4">
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="absolute -left-[17px] top-0 bg-slate-900 border-4 border-purple-500 rounded-full p-2"
            >
              <FaBriefcase className="text-purple-500" size={16} />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-purple-500/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Entrepreneurship & Self-Employed Projects</h3>
                  <h4 className="text-lg text-purple-400 font-medium">Self-Employed</h4>
                </div>
                <div className="mt-2 md:mt-0 px-4 py-1 bg-slate-900/80 border border-slate-700 rounded-full text-sm text-slate-300 whitespace-nowrap">
                  Present
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-700/50">
                  <h5 className="font-bold text-white text-lg">PromptCut</h5>
                  <p className="text-sm text-slate-400 mt-1">Status: <span className="text-cyan-400 font-medium">Currently Developing</span></p>
                  <p className="text-slate-300 text-sm mt-2">
                    AI-powered video editing platform allowing users to edit and command video content using natural language prompt workflows.
                  </p>
                </div>
                <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-700/50">
                  <h5 className="font-bold text-white text-lg">Hostel Roommate Matching System</h5>
                  <p className="text-sm text-slate-400 mt-1">Status: <span className="text-cyan-400 font-medium">Currently Developing</span></p>
                  <p className="text-slate-300 text-sm mt-2">
                    Intelligent matchmaking application connecting hostel students based on personality profile metrics and scheduling preferences.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Item 3: ADFX-SA / DigiSuite CA Internship */}
          <div className="relative border-l-2 border-blue-500/30 pl-8 pb-4">
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="absolute -left-[17px] top-0 bg-slate-900 border-4 border-blue-500 rounded-full p-2"
            >
              <FaBriefcase className="text-blue-500" size={16} />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-blue-500/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Web Development & AI Prompting Intern</h3>
                  <h4 className="text-lg text-blue-400 font-medium">ADFX-SA (DigiSuite CA)</h4>
                </div>
                <div className="mt-2 md:mt-0 px-4 py-1 bg-slate-900/80 border border-slate-700 rounded-full text-sm text-slate-300 whitespace-nowrap">
                  Sept 2025 (4 Weeks)
                </div>
              </div>
              
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Completed a structured 4-week internship program focused on web engineering and modern AI productivity workflows.
              </p>
              
              <ul className="list-disc pl-5 text-sm text-slate-300 space-y-2 mb-4">
                <li>Developed web pages, created client-side features, and provided online technical support.</li>
                <li>Utilized AI prompting workflows and productivity tools to build high-converting assets.</li>
                <li>Created graphic designs and digital assets for social media marketing strategies.</li>
                <li>Gained insights into market dynamics and financial trading fundamentals.</li>
              </ul>
              
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-medium bg-slate-900/85 text-cyan-400 px-2 py-1 rounded border border-slate-700/50">Web Development</span>
                <span className="text-xs font-medium bg-slate-900/85 text-cyan-400 px-2 py-1 rounded border border-slate-700/50">AI Prompting</span>
                <span className="text-xs font-medium bg-slate-900/85 text-cyan-400 px-2 py-1 rounded border border-slate-700/50">Digital Design</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
