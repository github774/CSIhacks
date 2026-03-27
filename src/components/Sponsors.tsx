import { Star, Brain, DollarSign, Cpu, Palette } from 'lucide-react';

export default function Sponsors() {
  const tracks = [
    {
      id: '01',
      title: 'Best Overall',
      description: 'The grand prize. Show us something we\'ve never seen before — the project that makes judges forget about every other demo.',
      icon: <Star className="w-6 h-6 text-rose-500" />
    },
    {
      id: '02',
      title: 'Best AI/ML',
      description: 'Push the boundaries of machine intelligence. From fine-tuned models to novel architectures — build something that thinks.',
      icon: <Brain className="w-6 h-6 text-cyan-400" />
    },
    {
      id: '03',
      title: 'Best Fintech',
      description: 'Reimagine money, payments, or financial access. Build tools that make the financial world more open, fair, or efficient.',
      icon: <DollarSign className="w-6 h-6 text-yellow-400" />
    },
    {
      id: '04',
      title: 'Best Hardware',
      description: 'Atoms over bits. Bring circuits, sensors, and physical builds. If it blinks, moves, or measures — we want to see it.',
      icon: <Cpu className="w-6 h-6 text-fuchsia-400" />
    },
    {
      id: '05',
      title: 'Best UI/UX Design',
      description: 'Where form meets function. Build a seamless user experience with intuitive design and exceptional aesthetics.',
      icon: <Palette className="w-6 h-6 text-green-400" />
    }
  ];

  return (
    <section id="prizes" className="py-24 px-6 relative z-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto space-y-32">
        
        {/* Tracks Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-display mb-6 text-white pixel-shadow">
              FIVE WAYS TO WIN.
            </h2>
            <p className="text-xl md:text-2xl text-rose-300 font-mono italic max-w-2xl mx-auto">
              Pick a track that excites you. Every project competes for Best Overall too.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {tracks.slice(0, 3).map((track) => (
              <div key={track.id} className="bg-[#0b0c16]/50 border-2 border-white/10 p-8 relative group hover:border-white/30 transition-all duration-300 rounded-xl backdrop-blur-sm">
                <div className="absolute top-0 right-0 p-4 text-xs font-mono text-gray-500 tracking-widest">
                  TRACK {track.id}
                </div>
                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform">
                  {track.icon}
                </div>
                <h3 className="text-2xl font-display text-white mb-4 tracking-tight">
                  {track.title}
                </h3>
                <p className="text-gray-400 font-mono text-lg leading-relaxed">
                  {track.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom row centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {tracks.slice(3).map((track) => (
              <div key={track.id} className="bg-[#0b0c16]/50 border-2 border-white/10 p-8 relative group hover:border-white/30 transition-all duration-300 rounded-xl backdrop-blur-sm">
                <div className="absolute top-0 right-0 p-4 text-xs font-mono text-gray-500 tracking-widest">
                  TRACK {track.id}
                </div>
                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform">
                  {track.icon}
                </div>
                <h3 className="text-2xl font-display text-white mb-4 tracking-tight">
                  {track.title}
                </h3>
                <p className="text-gray-400 font-mono text-lg leading-relaxed">
                  {track.description}
                </p>
              </div>
            ))}
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
