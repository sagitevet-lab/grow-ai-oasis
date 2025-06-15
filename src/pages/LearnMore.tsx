
import React from "react";
import { Button } from "@/components/ui/button";
import { BarChart2, Leaf, Droplets, ThermometerSun, UserCheck, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const statBox =
  "flex items-center gap-3 p-4 bg-green-50 rounded-lg shadow-sm border border-green-100 mb-3";
const sectionTitle =
  "text-2xl md:text-3xl font-bold text-green-800 mb-3 tracking-tight";
const section =
  "mb-10";

const LearnMore = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white w-full pt-24 pb-16 px-4 md:px-0 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        {/* About Us & Mission */}
        <section className={section}>
          <h1 className="text-4xl font-extrabold text-green-900 mb-2 text-center">About Us</h1>
          <h2 className="text-lg md:text-xl font-semibold text-green-800 mb-2 text-center">Our Mission</h2>
          <p className="text-green-900 text-base md:text-lg mb-2 text-center">
            At Grow Autonomous Solutions, we are revolutionizing agriculture through AI-powered greenhouse technology. Our mission is to help feed the world sustainably—using less water, less land, and fewer inputs, while producing more.
          </p>
        </section>

        {/* Why We Exist */}
        <section className={section}>
          <h2 className={sectionTitle}>Why We Exist</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="list-disc list-inside text-green-900 mb-2 space-y-1">
              <li>Rising global food demand</li>
              <li>Climate change disrupting traditional farming</li>
              <li>Water shortages and resource scarcity</li>
              <li>Labor shortages in agriculture</li>
              <li>Growing consumer demand for sustainable, traceable food</li>
            </ul>
            <div className="flex flex-col justify-center items-center md:items-start">
              <Leaf className="text-green-600 mb-2" size={44} />
              <p className="text-green-800 font-medium">Year-round, optimized crop production—anywhere, anytime.</p>
            </div>
          </div>
          <p className="mt-3 text-green-900">We believe the answer lies in intelligent, autonomous greenhouses—controlled environments that deliver consistent, optimized crop production year-round, anywhere.</p>
        </section>

        {/* Our Solution */}
        <section className={section}>
          <h2 className={sectionTitle}>Our Solution: The AI-Driven Greenhouse</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-2">
            <div className={statBox}>
              <BarChart2 className="text-green-600" />
              <span className="text-green-900">
                AI & IoT for real-time, data-driven crop and climate management
              </span>
            </div>
            <div className={statBox}>
              <Droplets className="text-blue-400" />
              <span className="text-green-900">
                Precision irrigation & fertigation to reduce water use by <span className="font-bold">up to 40%</span>
              </span>
            </div>
            <div className={statBox}>
              <ThermometerSun className="text-orange-500" />
              <span className="text-green-900">
                Advanced climate control: temperature, humidity & CO₂ managed 24/7
              </span>
            </div>
            <div className={statBox}>
              <Leaf className="text-green-700" />
              <span className="text-green-900">
                Smart lighting systems tailored to plant needs
              </span>
            </div>
            <div className={statBox + " md:col-span-2"}>
              <UserCheck className="text-green-700" />
              <span className="text-green-900">
                Fully autonomous operation—no human intervention required
              </span>
            </div>
          </div>
        </section>

        {/* Results & Performance */}
        <section className={section}>
          <h2 className={sectionTitle}>Results: Up to <span className="text-green-700">60% increase in yield</span> per m² <span className="text-base text-green-600 font-normal">(University of Arizona trials)</span></h2>
          <div className="bg-green-100 border border-green-200 rounded p-4 mb-3">
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
        <section className={section}>
          <h2 className={sectionTitle}>Market Opportunity</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-green-50 rounded-lg p-4 border border-green-100 flex flex-col items-center text-center">
              <BarChart2 className="text-green-600 mb-2" size={32} />
              <div className="text-xl font-bold text-green-900">$30.9B</div>
              <div className="text-green-700 text-base">Global greenhouse market (2023)</div>
              <div className="text-green-700 text-sm mt-1">Expected $63.3B by 2032</div>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border border-green-100 flex flex-col items-center text-center">
              <BarChart2 className="text-blue-600 mb-2" size={32} />
              <div className="text-xl font-bold text-green-900">$1.79B</div>
              <div className="text-green-700 text-base">Smart greenhouse tech market (2023)</div>
              <div className="text-green-700 text-sm mt-1">10.1% CAGR growth</div>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border border-green-100 flex flex-col items-center text-center">
              <Users className="text-green-700 mb-2" size={32} />
              <div className="text-xl font-bold text-green-900">57.5</div>
              <div className="text-green-700 text-base">Avg. age of U.S. farmer</div>
              <div className="text-green-700 text-sm mt-1">Urgent need for new generation</div>
            </div>
          </div>
        </section>

        {/* Join the Revolution */}
        <section className="mt-10 mb-6 text-center">
          <h2 className="text-2xl text-green-800 font-extrabold mb-2">Join the Revolution</h2>
          <div className="text-green-900 text-lg font-medium mb-4">
            We’re seeking partners, investors, and growers who share our vision of a smarter, greener future.<br />
            Let’s grow a sustainable planet—together.
          </div>
          <Button
            className="bg-green-700 hover:bg-green-900 text-white text-lg px-8 py-3 font-bold rounded-lg shadow-lg transition hover:scale-105"
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
