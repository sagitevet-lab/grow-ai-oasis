
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import YieldTable from "@/components/YieldTable";
import FoundersSection from "@/components/FoundersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white w-full">
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
      <Footer />
    </div>
  );
};

export default Index;
