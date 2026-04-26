import React from 'react';
import { motion } from 'framer-motion';
import { educationData } from '../data/education';

const Education = () => {
  return (
    <section id="education" className="bg-white dark:bg-obsidian">
      <div className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-5xl md:text-6xl serif">Education</h2>
        <div className="space-y-6 mt-12">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`group relative bg-white dark:bg-obsidian-light/40 rounded-3xl shadow-sm border border-gray-100 dark:border-glass-border p-8 hover:shadow-xl transition-all duration-500 ${
                edu.isCurrent ? 'border-l-4 border-l-cobalt dark:border-l-cobalt-bright' : ''
              }`}
            >
              <span className={`text-xs font-medium italic block mb-2 serif uppercase tracking-widest ${
                edu.isCurrent ? 'text-cobalt dark:text-cobalt-bright' : 'text-gray-400 dark:text-silver-dark'
              }`}>
                {edu.period}
              </span>

              <h3 className={`font-medium text-gray-900 dark:text-silver mb-1 ${
                edu.isCurrent ? 'text-2xl' : 'text-xl'
              }`}>
                {edu.degree}
              </h3>

              <p className="text-gray-600 dark:text-silver-dark text-sm font-medium mb-6">
                {edu.institution}
              </p>

              {edu.thesis && (
                <div className="mb-8">
                  <span className="text-[10px] font-bold text-gray-400 dark:text-silver-dark uppercase tracking-widest block mb-2">Thesis</span>
                  <p className="text-sm text-gray-600 dark:text-silver-dark italic leading-relaxed font-light">
                    "{edu.thesis}"
                  </p>
                </div>
              )}

              {edu.tags && edu.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {edu.tags.map(tag => (
                    <span key={tag} className="text-[10px] bg-cobalt/5 dark:bg-cobalt-bright/10 text-cobalt dark:text-cobalt-bright px-3 py-1 rounded-full font-medium border border-cobalt/10 dark:border-cobalt-bright/20 transition-colors group-hover:bg-cobalt/10">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
