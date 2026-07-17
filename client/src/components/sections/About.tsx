import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">About <span className="text-blue-500">Me</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8"></div>
          
          <p className="text-lg text-slate-300 leading-relaxed text-justify md:text-center">
            Software Engineering undergraduate with strong interest in <strong className="text-white">Software Engineering, Software Requirement Engineering, Software Quality Assurance, and Mobile Application Development.</strong>
            <br/><br/>
            I have a strong understanding of <span className="text-cyan-400">Object-Oriented Programming, Software Design, Requirement Analysis, Manual Testing, Automation Testing Concepts</span>. I pride myself on being a problem solver, a quick learner, and someone who thrives in team collaboration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          {/* Stats Cards */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl text-center hover:border-blue-500/50 transition-colors"
          >
            <h3 className="text-4xl font-bold text-blue-400 mb-2">8+</h3>
            <p className="text-slate-400 font-medium">Projects</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl text-center hover:border-purple-500/50 transition-colors"
          >
            <h3 className="text-4xl font-bold text-purple-400 mb-2">10+</h3>
            <p className="text-slate-400 font-medium">Technologies</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl text-center hover:border-cyan-500/50 transition-colors"
          >
            <h3 className="text-xl md:text-2xl font-bold text-cyan-400 mb-2 mt-2">2023–Present</h3>
            <p className="text-slate-400 font-medium mt-4">Software Engineering Student</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
