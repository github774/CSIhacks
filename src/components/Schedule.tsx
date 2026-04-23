const scheduleItems = [
  { event: "Registration & Check-in", time: "8:00 AM", date: "Jun 27" },
  { event: "Opening Ceremony", time: "8:30 AM", date: "Jun 27" },
  { event: "Hacking Begins!", time: "9:00 AM", date: "Jun 27" },
  { event: "Workshop - How to Win Hackathons", time: "10:00 AM", date: "Jun 27" },
  { event: "Lunch Break", time: "12:00 PM", date: "Jun 27" },
  { event: "Workshop - Intro to APIs", time: "1:00 PM", date: "Jun 27" },
  { event: "Submissions Due / Dinner", time: "6:00 PM", date: "Jun 27" },
  { event: "Judging", time: "6:30 PM", date: "Jun 27" },
  { event: "Awards Ceremony", time: "8:30 PM", date: "Jun 27" },
];

export default function Schedule() {
  return (
    <section id="schedule" className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        {/* Terminal Header */}
        <div className="font-mono text-xl md:text-2xl text-gray-300 mb-16">
          $ cat <span className="font-bold text-white">SCHEDULE.txt</span>
        </div>
        
        {/* Timeline Container */}
        <div className="relative border-l-4 border-dotted border-yellow-500/50 space-y-12 ml-4 md:ml-12 py-4">
          {scheduleItems.map((item, i) => (
            <div key={i} className="relative pl-8 md:pl-12 group">
              {/* Diamond Marker */}
              <div className="absolute -left-[10px] top-1 w-4 h-4 bg-rose-500 rotate-45 group-hover:bg-yellow-400 group-hover:scale-125 transition-all shadow-[0_0_10px_rgba(225,29,72,0.8)]"></div>
              
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 font-mono">
                <div className="flex flex-col md:w-32 shrink-0">
                  <span className="text-rose-400 text-lg">{item.date}</span>
                  <span className="text-cyan-400">{item.time}</span>
                </div>
                <div className="text-white text-xl mt-1 md:mt-0">
                  <span className="pixel-shadow-blue text-[1.1rem] leading-none block pt-1">{item.event}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
