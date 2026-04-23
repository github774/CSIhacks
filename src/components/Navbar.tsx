import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0b0b1a]/90 backdrop-blur-md py-4 shadow-lg border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between font-display text-sm">
        {/* Logo */}
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer"
        >
          <span className="text-white">CSI</span>
          <span className="text-rose-500">hacks</span>
        </a>
        
        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-white">
          <a href="#schedule" className="hover:text-rose-400 transition-colors">SCHEDULE</a>
          <a href="#about" className="hover:text-rose-400 transition-colors">ABOUT</a>
          <a href="#prizes" className="hover:text-rose-400 transition-colors">TRACKS</a>
          <a href="#faq" className="hover:text-rose-400 transition-colors">FAQ</a>
        </div>

        {/* Right-side cluster: Discord + Donate + Powered by CSI */}
        <div className="flex items-center gap-3 md:gap-4 lg:gap-6">
          <a
            href="https://discord.gg/K6MDc5Pa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Join CSIhacks Discord — opens in new tab"
            className="text-white hover:text-[#5865F2] transition-colors"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="w-5 h-5 md:w-6 md:h-6"
              fill="currentColor"
            >
              <path d="M20.317 4.369a19.79 19.79 0 00-4.885-1.515.075.075 0 00-.079.037c-.211.375-.445.864-.608 1.249a18.27 18.27 0 00-5.487 0 12.63 12.63 0 00-.617-1.249.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.056 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.105 13.098 13.098 0 01-1.872-.892.077.077 0 01-.008-.128c.126-.094.252-.192.371-.291a.074.074 0 01.077-.01c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 01.078.009c.12.099.245.198.372.292a.077.077 0 01-.006.128 12.3 12.3 0 01-1.873.891.077.077 0 00-.04.106c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.029 19.84 19.84 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.028zM8.02 15.331c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.956-2.418 2.157-2.418 1.21 0 2.176 1.095 2.157 2.418 0 1.334-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.176 1.095 2.157 2.418 0 1.334-.946 2.419-2.157 2.419z"/>
            </svg>
          </a>
          <a
            href="https://hcb.hackclub.com/donations/start/csi-hacks"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Donate to CSIhacks — opens in new tab"
            className="bg-rose-500 hover:bg-rose-400 text-white text-xs md:text-sm px-4 py-2 md:px-5 md:py-2.5 transition-colors"
          >
            DONATE
          </a>

          {/* Powered by CSI */}
          <a
            href="https://californiasteminnovators.org/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="California Stem Innovators — opens in new tab"
            className="hidden lg:flex items-center gap-4 text-white text-xs text-right leading-tight hover:text-rose-400 transition-colors"
          >
            <div>
              Powered by<br />CSI
            </div>
            <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-white rounded-sm"></div>
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
}
