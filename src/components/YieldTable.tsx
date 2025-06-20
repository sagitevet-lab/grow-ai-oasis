
import React from "react";

const data = [
  {
    crop: "Cherry Tomatoes",
    regular: "6-8 Kg",
    highTech: "10-14 Kg",
    aiOptimized: "up to 20 Kg",
    percent: "+42%",
  },
  {
    crop: "Cucumbers",
    regular: "10-15 Kg",
    highTech: "20-25 Kg",
    aiOptimized: "up to 40 Kg",
    percent: "+60%",
  },
  {
    crop: "Peppers",
    regular: "8-10 Kg",
    highTech: "14-16 Kg",
    aiOptimized: "up to 25 Kg",
    percent: "+56%",
  },
];

const YieldTable = () => (
  <section className="py-16 px-6 bg-white">
    <div className="max-w-5xl mx-auto">
      <h3 className="text-2xl md:text-3xl font-bold text-green-800 mb-6 text-center animate-fade-in">
        AI-Powered Precision, <span className="text-green-600">Increased Yield</span>
      </h3>
      <p className="text-gray-700 mb-6 text-center text-base animate-fade-in [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
        Based on a study conducted by the University of Arizona.
      </p>
      <div className="overflow-x-auto animate-scale-in [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards]">
        <table className="w-full rounded-lg border border-green-100 shadow text-center bg-green-50 hover:shadow-lg transition-shadow duration-300">
          <thead>
            <tr className="bg-green-100 text-green-800">
              <th className="py-3 px-4 font-semibold">Crop</th>
              <th className="py-3 px-4 font-semibold">Regular Greenhouse</th>
              <th className="py-3 px-4 font-semibold">High-Tech Greenhouse</th>
              <th className="py-3 px-4 font-semibold">AI-Optimized Greenhouse</th>
              <th className="py-3 px-4 font-semibold">% Increase</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={row.crop} className="border-t border-green-100 animate-fade-in hover:bg-green-25 transition-colors duration-200" style={{ animationDelay: `${600 + index * 100}ms` }}>
                <td className="py-2 px-4 font-medium text-green-900">{row.crop}</td>
                <td className="py-2 px-4">{row.regular}</td>
                <td className="py-2 px-4">{row.highTech}</td>
                <td className="py-2 px-4">{row.aiOptimized}</td>
                <td className="py-2 px-4 font-semibold text-green-700">{row.percent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default YieldTable;
