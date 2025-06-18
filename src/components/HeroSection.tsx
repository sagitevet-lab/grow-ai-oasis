
import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-gradient-to-br from-green-50 to-white pt-8 pb-16 px-6 flex justify-center border-b border-green-200">
      <div className="flex flex-col w-full max-w-6xl mx-auto gap-8 items-center">
        {/* Logo and main content */}
        <div className="flex flex-col md:flex-row w-full max-w-5xl mx-auto gap-0 md:gap-10 items-stretch">
          {/* Logo top left with extra space */}
          <div className="min-w-[120px] flex flex-col items-center md:items-start md:justify-start md:mt-2 md:mr-12">
            <img
              src="/lovable-uploads/749b8430-d77c-4cc4-a025-8d2ae26a8f83.png"
              alt="Grow Autonomous Solutions Logo"
              className="h-28 md:h-32 rounded-none shadow-none p-0 bg-transparent mb-2 border-0"
              style={{ background: "transparent" }}
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
          
          {/* Greenhouse image with overlays */}
          <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/lovable-uploads/c35ed6e8-ec4d-4aed-8ba2-2aa1dbe45290.png"
              alt="AI-Powered Greenhouse with Environmental Monitoring"
              className="w-full h-full object-cover"
            />
            
            {/* Environmental data overlays */}
            <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg animate-fade-in">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-800">CO₂</div>
                <div className="text-xl font-semibold text-green-600">940</div>
                <div className="text-sm text-green-700">ppm</div>
              </div>
            </div>
            
            <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg animate-fade-in [animation-delay:200ms]">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">💧</div>
                <div className="text-xl font-semibold text-blue-600">75%</div>
                <div className="text-sm text-blue-700">Humidity</div>
              </div>
            </div>
            
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg animate-fade-in [animation-delay:400ms]">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">🌡️</div>
                <div className="text-xl font-semibold text-orange-600">27°C</div>
                <div className="text-sm text-orange-700">Temperature</div>
              </div>
            </div>
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
