export default function SectionTitle({ title, id }: { title: string, id?: string }) {
  return (
    <div id={id} className="relative py-20 flex justify-center items-center overflow-hidden">
      {/* Blurred background text */}
      <div className="absolute text-[10vw] font-black text-white/5 blur-sm select-none whitespace-nowrap pointer-events-none">
        {title}
      </div>
      {/* Foreground text */}
      <h2 className="relative text-5xl md:text-6xl font-bold tracking-tight z-10">
        {title}
      </h2>
    </div>
  );
}
