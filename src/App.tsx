/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Sponsors from './components/Sponsors';
import Judges from './components/Judges';
import Schedule from './components/Schedule';
import FAQ from './components/FAQ';
import CustomCursor from './components/CustomCursor';

export default function App() {
  return (
    <div className="min-h-screen star-bg text-gray-200 font-sans selection:bg-pink-500/30">
      <CustomCursor />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <Navbar />
        <Hero />
        <About />
        <Sponsors />
        <Judges />
        <Schedule />
        <FAQ />

        <footer className="py-10 px-6 border-t border-white/10 text-center font-mono text-sm text-gray-400">
          Fiscally sponsored by{' '}
          <a
            href="https://hackclub.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-400 hover:text-rose-300 underline underline-offset-4"
          >
            Hack Club
          </a>
        </footer>
      </motion.div>
    </div>
  );
}
