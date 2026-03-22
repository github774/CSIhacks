import { Zap, Users, DollarSign } from 'lucide-react';

export default function About() {
  return (
    <section className="relative z-10">
      {/* Light Blue Section */}
      <div className="bg-sky-500 pt-24 pb-32 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">
            The Tri-Valley's biggest,<br />greatest, and bestest
          </h2>
          <p className="text-xl md:text-2xl text-sky-100 font-medium leading-relaxed">
            Whether you're a seasoned developer or just starting your coding journey, come solve problems and bring ideas to life at CSIhacks.
          </p>
        </div>
      </div>

      {/* Curved Divider */}
      <div className="w-full overflow-hidden leading-none rotate-180 bg-[#1e232d] -mt-1">
        <svg className="relative block w-full h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-sky-500"></path>
        </svg>
      </div>

      {/* Three Columns */}
      <div className="bg-[#1e232d] py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 text-sky-400">
              <Zap size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">The Cutting Edge</h3>
            <p className="text-gray-400 leading-relaxed">
              At CSIhacks, you'll get exclusive access to the coolest tools in tech and AI to build anything you can imagine.
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 text-sky-400">
              <Users size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Connect</h3>
            <p className="text-gray-400 leading-relaxed">
              Network with fellow developers, build lasting industry connections, and make new friends!
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 text-sky-400">
              <DollarSign size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Make Bread</h3>
            <p className="text-gray-400 leading-relaxed">
              Compete with hundreds of hackers for amazing prizes. Even if you don't win, you'll walk home with free swag, snacks, and a great experience!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
