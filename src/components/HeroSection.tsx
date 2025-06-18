
import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-gradient-to-br from-green-50 to-white pt-8 pb-16 px-6 flex justify-center border-b border-green-200">
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
    </section>
  );
};

export default HeroSection;

