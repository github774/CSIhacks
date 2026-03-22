import SectionTitle from './SectionTitle';

export default function Sponsors() {
  return (
    <section className="bg-[#1e232d] pb-24 px-6">
      <SectionTitle title="Sponsors & Prizes" id="sponsors" />
      
      <div className="max-w-5xl mx-auto space-y-20 text-center">
        {/* Partner */}
        <div>
          <h3 className="text-xl font-medium text-gray-400 mb-8">Partner</h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50">
            {/* Placeholders */}
            <div className="h-12 w-40 bg-white/10 rounded animate-pulse"></div>
            <div className="h-12 w-40 bg-white/10 rounded animate-pulse"></div>
            <div className="h-12 w-40 bg-white/10 rounded animate-pulse"></div>
          </div>
          <p className="mt-6 text-gray-500 text-sm italic">Sponsors to be announced</p>
        </div>

        {/* Gold */}
        <div>
          <h3 className="text-xl font-medium text-gray-400 mb-8">Gold</h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50">
            <div className="h-10 w-32 bg-white/10 rounded animate-pulse"></div>
            <div className="h-10 w-32 bg-white/10 rounded animate-pulse"></div>
          </div>
        </div>

        {/* Silver */}
        <div>
          <h3 className="text-xl font-medium text-gray-400 mb-8">Silver</h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50">
            <div className="h-8 w-28 bg-white/10 rounded animate-pulse"></div>
            <div className="h-8 w-28 bg-white/10 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
