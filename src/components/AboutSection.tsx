
import React from "react";

const AboutSection = () => (
  <section id="about" className="max-w-5xl mx-auto py-16 px-6">
    {/* 1. Imagination paragraph */}
    <div className="mb-10 text-center">
      <p className="text-green-900 text-lg max-w-3xl mx-auto leading-relaxed animate-fade-in mb-8 font-medium">
        Imagine a world where your greenhouse runs itself — every drop of water, every ray of light, and every breath of CO₂ is optimized for maximum growth and efficiency. Your crops are always thriving, regardless of external conditions.
      </p>
      {/* 2. "Now stop imagining" headline */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-green-800 mb-7 animate-fade-in">
        <span className="block text-green-800 mb-1">Now stop imagining.</span>
        <span className="block text-green-600">The Future of Farming is Here.</span>
      </h2>
      {/* 3. Company intro paragraph */}
      <p className="text-green-900 text-lg max-w-3xl mx-auto leading-relaxed animate-fade-in font-medium">
        In a world facing increasing challenges in food production and climate change, <b>Grow Autonomous Solutions</b> presents a groundbreaking leap. By merging advanced AI with greenhouse technology, we are shaping sustainable agriculture for a more efficient, productive future.
      </p>
    </div>
  </section>
);

export default AboutSection;
