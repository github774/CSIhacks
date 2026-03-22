import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
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
      className="fixed inset-0 z-[9999] bg-[#1e232d] flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        scale: 1.1, 
        filter: "blur(10px)",
        transition: { duration: 0.6, ease: "easeInOut" }
      }}
    >
      <div className="text-5xl md:text-7xl font-mono font-bold text-white flex items-center">
        <span className="text-sky-400 mr-4 md:mr-6">&gt;</span>
        <span>{displayedText}</span>
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
          className="inline-block w-5 md:w-8 h-[0.8em] bg-sky-400 ml-2 md:ml-4"
        />
      </div>
    </motion.div>
  );
}
