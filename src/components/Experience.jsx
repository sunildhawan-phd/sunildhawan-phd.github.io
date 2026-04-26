import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data/experience';

const springTransition = { type: "spring", stiffness: 260, damping: 20 };

const Experience = () => {
  return (
    <section id="experience" className="mesh-gradient">
      <div className="max-w-4xl mb-12">
        <h2 className="text-5xl md:text-6xl serif">Experience</h2>
        <p className="text-lg text-gray-600 dark:text-silver-dark mt-4 font-light leading-relaxed">
          A curated professional journey across academia and industry, focused on full-stack engineering and networking security.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Minimalist vertical track */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-glass-border -translate-x-1/2" />

        <div className="space-y-16 md:space-y-20">
          {experience.map((exp, idx) => (
            <div key={idx} className={`relative flex items-start justify-between w-full ${idx % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
              {/* Timeline node */}
              <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-cobalt dark:bg-cobalt-bright rounded-full border-2 border-white dark:border-obsidian shadow-lg -translate-x-1/2 z-10" />

              <div className="w-full md:w-[45%] pl-10 md:pl-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ ...springTransition, delay: idx * 0.1 }}
                  className="group relative p-8 rounded-3xl glass hover:shadow-2xl transition-all duration-500"
                >
                  <div className="absolute -top-2 -left-2 w-12 h-12 bg-cobalt/5 rounded-full blur-xl group-hover:bg-cobalt/10 transition-all" />

                  <span className="text-xs font-medium text-cobalt dark:text-cobalt-bright uppercase tracking-widest block mb-3 serif italic">
                    {exp.period}
                  </span>

                  <h3 className="text-2xl font-medium text-gray-900 dark:text-silver mb-1 tracking-tight">
                    {exp.role}
                  </h3>

                  <p className="text-gray-600 dark:text-silver-dark text-sm font-medium mb-6">
                    {exp.institution}
                  </p>

                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="text-sm text-gray-500 dark:text-silver-dark flex gap-3 font-light leading-relaxed">
                        <span className="text-cobalt dark:text-cobalt-bright font-bold">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
