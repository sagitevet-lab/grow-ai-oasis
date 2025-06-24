
import React from "react";

const founders = [
  {
    name: "Ronen Aharon",
    title: "Co-Founder & CEO",
    desc: (
      <>
        With 30 years of leadership in business development and automation, Ronen’s vision is to make agriculture smarter and more efficient, driving the shift toward AI-powered systems.
      </>
    ),
    image: "/lovable-uploads/0002c872-eab4-472e-8820-ad61c9c89d0d.png",
  },
  {
    name: "Dror Tevet",
    title: "Co-Founder & CFO",
    desc: (
      <>
        With 30 years of experience in the agricultural sector, Dror has a global reputation for implementing sustainable agricultural practices across multiple continents.
      </>
    ),
    image: "/lovable-uploads/75d5c710-fb03-4c73-af61-bf6439260660.png",
  },
];

const FoundersSection = () => (
  <section id="founders" className="bg-green-50 py-16 px-6 border-t border-green-100">
    <div className="max-w-5xl mx-auto">
      <h3 className="text-2xl md:text-3xl font-bold text-green-800 mb-8 text-center animate-fade-in">
        Meet the Founders
      </h3>
      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        {founders.map((f) => (
          <div key={f.name} className="bg-white rounded-2xl p-6 shadow-lg border border-green-100 min-w-[260px] max-w-xs flex flex-col items-center animate-fade-in">
            <img src={f.image} alt={f.name} className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-green-200" />
            <h4 className="text-lg font-bold text-green-900 mb-1">{f.name}</h4>
            <div className="text-green-700 mb-2 font-medium">{f.title}</div>
            <p className="text-gray-600 text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FoundersSection;
