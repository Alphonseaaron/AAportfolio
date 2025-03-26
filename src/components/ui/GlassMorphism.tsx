
import React from "react";
import { cn } from "@/lib/utils";

interface GlassMorphismProps {
  children: React.ReactNode;
  className?: string;
  intensity?: "light" | "medium" | "heavy";
  color?: "light" | "dark" | "blue" | "primary";
  border?: boolean;
  hoverable?: boolean;
}

const GlassMorphism: React.FC<GlassMorphismProps> = ({
  children,
  className,
  intensity = "medium",
  color = "light",
  border = true,
  hoverable = false,
}) => {
  const getBlurIntensity = () => {
    switch (intensity) {
      case "light":
        return "backdrop-blur-sm";
      case "medium":
        return "backdrop-blur-lg";
      case "heavy":
        return "backdrop-blur-2xl";
      default:
        return "backdrop-blur-lg";
    }
  };

  const getBackgroundColor = () => {
    switch (color) {
      case "light":
        return "bg-white/30";
      case "dark":
        return "bg-black/20";
      case "blue":
        return "bg-blue-500/10";
      case "primary":
        return "bg-primary/10";
      default:
        return "bg-white/30";
    }
  };

  const getBorderStyle = () => {
    if (!border) return "";
    
    switch (color) {
      case "light":
        return "border border-white/30";
      case "dark":
        return "border border-white/10";
      case "blue":
        return "border border-blue-200/30";
      case "primary":
        return "border border-primary/20";
      default:
        return "border border-white/30";
    }
  };

  return (
    <div
      className={cn(
        getBackgroundColor(),
        getBlurIntensity(),
        getBorderStyle(),
        "shadow-sm",
        hoverable && "transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassMorphism;
