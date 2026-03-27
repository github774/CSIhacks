export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative z-10 border-t border-white/5">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Terminal Header */}
        <div className="font-mono text-xl md:text-2xl text-gray-300 mb-12">
          $ man <span className="font-bold text-rose-500">CSIhacks</span>
        </div>

        {/* Intro */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-display mb-6 text-white pixel-shadow">
            THE TRI-VALLEY'S BEST
          </h2>
          <p className="text-xl md:text-2xl text-cyan-200 font-mono leading-relaxed max-w-3xl">
            Whether you're a seasoned developer or just starting your coding journey, come solve problems and bring ideas to life at CSIhacks.
          </p>
        </div>

        {/* Features / Tracks grid */}
        <div className="font-mono text-xl md:text-2xl text-gray-300 mb-8 mt-16">
          $ ls -la <span className="font-bold text-white">FEATURES/</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-[#0b0c16] border-2 border-cyan-500/50 p-8 relative flex flex-col group hover:border-cyan-400 transition-colors">
            <div className="absolute top-0 right-0 p-2 text-cyan-500 opacity-50 text-sm">01</div>
            <h3 className="text-2xl font-display text-cyan-400 mb-4 tracking-tighter">CUTTING EDGE</h3>
            <p className="text-gray-400 font-mono text-lg leading-relaxed pt-4 border-t border-white/10">
              Get exclusive access to the coolest tools in tech and AI to build anything you can imagine.
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-[#0b0c16] border-2 border-fuchsia-500/50 p-8 relative flex flex-col group hover:border-fuchsia-400 transition-colors">
            <div className="absolute top-0 right-0 p-2 text-fuchsia-500 opacity-50 text-sm">02</div>
            <h3 className="text-2xl font-display text-fuchsia-400 mb-4 tracking-tighter">CONNECT & INFO</h3>
            <p className="text-gray-400 font-mono text-lg leading-relaxed pt-4 border-t border-white/10">
              Network with fellow developers, build lasting industry connections, and make new friends!
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#0b0c16] border-2 border-yellow-500/50 p-8 relative flex flex-col group hover:border-yellow-400 transition-colors">
            <div className="absolute top-0 right-0 p-2 text-yellow-500 opacity-50 text-sm">03</div>
            <h3 className="text-2xl font-display text-yellow-400 mb-4 tracking-tighter">MAKE BREAD</h3>
            <p className="text-gray-400 font-mono text-lg leading-relaxed pt-4 border-t border-white/10">
              Compete with hundreds of hackers for prizes. Walk home with free swag, snacks, and a great time.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
