
import React from "react";
import { Database, Lightbulb, Cog, Leaf } from "lucide-react";

const features = [
  {
    icon: <Database className="text-green-700 w-8 h-8" />,
    title: "AI & Data Analytics",
    desc: "Real-time data collection and AI-powered analytics help you make informed decisions, predict future needs, and continuously improve operations.",
  },
  {
    icon: <Lightbulb className="text-green-700 w-8 h-8" />,
    title: "Smart Lighting",
    desc: "LED grow lights adjust according to plant needs, ensuring the best light for photosynthesis.",
  },
  {
    icon: <Cog className="text-green-700 w-8 h-8" />,
    title: "Advanced Climate Control",
    desc: "Automated systems keep your plants in the perfect environment 24/7, adapting to changing conditions for optimal growth.",
  },
  {
    icon: <Leaf className="text-green-700 w-8 h-8" />,
    title: "Precision Irrigation & Fertigation",
    desc: "Deliver the right amount of water & nutrients, exactly when and where they are needed most.",
  },
];

const HowItWorksSection = () => (
  <section className="bg-green-50 py-16 px-6 border-y border-green-100">
    <div className="max-w-5xl mx-auto">
      <h3 className="text-2xl md:text-3xl font-bold text-green-800 mb-8 text-center animate-fade-in">How It Works</h3>
      <div className="grid md:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <div key={f.title} className="bg-white p-6 rounded-xl shadow-lg border border-green-100 text-center hover:scale-105 hover:shadow-xl transition-all duration-300 animate-scale-in hover:-translate-y-2" style={{ animationDelay: `${i * 150}ms` }}>
            <div className="flex justify-center mb-3 transition-transform duration-300 hover:scale-110">{f.icon}</div>
            <h4 className="font-semibold text-green-800 text-lg mb-2">{f.title}</h4>
            <p className="text-gray-600 text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
