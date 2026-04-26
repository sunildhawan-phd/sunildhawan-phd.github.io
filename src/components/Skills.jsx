import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>

      <div className="mt-10 space-y-8">
        {skills.map((skillGroup, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="flex flex-col md:flex-row md:items-center gap-4"
          >
            <span className="text-cobalt dark:text-cobalt-bright font-bold min-w-[180px]">
              {skillGroup.group}
            </span>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="bg-gray-100 dark:bg-cobalt/10 text-gray-600 dark:text-silver px-3 py-1 rounded-full text-sm font-medium border border-gray-200 dark:border-cobalt/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
