import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Link2 } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Let's Connect</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-10">
        <div className="space-y-8">
          <p className="text-lg text-gray-600 dark:text-silver-dark leading-relaxed">
            Open to research collaborations, technical consultancy, expert guest lectures, and academic partnerships.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-full bg-cobalt/10 dark:bg-cobalt/20 flex items-center justify-center text-cobalt dark:text-cobalt-bright group-hover:bg-cobalt group-hover:text-white transition-all">
                <Mail size={18} />
              </div>
              <a href="mailto:sunil.dhawan@chitkara.edu.in" className="text-gray-700 dark:text-silver font-medium hover:text-cobalt dark:hover:text-cobalt-bright transition-colors">
                sunil.dhawan@chitkara.edu.in
              </a>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-full bg-cobalt/10 dark:bg-cobalt/20 flex items-center justify-center text-cobalt dark:text-cobalt-bright group-hover:bg-cobalt group-hover:text-white transition-all">
                <MapPin size={18} />
              </div>
              <span className="text-gray-700 dark:text-silver font-medium">
                Kharar, Mohali, Punjab, India
              </span>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-full bg-cobalt/10 dark:bg-cobalt/20 flex items-center justify-center text-cobalt dark:text-cobalt-bright group-hover:bg-cobalt group-hover:text-white transition-all">
                <Link2 size={18} />
              </div>
              <a href="https://www.linkedin.com/in/sunil-dhawan-213024b2/" target="_blank" rel="noreferrer" className="text-gray-700 dark:text-silver font-medium hover:text-cobalt dark:hover:text-cobalt-bright transition-colors">
                linkedin.com/in/sunil-dhawan-213024b2
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-obsidian-light/40 p-8 rounded-2xl border border-gray-100 dark:border-glass-border shadow-sm">
          <form action="https://formspree.io/f/REPLACE_WITH_YOUR_ID" method="POST" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Name</label>
                <input name="name" type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-glass-border bg-white dark:bg-obsidian text-gray-800 dark:text-silver focus:border-cobalt dark:focus:border-cobalt-bright focus:ring-2 focus:ring-cobalt/20 outline-none transition-all" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Email</label>
                <input name="email" type="email" required className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-glass-border bg-white dark:bg-obsidian text-gray-800 dark:text-silver focus:border-cobalt dark:focus:border-cobalt-bright focus:ring-2 focus:ring-cobalt/20 outline-none transition-all" placeholder="Email address" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Subject</label>
              <select name="subject" className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-glass-border bg-white dark:bg-obsidian text-gray-800 dark:text-silver focus:border-cobalt dark:focus:border-cobalt-bright focus:ring-2 focus:ring-cobalt/20 outline-none transition-all">
                <option>Research Collaboration</option>
                <option>Consultancy</option>
                <option>Guest Lecture</option>
                <option>Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Message</label>
              <textarea name="message" rows="4" required className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-glass-border bg-white dark:bg-obsidian text-gray-800 dark:text-silver focus:border-cobalt dark:focus:border-cobalt-bright focus:ring-2 focus:ring-cobalt/20 outline-none transition-all" placeholder="Your message..."></textarea>
            </div>

            <button type="submit" className="w-full bg-cobalt dark:bg-cobalt-bright text-white py-4 rounded-lg font-bold hover:opacity-90 transition-opacity shadow-lg shadow-cobalt/20">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
