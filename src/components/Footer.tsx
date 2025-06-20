
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
  <footer className="w-full bg-gradient-to-r from-green-800 to-green-700 py-12 px-6 mt-16 border-t border-green-900 shadow-2xl">
    <div className="max-w-6xl mx-auto">
      {/* Main footer content */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between text-white gap-8 lg:gap-12 mb-8">
        {/* Logo and company section */}
        <div className="flex flex-col items-center lg:items-start gap-4 text-center lg:text-left">
          <div className="p-4">
            <img
              src="/lovable-uploads/9292dc48-5df3-4228-a743-6aee076f4059.png"
              alt="Grow Logo"
              className="h-12 object-contain"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Grow Autonomous Solutions</h3>
            <p className="text-green-100 text-sm max-w-xs leading-relaxed">
              Revolutionizing Agriculture with AI-Powered Insights
            </p>
          </div>
        </div>

        {/* Contact information */}
        <div className="flex flex-col items-center text-center">
          <h4 className="text-xl font-semibold mb-4 text-green-100">Get in Touch</h4>
          
          {/* Mobile layout */}
          <div className="flex flex-col gap-4 w-full lg:hidden">
            {CONTACTS.map((contact) => (
              <div key={contact.email} className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 text-left">
                <div className="font-semibold text-lg mb-2">{contact.name}</div>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-green-200 hover:text-white transition-colors duration-200 block mb-1 underline decoration-green-300"
                >
                  {contact.email}
                </a>
                <div className="text-green-100 text-sm">{contact.phone}</div>
              </div>
            ))}
          </div>

          {/* Desktop layout */}
          <div className="hidden lg:block space-y-3">
            {CONTACTS.map((contact) => (
              <div key={contact.email} className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-200 text-left">
                <div className="font-semibold text-lg mb-1">{contact.name}</div>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-green-200 hover:text-white transition-colors duration-200 underline decoration-green-300 block"
                >
                  {contact.email}
                </a>
                <div className="text-green-100 text-sm mt-1">{contact.phone}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-green-600/30 pt-6 text-center">
        <p className="text-green-100 text-sm">
          © 2024 Grow Autonomous Solutions. All rights reserved.
        </p>
        <p className="text-green-200 text-xs mt-2">
          Smarter. Sustainable. Autonomous.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
