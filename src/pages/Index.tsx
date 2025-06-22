
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import YieldTable from "@/components/YieldTable";
import FoundersSection from "@/components/FoundersSection";
import Footer from "@/components/Footer";
import AccessibilityBar from "@/components/AccessibilityBar";
import { useNavigate } from "react-router-dom";
import React from "react";

const Index = () => {
  const navigate = useNavigate();

  // Function to ensure scrolling to top when navigating to Learn More
  const handleLearnMore = () => {
    navigate("/learn");
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white w-full pt-16 md:pt-8">
      <AccessibilityBar />
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <div className="max-w-5xl mx-auto px-6 mt-8 mb-2 text-center">
        <p className="text-green-900 text-lg font-semibold animate-fade-in">
          The software seamlessly integrates with the Greenhouse control computer and various sensors,
          autonomously managing the entire system without the need for human intervention.
        </p>
      </div>
      <YieldTable />
      
      {/* Enhanced Learn More section - more prominent */}
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center px-6 my-12 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl py-8 mx-6 shadow-lg border border-green-200">
        <h3 className="text-2xl md:text-3xl font-bold text-green-800 mb-4 animate-fade-in">Want to Learn More?</h3>
        <p className="text-green-700 text-base md:text-lg mb-6 max-w-2xl animate-fade-in [animation-delay:100ms]">
          Discover the science behind our AI-driven greenhouse technology, see proven results from trials, and learn about the market opportunity.
        </p>
        <button
          className="px-10 py-4 rounded-xl bg-gradient-to-r from-green-600 to-green-700 text-white text-xl font-bold shadow-xl hover:from-green-700 hover:to-green-800 transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in [animation-delay:200ms] border-2 border-green-500 hover:border-green-600"
          onClick={handleLearnMore}
          type="button"
        >
          Learn More About Our Technology
        </button>
      </div>
      
      <FoundersSection />
      
      {/* Join the Revolution call to action */}
      <div className="max-w-4xl mx-auto text-center px-6 my-14">
        <h3 className="text-3xl md:text-4xl font-extrabold text-green-800 mb-3 animate-slide-in-left">Join the Revolution</h3>
        <div className="text-green-900 text-lg max-w-2xl mx-auto mb-5 font-medium leading-relaxed animate-fade-in [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
          Let's Grow a Sustainable Future Together <br />
          Partner with Grow Autonomous Solutions and be part of the agricultural future that is not only productive but also responsible. Together, we can meet the growing global demand for food while preserving the planet for future generations.
        </div>
        <button
          className="px-8 py-3 rounded-lg bg-green-700 text-white text-lg font-bold shadow-lg hover:bg-green-900 transition-all duration-300 hover:scale-105 hover:shadow-xl animate-scale-in [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards] hover:-translate-y-1"
          onClick={() => navigate("/start")}
          type="button"
        >
          Join The Revolution
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
