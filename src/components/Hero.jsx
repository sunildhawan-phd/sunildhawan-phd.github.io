import React from 'react';
import { motion } from 'framer-motion';
import { Link2, Mail, FileText } from 'lucide-react';
import profilePic from '../assets/sunil-professional.webp';

const springTransition = { type: "spring", stiffness: 260, damping: 20 };

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-20 mesh-gradient overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 z-10"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, ...springTransition }}
            className="text-cobalt dark:text-cobalt-bright text-xs font-bold uppercase tracking-[0.2em] mb-4 block serif"
          >
            Assistant Professor · PhD Candidate
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, ...springTransition }}
            className="text-6xl lg:text-8xl font-medium text-gray-900 dark:text-silver mb-8 leading-[1.1] tracking-normal serif"
          >
            Sunil Dhawan
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, ...springTransition }}
            className="text-lg md:text-xl text-gray-600 dark:text-silver-dark mb-12 leading-relaxed max-w-2xl font-light"
          >
            Researching <span className="text-gray-900 dark:text-silver font-medium">AI-Driven SDN Security</span> · Teaching Full-Stack Development · 15+ Years in Academia & Industry
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, ...springTransition }}
            className="flex flex-wrap gap-5 mb-16"
          >
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#research"
              className="bg-cobalt dark:bg-cobalt-bright text-white px-8 py-4 rounded-full font-medium transition-all flex items-center gap-2 shadow-xl shadow-cobalt/20"
            >
              View My Research
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="/cv/Sunil_Dhawan_CV_2026.pdf"
              className="glass px-8 py-4 rounded-full font-medium text-gray-900 dark:text-silver transition-all flex items-center gap-2"
            >
              <FileText size={18} /> Download CV
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-6"
          >
            <a href="https://www.linkedin.com/in/sunil-dhawan-213024b2/" target="_blank" rel="noreferrer" className="text-gray-400 dark:text-silver-dark hover:text-cobalt dark:hover:text-cobalt-bright transition-all duration-300">
              <Link2 size={22} />
            </a>
            <a href="mailto:sunil.dhawan@chitkara.edu.in" className="text-gray-400 dark:text-silver-dark hover:text-cobalt dark:hover:text-cobalt-bright transition-all duration-300">
              <Mail size={22} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative flex justify-center"
        >
          <div className="absolute w-72 h-72 bg-cobalt/20 dark:bg-cobalt-bright/10 rounded-full blur-3xl opacity-60 -z-10 animate-pulse" />
          <div className="relative w-64 h-80 lg:w-96 lg:h-[450px] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-gray-200 dark:ring-glass-border">
            <motion.img
              src={profilePic}
              alt="Sunil Dhawan"
              className="w-full h-full object-cover scale-110"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/400x500?text=SD";
              }}
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 bg-white/40 dark:bg-obsidian-light/30 backdrop-blur-sm p-10 rounded-3xl border border-gray-100 dark:border-glass-border"
      >
        {[
          { label: "Years Experience", value: "15+" },
          { label: "Expert Certs", value: "6" },
          { label: "PhD Publications", value: "2" },
          { label: "Freelance Projects", value: "10+" },
        ].map((stat, idx) => (
          <div key={idx} className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + (idx * 0.1), ...springTransition }}
              className="text-4xl font-medium text-gray-900 dark:text-silver serif"
            >
              {stat.value}
            </motion.div>
            <div className="text-[10px] text-gray-500 dark:text-silver-dark uppercase tracking-[0.15em] font-medium mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;
