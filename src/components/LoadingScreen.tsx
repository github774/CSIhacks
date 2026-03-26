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
        scale: 1.1, 
        filter: "blur(10px)",
        transition: { duration: 0.6, ease: "easeInOut" }
      }}
    >
      <div className="mb-8 w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden shadow-[0_0_40px_rgba(225,29,72,0.3)] pointer-events-none">
         <img 
          src="/pixel_coder_main.png" 
          alt="Red Hoodie Coder" 
          className="w-full h-full object-cover pixelated"
          style={{ imageRendering: 'pixelated' }}
         />
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
