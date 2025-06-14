
import React from "react";

const Footer = () => (
  <footer className="w-full bg-green-700 py-6 px-6 mt-10 border-t border-green-900">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between text-white gap-4">
      <div className="text-lg font-bold flex items-center gap-3">
        {/* Using a white logo for contrast */}
        <img src="/lovable-uploads/71324fad-df39-454f-9f1d-b6de5949a82a.png" alt="Grow Logo" className="h-8 bg-white rounded-md p-1" />
        Grow Autonomous Solutions
      </div>
      <div className="text-sm md:text-right">
        <div>
          <b>Ronen Aharon</b> &mdash; <a href="mailto:ronen.aharon@growgroupisrael.com" className="underline hover:text-green-200">ronen.aharon@growgroupisrael.com</a>
        </div>
        <div>
          <b>Dror Tevet</b> &mdash; <a href="mailto:dror.tevet@growgroupisrael.com" className="underline hover:text-green-200">dror.tevet@growgroupisrael.com</a>
        </div>
        <div>
          <span>+972-522859091&nbsp;&nbsp;|&nbsp;&nbsp;+972-522707991</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

