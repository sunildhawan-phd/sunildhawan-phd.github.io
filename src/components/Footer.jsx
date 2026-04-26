import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-gray-100 dark:border-glass-border text-center">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          © 2026 Sunil Dhawan
        </p>
        <div className="flex justify-center gap-6 text-gray-400 dark:text-gray-500">
          <a href="https://github.com/sunilsoft9x" target="_blank" rel="noreferrer" className="hover:text-cobalt dark:hover:text-cobalt-bright transition-colors">GitHub</a>
          <a href="mailto:sunil.dhawan@chitkara.edu.in" className="hover:text-cobalt dark:hover:text-cobalt-bright transition-colors">Email</a>
          <a href="https://www.linkedin.com/in/sunil-dhawan-213024b2/" target="_blank" rel="noreferrer" className="hover:text-cobalt dark:hover:text-cobalt-bright transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
