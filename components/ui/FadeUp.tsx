"use client";

import { ReactNode } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface FadeUpProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function FadeUp({ children, className = "", delay = 0 }: FadeUpProps) {
  const { ref, isVisible } = useIntersectionObserver(0.15);

  return (
    <div
      ref={ref}
      className={`h-full ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 500ms cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 500ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
        willChange: "transform, opacity",
      }}
    >
      {children}
    </div>
  );
}
