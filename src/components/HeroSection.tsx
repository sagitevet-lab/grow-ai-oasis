
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
              className="h-28 md:h-32 object-contain animate-scale-in hover:animate-float transition-all duration-300"
            />
          </div>
          {/* Main text content */}
          <div className="flex flex-col items-center md:items-start justify-center w-full text-center md:text-left">
            <h1 className="text-5xl font-extrabold text-green-800 mb-4 animate-slide-in-left leading-tight">
              Revolutionizing Agriculture
              <br />
              <span className="text-green-600">with AI-Powered Insights</span>
            </h1>
            <p className="text-xl text-green-900 mb-8 animate-slide-in-left [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
              Smarter. Sustainable. Autonomous.
              <br />
              The future of farming is here.
            </p>
            <button
              className="px-10 py-4 rounded-lg bg-green-700 text-white text-lg font-bold shadow-lg hover:bg-green-900 transition-all duration-300 hover:scale-105 hover:shadow-xl animate-slide-in-left [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards] transform hover:-translate-y-1"
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
            <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4 animate-fade-in [animation-delay:600ms] opacity-0 [animation-fill-mode:forwards]">
              Smart Greenhouse Technology
            </h2>
            <p className="text-xl text-green-700 mb-2 animate-fade-in [animation-delay:700ms] opacity-0 [animation-fill-mode:forwards]">
              Real-time environmental monitoring.
            </p>
            <p className="text-xl text-green-700 animate-fade-in [animation-delay:800ms] opacity-0 [animation-fill-mode:forwards]">
              Precision agriculture with AI intelligence.
            </p>
          </div>
          
          {/* Greenhouse image without overlays */}
          <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl animate-scale-in [animation-delay:900ms] opacity-0 [animation-fill-mode:forwards] hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
            <img
              src="/lovable-uploads/c35ed6e8-ec4d-4aed-8ba2-2aa1dbe45290.png"
              alt="AI-Powered Greenhouse with Environmental Monitoring"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />
          </div>
          
          <div className="text-center mt-8">
            <p className="text-lg text-green-800 font-medium animate-fade-in [animation-delay:1000ms] opacity-0 [animation-fill-mode:forwards]">
              Built for <span className="text-green-600 font-bold">Agricultural Intelligence</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
