
import React from "react";
import { Button } from "@/components/ui/button";
import { BarChart2, Leaf, Droplets, ThermometerSun, UserCheck, Users, Cpu, ArrowLeft, Target, TrendingUp, Shield, Zap, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SolutionFeatureBlock from "@/components/SolutionFeatureBlock";

const LearnMore = () => {
  const navigate = useNavigate();

  // Handle back navigation and ensure scroll to top on main page
  const handleBackToMain = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "instant" });
  };

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
        {/* About Us & Vision */}
        <section className="mb-12 flex flex-col items-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-green-900 mb-2 text-center tracking-tighter animate-fade-in drop-shadow-[0_2px_5px_rgba(34,197,94,0.06)]">
            About Us
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-green-700 mb-3 text-center animate-fade-in [animation-delay:100ms] underline decoration-green-600 decoration-2 underline-offset-4">
            Our Vision
          </h2>
          <p className="text-green-900 text-2xl md:text-3xl mb-4 text-center max-w-2xl mx-auto animate-fade-in [animation-delay:200ms] font-semibold leading-relaxed">
            Our vision is to transform agriculture into a data-driven industry.
          </p>
          <p className="text-green-900 text-base md:text-lg text-center max-w-2xl mx-auto animate-fade-in [animation-delay:300ms] leading-relaxed">
            By leveraging AI algorithms to process greenhouse sensor data, we aim to create a fully autonomous system that operates smoothly, optimizing growth and sustainability with minimal human intervention.
          </p>
        </section>

        {/* What Drives Us */}
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6 tracking-tight animate-fade-in text-center">
            What Drives Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in text-left max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-200 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center mb-3">
                <TrendingUp className="text-green-600 mr-3" size={24} />
                <h3 className="font-semibold text-green-800">Rising Food Demand</h3>
              </div>
              <p className="text-green-900 text-sm">Global population growth requires innovative solutions to feed the world sustainably.</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-200 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center mb-3">
                <Globe className="text-blue-600 mr-3" size={24} />
                <h3 className="font-semibold text-green-800">Climate Challenges</h3>
              </div>
              <p className="text-green-900 text-sm">Climate change disrupts traditional farming, demanding resilient agricultural systems.</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-200 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center mb-3">
                <Droplets className="text-blue-500 mr-3" size={24} />
                <h3 className="font-semibold text-green-800">Resource Scarcity</h3>
              </div>
              <p className="text-green-900 text-sm">Water shortages and limited arable land require more efficient resource utilization.</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-200 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center mb-3">
                <Users className="text-green-700 mr-3" size={24} />
                <h3 className="font-semibold text-green-800">Labor Shortages</h3>
              </div>
              <p className="text-green-900 text-sm">Agricultural workforce challenges drive the need for autonomous farming solutions.</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-200 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center mb-3">
                <Shield className="text-green-600 mr-3" size={24} />
                <h3 className="font-semibold text-green-800">Sustainability Demand</h3>
              </div>
              <p className="text-green-900 text-sm">Consumers increasingly demand sustainable, traceable food production methods.</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-200 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center mb-3">
                <Zap className="text-yellow-600 mr-3" size={24} />
                <h3 className="font-semibold text-green-800">Technological Innovation</h3>
              </div>
              <p className="text-green-900 text-sm">AI and IoT advances enable unprecedented precision in agricultural management.</p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <div className="inline-block bg-green-100 px-6 py-3 rounded-full border border-green-300">
              <p className="text-green-900 font-medium text-base">
                We believe intelligent, autonomous greenhouses are the answer to these challenges.
              </p>
            </div>
          </div>
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
            {/* Autonomous operation block */}
            <SolutionFeatureBlock icon={<UserCheck className="text-green-700" />} delay={460}>
              Autonomous operation without human intervention
            </SolutionFeatureBlock>
          </div>
          <div className="w-full h-3 bg-gradient-to-r from-green-200 via-green-50 to-green-100 rounded-lg mt-10 opacity-85" />
        </section>

        {/* Results & Proven Performance */}
        <section className="mb-14 flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-2 animate-fade-in text-center">
            Proven Performance: Autonomous Greenhouse Trials
          </h2>
          <span className="block text-base text-green-600 font-normal mb-7 animate-fade-in text-center" style={{ marginTop: "0.25rem" }}>
            Wageningen University Autonomous Greenhouse Challenges
          </span>
          <div className="grid gap-6 md:grid-cols-3 w-full max-w-3xl animate-fade-in [animation-delay:100ms]">
            {/* 2019 Card */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-5 shadow flex flex-col h-full">
              <div className="text-green-900 font-bold text-lg mb-1">2019 – Cucumber Trial</div>
              <div className="text-green-700 text-xs font-semibold mb-2">Autonomous Greenhouse Challenge 2019 – Wageningen University</div>
              <div className="text-green-600 mb-2 text-xs">Outcome:</div>
              <div className="text-green-900 text-sm mb-1 text-left">
                <span className="font-semibold">AI teams outperformed</span> the Dutch grower benchmark in several compartments
                <br />
                <span className="font-semibold">Up to 6.9% higher yield</span> in top-performing autonomous compartment
              </div>
              <div className="text-green-800 font-medium text-xs mb-1 mt-2">Savings:</div>
              <div className="text-green-900 text-xs mb-1 text-left">
                Up to 20% less energy use<br />
                15% more efficient CO₂ usage
              </div>
            </div>
            {/* 2020 Card */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-5 shadow flex flex-col h-full">
              <div className="text-green-900 font-bold text-lg mb-1">2020 – Cherry Tomato Trial</div>
              <div className="text-green-700 text-xs font-semibold mb-2">Autonomous Greenhouse Challenge 2020 – Wageningen University</div>
              <div className="text-green-600 mb-2 text-xs">Outcome:</div>
              <div className="text-green-900 text-sm mb-1 text-left">
                <span className="font-semibold">Winning AI team produced 26.5 kg/m²</span>, outperforming human growers by ~5%
              </div>
              <div className="text-green-800 font-medium text-xs mb-1 mt-2">Resource savings:</div>
              <div className="text-green-900 text-xs mb-1 text-left">
                Water use reduced by 8%<br />
                Energy use optimized via dynamic lighting control
              </div>
              <div className="text-green-800 font-medium text-xs mb-1 mt-2">Quality:</div>
              <div className="text-green-900 text-xs text-left">
                Improved fruit quality (higher °Brix and firmness)
              </div>
            </div>
            {/* 2023 Card */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-5 shadow flex flex-col h-full">
              <div className="text-green-900 font-bold text-lg mb-1">2023 – Lettuce Trial</div>
              <div className="text-green-700 text-xs font-semibold mb-2">Autonomous Greenhouse Challenge 2023 – Wageningen University</div>
              <div className="text-green-600 mb-2 text-xs">Outcome:</div>
              <div className="text-green-900 text-sm mb-1 text-left">
                <span className="font-semibold">AI-led greenhouse achieved 27% higher yield</span> than the human-managed benchmark
              </div>
              <div className="text-green-800 font-medium text-xs mb-1 mt-2">Innovations used:</div>
              <div className="text-green-900 text-xs text-left">
                3D imaging<br />
                Real-time crop spacing decisions
              </div>
            </div>
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
            We're seeking partners, investors, and growers who share our vision of a smarter, greener future.<br />
            Let's grow a sustainable planet—together.
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
        {/* Back Button below "Join the Revolution" */}
        <div className="flex justify-center mt-8">
          <button
            className="underline text-black font-semibold text-base hover:text-green-700 transition-colors flex items-center gap-2 bg-transparent p-0 border-0 shadow-none"
            onClick={handleBackToMain}
            aria-label="Back to Main Page"
            style={{ background: "none" }}
            type="button"
          >
            <ArrowLeft size={20} />
            Back to Main Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
