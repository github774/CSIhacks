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

        {/* Right-side cluster: Donate button + Powered by CSI */}
        <div className="flex items-center gap-4 lg:gap-6">
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
