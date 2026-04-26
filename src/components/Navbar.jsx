import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const linkClassName = `relative group text-xs uppercase tracking-wider py-1 transition-all duration-300 ${
    scrolled
      ? 'font-semibold text-gray-950 dark:text-white hover:text-cobalt dark:hover:text-cobalt-bright [text-shadow:0_1px_0_rgba(255,255,255,0.18)] dark:[text-shadow:0_1px_12px_rgba(0,0,0,0.45)]'
      : 'font-medium text-gray-600 dark:text-silver-dark hover:text-cobalt dark:hover:text-cobalt-bright'
  }`;

  const themeButtonClassName = `p-2 rounded-full transition-all active:scale-90 ${
    scrolled
      ? 'bg-white/90 dark:bg-obsidian/90 text-gray-900 dark:text-white shadow-sm ring-1 ring-gray-200/80 dark:ring-glass-border hover:text-cobalt dark:hover:text-cobalt-bright hover:rotate-12'
      : 'bg-gray-100 dark:bg-obsidian-light/50 text-gray-600 dark:text-cobalt-bright hover:rotate-12'
  }`;

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#hero' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Experience', href: '#experience' },
    { name: 'Research', href: '#research' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="fixed top-0 w-full z-50 flex justify-center p-4 md:p-6 pointer-events-none">
      <motion.nav
        initial={false}
        animate={{
          width: scrolled ? 'auto' : '100%',
          maxWidth: scrolled ? 'fit-content' : '100%',
          borderRadius: scrolled ? '9999px' : '0px',
          backgroundColor: scrolled
            ? (isDark ? 'rgba(8, 12, 18, 0.94)' : 'rgba(255, 255, 255, 0.94)')
            : 'transparent',
        }}
        className={`
          pointer-events-auto transition-all duration-500 ease-in-out
          ${scrolled ? 'glass px-6 py-2 shadow-2xl ring-1 ring-gray-200/80 dark:ring-glass-border backdrop-blur-2xl' : 'bg-transparent py-4'}
          flex items-center justify-center md:justify-center mx-auto
        `}
      >
        <div className="flex flex-col items-start">
          {/* Logo removed for academic cleanliness */}
        </div>

        <div className="hidden md:flex items-center justify-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={linkClassName}
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-full h-px bg-cobalt dark:bg-cobalt-bright transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-center" />
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className={themeButtonClassName}
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>

        <div className="flex items-center justify-end gap-4 md:hidden w-full">
          <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-100 dark:bg-obsidian-light/50 text-gray-600 dark:text-cobalt-bright">
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            className="p-2 text-cobalt dark:text-cobalt-bright"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="md:hidden absolute top-full left-0 w-full glass border-b border-gray-100 dark:border-glass-border p-6 flex flex-col gap-4"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-gray-600 dark:text-silver-dark hover:text-cobalt dark:hover:text-cobalt-bright"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default Navbar;
