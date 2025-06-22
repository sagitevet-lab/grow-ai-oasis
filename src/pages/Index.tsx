import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import YieldTable from "@/components/YieldTable";
import FoundersSection from "@/components/FoundersSection";
import Footer from "@/components/Footer";
import AccessibilityBar from "@/components/AccessibilityBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 via-white to-green-50">
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <YieldTable />
      <FoundersSection />
      <Footer />
      
      {/* Add Accessibility Bar */}
      <AccessibilityBar />
    </div>
  );
};

export default Index;
