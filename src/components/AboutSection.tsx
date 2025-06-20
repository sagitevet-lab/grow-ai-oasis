
import React from "react";

const AboutSection = () => (
  <section id="about" className="max-w-6xl mx-auto py-20 px-6">
    <div className="bg-gradient-to-br from-green-50 to-white rounded-3xl p-8 md:p-12 shadow-xl border border-green-100">
      {/* Top "Imagine..." with enhanced styling */}
      <div className="mb-12 text-center">
        <div className="inline-block bg-green-100 rounded-full px-6 py-2 mb-6">
          <span className="text-green-800 font-semibold text-sm uppercase tracking-wide">Why We Exist</span>
        </div>
        <p className="text-green-900 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed animate-fade-in font-medium">
          Imagine a world where your greenhouse runs itself — every drop of water, every ray of light, and every breath of CO₂ is optimized for maximum growth and efficiency. Your crops are always thriving, regardless of external conditions.
        </p>
      </div>

      {/* Center headline with visual separation */}
      <div className="mb-12 text-center relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-green-200"></div>
        </div>
        <div className="relative bg-white px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-4 animate-fade-in leading-tight">
            Now stop imagining.
            <br />
            <span className="text-green-600 bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
              The Future of Farming is Here.
            </span>
          </h2>
        </div>
      </div>

      {/* Company intro with enhanced design */}
      <div className="text-center">
        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-green-100">
          <p className="text-green-900 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed animate-fade-in font-medium">
            In a world facing increasing challenges in food production and climate change, 
            <span className="font-bold text-green-700 mx-2">Grow Autonomous Solutions</span> 
            presents a groundbreaking leap. By merging advanced AI with greenhouse technology, we are shaping sustainable agriculture for a more efficient, productive future.
          </p>
          
          {/* Call to action elements */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-700 font-bold text-xl">🌱</span>
              </div>
              <h3 className="font-semibold text-green-800 mb-2">Smarter</h3>
              <p className="text-green-600 text-sm">AI-driven decision making</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-700 font-bold text-xl">🌍</span>
              </div>
              <h3 className="font-semibold text-green-800 mb-2">Sustainable</h3>
              <p className="text-green-600 text-sm">Environmentally responsible</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-700 font-bold text-xl">⚡</span>
              </div>
              <h3 className="font-semibold text-green-800 mb-2">Autonomous</h3>
              <p className="text-green-600 text-sm">Self-managing systems</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
