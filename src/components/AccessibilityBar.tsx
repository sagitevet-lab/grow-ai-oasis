
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, Type, Palette, Volume2, VolumeX, Settings } from "lucide-react";

const AccessibilityBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const adjustFontSize = (increment: number) => {
    const newSize = Math.max(12, Math.min(24, fontSize + increment));
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}px`;
  };

  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
    if (!highContrast) {
      document.documentElement.style.filter = 'contrast(150%) brightness(1.2)';
    } else {
      document.documentElement.style.filter = 'none';
    }
  };

  const toggleReducedMotion = () => {
    setReducedMotion(!reducedMotion);
    if (!reducedMotion) {
      document.documentElement.style.setProperty('--animation-duration', '0s');
    } else {
      document.documentElement.style.removeProperty('--animation-duration');
    }
  };

  const resetSettings = () => {
    setFontSize(16);
    setHighContrast(false);
    setReducedMotion(false);
    setSoundEnabled(true);
    document.documentElement.style.fontSize = '';
    document.documentElement.style.filter = 'none';
    document.documentElement.style.removeProperty('--animation-duration');
  };

  return (
    <>
      {/* Accessibility Toggle Button */}
      <div className="fixed top-4 right-4 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-700 hover:bg-green-800 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
          aria-label="Toggle Accessibility Options"
        >
          <Settings size={20} />
        </Button>
      </div>

      {/* Accessibility Panel */}
      {isOpen && (
        <div className="fixed top-20 right-4 bg-white/95 backdrop-blur-md border border-green-200 rounded-2xl shadow-xl z-40 p-6 w-80 animate-slide-in-right">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-green-800">Accessibility Options</h3>
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              size="sm"
              className="text-green-700 hover:text-green-900"
            >
              ✕
            </Button>
          </div>

          <div className="space-y-4">
            {/* Font Size Controls */}
            <div className="bg-green-50 rounded-lg p-4 border border-green-100">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-medium text-green-800 flex items-center gap-2">
                  <Type size={16} />
                  Font Size
                </label>
                <span className="text-xs text-green-600">{fontSize}px</span>
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={() => adjustFontSize(-2)}
                  variant="outline"
                  size="sm"
                  className="flex-1 text-green-700 border-green-300 hover:bg-green-100"
                >
                  A-
                </Button>
                <Button
                  onClick={() => setFontSize(16)}
                  variant="outline"
                  size="sm"
                  className="flex-1 text-green-700 border-green-300 hover:bg-green-100"
                >
                  Reset
                </Button>
                <Button
                  onClick={() => adjustFontSize(2)}
                  variant="outline"
                  size="sm"
                  className="flex-1 text-green-700 border-green-300 hover:bg-green-100"
                >
                  A+
                </Button>
              </div>
            </div>

            {/* High Contrast Toggle */}
            <div className="bg-green-50 rounded-lg p-4 border border-green-100">
              <Button
                onClick={toggleHighContrast}
                variant="outline"
                className={`w-full justify-between ${
                  highContrast 
                    ? 'bg-green-200 border-green-400 text-green-900' 
                    : 'text-green-700 border-green-300 hover:bg-green-100'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Palette size={16} />
                  High Contrast
                </span>
                {highContrast ? <Eye size={16} /> : <EyeOff size={16} />}
              </Button>
            </div>

            {/* Reduced Motion Toggle */}
            <div className="bg-green-50 rounded-lg p-4 border border-green-100">
              <Button
                onClick={toggleReducedMotion}
                variant="outline"
                className={`w-full justify-between ${
                  reducedMotion 
                    ? 'bg-green-200 border-green-400 text-green-900' 
                    : 'text-green-700 border-green-300 hover:bg-green-100'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Settings size={16} />
                  Reduce Motion
                </span>
                <span className="text-xs">{reducedMotion ? 'ON' : 'OFF'}</span>
              </Button>
            </div>

            {/* Sound Toggle */}
            <div className="bg-green-50 rounded-lg p-4 border border-green-100">
              <Button
                onClick={() => setSoundEnabled(!soundEnabled)}
                variant="outline"
                className={`w-full justify-between ${
                  soundEnabled 
                    ? 'text-green-700 border-green-300 hover:bg-green-100' 
                    : 'bg-green-200 border-green-400 text-green-900'
                }`}
              >
                <span className="flex items-center gap-2">
                  {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
                  Sound Effects
                </span>
                <span className="text-xs">{soundEnabled ? 'ON' : 'OFF'}</span>
              </Button>
            </div>

            {/* Reset All Button */}
            <Button
              onClick={resetSettings}
              className="w-full bg-green-700 hover:bg-green-800 text-white font-medium"
            >
              Reset All Settings
            </Button>
          </div>

          <div className="mt-4 text-xs text-green-600 text-center">
            These settings are saved locally in your browser
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default AccessibilityBar;
