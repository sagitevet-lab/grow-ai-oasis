import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    const scrollWithOffset = (elementId: string) => {
      const element = document.getElementById(elementId);
      if (element) {
        const offset = elementId === "founders" ? 80 : 0; // 80px offset for founders section
        const elementPosition = element.offsetTop - offset;
        window.scrollTo({
          top: elementPosition,
          behavior: "smooth"
        });
      }
    };

    if (location.pathname !== "/") {
      // If not on main page, navigate to main page first
      navigate("/");
      setTimeout(() => {
        scrollWithOffset(sectionId);
      }, 100);
    } else {
      // Already on main page, just scroll
      scrollWithOffset(sectionId);
    }
  };

  const handleStartNow = () => {
    navigate("/start");
  };

  const handleLearnMore = () => {
    navigate("/learn");
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const handleMainPage = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="hidden md:block w-full bg-white border-b border-green-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => {
              navigate("/");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img
              src="/lovable-uploads/749b8430-d77c-4cc4-a025-8d2ae26a8f83.png"
              alt="Grow Autonomous Solutions Logo"
              className="h-10 object-contain"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={handleMainPage}
              className="text-green-800 hover:text-green-600 font-semibold transition-colors"
            >
              Main Page
            </button>
            <button
              onClick={handleStartNow}
              className="text-green-800 hover:text-green-600 font-semibold transition-colors"
            >
              Start Now
            </button>
            <button
              onClick={handleLearnMore}
              className="text-green-800 hover:text-green-600 font-semibold transition-colors"
            >
              Learn More
            </button>
            <button
              onClick={() => scrollToSection("founders")}
              className="text-green-800 hover:text-green-600 font-semibold transition-colors"
            >
              Meet the Founders
            </button>
            <button
              onClick={() => scrollToSection("footer")}
              className="text-green-800 hover:text-green-600 font-semibold transition-colors"
            >
              Get in Touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-green-800 hover:text-green-600 focus:outline-none"
              onClick={() => {
                const menu = document.getElementById("mobile-menu");
                if (menu) {
                  menu.classList.toggle("hidden");
                }
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div id="mobile-menu" className="hidden md:hidden mt-4 pb-4 border-t border-green-200">
          <div className="flex flex-col space-y-3 pt-4">
            <button
              onClick={handleMainPage}
              className="text-green-800 hover:text-green-600 font-semibold text-left transition-colors"
            >
              Main Page
            </button>
            <button
              onClick={handleStartNow}
              className="text-green-800 hover:text-green-600 font-semibold text-left transition-colors"
            >
              Start Now
            </button>
            <button
              onClick={handleLearnMore}
              className="text-green-800 hover:text-green-600 font-semibold text-left transition-colors"
            >
              Learn More
            </button>
            <button
              onClick={() => {
                scrollToSection("founders");
                document.getElementById("mobile-menu")?.classList.add("hidden");
              }}
              className="text-green-800 hover:text-green-600 font-semibold text-left transition-colors"
            >
              Meet the Founders
            </button>
            <button
              onClick={() => {
                scrollToSection("footer");
                document.getElementById("mobile-menu")?.classList.add("hidden");
              }}
              className="text-green-800 hover:text-green-600 font-semibold text-left transition-colors"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
