import { useState, useEffect } from 'react';
import { Code2 } from 'lucide-react';

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#1e232d]/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sky-400">
          <Code2 size={32} />
          <span className="font-bold text-xl tracking-tight text-white">CSIhacks</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#sponsors" className="hover:text-white transition-colors">Sponsors</a>
          <a href="#judges" className="hover:text-white transition-colors">Judges</a>
          <a href="#schedule" className="hover:text-white transition-colors">Schedule</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          <a href="#team" className="hover:text-white transition-colors">Team</a>
        </div>
      </div>
    </nav>
  );
}
