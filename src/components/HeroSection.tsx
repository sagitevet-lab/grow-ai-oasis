
import React from "react";

const HeroSection = () => (
  <section className="w-full bg-gradient-to-br from-green-50 to-white py-14 px-6 flex flex-col md:flex-row items-center md:items-start md:justify-center text-center md:text-left border-b border-green-200">
    <div className="flex flex-col md:flex-row items-center w-full max-w-5xl mx-auto gap-6 md:gap-12">
      {/* Logo left-aligned */}
      <div className="flex-shrink-0 flex items-center justify-center md:justify-start w-full md:w-auto mb-6 md:mb-0">
        <img
          src="/lovable-uploads/b438224d-e7e1-4082-8af1-71de6c260fc2.png"
          alt="Grow Autonomous Solutions Logo"
          className="h-24 md:h-28"
        />
      </div>
      {/* Main text content */}
      <div className="flex flex-col items-center md:items-start w-full">
        <h1 className="text-5xl font-extrabold text-green-800 mb-4 animate-fade-in leading-tight md:text-left text-center">
          Revolutionizing Agriculture<br />
          <span className="text-green-600">with AI-Powered Insights</span>
        </h1>
        <p className="text-xl text-green-900 mb-8 animate-fade-in md:text-left text-center">
          Smarter. Sustainable. Autonomous.<br />
          The future of farming is here.
        </p>
        <a
          href="#about"
          className="inline-block px-8 py-3 rounded-lg bg-green-700 text-white text-lg font-bold shadow-lg hover:bg-green-900 transition hover:scale-105 animate-fade-in"
        >
          Learn More
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
