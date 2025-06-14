
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
      <YieldTable />
      <FoundersSection />
      <Footer />
    </div>
  );
};

export default Index;
