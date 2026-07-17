import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

export const Education = () => {
  return (
    <section id="education" className="py-24 bg-slate-900/50 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">My <span className="text-cyan-400">Education</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-slate-700 pl-8 pb-8">
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="absolute -left-[17px] top-0 bg-slate-900 border-4 border-cyan-400 rounded-full p-2"
            >
              <FaGraduationCap className="text-cyan-400" size={16} />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Bachelor of Science in Software Engineering</h3>
                  <h4 className="text-lg text-cyan-400 font-medium">Riphah International University</h4>
                </div>
                <div className="mt-2 md:mt-0 px-4 py-1 bg-slate-900/80 border border-slate-700 rounded-full text-sm text-slate-300 whitespace-nowrap">
                  2023 – Present
                </div>
              </div>
              
              <div className="mt-6">
                <h5 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Focus Areas</h5>
                <div className="flex flex-wrap gap-2">
                  {["Software Engineering", "Requirement Engineering", "Quality Assurance", "Mobile Application Development"].map(area => (
                    <span key={area} className="px-3 py-1 bg-slate-900/50 text-slate-300 rounded-md text-sm border border-slate-700/50">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
