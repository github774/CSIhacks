export default function Judges() {
  const placeholders = Array(8).fill(null);

  return (
    <section id="judges" className="py-24 px-6 relative z-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Terminal Header */}
        <div className="font-mono text-xl md:text-2xl text-gray-300 mb-16 text-center">
          $ sudo get <span className="font-bold text-white">judges</span>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-display text-center mb-16 text-sky-400 pixel-shadow-blue">
          JUDGING PANEL
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 text-center">
          {placeholders.map((_, i) => (
            <div key={i} className="flex flex-col items-center opacity-50">
              <div className="w-24 h-24 bg-white/10 mb-6 relative group overflow-hidden button-pixel">
                <div className="absolute inset-0 bg-blue-500/20 group-hover:bg-transparent transition-colors"></div>
                {/* Randomly generated terminal chars for empty avatar */}
                <div className="absolute inset-0 flex items-center justify-center font-mono text-xs text-white/30 truncate px-2 break-all pointer-events-none">
                  {[...Array(64)].map(() => String.fromCharCode(33 + Math.random() * 93)).join("")}
                </div>
              </div>
              <div className="h-6 w-32 bg-sky-500/20 mb-2"></div>
              <div className="h-4 w-40 bg-white/5"></div>
            </div>
          ))}
        </div>
        <p className="mt-20 text-center text-gray-500 font-mono text-sm uppercase tracking-widest border border-dashed border-gray-700 mx-auto max-w-lg py-4">
          [ ACCESS DENIED: Judges to be announced soon ]
        </p>
      </div>
    </section>
  );
}
