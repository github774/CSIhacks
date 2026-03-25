import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const bootLines = [
  { text: "BIOS v1.0 ... OK", delay: 0 },
  { text: "RAM: 640K ... OK", delay: 200 },
  { text: "Loading CSIhacks kernel...", delay: 500 },
  { text: "Mounting /dev/hackathon ...", delay: 900 },
  { text: "Initializing pixel engine ...", delay: 1300 },
  { text: ">> SYSTEM READY", delay: 1800 },
];

export default function LoadingScreen({ onComplete }: { onComplete: () => void; key?: string }) {
  const [visibleLines, setVisibleLines] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    // Show boot lines one by one
    bootLines.forEach((line, i) => {
      setTimeout(() => setVisibleLines(i + 1), line.delay);
    });

    // Animate progress bar
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    // Show title after boot lines
    setTimeout(() => setShowTitle(true), 2200);

    // No auto-complete — user must click PRESS START

    return () => clearInterval(progressInterval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-[#050510] flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        y: -30,
        filter: "blur(8px)",
        transition: { duration: 0.5, ease: "easeInOut" }
      }}
    >
      {/* Scan lines overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10 z-10"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)',
        }}
      />

      <div className="relative z-20 w-full max-w-lg px-8">
        {/* Boot text */}
        <div className="font-mono text-sm md:text-base space-y-1 mb-8">
          {bootLines.slice(0, visibleLines).map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.15 }}
              className={`${i === bootLines.length - 1 ? 'text-emerald-400 font-bold' : 'text-gray-500'}`}
            >
              {line.text}
            </motion.div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="mb-10">
          <div className="flex justify-between text-xs font-mono text-gray-600 mb-1">
            <span>LOADING</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full h-4 bg-[#111] border border-gray-700 relative overflow-hidden">
            <motion.div
              className="h-full"
              style={{ 
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #f43f5e, #d946ef, #38bdf8)',
              }}
              transition={{ duration: 0.1 }}
            />
            {/* Pixel segments inside the bar */}
            <div className="absolute inset-0 flex">
              {Array.from({ length: 25 }).map((_, i) => (
                <div key={i} className="flex-1 border-r border-[#050510]/50" />
              ))}
            </div>
          </div>
        </div>

        {/* Main title reveal */}
        {showTitle && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-display text-white pixel-shadow mb-4">
              CSIhacks <span className="text-rose-500">1</span>
            </h1>
            <motion.button 
              onClick={onComplete}
              className="text-gray-500 font-mono text-sm hover:text-white transition-colors mt-2"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              [ PRESS START ]
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
