import React from 'react';
import { motion } from 'framer-motion';
import { certifications } from '../data/certifications';
import { BadgeCheck, Award } from 'lucide-react';

const Certifications = () => {
  return (
    <section id="certifications">
      <h2>Certifications</h2>
      <p className="text-gray-600 dark:text-silver-dark mb-10 max-w-2xl font-light leading-relaxed">
        Industry certifications spanning cloud, networking, AI, and security — from Microsoft, Cisco, and EC-Council.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            whileHover={{ y: -5 }}
            className="group relative bg-white dark:bg-obsidian-light/40 rounded-3xl glass p-6 transition-all duration-500 hover:shadow-2xl overflow-hidden"
          >
            <div
              className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"
              style={{ backgroundColor: cert.color }}
            />

            <div className="relative z-10 flex items-center gap-5">
              <div className="relative shrink-0">
                <div
                  className="w-24 h-24 rounded-2xl overflow-hidden bg-white/90 dark:bg-obsidian/80 border-2 group-hover:border-cobalt dark:group-hover:border-cobalt-bright transition-all duration-500 shadow-inner flex items-center justify-center"
                  style={{
                    borderColor: `${cert.color}40`,
                    backgroundColor: cert.imageBackground || undefined,
                  }}
                >
                  {cert.image ? (
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement.querySelector('.fallback-icon').style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div
                    className="fallback-icon absolute inset-0 items-center justify-center"
                    style={{ display: cert.image ? 'none' : 'flex' }}
                  >
                    <Award size={32} style={{ color: cert.color }} className="opacity-60 group-hover:opacity-100 transition-all duration-500" />
                  </div>
                </div>
                <div
                  className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white dark:bg-obsidian border-2 flex items-center justify-center z-20"
                  style={{ borderColor: cert.color }}
                >
                  <BadgeCheck size={12} style={{ color: cert.color }} />
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="text-[9px] uppercase tracking-widest font-bold px-1.5 py-0.5 rounded border"
                    style={{
                      borderColor: `${cert.color}40`,
                      color: cert.color,
                    }}
                  >
                    {cert.vendor}
                  </span>
                </div>

                <h3 className="text-base font-medium text-gray-900 dark:text-silver mb-2 leading-tight line-clamp-2 group-hover:text-cobalt dark:group-hover:text-cobalt-bright transition-colors duration-300">
                  {cert.name}
                </h3>

                <div className="text-[10px] text-gray-400 dark:text-silver-dark font-light italic">
                  {cert.date}
                </div>
              </div>
            </div>

            <div
              className="absolute bottom-0 left-0 w-full h-1 opacity-30 group-hover:opacity-100 transition-opacity duration-500"
              style={{ backgroundColor: cert.color }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
