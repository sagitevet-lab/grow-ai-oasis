
import React from "react";
import { cn } from "@/lib/utils";

interface SolutionFeatureBlockProps {
  icon: React.ReactNode;
  children: React.ReactNode;
  delay?: number;
}

const SolutionFeatureBlock: React.FC<SolutionFeatureBlockProps> = ({
  icon,
  children,
  delay = 0,
}) => {
  return (
    <div
      className={cn(
        "flex items-center gap-3 p-4 bg-white/80 rounded-xl shadow-md border border-green-100 mb-3 transition-transform duration-300 animate-fade-in hover:scale-105 cursor-pointer"
      )}
      style={{ animationDelay: `${delay}ms`, animationFillMode: "both" }}
    >
      <span className="flex-shrink-0 text-green-600">{icon}</span>
      <span className="text-green-900">{children}</span>
    </div>
  );
};

export default SolutionFeatureBlock;
