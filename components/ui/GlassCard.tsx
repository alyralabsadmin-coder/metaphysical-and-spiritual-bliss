import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  light?: boolean;
  hover?: boolean;
}

export function GlassCard({
  children,
  className = "",
  light = false,
  hover = true,
}: GlassCardProps) {
  const bg = light
    ? "bg-white/45 border-white/60"
    : "bg-white/12 border-white/25";

  return (
    <div
      className={`
        ${bg}
        backdrop-blur-[16px] backdrop-saturate-[1.2]
        border rounded-[16px] md:rounded-[20px]
        p-5 md:p-7
        shadow-[0_12px_48px_rgba(0,0,0,0.12),0_4px_12px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.3)]
        h-full
        ${hover ? "hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.14),0_4px_12px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.3)] hover:border-accent-primary/35 transition-all duration-300" : ""}
        ${className}
      `}
      style={{ willChange: hover ? "transform" : undefined }}
    >
      {children}
    </div>
  );
}
