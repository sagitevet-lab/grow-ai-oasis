
import React from "react";

const AboutSection = () => (
  <section id="about" className="max-w-5xl mx-auto py-16 px-6">
    {/* Top "Imagine..." */}
    <div className="mb-9 text-center">
      <p className="text-green-900 text-lg max-w-3xl mx-auto leading-relaxed animate-fade-in font-medium mb-4">
        Imagine a world where your greenhouse runs itself – every drop of water, every ray of light, and every breath of CO₂ is optimized for maximum growth and efficiency.
      </p>
      <p className="text-green-900 text-lg max-w-3xl mx-auto leading-relaxed animate-fade-in font-medium">
        Your crops are always thriving, regardless of external conditions.
      </p>
    </div>
    {/* Center headline */}
    <div className="mb-8 text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-green-800 mb-2 animate-slide-in-left [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
        Now stop imagining.
        <br />
        <span className="text-green-600">The Future of Farming is Here.</span>
      </h2>
    </div>
    {/* Company intro */}
    <div className="text-center">
      <p className="text-green-900 text-xl max-w-3xl mx-auto leading-relaxed animate-fade-in [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards] font-medium">
        Our vision is to transform agriculture into a data-driven industry.
      </p>
      <p className="text-green-900 text-lg max-w-3xl mx-auto leading-relaxed animate-fade-in [animation-delay:600ms] opacity-0 [animation-fill-mode:forwards] font-medium mt-4">
        By leveraging AI algorithms to process greenhouse sensor data, we aim to create a fully autonomous system that operates smoothly, optimizing growth and sustainability with minimal human intervention.
      </p>
      <p className="text-green-900 text-lg max-w-3xl mx-auto leading-relaxed animate-fade-in [animation-delay:800ms] opacity-0 [animation-fill-mode:forwards] font-medium mt-4">
        In a world facing increasing challenges in food production and climate change, <span className="whitespace-nowrap">Grow Autonomous Solutions</span> presents a groundbreaking leap. By merging advanced AI with greenhouse technology, we are shaping sustainable agriculture for a more efficient, productive future.
      </p>
    </div>
  </section>
);

export default AboutSection;
