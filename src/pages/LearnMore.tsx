
import React from "react";
import { BarChart2, Droplets, Sun, Cloud, Bot, Leaf } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Button } from "@/components/ui/button";

const whyList = [
  "Rising global food demand",
  "Climate change disrupting traditional farming",
  "Water shortages and resource scarcity",
  "Labor shortages in agriculture",
  "Growing consumer demand for sustainable, traceable food",
];

const techList = [
  {
    icon: <Bot className="text-green-700 w-7 h-7" />,
    title: "AI & IoT",
    desc: "Real-time, data-driven crop and climate management.",
  },
  {
    icon: <Droplets className="text-green-700 w-7 h-7" />,
    title: "Precision Irrigation & Fertigation",
    desc: "Reduce water use by up to 40%.",
  },
  {
    icon: <Sun className="text-green-700 w-7 h-7" />,
    title: "Smart Lighting",
    desc: "Lighting systems tailored to plant needs.",
  },
  {
    icon: <Cloud className="text-green-700 w-7 h-7" />,
    title: "Advanced Climate Control",
    desc: "Year-round management of temperature, humidity & CO₂.",
  },
  {
    icon: <Leaf className="text-green-700 w-7 h-7" />,
    title: "Autonomous Operation",
    desc: "No human intervention required.",
  },
];

const marketData = [
  {
    year: "2023",
    "Greenhouse Market ($B)": 30.9,
    "Smart Greenhouse Tech ($B)": 1.79,
  },
  {
    year: "2032*",
    "Greenhouse Market ($B)": 63.3,
    "Smart Greenhouse Tech ($B)": 4.17, // Approximate projection at 10.1% CAGR
  },
];

const perfData = [
  {
    crop: "Cucumbers (2019)",
    outcome: "AI matched or outperformed humans"
  },
  {
    crop: "Tomatoes (2020)",
    outcome: "AI-managed environments = high-quality yields with less input"
  },
  {
    crop: "Lettuce (2023)",
    outcome: "27% higher yield using AI + 3D imaging"
  }
];

const LearnMore = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white w-full py-10 pt-24 px-3">
      <div className="max-w-4xl mx-auto">
        {/* About Us & Mission */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-5">About Us</h1>
        <h2 className="text-2xl font-bold text-green-700 mb-2">Our Mission</h2>
        <p className="text-green-900 text-lg mb-6 font-medium leading-relaxed">
          At <b>Grow Autonomous Solutions</b>, we are revolutionizing agriculture through AI-powered greenhouse technology.
          Our mission is to help feed the world sustainably — using less water, less land, and fewer inputs, while producing more.
        </p>

        {/* Why We Exist */}
        <h2 className="text-2xl font-bold text-green-700 mb-2 mt-9">Why We Exist</h2>
        <p className="text-green-900 mb-2">As the world faces:</p>
        <ul className="list-disc ml-8 text-green-900 font-medium space-y-1 mb-6">
          {whyList.map(item => <li key={item}>{item}</li>)}
        </ul>
        <p className="text-green-900 mb-4">
          We believe the answer lies in intelligent, autonomous greenhouses – controlled environments that deliver consistent, optimized crop production year-round, anywhere.
        </p>

        {/* Our Solution */}
        <h2 className="text-2xl font-bold text-green-700 mb-2 mt-9">Our Solution: The AI-Driven Greenhouse</h2>
        <div className="grid gap-4 md:grid-cols-2 mb-6">
          {techList.map(f => (
            <div
              key={f.title}
              className="flex items-start gap-4 bg-white rounded-xl border border-green-100 shadow p-4"
            >
              <div>{f.icon}</div>
              <div>
                <div className="font-semibold text-green-800">{f.title}</div>
                <div className="text-green-900 text-sm">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-green-900 mb-2">
          <b>Results:</b> <span className="text-green-800 font-semibold">Up to 60% increase in yield per m²</span> <span className="text-gray-600 text-xs italic">(University of Arizona trials)</span>
        </p>

        {/* Proven Performance */}
        <h2 className="text-2xl font-bold text-green-700 mb-2 mt-12">Proven Performance</h2>
        <div className="mb-4">
          <ul className="list-disc ml-8 text-green-900 font-medium space-y-2">
            <li>
              <b>2019 (Cucumbers)</b>: AI-controlled compartments matched or outperformed human growers
            </li>
            <li>
              <b>2020 (Tomatoes)</b>: AI-managed environments yielded high-quality produce with less input
            </li>
            <li>
              <b>2023 (Lettuce)</b>: 27% higher yield using AI + 3D imaging
            </li>
          </ul>
        </div>
        <div className="mb-10">
          <div className="bg-white border border-green-100 rounded-xl shadow p-5">
            <h3 className="text-lg text-green-800 font-bold mb-2 flex items-center gap-2">
              <BarChart2 className="w-5 h-5" /> Market Opportunity
            </h3>
            <div className="mb-2 text-green-900 text-sm font-medium">
              The global greenhouse market is growing rapidly, with an urgent need for sustainable solutions and new-generation farmers.
            </div>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={marketData} margin={{ top: 12, right: 32, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis unit="B" />
                <Tooltip />
                <Legend />
                <Bar dataKey="Greenhouse Market ($B)" fill="#118c4f" radius={[6, 6, 0, 0]} />
                <Bar dataKey="Smart Greenhouse Tech ($B)" fill="#43b97b" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-2 text-xs text-gray-500 italic">*2032: projected at 10.1% CAGR</div>
            <div className="mt-2 text-green-900 text-sm">
              Average age of U.S. farmers: <b>57.5</b> – urgent need for a new generation.
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-green-100 py-8 px-5 rounded-xl text-center mb-16 border border-green-200">
          <h3 className="text-2xl md:text-3xl font-bold text-green-800 mb-3">
            Join the Revolution
          </h3>
          <p className="text-green-900 text-lg mb-6 max-w-xl mx-auto font-medium leading-relaxed">
            We’re seeking partners, investors, and growers who share our vision of a smarter, greener future.<br />
            Let’s grow a sustainable planet—together.
          </p>
          <Button
            className="bg-green-700 px-8 py-3 text-white text-lg font-bold hover:bg-green-900 rounded-lg shadow-lg"
            onClick={() => navigate("/start")}
          >
            Join The Revolution
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
