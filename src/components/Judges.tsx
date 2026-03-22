import SectionTitle from './SectionTitle';

export default function Judges() {
  // Generate some placeholder judges
  const placeholders = Array(8).fill(null);

  return (
    <section className="bg-[#1e232d] pb-24 px-6">
      <SectionTitle title="Judges" id="judges" />
      
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 text-center">
          {placeholders.map((_, i) => (
            <div key={i} className="flex flex-col items-center opacity-50">
              <div className="w-24 h-24 rounded-full bg-white/10 mb-4 animate-pulse"></div>
              <div className="h-6 w-32 bg-white/10 rounded mb-2 animate-pulse"></div>
              <div className="h-4 w-40 bg-white/5 rounded animate-pulse"></div>
            </div>
          ))}
        </div>
        <p className="mt-16 text-center text-gray-500 italic">Judging panel to be announced soon.</p>
      </div>
    </section>
  );
}
