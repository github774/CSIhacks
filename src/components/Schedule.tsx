import SectionTitle from './SectionTitle';

const scheduleItems = [
  { event: "Registration & Check-in", time: "8:00 AM" },
  { event: "Opening Ceremony", time: "8:30 AM" },
  { event: "Hacking Begins!", time: "9:00 AM" },
  { event: "Workshop - How to Win Hackathons", time: "10:00 AM" },
  { event: "Lunch Break", time: "12:00 PM" },
  { event: "Workshop - Intro to APIs", time: "1:00 PM" },
  { event: "Submissions Due / Dinner", time: "6:00 PM" },
  { event: "Judging", time: "6:30 PM" },
  { event: "Awards Ceremony", time: "8:30 PM" },
];

export default function Schedule() {
  return (
    <section className="bg-[#1e232d] pb-24 px-6">
      <SectionTitle title="Schedule" id="schedule" />
      
      <div className="max-w-3xl mx-auto">
        <div className="bg-[#2a303c] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
          <div className="bg-white/5 px-6 py-4 border-b border-white/10 font-mono text-sm text-gray-400">
            ./schedule.md
          </div>
          <div className="p-6 md:p-8 space-y-6">
            {scheduleItems.map((item, i) => (
              <div key={i} className="flex justify-between items-center border-b border-white/5 pb-4 last:border-0 last:pb-0">
                <span className="text-gray-200">{item.event}</span>
                <span className="text-gray-400 font-mono text-sm">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
