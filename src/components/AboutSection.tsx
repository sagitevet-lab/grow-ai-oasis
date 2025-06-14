
import React from "react";

const AboutSection = () => (
  <section id="about" className="max-w-5xl mx-auto py-16 px-6">
    {/* Top "Imagine..." */}
    <div className="mb-9 text-center">
      <p className="text-green-900 text-lg max-w-3xl mx-auto leading-relaxed animate-fade-in font-medium mb-8">
        Imagine a world where your greenhouse runs itself — every drop of water, every ray of light, and every breath of CO₂ is optimized for maximum growth and efficiency. Your crops are always thriving, regardless of external conditions.
      </p>
    </div>
    {/* Center headline */}
    <div className="mb-8 text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-green-800 mb-2 animate-fade-in">
        Now stop imagining.
        <br />
        <span className="text-green-600">The Future of Farming is Here.</span>
      </h2>
    </div>
    {/* Company intro */}
    <div className="text-center">
      <p className="text-green-900 text-lg max-w-3xl mx-auto leading-relaxed animate-fade-in font-medium">
        In a world facing increasing challenges in food production and climate change, <b>Grow Autonomous Solutions</b> presents a groundbreaking leap. By merging advanced AI with greenhouse technology, we are shaping sustainable agriculture for a more efficient, productive future.
      </p>
    </div>
  </section>
);

export default AboutSection;
