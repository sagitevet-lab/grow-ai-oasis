
import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-gradient-to-br from-green-50 to-white pt-8 pb-16 px-6 flex justify-center border-b border-green-200">
      <div className="flex flex-col w-full max-w-6xl mx-auto gap-8 items-center">
        {/* Logo and main content */}
        <div className="flex flex-col md:flex-row w-full max-w-5xl mx-auto gap-0 md:gap-10 items-center md:items-start">
          {/* Logo with fixed sizing */}
          <div className="flex-shrink-0 flex flex-col items-center md:items-start md:justify-start">
            <img
              src="/lovable-uploads/749b8430-d77c-4cc4-a025-8d2ae26a8f83.png"
              alt="Grow Autonomous Solutions Logo"
              className="w-28 h-28 md:w-32 md:h-32 object-contain mb-2"
            />
          </div>
          {/* Main text content */}
          <div className="flex flex-col items-center md:items-start justify-center w-full text-center md:text-left">
            <h1 className="text-5xl font-extrabold text-green-800 mb-4 animate-fade-in leading-tight">
              Revolutionizing Agriculture
              <br />
              <span className="text-green-600">with AI-Powered Insights</span>
            </h1>
            <p className="text-xl text-green-900 mb-8 animate-fade-in">
              Smarter. Sustainable. Autonomous.
              <br />
              The future of farming is here.
            </p>
            <button
              className="px-10 py-4 rounded-lg bg-green-700 text-white text-lg font-bold shadow-lg hover:bg-green-900 transition hover:scale-105 animate-fade-in"
              onClick={() => navigate("/start")}
              type="button"
            >
              Start Now
            </button>
          </div>
        </div>

        {/* Greenhouse showcase section */}
        <div className="w-full max-w-5xl mx-auto mt-12">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
              Smart Greenhouse Technology
            </h2>
            <p className="text-xl text-green-700 mb-2">
              Real-time environmental monitoring.
            </p>
            <p className="text-xl text-green-700">
              Precision agriculture with AI intelligence.
            </p>
          </div>
          
          {/* Greenhouse image without overlays */}
          <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/lovable-uploads/c35ed6e8-ec4d-4aed-8ba2-2aa1dbe45290.png"
              alt="AI-Powered Greenhouse with Environmental Monitoring"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="text-center mt-8">
            <p className="text-lg text-green-800 font-medium">
              Built for <span className="text-green-600 font-bold">Agricultural Intelligence</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
