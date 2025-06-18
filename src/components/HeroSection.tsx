
import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-gradient-to-br from-green-50 to-white pt-8 pb-16 px-6 flex justify-center border-b border-green-200">
      <div className="flex flex-col w-full max-w-6xl mx-auto gap-8 items-center">
        {/* Logo top left with extra space */}
        <div className="min-w-[120px] flex flex-col items-center md:items-start md:justify-start md:mt-2 md:mr-12 md:absolute md:top-8 md:left-6">
          <img
            src="/lovable-uploads/749b8430-d77c-4cc4-a025-8d2ae26a8f83.png"
            alt="Grow Autonomous Solutions Logo"
            className="h-28 md:h-32 rounded-none shadow-none p-0 bg-transparent mb-2 border-0"
            style={{ background: "transparent" }}
          />
        </div>
        
        {/* Main text content */}
        <div className="flex flex-col items-center justify-center w-full text-center mt-8 md:mt-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-green-800 mb-4 animate-fade-in leading-tight">
            Revolutionizing Agriculture
            <br />
            <span className="text-green-600">with AI-Powered Insights</span>
          </h1>
          <p className="text-xl text-green-900 mb-8 animate-fade-in max-w-2xl">
            Smarter. Sustainable. Autonomous.
            <br />
            The future of farming is here.
          </p>
          <button
            className="px-10 py-4 rounded-lg bg-green-700 text-white text-lg font-bold shadow-lg hover:bg-green-900 transition hover:scale-105 animate-fade-in mb-12"
            onClick={() => navigate("/start")}
            type="button"
          >
            Start Now
          </button>
        </div>

        {/* Greenhouse Image with Monitoring Overlays */}
        <div className="relative w-full max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="/lovable-uploads/1998e206-22dd-4328-aae0-2322f8d7ace7.png"
              alt="AI-Powered Greenhouse with Environmental Monitoring"
              className="w-full h-auto object-cover"
            />
            
            {/* Monitoring Data Overlays */}
            <div className="absolute inset-0 pointer-events-none">
              {/* CO2 Monitor */}
              <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg border-2 border-green-500">
                  <div className="text-center">
                    <div className="text-xs text-green-700 font-semibold">CO₂</div>
                    <div className="text-lg font-bold text-green-800">940</div>
                    <div className="text-xs text-green-600">ppm</div>
                  </div>
                </div>
              </div>

              {/* Temperature Monitor */}
              <div className="absolute top-1/3 right-1/3 transform translate-x-1/2 -translate-y-1/2">
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg border-2 border-green-500">
                  <div className="text-center">
                    <div className="text-xs text-green-700 font-semibold">TEMP</div>
                    <div className="text-lg font-bold text-green-800">27°C</div>
                    <div className="text-xs text-green-600">optimal</div>
                  </div>
                </div>
              </div>

              {/* Humidity Monitor */}
              <div className="absolute top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2">
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg border-2 border-green-500">
                  <div className="text-center">
                    <div className="text-xs text-green-700 font-semibold">HUMIDITY</div>
                    <div className="text-lg font-bold text-green-800">75%</div>
                    <div className="text-xs text-green-600">ideal</div>
                  </div>
                </div>
              </div>

              {/* AI Status Indicator */}
              <div className="absolute bottom-8 left-8">
                <div className="bg-green-600/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                    <span className="text-white text-sm font-semibold">AI Monitoring Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Caption */}
          <div className="text-center mt-6">
            <p className="text-green-900 text-lg font-medium">
              Real-time AI monitoring optimizes growing conditions automatically
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
