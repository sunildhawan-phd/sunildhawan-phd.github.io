import React from 'react';
import { motion } from 'framer-motion';
import { research } from '../data/research';

const Research = () => {
  return (
    <section id="research">
      <h2>Research</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-10">
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-xl font-bold text-cobalt dark:text-cobalt-bright mb-6 flex items-center gap-2">
            Publications
          </h3>
          {research.publications.map((pub, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-obsidian-light/40 rounded-xl shadow-sm border border-gray-100 dark:border-glass-border p-6 border-l-4 border-l-cobalt dark:border-l-cobalt-bright hover:shadow-md transition-all"
            >
              <div className="flex justify-between items-start mb-3">
                <h4 className="font-bold text-gray-800 dark:text-gray-200 leading-tight">{pub.title}</h4>
                <span className="bg-cobalt/10 dark:bg-cobalt-bright/20 text-cobalt dark:text-cobalt-bright text-[10px] font-bold px-2 py-1 rounded uppercase">
                  {pub.year}
                </span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{pub.venue}</p>
              <div className="flex flex-wrap gap-2">
                {pub.tags.map(tag => (
                  <span key={tag} className="text-[10px] bg-gray-100 dark:bg-cobalt-bright/10 text-gray-600 dark:text-silver-dark px-2 py-1 rounded-full font-medium border border-gray-200 dark:border-glass-border">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-bold text-cobalt dark:text-cobalt-bright mb-6 flex items-center gap-2">
            Awards
          </h3>
          <div className="space-y-4">
            {research.awards.map((award, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-3 p-4 bg-white dark:bg-obsidian-light/40 rounded-xl border border-gray-100 dark:border-glass-border shadow-sm hover:bg-cobalt/5 dark:hover:bg-cobalt-bright/10 transition-colors"
              >
                <span className="text-xl">🏆</span>
                <span className="text-sm font-medium text-gray-600 dark:text-silver-dark">{award}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
