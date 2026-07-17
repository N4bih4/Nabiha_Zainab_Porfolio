import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const CountUp = ({ end, duration }: { end: number, duration: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <span>{count}</span>;
};

export const Achievements = () => {
  return (
    <section id="achievements" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Projects Completed", value: 10, suffix: "+" },
            { label: "Programming Languages", value: 5, suffix: "" },
            { label: "Tools Learned", value: 15, suffix: "+" },
            { label: "Technologies", value: 12, suffix: "+" },
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center p-6 bg-slate-800/40 rounded-2xl border border-slate-700/50 backdrop-blur-sm"
            >
              <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                <CountUp end={stat.value} duration={2000} />{stat.suffix}
              </h3>
              <p className="text-slate-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
