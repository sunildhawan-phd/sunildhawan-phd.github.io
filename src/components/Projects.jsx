import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="text-5xl md:text-6xl serif">Projects</h2>
      <p className="text-lg text-gray-600 dark:text-silver-dark mt-4 font-light leading-relaxed max-w-2xl mb-16">
        A collection of technical implementations across diverse domains, ranging from enterprise healthcare systems to iOS productivity apps.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative p-8 rounded-3xl glass hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
          >
            <div className="absolute -top-2 -left-2 w-12 h-12 bg-cobalt/5 rounded-full blur-xl group-hover:bg-cobalt/10 transition-all" />

            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-medium text-gray-900 dark:text-silver tracking-tight">
                {project.name}
              </h3>
              {project.featured && (
                <span className="text-[10px] bg-cobalt/10 text-cobalt dark:text-cobalt-bright px-2 py-1 rounded-full font-bold uppercase tracking-widest border border-cobalt/20 dark:border-cobalt-bright/20">
                  Featured
                </span>
              )}
            </div>

            <p className="text-gray-600 dark:text-silver-dark text-sm font-light leading-relaxed mb-8 grow">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="text-[10px] bg-gray-100 dark:bg-obsidian-light/40 text-gray-500 dark:text-silver-dark px-3 py-1 rounded-full font-medium border border-gray-200 dark:border-glass-border transition-colors group-hover:border-cobalt/30 group-hover:text-cobalt dark:group-hover:text-cobalt-bright"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
