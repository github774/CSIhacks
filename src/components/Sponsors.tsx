import { Star, Brain, DollarSign, Cpu, Palette, Check } from 'lucide-react';

type SponsorSlot =
  | {
      kind: 'logo';
      name: string;
      href: string;
      logo: string;
      logoClass?: string;
      bgClass?: string;
      textClass?: string;
    }
  | { kind: 'tba' };

type TierId = 'supporter' | 'silver' | 'gold' | 'diamond';

type Tier = {
  id: TierId;
  name: string;
  price: string;
  priceHint?: string;
  accent: string;
  borderClass: string;
  textClass: string;
  dotClass: string;
  dashedClass: string;
  slotHeight: string;
  columns: string;
  slots: SponsorSlot[];
};

type Benefit = {
  name: string;
  values: Partial<Record<TierId, true | string>>;
};

export default function Sponsors() {
  const tracks = [
    {
      id: '01',
      title: 'Best Overall',
      description: "The grand prize. Show us something we've never seen before — the project that makes judges forget about every other demo.",
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

  const tiers: Tier[] = [
    {
      id: 'diamond',
      name: 'Diamond',
      price: '$1,500',
      accent: 'cyan',
      borderClass: 'border-cyan-400/60',
      textClass: 'text-cyan-300',
      dotClass: 'bg-cyan-400',
      dashedClass: 'border-cyan-500/30',
      slotHeight: 'h-40 md:h-44',
      columns: 'grid-cols-1 md:grid-cols-2',
      slots: [{ kind: 'tba' }, { kind: 'tba' }]
    },
    {
      id: 'gold',
      name: 'Gold',
      price: '$750',
      accent: 'yellow',
      borderClass: 'border-yellow-400/60',
      textClass: 'text-yellow-300',
      dotClass: 'bg-yellow-400',
      dashedClass: 'border-yellow-500/30',
      slotHeight: 'h-32 md:h-36',
      columns: 'grid-cols-1 md:grid-cols-3',
      slots: [{ kind: 'tba' }, { kind: 'tba' }, { kind: 'tba' }]
    },
    {
      id: 'silver',
      name: 'Silver',
      price: '$350',
      accent: 'gray',
      borderClass: 'border-gray-300/50',
      textClass: 'text-gray-200',
      dotClass: 'bg-gray-300',
      dashedClass: 'border-gray-400/30',
      slotHeight: 'h-28 md:h-32',
      columns: 'grid-cols-1 md:grid-cols-4',
      slots: [
        {
          kind: 'logo',
          name: 'CodeCrafters',
          href: 'https://www.codecrafters.io/',
          logo: '/sponsors/codecrafters.svg',
          logoClass: 'max-h-16 md:max-h-20',
          bgClass: 'bg-white hover:bg-gray-100',
          textClass: 'text-[#151515]'
        },
        { kind: 'tba' },
        { kind: 'tba' },
        { kind: 'tba' }
      ]
    },
    {
      id: 'supporter',
      name: 'Supporter',
      price: 'Products, credits & services',
      accent: 'emerald',
      borderClass: 'border-emerald-400/50',
      textClass: 'text-emerald-300',
      dotClass: 'bg-emerald-400',
      dashedClass: 'border-emerald-500/30',
      slotHeight: 'h-28 md:h-32',
      columns: 'grid-cols-1 md:grid-cols-3',
      slots: [
        {
          kind: 'logo',
          name: 'Art of Problem Solving',
          href: 'https://artofproblemsolving.com/',
          logo: '/sponsors/aops.svg',
          logoClass: 'max-h-12 md:max-h-14'
        },
        { kind: 'tba' },
        { kind: 'tba' }
      ]
    }
  ];

  const benefits: Benefit[] = [
    { name: 'Sponsor Table', values: { gold: true, diamond: true } },
    { name: 'Send Engineers/Mentors', values: { supporter: true, silver: true, gold: true, diamond: true } },
    { name: 'Send Judges', values: { silver: true, gold: true, diamond: true } },
    { name: 'Distribute Sponsorship Materials', values: { supporter: true, silver: true, gold: true, diamond: true } },
    { name: 'Custom Project Track', values: { diamond: true } },
    { name: 'Custom Award', values: { gold: true, diamond: true } },
    { name: 'Present at Opening/Closing', values: { silver: '2 min', gold: '5 min', diamond: 'Keynote' } },
    { name: 'Logo on Website & Presentations', values: { supporter: true, silver: true, gold: true, diamond: true } },
    { name: 'Logo on Shirt', values: { gold: true, diamond: true } }
  ];

  // Ascending order for the benefits matrix (supporter → diamond)
  const tierOrder: TierId[] = ['supporter', 'silver', 'gold', 'diamond'];
  const tierById = Object.fromEntries(tiers.map((t) => [t.id, t])) as Record<TierId, Tier>;

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
            $ tail <span className="text-white font-bold">-n 4 sponsors</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-display text-center mb-6 text-fuchsia-400 pixel-shadow">
            SPONSORS
          </h2>
          <p className="text-center font-mono text-gray-400 mb-20 max-w-2xl mx-auto text-lg">
            Powered by the companies building what's next. More to come.
          </p>

          <div className="space-y-16">
            {tiers.map((tier) => (
              <div key={tier.id}>
                <div className="flex items-center gap-4 mb-8">
                  <h3 className={`text-xl md:text-2xl font-display tracking-wider ${tier.textClass}`}>
                    {tier.name}
                  </h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent" />
                  <span className="font-mono text-xs text-gray-500 tracking-widest">
                    {tier.slots.filter((s) => s.kind === 'logo').length}/{tier.slots.length}
                  </span>
                </div>

                <div className={`grid ${tier.columns} gap-4 md:gap-6`}>
                  {tier.slots.map((slot, i) => {
                    if (slot.kind === 'logo') {
                      return (
                        <a
                          key={`${tier.id}-${i}`}
                          href={slot.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${slot.name} — opens in new tab`}
                          className={`group relative ${tier.slotHeight} ${slot.bgClass ?? 'bg-[#0b0c16] hover:bg-[#0f1020]'} ${slot.textClass ?? 'text-white'} border-2 ${tier.borderClass} flex items-center justify-center px-6 transition-all duration-200 hover:-translate-y-[2px] active:translate-y-0`}
                        >
                          <img
                            src={slot.logo}
                            alt={slot.name}
                            className={`w-auto object-contain transition-transform duration-200 group-hover:scale-[1.03] ${slot.logoClass ?? 'max-h-12'}`}
                          />
                          <span className="absolute bottom-2 right-3 font-mono text-[10px] text-gray-500 tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                            {slot.name.toUpperCase()} →
                          </span>
                        </a>
                      );
                    }
                    return (
                      <a
                        key={`${tier.id}-${i}`}
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=stemcalifornia@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Sponsor as ${tier.name} — opens Gmail`}
                        className={`${tier.slotHeight} border-2 border-dashed ${tier.dashedClass} flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/5 hover:border-solid transition-all duration-200 hover:-translate-y-[2px] active:translate-y-0`}
                      >
                        <span className="font-display text-3xl md:text-4xl leading-none">+</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Benefits Matrix */}
          <div className="mt-32">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-5xl font-display text-white pixel-shadow mb-4">
                WHAT YOU GET
              </h3>
              <p className="font-mono text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
                Sponsor benefits at a glance. Higher tiers include everything below.
              </p>
            </div>

            <div className="overflow-x-auto border-2 border-white/10 bg-[#0b0c16]/70 backdrop-blur-sm">
              <table className="w-full min-w-[760px] border-collapse">
                <thead>
                  <tr className="border-b-2 border-white/10 bg-[#080914]">
                    <th className="text-left font-display text-sm md:text-base text-white px-6 py-5 tracking-wider w-[36%]">
                      Benefits
                    </th>
                    {tierOrder.map((id) => {
                      const t = tierById[id];
                      return (
                        <th key={id} className="px-4 py-5 text-center align-top">
                          <div className={`font-display text-sm md:text-base tracking-wider ${t.textClass}`}>
                            {t.name}
                          </div>
                          <div className="font-mono text-xs md:text-sm text-gray-300 mt-2 leading-tight">
                            {t.price}
                          </div>
                          {t.priceHint && (
                            <div className="font-mono text-[10px] md:text-xs text-gray-500 mt-1 leading-tight max-w-[16ch] mx-auto">
                              {t.priceHint}
                            </div>
                          )}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {benefits.map((b, idx) => (
                    <tr
                      key={b.name}
                      className={`border-b border-white/5 ${idx % 2 === 1 ? 'bg-white/[0.02]' : ''}`}
                    >
                      <td className="font-mono text-sm md:text-base text-gray-200 px-6 py-4">
                        {b.name}
                      </td>
                      {tierOrder.map((id) => {
                        const t = tierById[id];
                        const v = b.values[id];
                        return (
                          <td key={id} className="px-4 py-4 text-center">
                            {v === true && (
                              <div className="flex items-center justify-center">
                                <span className={`w-6 h-6 rounded-full ${t.dotClass} flex items-center justify-center`}>
                                  <Check className="w-4 h-4 text-[#080914]" strokeWidth={3} />
                                </span>
                              </div>
                            )}
                            {typeof v === 'string' && (
                              <span className={`font-mono text-xs md:text-sm ${t.textClass}`}>
                                {v}
                              </span>
                            )}
                            {v === undefined && (
                              <span className="text-gray-700" aria-hidden>
                                —
                              </span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-10 text-center space-y-4">
              <p className="font-mono text-cyan-200 text-base md:text-lg italic">
                Also — you can always negotiate and design your own tier. Just ask.
              </p>
              <p className="font-mono text-gray-400 text-base md:text-lg">
                Interested in sponsoring?{' '}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=stemcalifornia@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fuchsia-300 hover:text-fuchsia-200 underline underline-offset-4"
                >
                  stemcalifornia@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
