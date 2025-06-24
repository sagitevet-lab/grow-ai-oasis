
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import YieldTable from "@/components/YieldTable";
import FoundersSection from "@/components/FoundersSection";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { useNavigate } from "react-router-dom";
import React from "react";
import AccessibilityBar from "@/components/AccessibilityBar";

const Index = () => {
  const navigate = useNavigate();

  // Function to ensure scrolling to top when navigating to Learn More
  const handleLearnMore = () => {
    navigate("/learn");
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white w-full">
      <Navigation />
      <AccessibilityBar />
      <div className="pt-16">
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
      <FoundersSection />
      {/* New Learn More button */}
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center px-6 my-8">
        <button
          className="px-8 py-3 rounded-lg bg-green-100 text-green-800 text-lg font-semibold shadow hover:bg-green-200 transition-all duration-300 mb-4 hover:scale-105 hover:shadow-lg animate-fade-in"
          onClick={handleLearnMore}
          type="button"
        >
          Learn More
        </button>
      </div>
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
    </div>
  );
};

export default Index;
