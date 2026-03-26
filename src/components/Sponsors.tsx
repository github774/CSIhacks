export default function Sponsors() {
  return (
    <section id="prizes" className="py-24 px-6 relative z-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto space-y-32">
        
        {/* Prizes Section */}
        <div>
          <div className="font-mono text-xl md:text-2xl text-gray-300 mb-16 text-center">
            $ vi <span className="font-bold text-white">PRIZES.yml</span>
          </div>

          <div className="flex flex-col items-center gap-24">
            
            {/* Pyramid Level 1: 1st Place */}
            <div className="flex flex-col items-center">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-rose-500/30 blur-3xl rounded-full"></div>
                <img src="/pixel_coder_trophy.png" alt="1st Place Coder" className="relative w-44 h-44 md:w-64 md:h-64 object-contain pixelated" style={{ imageRendering: 'pixelated' }} />
              </div>
              <h3 className="text-white font-display text-xl md:text-2xl text-center mb-2">1ST PLACE</h3>
              <p className="text-rose-400 font-display text-4xl md:text-5xl">TBD</p>
            </div>

            {/* Pyramid Level 2: 2nd & 3rd */}
            <div className="flex flex-wrap items-end justify-center gap-20 md:gap-32">
              <div className="flex flex-col items-center w-40 md:w-56">
                <img src="/pixel_trophy.png" alt="2nd Place Trophy" className="w-24 h-24 md:w-32 md:h-32 mb-6 object-cover pixelated opacity-90" style={{ imageRendering: 'pixelated' }} />
                <h3 className="text-gray-300 font-display text-sm md:text-base text-center mb-2 uppercase tracking-tighter">2ND PLACE</h3>
                <p className="text-purple-400 font-display text-2xl md:text-3xl">TBD</p>
              </div>
              <div className="flex flex-col items-center w-40 md:w-56">
                <img src="/pixel_trophy.png" alt="3rd Place Trophy" className="w-20 h-20 md:w-28 md:h-28 mb-6 object-cover pixelated opacity-80" style={{ imageRendering: 'pixelated' }} />
                <h3 className="text-gray-300 font-display text-sm md:text-base text-center mb-2 uppercase tracking-tighter">3RD PLACE</h3>
                <p className="text-orange-400 font-display text-2xl md:text-3xl">TBD</p>
              </div>
            </div>

            {/* Pyramid Level 3: 4th & 5th */}
            <div className="flex flex-wrap items-end justify-center gap-12 md:gap-24">
              <div className="flex flex-col items-center w-36 md:w-48">
                <img src="/pixel_trophy.png" alt="4th Place Trophy" className="w-16 h-16 md:w-20 md:h-20 mb-4 object-cover pixelated opacity-70" style={{ imageRendering: 'pixelated' }} />
                <h3 className="text-gray-400 font-display text-xs md:text-sm text-center mb-2 uppercase tracking-tighter">4TH PLACE</h3>
                <p className="text-cyan-400 font-display text-xl">TBD</p>
              </div>
              <div className="flex flex-col items-center w-36 md:w-48">
                <img src="/pixel_trophy.png" alt="5th Place Trophy" className="w-16 h-16 md:w-20 md:h-20 mb-4 object-cover pixelated opacity-70" style={{ imageRendering: 'pixelated' }} />
                <h3 className="text-gray-400 font-display text-xs md:text-sm text-center mb-2 uppercase tracking-tighter">5TH PLACE</h3>
                <p className="text-green-400 font-display text-xl">TBD</p>
              </div>
            </div>

          </div>
          
          <div className="mt-16 text-center text-gray-400 font-mono text-sm uppercase tracking-widest">
            * Prizes will be announced soon.
          </div>
        </div>

        {/* Sponsors Section */}
        <div id="sponsors" className="pt-16">
          <div className="font-mono text-xl md:text-2xl text-gray-300 mb-8 text-center">
            $ tail <span className="text-white font-bold">-n 5 sponsors</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-display text-center mb-6 text-fuchsia-400 pixel-shadow">
            SPONSORS
          </h2>
          <p className="text-center font-mono text-gray-400 mb-16 max-w-2xl mx-auto">
            Sponsors will be announced soon!
          </p>
          
          {/* TBD Placeholder */}
          <div className="space-y-20 text-center font-display">
            <div className="opacity-50">
              <h3 className="text-xl md:text-2xl text-gray-400 mb-8 border border-dashed border-gray-600 inline-block px-8 py-4">TBA</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
