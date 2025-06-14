
import React from "react";

const HeroSection = () => (
  <section className="w-full bg-gradient-to-br from-green-50 to-white py-14 px-6 flex flex-col md:flex-row items-center gap-10 md:gap-20 border-b border-green-200">
    <div className="flex-1 flex flex-col items-center md:items-start">
      <img src="/lovable-uploads/b438224d-e7e1-4082-8af1-71de6c260fc2.png" alt="Grow Autonomous Solutions Logo" className="h-24 mb-6" />
      <h1 className="text-5xl font-extrabold text-green-800 mb-4 animate-fade-in leading-tight">
        Revolutionizing Agriculture<br />
        <span className="text-green-600">with AI-Powered Insights</span>
      </h1>
      <p className="text-xl text-green-900 mb-8 animate-fade-in">
        Smarter. Sustainable. Autonomous.<br />
        The future of farming is here.
      </p>
      <a href="#about" className="inline-block px-8 py-3 rounded-lg bg-green-700 text-white text-lg font-bold shadow-lg hover:bg-green-900 transition hover:scale-105 animate-fade-in">
        Learn More
      </a>
    </div>
    <div className="flex-1 hidden md:block">
      <img
        src="/lovable-uploads/71324fad-df39-454f-9f1d-b6de5949a82a.png"
        alt="Greenhouse Brochure"
        className="rounded-xl shadow-2xl border-2 border-green-300 w-full object-cover animate-fade-in"
      />
    </div>
  </section>
);

export default HeroSection;
