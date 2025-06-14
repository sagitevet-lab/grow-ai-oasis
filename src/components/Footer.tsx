
import React from "react";

const CONTACTS = [
  {
    name: "Ronen Aharon",
    email: "ronen.aharon@growgroupisrael.com",
    phone: "+972-522859091",
  },
  {
    name: "Dror Tevet",
    email: "dror.tevet@growgroupisrael.com",
    phone: "+972-522707991",
  },
];

const Footer = () => (
  <footer className="w-full bg-green-700 py-6 px-6 mt-10 border-t border-green-900">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-center justify-between text-white gap-6 md:gap-4">
      <div className="w-full md:w-auto flex flex-col items-center md:items-start gap-2 mb-2 md:mb-0">
        <img
          src="/lovable-uploads/749b8430-d77c-4cc4-a025-8d2ae26a8f83.png"
          alt="Grow Logo"
          className="h-8 rounded-none bg-transparent p-0"
        />
        <span className="text-lg font-bold text-center md:text-left">
          Grow Autonomous Solutions
        </span>
      </div>
      {/* Responsive contacts */}
      <div className="w-full md:w-auto flex flex-col items-center md:items-end text-sm md:text-right gap-1">
        {/* MOBILE layout: person block per contact */}
        <div className="flex flex-col gap-2 w-full md:hidden">
          {CONTACTS.map((c) => (
            <div key={c.email} className="flex flex-col items-center w-full">
              <div className="flex flex-row gap-2 items-center">
                <b>{c.name}</b>
                <span>&mdash;</span>
                <a
                  href={`mailto:${c.email}`}
                  className="underline hover:text-green-200"
                >
                  {c.email}
                </a>
              </div>
              <div>
                <span className="text-xs">{c.phone}</span>
              </div>
            </div>
          ))}
        </div>
        {/* DESKTOP layout: as it was, more compact but both phones */}
        <div className="hidden md:flex flex-col items-end gap-1">
          <div>
            <b>Ronen Aharon</b> &mdash;{" "}
            <a
              href="mailto:ronen.aharon@growgroupisrael.com"
              className="underline hover:text-green-200"
            >
              ronen.aharon@growgroupisrael.com
            </a>
          </div>
          <div>
            <b>Dror Tevet</b> &mdash;{" "}
            <a
              href="mailto:dror.tevet@growgroupisrael.com"
              className="underline hover:text-green-200"
            >
              dror.tevet@growgroupisrael.com
            </a>
          </div>
          <div>
            <span>+972-522859091&nbsp;&nbsp;|&nbsp;&nbsp;+972-522707991</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
