import { useState } from 'react';

const faqs = [
  { question: "What is this?", answer: "CSIhacks is a 12-hour hackathon where students come together to build innovative software and hardware projects, learn new skills, and compete for prizes." },
  { question: "Who can participate?", answer: "Any high school student is welcome to participate! No prior coding experience is required." },
  { question: "What should I bring?", answer: "Bring your laptop, charger, student ID, and a lot of enthusiasm! We'll provide the food, drinks, and swag." },
  { question: "How much does it cost?", answer: "Nothing! CSIhacks is completely free for all attendees." },
  { question: "Do I need a team?", answer: "You can hack solo or in a team of up to 4 people. If you don't have a team, don't worry! We'll have team formation events at the start of the hackathon." }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6 relative z-10 border-t border-white/5">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Terminal Header */}
        <div className="font-mono text-xl md:text-2xl text-gray-300 mb-12">
          $ <span className="font-bold text-white">./FAQ</span>
        </div>
        
        {/* Accordion List */}
        <div className="space-y-6 font-mono pl-4 md:pl-12">
          {faqs.map((faq, i) => (
            <div key={i} className="flex flex-col gap-2">
              <button
                className="text-left focus:outline-none flex items-start gap-4 hover:opacity-80 transition-opacity"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-cyan-400 font-bold shrink-0">{openIndex === i ? '[-]' : '[+]'}</span>
                <span className="text-gray-200 text-lg md:text-xl leading-tight">{faq.question}</span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out pl-12 ${openIndex === i ? 'max-h-40 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-400 text-base md:text-lg leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* What You'll Get Box - Pixel Style */}
        <div className="mt-24 bg-[#0a0f1d] border-2 border-white/20 p-8 md:p-12 relative button-pixel">
          <h3 className="text-2xl md:text-3xl font-display mb-10 text-center text-rose-400 pixel-shadow">What You'll Get</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 text-left max-w-2xl mx-auto font-mono text-lg text-gray-300">
            {[
              "Free pizza and drinks",
              "Portfolio-worthy projects",
              "Guidance from mentors",
              "API credits to the moon",
              "Access to industry experts",
              "Exclusive tech bro swag"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-yellow-400 shrink-0">{'>'}</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
