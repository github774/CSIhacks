import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function LoadingScreen({ onComplete }: { onComplete: () => void; key?: string }) {
  const text = "CSIhacks";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        setTimeout(onComplete, 800); // Wait a bit after typing finishes before fading out
      }
    }, 150); // 150ms per letter

    return () => clearInterval(typingInterval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-[#050510] star-bg flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        transition: { duration: 0.8, ease: "easeInOut" } 
      }}
    >
      <div className="mb-8 relative group">
        {/* Subtle Background Glow */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-16 bg-rose-500/10 blur-[40px] rounded-full scale-150 pointer-events-none"></div>
        
        <motion.div 
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center pointer-events-none"
        >
           <img 
            src="/pixel_coder_main.png" 
            alt="Red Hoodie Coder" 
            className="w-full h-full object-contain pixelated drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]"
            style={{ imageRendering: 'pixelated' }}
           />
        </motion.div>
      </div>

      <div className="text-3xl md:text-5xl font-display text-white flex items-center pixel-shadow">
        <span className="text-rose-500 mr-4 md:mr-6">&gt;</span>
        <span>{displayedText}</span>
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
          className="inline-block w-4 md:w-6 h-[1.2em] bg-rose-500 ml-2 md:ml-4"
        />
      </div>
    </motion.div>
  );
}
