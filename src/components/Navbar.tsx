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
        <div className="flex items-center gap-2">
          <span className="text-white">CSI</span>
          <span className="text-rose-500">hacks</span>
        </div>
        
        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-white">
          <a href="#schedule" className="hover:text-rose-400 transition-colors">SCHEDULE</a>
          <a href="#tracks" className="hover:text-rose-400 transition-colors">TRACKS</a>
          <a href="#prizes" className="hover:text-rose-400 transition-colors">PRIZES</a>
          <a href="#faq" className="hover:text-rose-400 transition-colors">FAQ</a>
        </div>
        
        {/* Right Info */}
        <div className="hidden lg:flex items-center gap-4 text-white text-xs text-right leading-tight">
          <div>
            Powered by<br />CSI
          </div>
          <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
            {/* Simple Box Icon for Logo */}
            <div className="w-4 h-4 border-2 border-white rounded-sm"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}
