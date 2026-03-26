import { ExternalLink } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto w-full">
        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display mb-6 text-white pixel-shadow">
          CSIhacks <span className="text-rose-500">1</span>
        </h1>
        
        {/* Subtitle */}
        <div className="flex flex-col items-center gap-2 text-xl md:text-2xl text-purple-400 mb-8 font-mono">
          <p>Code With Purpose & Innovate, Collaborate, Dominate</p>
        </div>

        {/* Pixel Character */}
        <div className="mb-12 relative w-48 h-48 md:w-64 md:h-64 rounded-xl overflow-hidden shadow-[0_0_40px_rgba(225,29,72,0.3)]">
           <img 
            src="/pixel_coder_main.png" 
            alt="Red Hoodie Coder" 
            className="w-full h-full object-cover pixelated"
            style={{ imageRendering: 'pixelated' }}
           />
        </div>

        {/* Action Button */}
        <button 
          className="bg-white/90 hover:bg-white text-rose-500 px-8 py-4 font-mono text-2xl flex items-center gap-3 transition-transform hover:scale-105 active:scale-95 button-pixel"
        >
          <div className="w-6 h-6 bg-rose-500 flex items-center justify-center rounded-sm">
             <div className="w-3 h-3 bg-white rounded-sm"></div>
          </div>
          Apply Here!
        </button>

        {/* Location / Time Info */}
        <div className="mt-16 flex flex-col items-center gap-2 text-lg text-gray-300 font-mono text-center">
           <p>TBD Date • TBD Time</p>
           <p>TBD Location, City, State</p>
        </div>
      </div>
    </div>
  );
}
