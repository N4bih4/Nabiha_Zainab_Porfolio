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

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-slate-700 pl-8 pb-8">
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
                  <h3 className="text-2xl font-bold text-white mb-1">Entrepreneurship Projects</h3>
                  <h4 className="text-lg text-blue-400 font-medium">Self-Employed</h4>
                </div>
                <div className="mt-2 md:mt-0 px-4 py-1 bg-slate-900/80 border border-slate-700 rounded-full text-sm text-slate-300 whitespace-nowrap">
                  Present
                </div>
              </div>
              
              <div className="mt-6 space-y-4">
                <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-700/50">
                  <h5 className="font-bold text-white text-lg">PromptCut</h5>
                  <p className="text-sm text-slate-400 mt-1">Status: <span className="text-cyan-400 font-medium">Currently Developing</span></p>
                </div>
                <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-700/50">
                  <h5 className="font-bold text-white text-lg">Hostel Roommate Matching System</h5>
                  <p className="text-sm text-slate-400 mt-1">Status: <span className="text-cyan-400 font-medium">Currently Developing</span></p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
