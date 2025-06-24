import React, { useState, useEffect } from 'react';
import { X, Type, Eye, Volume2, VolumeX, Zap, Settings } from 'lucide-react';
import { Switch } from '@/components/ui/switch';

const AccessibilityBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState('normal');
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Apply font size changes to document
    const root = document.documentElement;
    switch (fontSize) {
      case 'small':
        root.style.fontSize = '14px';
        break;
      case 'large':
        root.style.fontSize = '18px';
        break;
      case 'xl':
        root.style.fontSize = '20px';
        break;
      default:
        root.style.fontSize = '16px';
    }
  }, [fontSize]);

  useEffect(() => {
    // Apply high contrast mode
    if (highContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  }, [highContrast]);

  useEffect(() => {
    // Apply reduced motion preference
    if (reducedMotion) {
      document.body.classList.add('reduce-motion');
    } else {
      document.body.classList.remove('reduce-motion');
    }
  }, [reducedMotion]);

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed top-4 md:top-20 right-4 z-50 bg-green-600/80 backdrop-blur-sm hover:bg-green-700/90 text-white p-2.5 rounded-full shadow-lg transition-all duration-500 hover:scale-105 ${
          scrolled ? 'opacity-40 hover:opacity-100' : 'opacity-70 hover:opacity-100'
        }`}
        aria-label="Open accessibility options"
      >
        <Settings size={18} />
      </button>
    );
  }

  return (
    <div className="fixed top-4 md:top-20 right-4 z-50 bg-white/95 backdrop-blur-sm border border-green-200/70 rounded-lg shadow-xl p-4 w-80 animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-green-800">Accessibility Options</h3>
        <button
          onClick={() => setIsOpen(false)}
          className="text-green-600 hover:text-green-800 transition-colors p-1 rounded hover:bg-green-50"
          aria-label="Close accessibility options"
        >
          <X size={18} />
        </button>
      </div>

      <div className="space-y-4">
        {/* Font Size */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Type className="text-green-600" size={16} />
            <label className="text-sm font-medium text-green-800">Font Size</label>
          </div>
          <div className="flex gap-2">
            {['small', 'normal', 'large', 'xl'].map((size) => (
              <button
                key={size}
                onClick={() => setFontSize(size)}
                className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                  fontSize === size
                    ? 'bg-green-600 text-white'
                    : 'bg-green-100 text-green-700 hover:bg-green-200'
                }`}
              >
                {size === 'xl' ? 'XL' : size.charAt(0).toUpperCase() + size.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* High Contrast */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Eye className="text-green-600" size={16} />
            <label className="text-sm font-medium text-green-800">High Contrast</label>
          </div>
          <Switch
            checked={highContrast}
            onCheckedChange={setHighContrast}
            aria-label="Toggle high contrast mode"
          />
        </div>

        {/* Reduced Motion */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="text-green-600" size={16} />
            <label className="text-sm font-medium text-green-800">Reduce Motion</label>
          </div>
          <Switch
            checked={reducedMotion}
            onCheckedChange={setReducedMotion}
            aria-label="Toggle reduced motion"
          />
        </div>

        {/* Sound */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {soundEnabled ? (
              <Volume2 className="text-green-600" size={16} />
            ) : (
              <VolumeX className="text-green-600" size={16} />
            )}
            <label className="text-sm font-medium text-green-800">Sound Effects</label>
          </div>
          <Switch
            checked={soundEnabled}
            onCheckedChange={setSoundEnabled}
            aria-label="Toggle sound effects"
          />
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-green-100">
        <p className="text-xs text-green-600 text-center">
          Settings are saved for this session
        </p>
      </div>
    </div>
  );
};

export default AccessibilityBar;
