import { useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import SectionTitle from './SectionTitle';

const faqs = [
  {
    question: "What is this?",
    answer: "CSIhacks is a 12-hour hackathon where students come together to build innovative software and hardware projects, learn new skills, and compete for prizes."
  },
  {
    question: "Who can participate?",
    answer: "Any high school or college student is welcome to participate! No prior coding experience is required."
  },
  {
    question: "What should I bring?",
    answer: "Bring your laptop, charger, student ID, and a lot of enthusiasm! We'll provide the food, drinks, and swag."
  },
  {
    question: "How much does it cost?",
    answer: "Nothing! CSIhacks is completely free for all attendees."
  },
  {
    question: "Do I need a team?",
    answer: "You can hack solo or in a team of up to 4 people. If you don't have a team, don't worry! We'll have team formation events at the start of the hackathon."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#1e232d] pb-32 px-6">
      <SectionTitle title="FAQ" id="faq" />
      
      <div className="max-w-3xl mx-auto space-y-16">
        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-white/10">
              <button
                className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-lg font-medium text-gray-200">{faq.question}</span>
                <ChevronDown 
                  className={`text-gray-400 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} 
                  size={20} 
                />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-40 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* What You'll Get Box */}
        <div className="bg-[#2a303c] border border-white/10 rounded-2xl p-8 md:p-12 text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-10">What You'll Get</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 text-left max-w-2xl mx-auto">
            {[
              "Free pizza and drinks",
              "Portfolio-worthy projects to showcase",
              "Guidance from experienced developers",
              "Enough API credits to go to the moon",
              "Access to industry experts and judges",
              "Tech bro swag"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <Check className="text-sky-400 shrink-0" size={20} />
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
