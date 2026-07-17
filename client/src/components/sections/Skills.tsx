import { motion } from 'framer-motion';
import { useState } from 'react';

type SkillsData = {
  [category: string]: string[];
};

const defaultSkills: SkillsData = {
  "Programming Languages": ["C++", "Java", "Python", "JavaScript", "SQL"],
  "Frontend": ["HTML", "CSS", "React"],
  "Backend": ["Node.js", "Express.js", "MongoDB", "Flutter", "Firebase", "SQFLite"],
  "Testing & QA": ["Selenium", "JMeter"],
  "Tools": ["Git", "GitHub", "Docker", "VS Code", "Android Studio", "IntelliJ", "Packet Tracer", "Draw.io", "StarUML", "Figma", "Canva", "Jira", "ClickUp", "Taiga"],
  "AI Tools": ["ChatGPT", "Claude AI"]
};

export const Skills = () => {
  const [skills] = useState<SkillsData>(defaultSkills);

  // Future integration with API
  /*
  useEffect(() => {
    fetch('http://localhost:5000/api/skills')
      .then(res => res.json())
      .then(data => setSkills(data))
      .catch(err => console.error(err));
  }, []);
  */

  return (
    <section id="skills" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">My <span className="text-blue-500">Skills</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 hover:-translate-y-2 transition-transform duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-6 border-b border-slate-700 pb-3">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-sm text-slate-300 hover:text-white hover:border-blue-500 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
