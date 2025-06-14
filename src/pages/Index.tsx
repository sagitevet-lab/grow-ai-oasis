
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import YieldTable from "@/components/YieldTable";
import FoundersSection from "@/components/FoundersSection";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import React from "react";

const Index = () => {
  const navigate = useNavigate();

  return (
-    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white w-full">
+    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white w-full pt-10 md:pt-0">
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
      {/* Join the Revolution call to action */}
      <div className="max-w-4xl mx-auto text-center px-6 my-14">
        <h3 className="text-3xl md:text-4xl font-extrabold text-green-800 mb-3">Join the Revolution</h3>
        <div className="text-green-900 text-lg max-w-2xl mx-auto mb-5 font-medium leading-relaxed">
          Let’s Grow a Sustainable Future Together <br />
          Partner with Grow Autonomous Solutions and be part of the agricultural future that is not only productive but also responsible. Together, we can meet the growing global demand for food while preserving the planet for future generations.
        </div>
        <button
          className="px-8 py-3 rounded-lg bg-green-700 text-white text-lg font-bold shadow-lg hover:bg-green-900 transition hover:scale-105"
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
