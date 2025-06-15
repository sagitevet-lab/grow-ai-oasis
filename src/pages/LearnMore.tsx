import React from "react";
import { Button } from "@/components/ui/button";
import { BarChart2, Leaf, Droplets, ThermometerSun, UserCheck, Users, Cpu, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SolutionFeatureBlock from "@/components/SolutionFeatureBlock";

const LearnMore = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-green-100 via-white to-green-50 w-full pt-24 pb-20 px-2 md:px-0 flex flex-col items-center overflow-x-hidden">
      {/* Pop Design: Decorative gradients, top fade, and subtle motion circles */}
      <div className="pointer-events-none absolute left-[-60px] top-[-40px] w-[190px] h-[190px] rounded-full bg-green-200 opacity-40 blur-2xl z-0 animate-fade-in" />
      <div className="pointer-events-none absolute right-[-80px] top-[18%] w-[100px] h-[100px] rounded-full bg-green-300 opacity-30 blur-2xl z-0 animate-fade-in [animation-delay:100ms]" />
      <div className="pointer-events-none absolute right-[-100px] top-[60px] w-[175px] h-[175px] rounded-full bg-green-400 opacity-20 blur-3xl z-0 animate-fade-in [animation-delay:260ms]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[120px] bg-gradient-to-t from-green-100 via-white blur-md opacity-80 z-0" />
      <div className="pointer-events-none absolute left-[25%] top-[120px] w-[90px] h-[90px] rounded-full bg-emerald-300 opacity-20 blur-xl z-0 animate-fade-in [animation-delay:300ms]" />
      <div className="pointer-events-none absolute left-0 top-0 w-full h-24 bg-gradient-to-b from-green-300 via-white/10 to-transparent opacity-30 z-0" />

      <div className="relative w-full max-w-3xl z-10">
        {/* Back Button */}
        <div className="mb-6 flex items-center">
          <Button
            className="gap-2 bg-green-700 text-white hover:bg-green-900 transition-all px-4 py-2 font-semibold"
            onClick={() => navigate("/")}
            aria-label="Back to Main Page"
          >
            <ArrowLeft size={20} />
            Back to Main Page
          </Button>
        </div>
        {/* About Us & Mission */}
        <section className="mb-12 flex flex-col items-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-green-900 mb-2 text-center tracking-tighter animate-fade-in drop-shadow-[0_2px_5px_rgba(34,197,94,0.06)]">
            About Us
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-green-700 mb-3 text-center animate-fade-in [animation-delay:100ms] underline decoration-green-600 decoration-2 underline-offset-4">
            Our Mission
          </h2>
          <p className="text-green-900 text-base md:text-lg mb-2 text-center max-w-2xl mx-auto animate-fade-in [animation-delay:200ms]">
            At <span className="font-semibold text-green-800">Grow Autonomous Solutions</span>,
            we are revolutionizing agriculture through <span className="text-green-700 font-medium">AI-powered greenhouse technology</span>. Our mission is to help feed the world sustainably—using less water, less land, and fewer inputs, while producing more.
          </p>
        </section>

        {/* Why We Exist - Centered with left-aligned bullets */}
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-3 tracking-tight text-center animate-fade-in">Why We Exist</h2>
          <ul className="list-disc list-inside text-green-900 space-y-2 animate-fade-in text-left max-w-lg mx-auto">
            <li>Rising global food demand</li>
            <li>Climate change disrupting traditional farming</li>
            <li>Water shortages and resource scarcity</li>
            <li>Labor shortages in agriculture</li>
            <li>Growing consumer demand for sustainable, traceable food</li>
          </ul>
          <div className="mt-4 border-t-2 border-dotted border-green-200 w-full max-w-lg mx-auto" />
          <p className="mt-5 text-green-900 animate-fade-in [animation-delay:250ms] text-base md:text-lg text-center max-w-2xl mx-auto">
            We believe the answer lies in intelligent, autonomous greenhouses—controlled environments that deliver consistent, optimized crop production year-round, anywhere.
          </p>
        </section>

        {/* Our Solution */}
        <section className="mb-14 relative">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6 tracking-tight animate-fade-in text-center">
            Our Solution: <span className="text-green-700">The AI-Driven Greenhouse</span>
          </h2>
          <div
            className="
              grid grid-cols-1 gap-6 mb-2
              sm:grid-cols-1
              md:grid-cols-2 md:grid-rows-3
              max-w-3xl mx-auto
            "
          >
            {/* Row 1 */}
            <SolutionFeatureBlock icon={<BarChart2 className="text-green-600" />} delay={0}>
              AI & IoT for real-time, data-driven crop and climate management
            </SolutionFeatureBlock>
            <SolutionFeatureBlock icon={<Droplets className="text-blue-400" />} delay={80}>
              Precision irrigation & fertigation to reduce water use by <span className="font-bold">up to 40%</span>
            </SolutionFeatureBlock>
            {/* Row 2 */}
            <SolutionFeatureBlock icon={<ThermometerSun className="text-orange-500" />} delay={160}>
              Advanced climate control: temperature, humidity & CO₂ managed 24/7
            </SolutionFeatureBlock>
            <SolutionFeatureBlock icon={<Leaf className="text-green-700" />} delay={240}>
              Smart lighting systems tailored to plant needs
            </SolutionFeatureBlock>
            {/* Row 3 */}
            <SolutionFeatureBlock icon={<Cpu className="text-green-700" />} delay={380}>
              Predictive crop management - forecast crop needs for planting and yield optimization
            </SolutionFeatureBlock>
            {/* New autonomous operation block */}
            <SolutionFeatureBlock icon={<UserCheck className="text-green-700" />} delay={460}>
              Autonomous operation without human intervention
            </SolutionFeatureBlock>
          </div>
          <div className="w-full h-3 bg-gradient-to-r from-green-200 via-green-50 to-green-100 rounded-lg mt-10 opacity-85" />
        </section>

        {/* Results & Performance */}
        <section className="mb-14 flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-2 animate-fade-in text-center">
            Results: Up to 60% increase in yield per m²
          </h2>
          <span className="block text-base text-green-600 font-normal mb-4 animate-fade-in text-center" style={{ marginTop: "0.25rem" }}>
            (University of Arizona trials)
          </span>
          <div className="bg-green-100/90 border border-green-200 rounded-xl p-5 mb-3 shadow animate-fade-in [animation-delay:100ms] max-w-xl mx-auto">
            <h3 className="font-semibold text-green-800 mb-1">Proven Performance</h3>
            <p className="mb-2">
              Feasibility Studies from International Challenges:
            </p>
            <ul className="list-decimal list-inside space-y-1 text-green-900">
              <li>2019 (<span className="font-semibold">Cucumbers</span>): AI-controlled compartments matched or outperformed human growers</li>
              <li>2020 (<span className="font-semibold">Tomatoes</span>): AI-managed environments yielded high-quality produce with less input</li>
              <li>2023 (<span className="font-semibold">Lettuce</span>): 27% higher yield than control using AI + 3D imaging</li>
            </ul>
          </div>
        </section>

        {/* Market Opportunity */}
        <section className="mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-5 tracking-tight animate-fade-in text-center">
            Market Opportunity
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 animate-fade-in">
            <div className="bg-green-50 rounded-xl p-6 border border-green-100 flex flex-col items-center text-center shadow-sm hover:scale-105 transition-all hover:shadow-md">
              <BarChart2 className="text-green-600 mb-2" size={36} />
              <div className="text-2xl font-bold text-green-900">$30.9B</div>
              <div className="text-green-700 text-base">Global greenhouse market (2023)</div>
              <div className="text-green-700 text-sm mt-1">Expected $63.3B by 2032</div>
            </div>
            <div className="bg-green-50 rounded-xl p-6 border border-green-100 flex flex-col items-center text-center shadow-sm hover:scale-105 transition-all hover:shadow-md">
              <BarChart2 className="text-blue-600 mb-2" size={36} />
              <div className="text-2xl font-bold text-green-900">$1.79B</div>
              <div className="text-green-700 text-base">Smart greenhouse tech market (2023)</div>
              <div className="text-green-700 text-sm mt-1">10.1% CAGR growth</div>
            </div>
            <div className="bg-green-50 rounded-xl p-6 border border-green-100 flex flex-col items-center text-center shadow-sm hover:scale-105 transition-all hover:shadow-md">
              <Users className="text-green-700 mb-2" size={36} />
              <div className="text-2xl font-bold text-green-900">57.5</div>
              <div className="text-green-700 text-base">Avg. age of U.S. farmer</div>
              <div className="text-green-700 text-sm mt-1">Urgent need for new generation</div>
            </div>
          </div>
        </section>

        {/* Join the Revolution */}
        <section className="mt-12 mb-6 text-center animate-fade-in">
          <h2 className="text-2xl md:text-3xl text-green-800 font-extrabold mb-2">
            Join the Revolution
          </h2>
          <div className="text-green-900 text-lg font-medium mb-4">
            We’re seeking partners, investors, and growers who share our vision of a smarter, greener future.<br />
            Let’s grow a sustainable planet—together.
          </div>
          <Button
            className="bg-green-700 hover:bg-green-900 text-white text-lg px-8 py-3 font-bold rounded-lg shadow-lg transition-all hover:scale-105 animate-fade-in [animation-delay:100ms]"
            onClick={() => navigate("/start")}
            type="button"
            aria-label="Join the Revolution"
          >
            Join the Revolution
          </Button>
        </section>
      </div>
    </div>
  );
};

export default LearnMore;
